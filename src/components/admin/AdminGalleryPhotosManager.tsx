import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import {
  type AdminGalleryItem,
  type GalleryStatus,
  useAdminGalleryStore,
} from "@/data/galleryStore";
import { compressImageFile } from "@/lib/imageCompressor";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "south-asian", label: "South Asian Weddings" },
  { id: "destination", label: "Destination Weddings" },
  { id: "fusion", label: "Fusion Weddings" },
  { id: "middle-eastern", label: "Middle Eastern Weddings" },
  { id: "jewish", label: "Jewish Weddings" },
  { id: "entertainment", label: "Entertainment" },
] as const;

export function AdminGalleryPhotosManager() {
  const {
    items,
    addItem,
    updateItem,
    replaceImage,
    toggleStatus,
    deleteItem,
    reset,
  } = useAdminGalleryStore();

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "published" | "draft">("all");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(24);

  // Modal State
  const [editingItem, setEditingItem] = useState<AdminGalleryItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [replacingItemId, setReplacingItemId] = useState<string | null>(null);

  // Form Fields for Add / Edit
  const [formCaption, setFormCaption] = useState("");
  const [formCategory, setFormCategory] = useState<string>("south-asian");
  const [formTradition, setFormTradition] = useState("");
  const [formAlt, setFormAlt] = useState("");
  const [formOrientation, setFormOrientation] = useState<"landscape" | "portrait">("landscape");
  const [formStatus, setFormStatus] = useState<GalleryStatus>("published");
  const [formImageSrc, setFormImageSrc] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  // Filtered List
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tradition && item.tradition.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || item.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesStatus =
        selectedStatus === "all" || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [items, searchQuery, selectedCategory, selectedStatus]);

  // Counts
  const totalCount = items.length;
  const publishedCount = items.filter((i) => i.status === "published").length;
  const draftCount = items.filter((i) => i.status === "draft").length;

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredItems.length);
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (safeCurrentPage > 3) pages.push("...");
      const start = Math.max(2, safeCurrentPage - 1);
      const end = Math.min(totalPages - 1, safeCurrentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (safeCurrentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  // File Upload Helper with automatic compression
  const handleFileSelect = async (file: File, callback: (dataUrl: string) => void) => {
    try {
      const compressed = await compressImageFile(file);
      callback(compressed);
    } catch (err) {
      toast.error("Please select a valid image file");
    }
  };

  const openAddModal = () => {
    setIsAddingNew(true);
    setEditingItem(null);
    setFormCaption("");
    setFormCategory("south-asian");
    setFormTradition("");
    setFormAlt("");
    setFormOrientation("landscape");
    setFormStatus("published");
    setFormImageSrc("");
    setImagePreview("");
  };

  const openEditModal = (item: AdminGalleryItem) => {
    setEditingItem(item);
    setIsAddingNew(false);
    setFormCaption(item.caption);
    setFormCategory(item.category);
    setFormTradition(item.tradition || "");
    setFormAlt(item.alt);
    setFormOrientation(item.orientation || "landscape");
    setFormStatus(item.status);
    setFormImageSrc(item.src);
    setImagePreview(item.src);
  };

  const closeModal = () => {
    setEditingItem(null);
    setIsAddingNew(false);
    setImagePreview("");
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCaption.trim()) {
      toast.error("Please enter a caption/title for the image");
      return;
    }

    if (isAddingNew) {
      if (!formImageSrc) {
        toast.error("Please choose or upload an image");
        return;
      }
      addItem({
        src: formImageSrc,
        caption: formCaption.trim(),
        alt: formAlt.trim() || `${formCaption.trim()} — Très CHIC`,
        category: formCategory as any,
        tradition: formTradition.trim() || undefined,
        orientation: formOrientation,
        status: formStatus,
        slug: `gallery-${Date.now()}`,
      });
      toast.success("New gallery photo published successfully");
    } else if (editingItem) {
      updateItem(editingItem.id, {
        caption: formCaption.trim(),
        category: formCategory as any,
        tradition: formTradition.trim() || undefined,
        alt: formAlt.trim() || `${formCaption.trim()} — Très CHIC`,
        orientation: formOrientation,
        status: formStatus,
        src: formImageSrc || editingItem.src,
      });
      toast.success("Photo details updated");
    }

    closeModal();
  };

  const handleReplaceFileChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file, (dataUrl) => {
        replaceImage(id, dataUrl);
        setReplacingItemId(null);
        toast.success("Image successfully replaced");
      });
    }
  };

  const handleResetCatalog = () => {
    if (
      window.confirm(
        "Are you sure you want to restore the initial gallery catalog? All custom photo edits will be reset."
      )
    ) {
      reset();
      toast.info("Gallery catalog reset to original defaults");
    }
  };

  return (
    <div className="space-y-8">
      {/* Title and Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/60">
        <div>
          <p className="eyebrow text-gold uppercase tracking-[0.2em]">Single Photos Catalog</p>
          <h2 className="display-sm mt-1 text-emerald">Cultural Weddings & Entertainment Photos</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Manage the single photo gallery collection for South Asian, Destination, Fusion, Middle Eastern, Jewish weddings, and Live Entertainment.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleResetCatalog}
            className="inline-flex items-center gap-1.5 border border-border/80 bg-background px-3.5 py-3 text-xs text-muted-foreground hover:text-destructive hover:border-destructive/40 transition-colors cursor-pointer"
            title="Restore initial photos from code"
          >
            <RotateCcw className="size-3.5" /> Restore Defaults
          </button>
          <button
            type="button"
            onClick={openAddModal}
            className="inline-flex items-center justify-center gap-2 border border-emerald bg-emerald px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-emerald-deep transition-colors cursor-pointer shadow-md"
          >
            <Plus className="size-4" /> Add New Photo
          </button>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="border border-border/70 bg-neutral-soft/40 p-4 rounded-xs">
          <span className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">Total Photos</span>
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
          <p className="font-display text-2xl text-foreground/80 mt-1">{filteredItems.length}</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border border-border/80 bg-neutral-soft/30 p-4 rounded-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by caption, alt text, or tradition..."
            className="w-full border border-border bg-background py-2.5 pl-10 pr-4 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Category Dropdown (strictly filtered, celebrations & parties removed) */}
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-border bg-background px-3 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none cursor-pointer"
          >
            <option value="all">All Categories ({totalCount})</option>
            {CATEGORIES.map((cat) => {
              const count = items.filter((i) => i.category.toLowerCase() === cat.id).length;
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.label} ({count})
                </option>
              );
            })}
          </select>

          {/* Status Dropdown */}
          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value as any);
              setCurrentPage(1);
            }}
            className="border border-border bg-background px-3 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none cursor-pointer"
          >
            <option value="all">All Status ({items.length})</option>
            <option value="published">Published ({publishedCount})</option>
            <option value="draft">Drafts ({draftCount})</option>
          </select>

          {/* Page Size Dropdown */}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-border bg-background px-3 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none cursor-pointer"
          >
            <option value={12}>12 per page</option>
            <option value={24}>24 per page</option>
            <option value={48}>48 per page</option>
            <option value={96}>96 per page</option>
            <option value={9999}>Show All</option>
          </select>
        </div>
      </div>

      {/* Grid of Photo Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedItems.map((item) => {
          const isDraft = item.status === "draft";
          const isLandscape = item.orientation === "landscape";

          return (
            <div
              key={item.id}
              className={cn(
                "group relative flex flex-col border border-border/80 bg-neutral-soft/30 transition-all duration-300 hover:border-gold/60 hover:shadow-lg rounded-xs overflow-hidden",
                isDraft && "opacity-70 bg-amber-500/5 border-dashed border-amber-500/40"
              )}
            >
              {/* Image Preview Container */}
              <div
                className={cn(
                  "relative w-full bg-black/10 overflow-hidden",
                  isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"
                )}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Status Badge */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span
                    className={cn(
                      "rounded-xs px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider shadow-sm",
                      isDraft
                        ? "bg-amber-600 text-ivory"
                        : "bg-emerald text-ivory"
                    )}
                  >
                    {isDraft ? "Draft" : "Published"}
                  </span>
                  {item.isCustom && (
                    <span className="rounded-xs bg-gold/90 px-1.5 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-wider text-background shadow-sm">
                      Custom
                    </span>
                  )}
                </div>

                {/* Quick Replace Trigger */}
                <div className="absolute bottom-2.5 right-2.5">
                  <label
                    title="Replace this photo"
                    className="flex size-7 items-center justify-center rounded-xs bg-background/90 text-foreground/80 shadow hover:bg-gold hover:text-background transition-colors cursor-pointer"
                  >
                    <Upload className="size-3.5" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleReplaceFileChange(e, item.id)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between text-[0.6875rem] text-muted-foreground uppercase tracking-wider font-mono">
                    <span className="text-gold-deep font-semibold">{item.category}</span>
                    <span>{item.tradition || item.orientation}</span>
                  </div>
                  <h3 className="font-display text-sm text-foreground mt-1 line-clamp-2">
                    {item.caption}
                  </h3>
                  <p className="text-[0.6875rem] text-muted-foreground/80 mt-1 line-clamp-1 italic">
                    Alt: {item.alt}
                  </p>
                </div>

                {/* Card Actions Footer */}
                <div className="flex items-center justify-between border-t border-border/60 pt-3 gap-2">
                  <button
                    type="button"
                    onClick={() => openEditModal(item)}
                    className="inline-flex items-center gap-1.5 text-xs text-foreground/80 hover:text-emerald font-medium transition-colors cursor-pointer"
                  >
                    <Pencil className="size-3.5" /> Edit
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => toggleStatus(item.id)}
                      title={isDraft ? "Publish photo" : "Make draft (hide)"}
                      className={cn(
                        "rounded-xs p-1.5 transition-colors cursor-pointer",
                        isDraft
                          ? "text-emerald hover:bg-emerald/10"
                          : "text-muted-foreground hover:bg-neutral-soft hover:text-foreground"
                      )}
                    >
                      {isDraft ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete "${item.caption}"?`)) {
                          deleteItem(item.id);
                          toast.info("Photo deleted");
                        }
                      }}
                      title="Delete photo"
                      className="rounded-xs p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {filteredItems.length > pageSize && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            Showing <span className="font-medium text-foreground">{startIndex + 1}</span> to{" "}
            <span className="font-medium text-foreground">{endIndex}</span> of{" "}
            <span className="font-medium text-foreground">{filteredItems.length}</span> photos
          </p>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage === 1}
              className="inline-flex items-center gap-1 border border-border px-3 py-1.5 text-xs text-foreground hover:border-gold disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-3.5" /> Prev
            </button>

            <div className="flex items-center gap-1">
              {getPageNumbers().map((pNum, idx) => {
                if (pNum === "...") {
                  return (
                    <span key={`dots-${idx}`} className="px-2 text-xs text-muted-foreground">
                      ...
                    </span>
                  );
                }
                const isCurrent = pNum === safeCurrentPage;
                return (
                  <button
                    key={pNum}
                    type="button"
                    onClick={() => setCurrentPage(Number(pNum))}
                    className={cn(
                      "size-8 border text-xs font-semibold transition-colors cursor-pointer",
                      isCurrent
                        ? "border-emerald bg-emerald text-ivory"
                        : "border-border text-foreground hover:border-gold"
                    )}
                  >
                    {pNum}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage === totalPages}
              className="inline-flex items-center gap-1 border border-border px-3 py-1.5 text-xs text-foreground hover:border-gold disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              Next <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Add / Edit Photo Modal */}
      {(isAddingNew || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl border border-gold/40 bg-background shadow-2xl rounded-xs overflow-hidden my-8">
            <div className="flex items-center justify-between border-b border-border/80 px-6 py-4 bg-neutral-soft/50">
              <h3 className="font-display text-lg text-emerald">
                {isAddingNew ? "Add New Gallery Photo" : "Edit Photo Details"}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-xs p-1 text-muted-foreground hover:bg-border/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="p-6 space-y-4">
              {/* Image Preview & Upload */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-2">
                  Photo File *
                </label>
                {imagePreview ? (
                  <div className="relative aspect-[16/9] w-full border border-border bg-neutral-200 overflow-hidden rounded-xs mb-3">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview("");
                        setFormImageSrc("");
                      }}
                      className="absolute top-2 right-2 rounded-xs bg-black/70 p-1 text-ivory hover:bg-destructive transition-colors cursor-pointer"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="border border-dashed border-border bg-neutral-soft/40 p-6 text-center rounded-xs mb-3">
                    <Upload className="mx-auto size-8 text-gold mb-2" />
                    <label className="text-xs uppercase tracking-wider text-emerald font-semibold hover:underline cursor-pointer">
                      Upload Image File
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileSelect(file, (dataUrl) => {
                              setImagePreview(dataUrl);
                              setFormImageSrc(dataUrl);
                            });
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[0.6875rem] text-muted-foreground mt-1">
                      Drag and drop or click to browse (.jpg, .webp, .png)
                    </p>
                  </div>
                )}
              </div>

              {/* Title / Caption */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                  Title / Caption *
                </label>
                <input
                  type="text"
                  value={formCaption}
                  onChange={(e) => setFormCaption(e.target.value)}
                  placeholder="e.g. The zaffa: the grand entrance"
                  className="w-full border border-border bg-neutral-soft/30 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                  required
                />
              </div>

              {/* Category & Tradition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                    Category *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full border border-border bg-neutral-soft/30 px-3.5 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none cursor-pointer"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                    Cultural Tradition / Tag
                  </label>
                  <input
                    type="text"
                    value={formTradition}
                    onChange={(e) => setFormTradition(e.target.value)}
                    placeholder="e.g. Middle Eastern, Western, Fusion"
                    className="w-full border border-border bg-neutral-soft/30 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Alt Text */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                  Alt Text (Search & Accessibility)
                </label>
                <input
                  type="text"
                  value={formAlt}
                  onChange={(e) => setFormAlt(e.target.value)}
                  placeholder="Descriptive text for search engines and accessibility"
                  className="w-full border border-border bg-neutral-soft/30 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                />
              </div>

              {/* Orientation & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                    Orientation
                  </label>
                  <div className="flex gap-4 pt-1">
                    <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name="orientation"
                        value="landscape"
                        checked={formOrientation === "landscape"}
                        onChange={() => setFormOrientation("landscape")}
                        className="accent-emerald"
                      />
                      <span>Landscape (4:3)</span>
                    </label>
                    <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name="orientation"
                        value="portrait"
                        checked={formOrientation === "portrait"}
                        onChange={() => setFormOrientation("portrait")}
                        className="accent-emerald"
                      />
                      <span>Portrait (3:4)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1.5">
                    Status
                  </label>
                  <div className="flex gap-4 pt-1">
                    <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name="photoStatus"
                        value="published"
                        checked={formStatus === "published"}
                        onChange={() => setFormStatus("published")}
                        className="accent-emerald"
                      />
                      <span>Published (Live)</span>
                    </label>
                    <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name="photoStatus"
                        value="draft"
                        checked={formStatus === "draft"}
                        onChange={() => setFormStatus("draft")}
                        className="accent-amber-600"
                      />
                      <span>Draft (Hidden)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-border">
                <button
                  type="button"
                  onClick={closeModal}
                  className="border border-border px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-emerald bg-emerald px-6 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ivory hover:bg-emerald-deep cursor-pointer"
                >
                  {isAddingNew ? "Add Photo" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
