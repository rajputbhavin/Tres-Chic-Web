import { useEffect, useState } from "react";
import { weddingProjects, type WeddingProject } from "@/data/weddingProjects";
import { idbGet, idbSet, idbDelete } from "@/lib/db";

export type AdminCoupleProject = WeddingProject & {
  status: "published" | "draft";
  createdAt?: string;
  updatedAt?: string;
};

const STORAGE_KEY = "tres_chic_couples_v1";
const EVENT_NAME = "tres_chic_couples_updated";

export function getDefaultCoupleProjects(): AdminCoupleProject[] {
  const now = new Date().toISOString();
  return weddingProjects.map((project) => ({
    ...project,
    status: (project.status || "published") as "published" | "draft",
    createdAt: now,
    updatedAt: now,
  }));
}

export function loadStoredCoupleProjects(): AdminCoupleProject[] {
  if (typeof window === "undefined") {
    return getDefaultCoupleProjects();
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed as AdminCoupleProject[];
      }
    }
  } catch (err) {
    console.warn("Failed to parse couples from localStorage:", err);
  }
  return getDefaultCoupleProjects();
}

export async function saveStoredCoupleProjects(items: AdminCoupleProject[]): Promise<void> {
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

export async function resetCouplesToDefault(): Promise<AdminCoupleProject[]> {
  const defaults = getDefaultCoupleProjects();
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
export function useLiveWeddingProjects(): AdminCoupleProject[] {
  const [projects, setProjects] = useState<AdminCoupleProject[]>(() => loadStoredCoupleProjects());

  useEffect(() => {
    // Load persisted data from IndexedDB
    idbGet<AdminCoupleProject[]>(STORAGE_KEY).then((dbItems) => {
      if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
        setProjects(dbItems);
      }
    });

    const handleUpdate = (e?: Event) => {
      if (e instanceof CustomEvent && e.detail && Array.isArray(e.detail)) {
        setProjects(e.detail);
        return;
      }
      idbGet<AdminCoupleProject[]>(STORAGE_KEY).then((dbItems) => {
        if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
          setProjects(dbItems);
        } else {
          setProjects(loadStoredCoupleProjects());
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
 * Admin hook for managing wedding couple stories
 */
export function useAdminCouplesStore() {
  const [projects, setProjects] = useState<AdminCoupleProject[]>(() => loadStoredCoupleProjects());

  useEffect(() => {
    // Load persisted data from IndexedDB
    idbGet<AdminCoupleProject[]>(STORAGE_KEY).then((dbItems) => {
      if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
        setProjects(dbItems);
      }
    });

    const handleUpdate = (e?: Event) => {
      if (e instanceof CustomEvent && e.detail && Array.isArray(e.detail)) {
        setProjects(e.detail);
        return;
      }
      idbGet<AdminCoupleProject[]>(STORAGE_KEY).then((dbItems) => {
        if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
          setProjects(dbItems);
        } else {
          setProjects(loadStoredCoupleProjects());
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

  const save = (updated: AdminCoupleProject[]) => {
    setProjects(updated);
    void saveStoredCoupleProjects(updated);
  };

  const addCouple = (
    data: Omit<AdminCoupleProject, "id" | "number" | "createdAt" | "updatedAt">
  ) => {
    const now = new Date().toISOString();
    const id = `couple-${Date.now()}`;
    const nextNumber = String(projects.length + 1).padStart(2, "0");
    const newProject: AdminCoupleProject = {
      ...data,
      id,
      number: nextNumber,
      createdAt: now,
      updatedAt: now,
    };
    save([newProject, ...projects]);
    return newProject;
  };

  const updateCouple = (id: string, updates: Partial<AdminCoupleProject>) => {
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
    updateCouple(id, { status: nextStatus });
  };

  const deleteCouple = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    save(updated);
  };

  const reset = async () => {
    const defaults = await resetCouplesToDefault();
    setProjects(defaults);
  };

  return {
    projects,
    addCouple,
    updateCouple,
    toggleStatus,
    deleteCouple,
    reset,
  };
}
