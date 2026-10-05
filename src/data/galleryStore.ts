import { useEffect, useState } from "react";
import { gallery, type MediaItem } from "@/data/media";
import { idbGet, idbSet, idbDelete } from "@/lib/db";

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

/** Heals imported single photos so that production /assets/ URLs resolve back to local imports */
export function healGalleryItems(items: AdminGalleryItem[]): AdminGalleryItem[] {
  const defaults = getDefaultGalleryItems();

  return items.map((item) => {
    const defaultMatch = defaults.find(
      (d) =>
        d.id === item.id ||
        (item.slug && d.slug === item.slug) ||
        (item.caption && d.caption?.trim().toLowerCase() === item.caption?.trim().toLowerCase())
    );

    if (defaultMatch) {
      const isCustomBase64 =
        typeof item.src === "string" &&
        (item.src.startsWith("data:") || item.src.startsWith("blob:"));

      const isBrokenOrProd =
        !item.src ||
        !isCustomBase64 ||
        item.src.includes("assets/") ||
        item.src.includes("treschiceventplanning.com");

      return {
        ...item,
        src: isBrokenOrProd ? defaultMatch.src : item.src,
      };
    }

    return item;
  });
}

/** Loads stored items or falls back to default seed. Safe for SSR. */
export function loadStoredGalleryItems(): AdminGalleryItem[] {
  if (typeof window === "undefined") {
    return getDefaultGalleryItems();
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return healGalleryItems(parsed as AdminGalleryItem[]);
      }
    }
  } catch (err) {
    console.warn("Failed to parse gallery from localStorage:", err);
  }

  return getDefaultGalleryItems();
}

/** Persists items to high-capacity IndexedDB and localStorage. */
export async function saveStoredGalleryItems(items: AdminGalleryItem[]): Promise<void> {
  if (typeof window === "undefined") return;

  const healed = healGalleryItems(items);
  await idbSet(STORAGE_KEY, healed);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(healed));
  } catch {
    // IndexedDB retains the data even if localStorage quota is exceeded
  }

  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: healed }));
  window.dispatchEvent(new Event(EVENT_NAME));
}

/** Resets catalog to initial seed items. */
export async function resetGalleryToDefault(): Promise<AdminGalleryItem[]> {
  const defaults = getDefaultGalleryItems();
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
 * Public hook used by celebrations-we-love gallery.
 * Returns only published items, and updates dynamically whenever admin makes a change.
 */
export function useLiveGallery(): MediaItem[] {
  const [items, setItems] = useState<AdminGalleryItem[]>(() => loadStoredGalleryItems());

  useEffect(() => {
    idbGet<AdminGalleryItem[]>(STORAGE_KEY).then((dbItems) => {
      if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
        setItems(healGalleryItems(dbItems));
      }
    });

    const handleUpdate = (e?: Event) => {
      if (e instanceof CustomEvent && e.detail && Array.isArray(e.detail)) {
        setItems(healGalleryItems(e.detail));
        return;
      }
      idbGet<AdminGalleryItem[]>(STORAGE_KEY).then((dbItems) => {
        if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
          setItems(healGalleryItems(dbItems));
        } else {
          setItems(loadStoredGalleryItems());
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

  return items.filter((item) => item.status === "published");
}

/**
 * Admin management hook for the /gallery-admin dashboard.
 */
export function useAdminGalleryStore() {
  const [items, setItems] = useState<AdminGalleryItem[]>(() => loadStoredGalleryItems());

  useEffect(() => {
    idbGet<AdminGalleryItem[]>(STORAGE_KEY).then((dbItems) => {
      if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
        const healed = healGalleryItems(dbItems);
        setItems(healed);
        void idbSet(STORAGE_KEY, healed);
      }
    });

    const handleUpdate = (e?: Event) => {
      if (e instanceof CustomEvent && e.detail && Array.isArray(e.detail)) {
        setItems(healGalleryItems(e.detail));
        return;
      }
      idbGet<AdminGalleryItem[]>(STORAGE_KEY).then((dbItems) => {
        if (dbItems && Array.isArray(dbItems) && dbItems.length > 0) {
          setItems(healGalleryItems(dbItems));
        } else {
          setItems(loadStoredGalleryItems());
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

  const save = (updated: AdminGalleryItem[]) => {
    setItems(updated);
    void saveStoredGalleryItems(updated);
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

  const reset = async () => {
    const defaults = await resetGalleryToDefault();
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
