import type { MediaItem } from "@/data/media";

// Dynamically glob all WebP images from the 5 Types of Weddings folders
const destinationGlob = import.meta.glob<string>(
  "../assets/gallery/Types Of Weddings/Destination Weddings/*.webp",
  { eager: true, import: "default" }
);

const fusionGlob = import.meta.glob<string>(
  "../assets/gallery/Types Of Weddings/Fusion Weddings/*.webp",
  { eager: true, import: "default" }
);

const jewishGlob = import.meta.glob<string>(
  "../assets/gallery/Types Of Weddings/Jewish Weddings/*.webp",
  { eager: true, import: "default" }
);

const middleEasternGlob = import.meta.glob<string>(
  "../assets/gallery/Types Of Weddings/Middle Easter weddings/*.webp",
  { eager: true, import: "default" }
);

const southAsianGlob = import.meta.glob<string>(
  "../assets/gallery/Types Of Weddings/South Asian Weddings/*.webp",
  { eager: true, import: "default" }
);

function formatCaption(filename: string, category: string, index: number): string {
  if (/alicia\s*and\s*josh/i.test(filename)) {
    return "Alicia & Josh · Destination Celebration";
  }
  if (/coupleportrait/i.test(filename)) {
    return "Couple Portrait";
  }
  if (/^decor/i.test(filename)) {
    return "Décor & Reception Setting";
  }

  const categoryLabels: Record<string, string[]> = {
    destination: [
      "Waterfront Ceremony",
      "Coastal Reception Detail",
      "Destination Celebration",
      "Vows in the Sun",
      "Sunset Dining by the Water",
      "Destination Gathering",
      "Oceanfront Elegance",
      "Festive Toast by the Water",
    ],
    fusion: [
      "Cultural Fusion Celebration",
      "Forever begins dining",
      "Traditions United",
      "Fusion Reception Detail",
      "Family & Celebration",
      "Bridging Two Worlds in Style",
      "Eternal fire vows",
    ],
    jewish: [
      "Chuppah Ceremony",
      "Jewish Wedding Celebration",
      "The Glass Breaking & Mazel Tov",
      "Horah on the Dance Floor",
      "Reception Under the Lights",
      "Ketubah Signing Moment",
      "Joyful Simcha Celebration",
    ],
    "middle-eastern": [
      "Zaffa Entrance & Drummers",
      "Middle Eastern Celebration",
      "Dabke on the Dance Floor",
      "Candlelit Banquet Reception",
      "Grand Reception Entrance",
      "Takht Ensemble Live Music",
      "Celebration of Family & Heritage",
    ],
    "south-asian": [
      "Mandap Ceremony Moment",
      "Sangeet & Celebration",
      "Baraat Procession",
      "Vibrant South Asian Reception",
      "Rich Ceremonial Details",
      "Garland Exchange & Rituals",
      "Festive Mehendi & Dance",
    ],
  };

  const pool = categoryLabels[category];
  if (pool && pool.length > 0) {
    return pool[index % pool.length]!;
  }

  return filename.replace(/[-_]/g, " ");
}

function makeItems(
  globRecord: Record<string, string>,
  category: "destination" | "fusion" | "jewish" | "middle-eastern" | "south-asian",
  label: string,
  tradition: string
): MediaItem[] {
  return Object.entries(globRecord).map(([filePath, src], idx) => {
    const rawFilename = filePath.split("/").pop()?.replace(/\.webp$/i, "") || `${category}-${idx + 1}`;
    const cleanSlug = `${category}-${rawFilename.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    const caption = formatCaption(rawFilename, category, idx);

    return {
      slug: cleanSlug,
      src,
      alt: `${caption} — ${tradition} designed and planned by Très CHIC`,
      caption,
      category,
      tradition,
      orientation: "landscape",
    };
  });
}

export const destinationWeddingItems = makeItems(
  destinationGlob,
  "destination",
  "Destination Weddings",
  "Western & Destination"
);

export const fusionWeddingItems = makeItems(
  fusionGlob,
  "fusion",
  "Fusion Weddings",
  "Interfaith & Fusion"
);

export const jewishWeddingItems = makeItems(
  jewishGlob,
  "jewish",
  "Jewish Weddings",
  "Jewish Tradition"
);

export const middleEasternWeddingItems = makeItems(
  middleEasternGlob,
  "middle-eastern",
  "Middle Eastern Weddings",
  "Middle Eastern Tradition"
);

export const southAsianWeddingItems = makeItems(
  southAsianGlob,
  "south-asian",
  "South Asian Weddings",
  "South Asian Tradition"
);

export const allTypesOfWeddingsItems: MediaItem[] = [
  ...southAsianWeddingItems,
  ...destinationWeddingItems,
  ...fusionWeddingItems,
  ...middleEasternWeddingItems,
  ...jewishWeddingItems,
];
