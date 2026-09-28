/**
 * 5 Real Event Projects from src/assets/gallery/Events
 */

export type CelebrationProject = {
  id: string;
  number: string;
  category: "babyshower" | "barmitzvah" | "engagement" | "birthdays" | "vows" | string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  location: string;
  overviewParagraph: string;
  folderName: string;
  featuredImage: string;
  images: string[];
  highlights: string[];
};

import vowRenewalsMainImg from "@/assets/gallery/Events/vows renewals/IMG_2020.webp";

// Import all webp images from the new path src/assets/gallery/Events/*/*.webp
const rawEventImages = import.meta.glob<string>(
  "../assets/gallery/Events/*/*.webp",
  {
    eager: true,
    import: "default",
  }
);

function getSortedEventImages(folderName: string): { featuredImage: string; images: string[] } {
  const entries = Object.entries(rawEventImages).filter(([path]) =>
    path.toLowerCase().includes(folderName.toLowerCase())
  );

  const mainEntry = entries.find(([path]) => /main\.webp$/i.test(path));

  const otherEntries = entries
    .filter(([path]) => !/main\.webp$/i.test(path))
    .sort(([pathA], [pathB]) => {
      const matchA = pathA.match(/(\d+)\.?\.webp$/i);
      const matchB = pathB.match(/(\d+)\.?\.webp$/i);
      const numA = matchA && matchA[1] ? parseInt(matchA[1], 10) : 0;
      const numB = matchB && matchB[1] ? parseInt(matchB[1], 10) : 0;
      if (numA && numB) return numA - numB;
      return pathA.localeCompare(pathB);
    });

  const featuredImage = mainEntry ? mainEntry[1] : (otherEntries[0] ? otherEntries[0][1] : "");

  const images = mainEntry
    ? [mainEntry[1], ...otherEntries.map(([, src]) => src)]
    : otherEntries.map(([, src]) => src);

  return { featuredImage, images };
}

const babyShower = getSortedEventImages("Baby showers");
const barMitzvah = getSortedEventImages("BarMitzvah");
const engagement = getSortedEventImages("engagement party decor");
const birthdays = getSortedEventImages("Milestone Birthdays");
const vowRenewals = getSortedEventImages("vows renewals");

export const celebrationProjects: CelebrationProject[] = [
  {
    id: "baby-shower",
    number: "01",
    category: "babyshower",
    categoryLabel: "Baby Shower",
    title: "Baby Showers",
    subtitle: "Enchanted Garden Nursery Celebration",
    location: "Coral Gables Private Estate",
    overviewParagraph:
      "A delightful garden celebration designed to welcome new beginnings with playful elegance and bespoke warmth. Soft pastel florals, hand-crafted details, tiered artisanal confections, and tailored seating created an intimate afternoon surrounded by loved ones and timeless charm.",
    folderName: "Baby showers",
    featuredImage: babyShower.featuredImage,
    images: babyShower.images,
    highlights: [
      "Custom floral carriage centerpiece surrounded by delicate pastel garden blooms",
      "Artisanal multi-tier dessert presentation with personalized storybook confections",
      "Intimate garden estate seating framed with soft blush linens and custom stationery",
      "Curated welcome mocktail bar and afternoon tea service flow",
    ],
  },
  {
    id: "bar-mitzvah",
    number: "02",
    category: "barmitzvah", 
    categoryLabel: "Bar Mitzvah",
    title: "Bar Mitzvah Celebrations",
    subtitle: "Sacred Tradition & High-Energy Simcha",
    location: "South Florida Country Club",
    overviewParagraph:
      "A high-octane celebration honoring sacred tradition while dialing up the fun. Featuring interactive custom dessert lounges, dynamic live DJ entertainment, and immersive themed décor that kept the dance floor packed and guests of every age smiling all night long.",
    folderName: "BarMitzvah",
    featuredImage: barMitzvah.featuredImage,
    images: barMitzvah.images,
    highlights: [
      "Meaningful traditional hora, candle lighting, and family tribute staging",
      "High energy live DJ interactive dance floor programming and giveaways",
      "Custom youth mocktail lounge and immersive LED glow decor installations",
      "Sophisticated adult dinner reception settings with lush centerpieces",
    ],
  },
  {
    id: "engagement-party",
    number: "03",
    category: "engagement",
    categoryLabel: "Engagement Party",
    title: "Engagement Party Décor",
    subtitle: "Romantic Candlelit Soirée & Celebration Design",
    location: "Miami Waterfront & Historic Venues",
    overviewParagraph:
      "An intimate, romantic celebration marking the beginning of the couple's journey to the altar. Dramatic statement floral arches, ambient candlelight, rich textures, and bespoke cocktail lounge styling come together to set an unforgettable mood for family and closest friends.",
    folderName: "engagement party decor",
    featuredImage: engagement.featuredImage,
    images: engagement.images,
    highlights: [
      "Dramatic statement floral arches and ambient candlelit walkway entrances",
      "Bespoke velvet lounge groupings with gold accent cocktail tables",
      "Custom photo backdrop installations tailored to the couple's love story",
      "Artfully curated champagne towers and handcrafted hors d'oeuvres stations",
    ],
  },
  {
    id: "milestone-birthdays",
    number: "04",
    category: "birthdays",
    categoryLabel: "Milestone Birthdays",
    title: "Milestone Birthdays",
    subtitle: "Opulent Golden Gala & Anniversary Evening",
    location: "Downtown Miami Luxury Venue",
    overviewParagraph:
      "Celebrating life's most meaningful chapters with grandeur and distinction. From milestone 50th galas to multi-generational family gatherings, every detail is elevated through dramatic architectural lighting, personalized tribute displays, and bespoke entertainment.",
    folderName: "Milestone Birthdays",
    featuredImage: birthdays.featuredImage,
    images: birthdays.images,
    highlights: [
      "Sophisticated black, gold, and champagne architectural balloon & floral installations",
      "Bespoke personalized stage backdrops and commemorative tribute displays",
      "Choreographed multi-course dining service with curated live musical ensembles",
      "Custom signature cocktail pairings and decadent artisanal celebration cakes",
    ],
  },
  {
    id: "vow-renewals",
    number: "05",
    category: "vows",
    categoryLabel: "Vow Renewals",
    title: "Vow Renewals",
    subtitle: "Timeless Recommitments & Coastal Romances",
    location: "Oceanfront Resort & Palm Beach Coastal Estate",
    overviewParagraph:
      "An intimate recommitment to love and enduring partnership. Set against tranquil coastal vistas, soft organic florals, delicate bridal details, and personalized vows reaffirm a lifetime of shared dreams in the presence of closest family and friends.",
    folderName: "vows renewals",
    featuredImage: vowRenewalsMainImg,
    images: vowRenewals.images,
    highlights: [
      "Intimate oceanfront ceremony pergolas dressed in airy ivory drapes and fresh florals",
      "Personalized heirloom vow exchange styling and keepsake blessing ceremonies",
      "Sunset champagne toasts followed by alfresco coastal private dining",
      "Bespoke acoustic musical accompaniment and twilight string lighting",
    ],
  },
];
