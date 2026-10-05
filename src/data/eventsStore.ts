import { useEffect, useState } from "react";
import { celebrationProjects, type CelebrationProject } from "@/data/celebrationProjects";
import { idbGet, idbSet, idbDelete } from "@/lib/db";

export type AdminCelebrationProject = CelebrationProject & {
  status: "published" | "draft";
  createdAt?: string;
  updatedAt?: string;
};

const STORAGE_KEY = "tres_chic_events_v1";
const EVENT_NAME = "tres_chic_events_updated";

export function getDefaultCelebrationProjects(): AdminCelebrationProject[] {
  const now = new Date().toISOString();
  return celebrationProjects.map((project) => ({
    ...project,
    status: (project.status || "published") as "published" | "draft",
    createdAt: now,
    updatedAt: now,
  }));
}

/**
 * Heals imported events so that production asset URLs resolve back to local Vite imports
 */
export function healCelebrationProjects(items: AdminCelebrationProject[]): AdminCelebrationProject[] {
  const defaults = getDefaultCelebrationProjects();

  return items.map((item) => {
    const defaultMatch = defaults.find(
      (d) =>
        d.id === item.id ||
        d.title.trim().toLowerCase() === item.title?.trim().toLowerCase() ||
        (item.folderName && d.folderName.trim().toLowerCase() === item.folderName?.trim().toLowerCase())
    );

    if (defaultMatch) {
      const isCustomBase64Cover =
        typeof item.featuredImage === "string" &&
        (item.featuredImage.startsWith("data:") || item.featuredImage.startsWith("blob:"));

      const isBrokenOrProdCover =
        !item.featuredImage ||
        !isCustomBase64Cover ||
        item.featuredImage.includes("assets/") ||
        item.featuredImage.includes("treschiceventplanning.com");

      const featuredImage = isBrokenOrProdCover ? defaultMatch.featuredImage : item.featuredImage;

      const customUploadedImages = (item.images || []).filter(
        (img) => typeof img === "string" && (img.startsWith("data:") || img.startsWith("blob:"))
      );

      const baseImages =
        defaultMatch.images && defaultMatch.images.length > 0
          ? defaultMatch.images
          : [defaultMatch.featuredImage];

      const images =
        customUploadedImages.length > 0
          ? [...baseImages, ...customUploadedImages]
          : baseImages;

      return {
        ...item,
        id: defaultMatch.id,
        folderName: defaultMatch.folderName,
        featuredImage,
        images,
      };
    }

    return item;
  });
}

export function loadStoredCelebrationProjects(): AdminCelebrationProject[] {
  if (typeof window === "undefined") {
    return getDefaultCelebrationProjects();
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return healCelebrationProjects(parsed as AdminCelebrationProject[]);
      }
    }
  } catch (err) {
    console.warn("Failed to parse events from localStorage:", err);
  }
  return getDefaultCelebrationProjects();
}

export async function saveStoredCelebrationProjects(items: AdminCelebrationProject[]): Promise<void> {
  if (typeof window === "undefined") return;

  const healed = healCelebrationProjects(items);

  // 1. High-capacity IndexedDB
  await idbSet(STORAGE_KEY, healed);

  // 2. Best-effort localStorage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(healed));
  } catch {
    // IndexedDB holds full data
  }

  // 3. Dispatch reactive events
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: healed }));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export async function resetEventsToDefault(): Promise<AdminCelebrationProject[]> {
  const defaults = getDefaultCelebrationProjects();
  if (typeof window !== "undefined") {
    await idbDelete(STORAGE_KEY);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: defaults }));
    window.dispatchEvent(new Event(EVENT_NAME));
  }
  return defaults;
}

/**
 * Public reactive hook used on celebrations-we-love page
 */
export function useLiveCelebrationProjects(): AdminCelebrationProject[] {
  const [projects, setProjects] = useState<AdminCelebrationProject[]>(() => loadStoredCelebrationProjects());

  useEffect(() => {
    idbGet<AdminCelebrationProject[]>(STORAGE_KEY).then((dbItems) => {
      if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
        setProjects(healCelebrationProjects(dbItems));
      }
    });

    const handleUpdate = (e?: Event) => {
      if (e instanceof CustomEvent && e.detail && Array.isArray(e.detail)) {
        setProjects(healCelebrationProjects(e.detail));
        return;
      }
      idbGet<AdminCelebrationProject[]>(STORAGE_KEY).then((dbItems) => {
        if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
          setProjects(healCelebrationProjects(dbItems));
        } else {
          setProjects(loadStoredCelebrationProjects());
        }
      });
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return projects.filter((p) => p.status === "published");
}

/**
 * Admin hook for managing celebration events
 */
export function useAdminEventsStore() {
  const [projects, setProjects] = useState<AdminCelebrationProject[]>(() => loadStoredCelebrationProjects());

  useEffect(() => {
    idbGet<AdminCelebrationProject[]>(STORAGE_KEY).then((dbItems) => {
      if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
        const healed = healCelebrationProjects(dbItems);
        setProjects(healed);
        void idbSet(STORAGE_KEY, healed);
      }
    });

    const handleUpdate = (e?: Event) => {
      if (e instanceof CustomEvent && e.detail && Array.isArray(e.detail)) {
        setProjects(healCelebrationProjects(e.detail));
        return;
      }
      idbGet<AdminCelebrationProject[]>(STORAGE_KEY).then((dbItems) => {
        if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
          setProjects(healCelebrationProjects(dbItems));
        } else {
          setProjects(loadStoredCelebrationProjects());
        }
      });
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const save = (updated: AdminCelebrationProject[]) => {
    setProjects(updated);
    void saveStoredCelebrationProjects(updated);
  };

  const addEvent = (
    data: Omit<AdminCelebrationProject, "id" | "number" | "createdAt" | "updatedAt">
  ) => {
    const now = new Date().toISOString();
    const id = `event-${Date.now()}`;
    const nextNumber = String(projects.length + 1).padStart(2, "0");
    const newProject: AdminCelebrationProject = {
      ...data,
      id,
      number: nextNumber,
      createdAt: now,
      updatedAt: now,
    };
    save([newProject, ...projects]);
    return newProject;
  };

  const updateEvent = (id: string, updates: Partial<AdminCelebrationProject>) => {
    const now = new Date().toISOString();
    const updated = projects.map((p) =>
      p.id === id ? { ...p, ...updates, updatedAt: now } : p
    );
    save(updated);
  };

  const toggleStatus = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (!project) return;
    const nextStatus = project.status === "published" ? "draft" : "published";
    updateEvent(id, { status: nextStatus });
  };

  const deleteEvent = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    save(updated);
  };

  const reset = async () => {
    const defaults = await resetEventsToDefault();
    setProjects(defaults);
  };

  return {
    projects,
    addEvent,
    updateEvent,
    toggleStatus,
    deleteEvent,
    reset,
  };
}
