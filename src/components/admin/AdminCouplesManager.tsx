import {
  Check,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Star,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import {
  type AdminCoupleProject,
  getDefaultCoupleProjects,
  useAdminCouplesStore,
} from "@/data/couplesStore";
import { compressImageFile } from "@/lib/imageCompressor";
import { cn } from "@/lib/utils";

export function AdminCouplesManager() {
  const {
    projects,
    addCouple,
    updateCouple,
    toggleStatus,
    deleteCouple,
    reset,
  } = useAdminCouplesStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const defaultCouples = useMemo(() => getDefaultCoupleProjects(), []);

  // Modal State
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editingCouple, setEditingCouple] = useState<AdminCoupleProject | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState("");
  const [formSubtitle, setFormSubtitle] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formOverview, setFormOverview] = useState("");
  const [formStatus, setFormStatus] = useState<"published" | "draft">("published");
  const [formFeaturedImage, setFormFeaturedImage] = useState("");
  const [formImages, setFormImages] = useState<string[]>([]);
  const [formHighlights, setFormHighlights] = useState<string[]>([]);
  const [newHighlightText, setNewHighlightText] = useState("");

  const filteredCouples = useMemo(() => {
    return projects.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.overviewParagraph.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [projects, searchQuery, statusFilter]);

  const totalCount = projects.length;
  const publishedCount = projects.filter((p) => p.status === "published").length;
  const draftCount = projects.filter((p) => p.status === "draft").length;

  const handleOpenAddModal = () => {
    setEditingCouple(null);
    setFormTitle("");
    setFormSubtitle("");
    setFormLocation("");
    setFormOverview("");
    setFormStatus("published");
    setFormFeaturedImage("");
    setFormImages([]);
    setFormHighlights([
      "Bespoke multi-day timeline and guest concierge",
      "Signature design concepts and architectural lighting",
    ]);
    setNewHighlightText("");
    setIsOpenModal(true);
  };

  const handleOpenEditModal = (couple: AdminCoupleProject) => {
    setEditingCouple(couple);
    setFormTitle(couple.title);
    setFormSubtitle(couple.subtitle);
    setFormLocation(couple.location);
    setFormOverview(couple.overviewParagraph || couple.description || "");
    setFormStatus(couple.status);
    setFormFeaturedImage(couple.featuredImage);
    setFormImages(couple.images || [couple.featuredImage]);
    setFormHighlights(couple.highlights || []);
    setNewHighlightText("");
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setEditingCouple(null);
  };

  // Image Upload Helper
  const readFileAsDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith("image/")) {
        reject(new Error("File must be an image"));
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const dataUrl = await compressImageFile(file);
        setFormFeaturedImage(dataUrl);
        if (!formImages.includes(dataUrl)) {
          setFormImages((prev) => [dataUrl, ...prev]);
        }
        toast.success("Cover image optimized and ready");
      } catch (err) {
        toast.error("Failed to process image. Please try again.");
      }
    }
  };

  const handleMultipleAlbumUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      const newUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file) continue;
        const url = await compressImageFile(file);
        newUrls.push(url);
      }
      setFormImages((prev) => [...prev, ...newUrls]);
      if (!formFeaturedImage && newUrls[0]) {
        setFormFeaturedImage(newUrls[0]);
      }
      toast.success(`Optimized and added ${newUrls.length} photos to album`);
    } catch (err) {
      toast.error("Failed processing some images");
    }
  };

  const handleAddHighlight = () => {
    if (!newHighlightText.trim()) return;
    setFormHighlights((prev) => [...prev, newHighlightText.trim()]);
    setNewHighlightText("");
  };

  const handleRemoveHighlight = (idx: number) => {
    setFormHighlights((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleRemoveAlbumImage = (imgSrc: string) => {
    setFormImages((prev) => prev.filter((s) => s !== imgSrc));
    if (formFeaturedImage === imgSrc) {
      const remaining = formImages.filter((s) => s !== imgSrc);
      setFormFeaturedImage(remaining[0] || "");
    }
  };

  const handleSetAsCover = (imgSrc: string) => {
    setFormFeaturedImage(imgSrc);
    toast.info("Selected photo set as Main Cover");
  };

  const handleSaveCouple = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      toast.error("Please enter the Couple Names / Title");
      return;
    }
    if (!formFeaturedImage) {
      toast.error("Please provide or upload a Main Featured Cover Image");
      return;
    }

    const payload = {
      title: formTitle.trim(),
      subtitle: formSubtitle.trim() || "Romantic Wedding Celebration",
      location: formLocation.trim() || "South Florida",
      description: formOverview.trim() || formTitle.trim(),
      overviewParagraph: formOverview.trim() || formTitle.trim(),
      folderName: formTitle.trim(),
      featuredImage: formFeaturedImage,
      images: formImages.length > 0 ? formImages : [formFeaturedImage],
      highlights: formHighlights.length > 0 ? formHighlights : ["Bespoke wedding execution by Très CHIC"],
      status: formStatus,
    };

    if (editingCouple) {
      updateCouple(editingCouple.id, payload);
      toast.success(`Updated story for ${payload.title}`);
    } else {
      addCouple(payload);
      toast.success(`New couple story published: ${payload.title}`);
    }

    handleCloseModal();
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteCouple(id);
      toast.info(`Deleted "${title}"`);
    }
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to restore the original 5 wedding couples from code? Custom changes will be reset."
      )
    ) {
      reset();
      toast.info("Couples restored to initial defaults");
    }
  };

  return (
    <div className="space-y-8">
      {/* Title & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/60">
        <div>
          <p className="eyebrow text-gold uppercase tracking-[0.2em]">Couples Portfolio</p>
          <h2 className="display-sm mt-1 text-emerald">Wedding Stories & Couples Collection</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Curate the featured wedding couples displayed on the public <span className="font-semibold text-emerald">Couples</span> tab.
            Manage cover photos, album gallery reels, couple story descriptions, and key wedding highlights.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleOpenAddModal}
            className="inline-flex items-center justify-center gap-2 border border-emerald bg-emerald px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-emerald-deep transition-colors cursor-pointer shadow-md"
          >
            <Plus className="size-4" /> Add New Couple
          </button>
        </div>
      </div>

      {/* Stats Summary Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="border border-border/70 bg-neutral-soft/40 p-4 rounded-xs">
          <span className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">Total Couples</span>
          <p className="font-display text-2xl text-emerald mt-1">{totalCount}</p>
        </div>
        <div className="border border-border/70 bg-neutral-soft/40 p-4 rounded-xs">
          <span className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">Published (Live)</span>
          <p className="font-display text-2xl text-emerald mt-1">{publishedCount}</p>
        </div>
        <div className="border border-border/70 bg-neutral-soft/40 p-4 rounded-xs">
          <span className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">Drafts (Hidden)</span>
          <p className="font-display text-2xl text-amber-600 mt-1">{draftCount}</p>
        </div>
        <div className="border border-border/70 bg-neutral-soft/40 p-4 rounded-xs">
          <span className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">Showing Filtered</span>
          <p className="font-display text-2xl text-foreground/80 mt-1">{filteredCouples.length}</p>
        </div>
      </div>

      {/* Search & Status Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between border border-border/80 bg-neutral-soft/30 p-4 rounded-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by couple names, location, or details..."
            className="w-full border border-border bg-background py-2.5 pl-10 pr-4 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="border border-border bg-background px-3 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none cursor-pointer"
          >
            <option value="all">All Statuses ({projects.length})</option>
            <option value="published">Published Only ({publishedCount})</option>
            <option value="draft">Drafts Only ({draftCount})</option>
          </select>
        </div>
      </div>

      {/* Couples Cards List */}
      <div className="grid gap-6">
        {filteredCouples.map((couple, idx) => {
          const isDraft = couple.status === "draft";
          return (
            <div
              key={couple.id}
              className={cn(
                "group relative border border-border/80 bg-neutral-soft/30 p-6 rounded-xs transition-all duration-300 hover:border-gold/60",
                isDraft && "opacity-75 bg-amber-500/5 border-dashed border-amber-500/40"
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Main Featured Image */}
                <div className="lg:col-span-4 relative overflow-hidden rounded-xs border border-border/70 bg-black/10 aspect-[4/3]">
                  <img
                    src={couple.featuredImage}
                    alt={couple.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const fb = defaultCouples.find(
                        (d) =>
                          d.id === couple.id ||
                          d.title.toLowerCase() === couple.title.toLowerCase() ||
                          (couple.folderName && d.folderName.toLowerCase() === couple.folderName.toLowerCase())
                      );
                      if (fb?.featuredImage && e.currentTarget.src !== fb.featuredImage) {
                        e.currentTarget.src = fb.featuredImage;
                      }
                    }}
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-xs bg-emerald px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-ivory shadow">
                      #{couple.number || String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "rounded-xs px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider shadow",
                        isDraft
                          ? "bg-amber-600 text-ivory"
                          : "bg-emerald/90 text-ivory"
                      )}
                    >
                      {isDraft ? "Draft" : "Published"}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 rounded-xs bg-black/70 backdrop-blur-sm px-2 py-0.5 text-[0.625rem] text-ivory font-mono">
                    Main Cover
                  </div>
                </div>

                {/* Center: Details & Story */}
                <div className="lg:col-span-5 space-y-3">
                  <div>
                    <h3 className="font-display text-2xl text-emerald">{couple.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-taupe font-semibold">
                      {couple.subtitle} &bull; {couple.location}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {couple.overviewParagraph || couple.description}
                  </p>

                  {/* Highlights pills */}
                  {couple.highlights && couple.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[0.6875rem] uppercase tracking-wider font-semibold text-gold-deep">
                        Key Highlights:
                      </span>
                      <ul className="text-[0.6875rem] text-muted-foreground space-y-1">
                        {couple.highlights.slice(0, 3).map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5">
                            <span className="text-gold mt-0.5">&bull;</span>
                            <span className="line-clamp-1">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Album Photo Ribbon */}
                  <div className="pt-2">
                    <span className="text-[0.6875rem] uppercase tracking-wider font-semibold text-taupe">
                      Album Reel ({couple.images?.length || 1} photos):
                    </span>
                    <div className="mt-2 flex items-center gap-2 overflow-x-auto pb-1">
                      {couple.images?.slice(0, 7).map((img, iIdx) => (
                        <div
                          key={iIdx}
                          className="size-12 shrink-0 rounded-xs overflow-hidden border border-border/80 bg-neutral-200"
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              const fb = defaultCouples.find(
                                (d) =>
                                  d.id === couple.id ||
                                  d.title.toLowerCase() === couple.title.toLowerCase() ||
                                  (couple.folderName && d.folderName.toLowerCase() === couple.folderName.toLowerCase())
                              );
                              if (fb?.images?.[iIdx] && e.currentTarget.src !== fb.images[iIdx]) {
                                e.currentTarget.src = fb.images[iIdx];
                              }
                            }}
                          />
                        </div>
                      ))}
                      {couple.images && couple.images.length > 7 && (
                        <span className="size-12 shrink-0 rounded-xs border border-dashed border-border flex items-center justify-center text-[0.6875rem] font-mono text-muted-foreground bg-neutral-soft/50">
                          +{couple.images.length - 7}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 pt-2 border-t lg:border-t-0 border-border/60">
                  <button
                    type="button"
                    onClick={() => handleOpenEditModal(couple)}
                    className="w-full inline-flex items-center justify-center gap-2 border border-emerald bg-emerald/10 text-emerald hover:bg-emerald hover:text-ivory px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Pencil className="size-3.5" /> Edit Couple
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleStatus(couple.id)}
                    className={cn(
                      "w-full inline-flex items-center justify-center gap-2 border px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer",
                      isDraft
                        ? "border-emerald/40 text-emerald hover:bg-emerald/10"
                        : "border-amber-600/40 text-amber-700 hover:bg-amber-600/10"
                    )}
                  >
                    {isDraft ? (
                      <>
                        <Eye className="size-3.5" /> Publish Story
                      </>
                    ) : (
                      <>
                        <EyeOff className="size-3.5" /> Make Draft
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(couple.id, couple.title)}
                    className="w-full inline-flex items-center justify-center gap-2 border border-destructive/30 text-destructive hover:bg-destructive/10 px-4 py-2 text-xs transition-colors cursor-pointer"
                  >
                    <Trash2 className="size-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredCouples.length === 0 && (
          <div className="py-20 text-center border border-dashed border-border rounded-xs bg-neutral-soft/30">
            <p className="font-display text-lg text-emerald">No couples found</p>
            <p className="mt-1 text-xs text-muted-foreground">Try adjusting your search or add a new couple story.</p>
          </div>
        )}
      </div>

      {/* Add / Edit Couple Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col border border-gold/40 bg-background shadow-2xl rounded-xs my-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border/80 px-6 py-4 bg-neutral-soft/50">
              <div>
                <p className="eyebrow text-gold uppercase tracking-[0.2em]">Wedding Feature Editor</p>
                <h3 className="font-display text-xl text-emerald">
                  {editingCouple ? `Edit Couple: ${editingCouple.title}` : "Add New Wedding Couple Story"}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-xs p-1.5 text-muted-foreground hover:bg-border/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Form Scrollable Area */}
            <form onSubmit={handleSaveCouple} className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Couple Names & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                    Couple Names / Title *
                  </label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Caroline & Pravan"
                    className="w-full border border-border bg-neutral-soft/30 px-3.5 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                    Subtitle / Concept
                  </label>
                  <input
                    type="text"
                    value={formSubtitle}
                    onChange={(e) => setFormSubtitle(e.target.value)}
                    placeholder="e.g. Romantic Multicultural Wedding Celebration"
                    className="w-full border border-border bg-neutral-soft/30 px-3.5 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                    Location / Venue
                  </label>
                  <input
                    type="text"
                    value={formLocation}
                    onChange={(e) => setFormLocation(e.target.value)}
                    placeholder="e.g. South Florida Luxury Estate, Palm Beach"
                    className="w-full border border-border bg-neutral-soft/30 px-3.5 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                    Status
                  </label>
                  <div className="flex gap-4 pt-1">
                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name="coupleStatus"
                        checked={formStatus === "published"}
                        onChange={() => setFormStatus("published")}
                        className="accent-emerald"
                      />
                      <span>Published (Live)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name="coupleStatus"
                        checked={formStatus === "draft"}
                        onChange={() => setFormStatus("draft")}
                        className="accent-amber-600"
                      />
                      <span>Draft (Hidden)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Story / Overview Paragraph */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                  Story & Celebration Overview
                </label>
                <textarea
                  rows={4}
                  value={formOverview}
                  onChange={(e) => setFormOverview(e.target.value)}
                  placeholder="Describe the aesthetic, emotional moments, traditions, and the luxury execution by Très CHIC..."
                  className="w-full border border-border bg-neutral-soft/30 p-3.5 text-xs text-foreground focus:border-gold focus:outline-none"
                />
              </div>

              {/* Main Featured Cover Image */}
              <div className="border border-border/80 bg-neutral-soft/20 p-4 rounded-xs space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs uppercase tracking-wider text-emerald font-semibold">
                    Main Featured Cover Image *
                  </label>
                  {formFeaturedImage && (
                    <span className="text-[0.625rem] font-mono text-emerald">Cover Ready</span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {formFeaturedImage ? (
                    <div className="relative size-28 shrink-0 overflow-hidden rounded-xs border border-gold/40">
                      <img
                        src={formFeaturedImage}
                        alt="Featured Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="size-28 shrink-0 rounded-xs border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground bg-neutral-soft/40 text-[0.6875rem]">
                      <ImageIcon className="size-6 mb-1 opacity-50" />
                      No Cover
                    </div>
                  )}

                  <div className="flex-1 space-y-2">
                    <label className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald hover:border-gold transition-colors cursor-pointer">
                      <Upload className="size-3.5" /> Upload Cover Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[0.6875rem] text-muted-foreground">
                      This photo is displayed prominently on the wedding couple card on the public gallery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Album Photos Manager */}
              <div className="border border-border/80 bg-neutral-soft/20 p-4 rounded-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-emerald font-semibold">
                      Album Reel Photos ({formImages.length})
                    </label>
                    <p className="text-[0.6875rem] text-muted-foreground mt-0.5">
                      Photos that appear in the couple's horizontal photo ribbon and fullscreen lightbox viewer.
                    </p>
                  </div>

                  <label className="inline-flex items-center gap-2 border border-emerald bg-emerald/10 text-emerald hover:bg-emerald hover:text-ivory px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer">
                    <Plus className="size-3.5" /> Add Multiple Photos
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleMultipleAlbumUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Thumbnails grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2.5 pt-2 max-h-56 overflow-y-auto p-1">
                  {formImages.map((imgSrc, idx) => {
                    const isCover = formFeaturedImage === imgSrc;
                    return (
                      <div
                        key={idx}
                        className={cn(
                          "group/thumb relative aspect-square rounded-xs overflow-hidden border bg-neutral-200",
                          isCover ? "border-gold ring-2 ring-gold/40" : "border-border/80"
                        )}
                      >
                        <img src={imgSrc} alt="" className="w-full h-full object-cover" />
                        {isCover && (
                          <div className="absolute top-1 left-1 rounded-xs bg-gold px-1 py-0.2 text-[0.5625rem] font-bold text-background uppercase">
                            Cover
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                          {!isCover && (
                            <button
                              type="button"
                              onClick={() => handleSetAsCover(imgSrc)}
                              title="Set as Main Cover"
                              className="rounded-xs bg-gold/90 p-1 text-background hover:bg-gold cursor-pointer"
                            >
                              <Star className="size-3" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => handleRemoveAlbumImage(imgSrc)}
                            title="Remove from Album"
                            className="rounded-xs bg-destructive/90 p-1 text-ivory hover:bg-destructive cursor-pointer"
                          >
                            <Trash2 className="size-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {formImages.length === 0 && (
                    <div className="col-span-full py-8 text-center text-xs text-muted-foreground border border-dashed border-border">
                      No photos in album yet. Click "Add Multiple Photos" to upload images.
                    </div>
                  )}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="border border-border/80 bg-neutral-soft/20 p-4 rounded-xs space-y-3">
                <label className="block text-xs uppercase tracking-wider text-emerald font-semibold">
                  Curated Highlights & Design Details
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newHighlightText}
                    onChange={(e) => setNewHighlightText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddHighlight();
                      }
                    }}
                    placeholder="Add bullet highlight (e.g. 500-candle tablescape)..."
                    className="flex-1 border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddHighlight}
                    className="border border-border bg-background hover:border-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald cursor-pointer"
                  >
                    Add
                  </button>
                </div>

                <div className="space-y-1.5 pt-1">
                  {formHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border border-border/60 bg-background px-3 py-1.5 text-xs text-foreground rounded-xs"
                    >
                      <span className="flex-1 pr-2">&bull; {hl}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveHighlight(idx)}
                        className="text-muted-foreground hover:text-destructive p-0.5 cursor-pointer"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="sticky bottom-0 bg-background pt-4 border-t border-border flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="border border-border px-5 py-2.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-emerald bg-emerald px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ivory hover:bg-emerald-deep cursor-pointer shadow-md"
                >
                  {editingCouple ? "Save Changes" : "Publish Couple Story"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
