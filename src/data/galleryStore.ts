import { useEffect, useState } from "react";
import { gallery, type MediaItem } from "@/data/media";

export type GalleryStatus = "published" | "draft";

export type AdminGalleryItem = MediaItem & {
  id: string;
  status: GalleryStatus;
  createdAt: string;
  updatedAt: string;
  isCustom?: boolean;
};

const STORAGE_KEY = "tres_chic_gallery_v1";
const EVENT_NAME = "tres_chic_gallery_updated";

/** Returns the initial seed catalog from code. */
export function getDefaultGalleryItems(): AdminGalleryItem[] {
  const now = new Date().toISOString();
  return gallery.map((item, idx) => ({
    ...item,
    id: item.slug || `seed-item-${idx + 1}`,
    status: "published" as GalleryStatus,
    createdAt: now,
    updatedAt: now,
  }));
}

/** Loads stored items or falls back to default seed. Safe for SSR. */
export function loadStoredGalleryItems(): AdminGalleryItem[] {
  if (typeof window === "undefined") {
    return getDefaultGalleryItems();
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultGalleryItems();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed as AdminGalleryItem[];
    }
  } catch (err) {
    console.error("Failed to parse gallery from localStorage:", err);
  }

  return getDefaultGalleryItems();
}

/** Persists items to localStorage and dispatches sync events. */
export function saveStoredGalleryItems(items: AdminGalleryItem[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.error("Failed to save gallery to localStorage:", err);
  }
}

/** Resets catalog to initial seed items. */
export function resetGalleryToDefault(): AdminGalleryItem[] {
  const defaults = getDefaultGalleryItems();
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event(EVENT_NAME));
    } catch (err) {
      console.error("Failed to reset gallery:", err);
    }
  }
  return defaults;
}

/**
 * Public hook used by celebrations-we-love gallery.
 * Returns only published items, and updates dynamically whenever admin makes a change.
 */
export function useLiveGallery(): MediaItem[] {
  const [items, setItems] = useState<AdminGalleryItem[]>(() => loadStoredGalleryItems());

  useEffect(() => {
    const handleUpdate = () => {
      setItems(loadStoredGalleryItems());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return items.filter((item) => item.status === "published");
}

/**
 * Admin management hook for the /gallery-admin dashboard.
 */
export function useAdminGalleryStore() {
  const [items, setItems] = useState<AdminGalleryItem[]>(() => loadStoredGalleryItems());

  useEffect(() => {
    const handleUpdate = () => {
      setItems(loadStoredGalleryItems());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const save = (updated: AdminGalleryItem[]) => {
    setItems(updated);
    saveStoredGalleryItems(updated);
  };

  const addItem = (
    itemData: Omit<AdminGalleryItem, "id" | "createdAt" | "updatedAt">
  ) => {
    const now = new Date().toISOString();
    const newId = `custom-${Date.now()}`;
    const newItem: AdminGalleryItem = {
      ...itemData,
      id: newId,
      slug: itemData.slug || newId,
      createdAt: now,
      updatedAt: now,
      isCustom: true,
    };
    save([newItem, ...items]);
    return newItem;
  };

  const updateItem = (
    id: string,
    updates: Partial<Omit<AdminGalleryItem, "id" | "createdAt">>
  ) => {
    const now = new Date().toISOString();
    const updated = items.map((item) =>
      item.id === id ? { ...item, ...updates, updatedAt: now } : item
    );
    save(updated);
  };

  const replaceImage = (id: string, newSrc: string) => {
    updateItem(id, { src: newSrc });
  };

  const toggleStatus = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;
    const nextStatus: GalleryStatus = item.status === "published" ? "draft" : "published";
    updateItem(id, { status: nextStatus });
  };

  const deleteItem = (id: string) => {
    const updated = items.filter((item) => item.id !== id);
    save(updated);
  };

  const reset = () => {
    const defaults = resetGalleryToDefault();
    setItems(defaults);
  };

  return {
    items,
    addItem,
    updateItem,
    replaceImage,
    toggleStatus,
    deleteItem,
    reset,
  };
}
