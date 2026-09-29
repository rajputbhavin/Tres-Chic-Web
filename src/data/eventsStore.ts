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

export function loadStoredCelebrationProjects(): AdminCelebrationProject[] {
  if (typeof window === "undefined") {
    return getDefaultCelebrationProjects();
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed as AdminCelebrationProject[];
      }
    }
  } catch (err) {
    console.warn("Failed to parse events from localStorage:", err);
  }
  return getDefaultCelebrationProjects();
}

export async function saveStoredCelebrationProjects(items: AdminCelebrationProject[]): Promise<void> {
  if (typeof window === "undefined") return;

  // 1. High-capacity IndexedDB (unlimited quota for photos)
  await idbSet(STORAGE_KEY, items);

  // 2. Best-effort localStorage for instant sync across tabs
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // If localStorage quota exceeded, IndexedDB still holds full data
  }

  // 3. Dispatch reactive events
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: items }));
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
    // Load persisted data from IndexedDB
    idbGet<AdminCelebrationProject[]>(STORAGE_KEY).then((dbItems) => {
      if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
        setProjects(dbItems);
      }
    });

    const handleUpdate = (e?: Event) => {
      if (e instanceof CustomEvent && e.detail && Array.isArray(e.detail)) {
        setProjects(e.detail);
        return;
      }
      idbGet<AdminCelebrationProject[]>(STORAGE_KEY).then((dbItems) => {
        if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
          setProjects(dbItems);
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
    // Load persisted data from IndexedDB
    idbGet<AdminCelebrationProject[]>(STORAGE_KEY).then((dbItems) => {
      if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
        setProjects(dbItems);
      }
    });

    const handleUpdate = (e?: Event) => {
      if (e instanceof CustomEvent && e.detail && Array.isArray(e.detail)) {
        setProjects(e.detail);
        return;
      }
      idbGet<AdminCelebrationProject[]>(STORAGE_KEY).then((dbItems) => {
        if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
          setProjects(dbItems);
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
