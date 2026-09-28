import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  EyeOff,
  Image as ImageIcon,
  KeyRound,
  Lock,
  LogOut,
  Pencil,
  Plus,
  RefreshCw,
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

export const Route = createFileRoute("/gallery-admin")({
  head: () => ({
    meta: [
      { title: "Gallery Admin Dashboard | Très CHIC Event Planning" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: GalleryAdminPage,
});

const DEFAULT_PASSCODE = "treschic2026";
const AUTH_KEY = "tres_chic_admin_auth_v1";

const CATEGORIES = [
  { id: "reception", label: "Receptions" },
  { id: "ceremony", label: "Ceremonies" },
  { id: "tablescape", label: "Tablescapes" },
  { id: "detail", label: "Details" },
  { id: "entertainment", label: "Entertainment" },
  { id: "south-asian", label: "South Asian Weddings" },
  { id: "destination", label: "Destination Weddings" },
  { id: "fusion", label: "Fusion Weddings" },
  { id: "middle-eastern", label: "Middle Eastern Weddings" },
  { id: "jewish", label: "Jewish Weddings" },
  { id: "celebration", label: "Celebrations & Parties" },
] as const;

function GalleryAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(AUTH_KEY) === "true";
  });
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  const { items, addItem, updateItem, replaceImage, toggleStatus, deleteItem, reset } =
    useAdminGalleryStore();

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
  const [formCategory, setFormCategory] = useState<string>("reception");
  const [formTradition, setFormTradition] = useState("");
  const [formAlt, setFormAlt] = useState("");
  const [formOrientation, setFormOrientation] = useState<"landscape" | "portrait">("landscape");
  const [formStatus, setFormStatus] = useState<GalleryStatus>("published");
  const [formImageSrc, setFormImageSrc] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === DEFAULT_PASSCODE) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      setAuthError("");
      toast.success("Welcome to Très CHIC Gallery Admin");
    } else {
      setAuthError("Incorrect passcode. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    toast.info("Logged out successfully");
  };

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

  // File Upload Helper
  const handleFileSelect = (file: File, callback: (dataUrl: string) => void) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      callback(result);
    };
    reader.readAsDataURL(file);
  };

  const openAddModal = () => {
    setIsAddingNew(true);
    setEditingItem(null);
    setFormCaption("");
    setFormCategory("reception");
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

  const handleExportJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `tres_chic_gallery_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success("Gallery JSON backup exported successfully");
  };

  const handleResetCatalog = () => {
    if (
      window.confirm(
        "Are you sure you want to restore the initial gallery catalog? All custom edits made in this browser will be reset."
      )
    ) {
      reset();
      toast.info("Gallery catalog reset to original defaults");
    }
  };

  // Password Lock Screen
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[85vh] items-center justify-center bg-background px-6 py-24">
        <div className="w-full max-w-md border border-gold/30 bg-neutral-soft/50 p-8 md:p-10 shadow-xl rounded-xs text-center">
          <div className="mb-6 text-left">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-taupe hover:text-emerald transition-colors"
            >
              <ArrowLeft className="size-3.5" /> Back to Website
            </Link>
          </div>
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-emerald text-gold">
            <Lock className="size-6" />
          </div>
          <p className="eyebrow text-gold uppercase tracking-[0.2em]">Management Access</p>
          <h1 className="display-sm mt-2 text-emerald">Gallery Dashboard</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            Enter the authorized passcode to manage gallery photos, categories, and titles.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4 text-left">
            <div>
              <label htmlFor="passcode" className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-2">
                Admin Passcode
              </label>
              <div className="relative">
                <input
                  id="passcode"
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode"
                  className="w-full border border-border bg-background px-4 py-3 pl-11 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                  autoFocus
                />
                <KeyRound className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
              </div>
              {authError && <p className="mt-2 text-xs text-destructive">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full border border-emerald bg-emerald px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-emerald-deep cursor-pointer"
            >
              Access Dashboard
            </button>
          </form>
          <p className="mt-6 text-[0.6875rem] text-muted-foreground/80">
            Default Passcode: <span className="font-mono text-emerald">treschic2026</span>
          </p>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-background text-foreground pb-32">
      {/* Top Admin Sticky Bar */}
      <header className="border-b border-border/80 bg-neutral-soft/80 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-emerald animate-pulse" />
            <span className="font-display text-lg text-emerald">Très CHIC Gallery Manager</span>
            <span className="hidden sm:inline-block rounded-xs bg-gold/20 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-gold-deep">
              Editorial Studio
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/celebrations-we-love"
              target="_blank"
              className="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-taupe hover:text-emerald transition-colors"
            >
              <Eye className="size-3.5" /> View Live Page
            </Link>
            <button
              type="button"
              onClick={handleExportJSON}
              className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs text-foreground/80 hover:border-gold hover:text-emerald transition-colors cursor-pointer"
              title="Download JSON backup of current catalog"
            >
              <Download className="size-3.5" /> Export JSON
            </button>
            <button
              type="button"
              onClick={handleResetCatalog}
              className="inline-flex items-center gap-1.5 border border-border/60 px-3 py-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
              title="Restore initial photos from code"
            >
              <RotateCcw className="size-3.5" /> Reset
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 border border-destructive/30 text-destructive hover:bg-destructive/10 px-3 py-1.5 text-xs transition-colors cursor-pointer"
            >
              <LogOut className="size-3.5" /> Exit
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-6 pt-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/60">
          <div className="flex items-center gap-2 text-xs">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-taupe font-semibold hover:text-emerald uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="size-3.5" /> Back to Home
            </Link>
            <span className="text-border">/</span>
            <Link
              to="/celebrations-we-love"
              className="text-muted-foreground hover:text-emerald transition-colors"
            >
              Live Gallery
            </Link>
            <span className="text-border">/</span>
            <span className="text-emerald font-semibold">Gallery Studio</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span>Session:</span>
            <span className="inline-block size-2 rounded-full bg-emerald" />
            <span className="font-medium text-emerald">Admin Active</span>
          </div>
        </div>

        {/* Title and Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
          <div>
            <p className="eyebrow text-gold uppercase tracking-[0.2em]">Curated Content Control</p>
            <h1 className="display-md mt-1 text-emerald">Gallery & Portfolio Collection</h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              Add new celebration photos, edit captions and SEO alt tags, replace images, or toggle draft visibility.
              All changes reflect immediately on your live gallery.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddModal}
            className="inline-flex items-center justify-center gap-2 border border-emerald bg-emerald px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-emerald-deep transition-colors cursor-pointer shadow-md"
          >
            <Plus className="size-4" /> Add New Photo
          </button>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
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
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border border-border/80 bg-neutral-soft/30 p-4 rounded-xs">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by title, caption, tradition or alt text..."
              className="w-full border border-border bg-background px-4 py-2.5 pl-10 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-border bg-background px-3 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none"
            >
              <option value="all">All Categories ({totalCount})</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>

            {/* Status Dropdown */}
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value as any);
                setCurrentPage(1);
              }}
              className="border border-border bg-background px-3 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none"
            >
              <option value="all">All Status</option>
              <option value="published">Published Only</option>
              <option value="draft">Drafts Only</option>
            </select>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              className={`group flex flex-col justify-between overflow-hidden rounded-xs border transition-all duration-300 ${
                item.status === "published"
                  ? "border-border/80 bg-neutral-soft/30 hover:border-gold/60"
                  : "border-dashed border-amber-500/50 bg-amber-50/10 opacity-75"
              }`}
            >
              {/* Photo Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Status Badge */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      toggleStatus(item.id);
                      toast.info(
                        item.status === "published"
                          ? `Photo moved to Drafts (hidden from live site)`
                          : `Photo published live!`
                      );
                    }}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider rounded-xs cursor-pointer shadow-xs ${
                      item.status === "published"
                        ? "bg-emerald text-ivory hover:bg-emerald-deep"
                        : "bg-amber-600 text-white hover:bg-amber-700"
                    }`}
                  >
                    {item.status === "published" ? (
                      <>
                        <Eye className="size-3" /> Published
                      </>
                    ) : (
                      <>
                        <EyeOff className="size-3" /> Draft
                      </>
                    )}
                  </button>
                </div>

                {/* Quick Replace Trigger */}
                <label className="absolute bottom-2.5 right-2.5 bg-black/70 hover:bg-black/90 text-ivory p-1.5 rounded-xs cursor-pointer shadow-md transition-colors">
                  <Upload className="size-3.5" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleReplaceFileChange(e, item.id)}
                  />
                </label>
              </div>

              {/* Photo Details */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[0.625rem] uppercase tracking-wider text-taupe font-medium mb-1">
                    <span>{item.category}</span>
                    {item.tradition && <span>{item.tradition}</span>}
                  </div>
                  <h3 className="font-display text-sm text-emerald line-clamp-2" title={item.caption}>
                    {item.caption}
                  </h3>
                  <p className="mt-1 text-[0.6875rem] text-muted-foreground line-clamp-2" title={item.alt}>
                    Alt: {item.alt}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => openEditModal(item)}
                    className="inline-flex items-center gap-1 text-xs text-foreground/80 hover:text-emerald transition-colors cursor-pointer"
                  >
                    <Pencil className="size-3" /> Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Delete "${item.caption}" from the gallery?`)) {
                        deleteItem(item.id);
                        toast.success("Photo removed from gallery");
                      }
                    }}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                  >
                    <Trash2 className="size-3" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar */}
        {filteredItems.length > 0 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border/70 bg-neutral-soft/40 px-6 py-4 rounded-xs">
            {/* Left: Summary and Page Size */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>
                Showing <strong className="text-emerald">{startIndex + 1}</strong> –{" "}
                <strong className="text-emerald">{endIndex}</strong> of{" "}
                <strong className="text-emerald">{filteredItems.length}</strong> photos
              </span>
              <span className="text-border">|</span>
              <div className="flex items-center gap-2">
                <span>Per page:</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-border bg-background px-2 py-1 text-xs text-foreground focus:border-gold focus:outline-none rounded-xs"
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                  <option value={96}>96</option>
                  <option value={filteredItems.length}>All ({filteredItems.length})</option>
                </select>
              </div>
            </div>

            {/* Right: Page Buttons */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={safeCurrentPage === 1}
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(1, prev - 1));
                    window.scrollTo({ top: 150, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-foreground border border-border bg-background hover:border-gold hover:text-emerald disabled:opacity-40 disabled:pointer-events-none transition-colors rounded-xs cursor-pointer"
                >
                  <ChevronLeft className="size-3.5" /> Previous
                </button>

                <div className="hidden sm:flex items-center gap-1">
                  {getPageNumbers().map((page, idx) =>
                    page === "..." ? (
                      <span key={`ellipsis-${idx}`} className="px-2 py-1 text-xs text-muted-foreground">
                        ...
                      </span>
                    ) : (
                      <button
                        key={`page-${page}`}
                        type="button"
                        onClick={() => {
                          setCurrentPage(Number(page));
                          window.scrollTo({ top: 150, behavior: "smooth" });
                        }}
                        className={`min-w-8 px-2.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                          safeCurrentPage === page
                            ? "bg-emerald text-ivory font-semibold shadow-xs"
                            : "border border-border bg-background text-foreground/80 hover:border-gold hover:text-emerald"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  type="button"
                  disabled={safeCurrentPage === totalPages}
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                    window.scrollTo({ top: 150, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-foreground border border-border bg-background hover:border-gold hover:text-emerald disabled:opacity-40 disabled:pointer-events-none transition-colors rounded-xs cursor-pointer"
                >
                  Next <ChevronRight className="size-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="mt-16 text-center py-20 border border-dashed border-border rounded-xs">
            <ImageIcon className="mx-auto size-10 text-muted-foreground/40 mb-3" />
            <h3 className="font-display text-lg text-emerald">No Photos Found</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your search query or category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedStatus("all");
              }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold hover:underline cursor-pointer"
            >
              <RefreshCw className="size-3" /> Reset all filters
            </button>
          </div>
        )}
      </main>

      {/* Edit / Add Modal */}
      {(isAddingNew || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-xl bg-background border border-gold/40 rounded-xs shadow-2xl overflow-hidden my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border/80 bg-neutral-soft/50 px-6 py-4">
              <h2 className="font-display text-lg text-emerald">
                {isAddingNew ? "Add New Gallery Photo" : "Edit Photo Details"}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveModal} className="p-6 space-y-5">
              {/* Image Preview / Upload Area */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-2">
                  Photo Asset
                </label>
                {imagePreview ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs border border-border bg-black/10 mb-2">
                    <img src={imagePreview} alt="Preview" className="size-full object-cover" />
                    <label className="absolute bottom-3 right-3 bg-black/75 hover:bg-black text-ivory text-xs px-3 py-1.5 rounded-xs cursor-pointer shadow-md transition-colors flex items-center gap-1.5">
                      <Upload className="size-3.5" /> Replace Photo
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileSelect(file, (dataUrl) => {
                              setImagePreview(dataUrl);
                              setFormImageSrc(dataUrl);
                            });
                          }
                        }}
                      />
                    </label>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center aspect-[16/9] w-full border-2 border-dashed border-gold/40 hover:border-gold rounded-xs bg-neutral-soft/30 hover:bg-neutral-soft/60 cursor-pointer transition-colors p-6 text-center">
                    <Upload className="size-8 text-gold mb-2" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald">
                      Upload Image File
                    </span>
                    <span className="text-[0.6875rem] text-muted-foreground mt-1">
                      Drag and drop or click to browse (.jpg, .webp, .png)
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleFileSelect(file, (dataUrl) => {
                            setImagePreview(dataUrl);
                            setFormImageSrc(dataUrl);
                          });
                        }
                      }}
                    />
                  </label>
                )}
              </div>

              {/* Caption / Title */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1">
                  Title / Caption *
                </label>
                <input
                  type="text"
                  required
                  value={formCaption}
                  onChange={(e) => setFormCaption(e.target.value)}
                  placeholder="e.g. The zaffa: the grand entrance"
                  className="w-full border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
                />
              </div>

              {/* Category & Tradition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1">
                    Category *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1">
                    Cultural Tradition / Tag
                  </label>
                  <input
                    type="text"
                    value={formTradition}
                    onChange={(e) => setFormTradition(e.target.value)}
                    placeholder="e.g. Middle Eastern, Western, Fusion"
                    className="w-full border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* SEO Alt Text */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-1">
                  SEO Alt Description (For Google Search & Accessibility)
                </label>
                <input
                  type="text"
                  value={formAlt}
                  onChange={(e) => setFormAlt(e.target.value)}
                  placeholder="Describe the photo clearly for search engines and accessibility"
                  className="w-full border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
                />
              </div>

              {/* Status & Orientation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-2">
                    Visibility Status
                  </span>
                  <div className="flex items-center gap-4 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        checked={formStatus === "published"}
                        onChange={() => setFormStatus("published")}
                        className="accent-emerald"
                      />
                      <span>Published (Live)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        checked={formStatus === "draft"}
                        onChange={() => setFormStatus("draft")}
                        className="accent-emerald"
                      />
                      <span>Draft (Hidden)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-taupe font-semibold mb-2">
                    Orientation
                  </span>
                  <div className="flex items-center gap-4 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="orientation"
                        checked={formOrientation === "landscape"}
                        onChange={() => setFormOrientation("landscape")}
                        className="accent-emerald"
                      />
                      <span>Landscape (4:3)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="orientation"
                        checked={formOrientation === "portrait"}
                        onChange={() => setFormOrientation("portrait")}
                        className="accent-emerald"
                      />
                      <span>Portrait (3:4)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-border/80">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-emerald bg-emerald px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-emerald-deep transition-colors cursor-pointer"
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
