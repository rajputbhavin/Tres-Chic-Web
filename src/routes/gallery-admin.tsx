import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Download,
  Eye,
  KeyRound,
  Lock,
  LogOut,
  RotateCcw,
  Sparkles,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { AdminCouplesManager } from "@/components/admin/AdminCouplesManager";
import { AdminEventsManager } from "@/components/admin/AdminEventsManager";
import { AdminGalleryPhotosManager } from "@/components/admin/AdminGalleryPhotosManager";
import {
  type AdminCoupleProject,
  loadStoredCoupleProjects,
  resetCouplesToDefault,
  saveStoredCoupleProjects,
} from "@/data/couplesStore";
import {
  type AdminCelebrationProject,
  loadStoredCelebrationProjects,
  resetEventsToDefault,
  saveStoredCelebrationProjects,
} from "@/data/eventsStore";
import {
  type AdminGalleryItem,
  loadStoredGalleryItems,
  resetGalleryToDefault,
  saveStoredGalleryItems,
} from "@/data/galleryStore";
import { idbGet } from "@/lib/db";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery-admin")({
  head: () => ({
    meta: [
      { title: "Gallery & Portfolio Admin Studio | Très CHIC Event Planning" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: GalleryAdminPage,
});

const DEFAULT_PASSCODE = "treschic2026";
const AUTH_KEY = "tres_chic_admin_auth_v1";

type AdminTab = "couples" | "events" | "gallery";

function GalleryAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(AUTH_KEY) === "true";
  });
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  // Top-level Navigation Tab: default to "couples"
  const [activeTab, setActiveTab] = useState<AdminTab>("couples");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === DEFAULT_PASSCODE) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      setAuthError("");
      toast.success("Welcome to Très CHIC Management Studio");
    } else {
      setAuthError("Incorrect passcode. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    toast.info("Logged out successfully");
  };

  // Export all 3 datasets into a comprehensive JSON backup
  const handleExportFullJSON = async () => {
    try {
      const couples =
        (await idbGet<AdminCoupleProject[]>("tres_chic_couples_v1")) || loadStoredCoupleProjects();
      const events =
        (await idbGet<AdminCelebrationProject[]>("tres_chic_events_v1")) || loadStoredCelebrationProjects();
      const galleryPhotos =
        (await idbGet<AdminGalleryItem[]>("tres_chic_gallery_v1")) || loadStoredGalleryItems();

      const fullExport = {
        couples,
        events,
        galleryPhotos,
        exportedAt: new Date().toISOString(),
      };

      const jsonStr = JSON.stringify(fullExport, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const downloadUrl = URL.createObjectURL(blob);

      const downloadAnchor = document.createElement("a");
      downloadAnchor.href = downloadUrl;
      downloadAnchor.download = `tres_chic_portfolio_backup_${Date.now()}.json`;
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      URL.revokeObjectURL(downloadUrl);

      toast.success("Complete Portfolio & Gallery JSON backup exported");
    } catch (err) {
      console.error("Export failed:", err);
      toast.error("Failed to export backup JSON");
    }
  };

  // Import full JSON dataset from client backup
  const handleImportFullJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const data = JSON.parse(text);

        let importedCouples = 0;
        let importedEvents = 0;
        let importedPhotos = 0;

        if (Array.isArray(data.couples) && data.couples.length > 0) {
          await saveStoredCoupleProjects(data.couples);
          importedCouples = data.couples.length;
        }

        if (Array.isArray(data.events) && data.events.length > 0) {
          await saveStoredCelebrationProjects(data.events);
          importedEvents = data.events.length;
        }

        if (Array.isArray(data.galleryPhotos) && data.galleryPhotos.length > 0) {
          await saveStoredGalleryItems(data.galleryPhotos);
          importedPhotos = data.galleryPhotos.length;
        }

        // Direct array fallback
        if (Array.isArray(data) && data.length > 0) {
          if ("category" in data[0] && ("overviewParagraph" in data[0] || "categoryLabel" in data[0])) {
            await saveStoredCelebrationProjects(data);
            importedEvents = data.length;
          } else if ("caption" in data[0]) {
            await saveStoredGalleryItems(data);
            importedPhotos = data.length;
          } else if ("title" in data[0] && "highlights" in data[0]) {
            await saveStoredCoupleProjects(data);
            importedCouples = data.length;
          }
        }

        toast.success(
          `Import complete! Synced ${importedCouples} couples, ${importedEvents} events, and ${importedPhotos} photos.`
        );

        window.dispatchEvent(new Event("tres_chic_couples_updated"));
        window.dispatchEvent(new Event("tres_chic_events_updated"));
        window.dispatchEvent(new Event("tres_chic_gallery_updated"));
      } catch (err) {
        console.error("Failed to parse imported JSON:", err);
        toast.error("Failed to read JSON. Please make sure it is a valid backup file.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleRestoreLocalPhotos = async () => {
    if (
      window.confirm(
        "Bhai, kya aap apne disk se sare original photos aur built-in projects restore karna chahte hain? Isse local ke sare original photos wapas aa jayenge."
      )
    ) {
      await resetCouplesToDefault();
      await resetEventsToDefault();
      await resetGalleryToDefault();
      toast.success("Sare original local photos aur projects successfully restore ho gaye!");
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
          <h1 className="display-sm mt-2 text-emerald">Portfolio Admin Studio</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            Enter the authorized passcode to manage couples wedding features, event celebrations, and photo collections.
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
            <span className="font-display text-lg text-emerald">Très CHIC Management Studio</span>
            <span className="hidden sm:inline-block rounded-xs bg-gold/20 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-gold-deep">
              Editorial CMS
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
              onClick={handleRestoreLocalPhotos}
              className="inline-flex items-center gap-1.5 border border-gold/70 bg-gold/15 text-gold-deep hover:bg-gold hover:text-charcoal-deep px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              title="Restore all original local photos from disk and fix any broken images"
            >
              <RotateCcw className="size-3.5" /> Restore Local Images
            </button>
            <label
              className="inline-flex items-center gap-1.5 border border-emerald bg-emerald/10 text-emerald hover:bg-emerald hover:text-ivory px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              title="Upload JSON file sent by client to sync all photos and projects"
            >
              <Upload className="size-3.5" /> Import Data (JSON)
              <input
                type="file"
                accept=".json,application/json"
                onChange={handleImportFullJSON}
                className="hidden"
              />
            </label>
            <button
              type="button"
              onClick={handleExportFullJSON}
              className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs text-foreground/80 hover:border-gold hover:text-emerald transition-colors cursor-pointer"
              title="Download JSON backup of couples, events, and gallery"
            >
              <Download className="size-3.5" /> Export All Data (JSON)
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
              Live Celebrations
            </Link>
            <span className="text-border">/</span>
            <span className="text-emerald font-semibold">Editorial Studio</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span>Session:</span>
            <span className="inline-block size-2 rounded-full bg-emerald" />
            <span className="font-medium text-emerald">Admin Active</span>
          </div>
        </div>

        {/* Top-Level Section Navigation Tabs */}
        <div className="flex border-b border-border/80 gap-3 sm:gap-6 overflow-x-auto pb-px mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("couples")}
            className={cn(
              "flex items-center gap-2.5 pb-3.5 pt-2 px-1 text-xs uppercase tracking-widest font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer",
              activeTab === "couples"
                ? "border-emerald text-emerald"
                : "border-transparent text-muted-foreground hover:text-emerald"
            )}
          >
            <span>💍 Couples (Wedding Projects)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("events")}
            className={cn(
              "flex items-center gap-2.5 pb-3.5 pt-2 px-1 text-xs uppercase tracking-widest font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer",
              activeTab === "events"
                ? "border-emerald text-emerald"
                : "border-transparent text-muted-foreground hover:text-emerald"
            )}
          >
            <span>🎉 Events (Celebration Projects)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("gallery")}
            className={cn(
              "flex items-center gap-2.5 pb-3.5 pt-2 px-1 text-xs uppercase tracking-widest font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer",
              activeTab === "gallery"
                ? "border-emerald text-emerald"
                : "border-transparent text-muted-foreground hover:text-emerald"
            )}
          >
            <span>📷 General Gallery Photos</span>
          </button>
        </div>

        {/* Tab Content Panes */}
        {activeTab === "couples" && <AdminCouplesManager />}
        {activeTab === "events" && <AdminEventsManager />}
        {activeTab === "gallery" && <AdminGalleryPhotosManager />}
      </main>
    </div>
  );
}
