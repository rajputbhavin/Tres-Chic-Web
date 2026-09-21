/**
 * Weddings page copy for the two specialty bands that sit above the service
 * tiers. Multicultural, fusion and destination weddings live here rather than
 * in the header navigation.
 */

import { media } from "@/data/media";

export const weddingsMulticultural = {
  eyebrow: "Multicultural & Fusion Weddings",
  headline: "Your families don't need to choose. Neither does your wedding.",
  body: "South Asian, Jewish, Middle Eastern, interfaith and fusion celebrations, multi-day and multi-family, planned as one connected story rather than several separate events.",
  link: { label: "Explore Multicultural & Fusion Weddings", to: "/multicultural-weddings" },
  image: media.multiculturalFusionWeddings,
  imageAlt: "Multicultural & Fusion wedding celebration planned by Très CHIC",
};

export const weddingsDestination = {
  eyebrow: "Near or Far",
  headline: "Local to South Florida. At home anywhere your celebration takes us.",
  body: "Whether you're marrying where you live or bringing your whole world to South Florida, the experience is the same, thoughtful, organized and entirely yours.",
  link: { label: "Explore Destination Weddings", to: "/destination-weddings" },
  image: media.nearOrFar,
  imageAlt: "Destination wedding celebration in South Florida and beyond",
};
