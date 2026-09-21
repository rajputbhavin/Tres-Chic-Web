/**
 * 3 Real Event Projects from src/assets/Events
 */

export type CelebrationProject = {
  id: string;
  number: string;
  category: "babyshower" | "gala" | "mitzvah";
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

// Import all webp images in src/assets/Events/*/*.webp
const rawEventImages = import.meta.glob<string>("../assets/Events/*/*.webp", {
  eager: true,
  import: "default",
});

function getSortedEventImages(folderName: string): { featuredImage: string; images: string[] } {
  const entries = Object.entries(rawEventImages).filter(([path]) => path.includes(folderName));

  const mainEntry = entries.find(([path]) => /main/i.test(path));

  const numberedEntries = entries
    .filter(([path]) => !/main/i.test(path))
    .sort(([pathA], [pathB]) => {
      const matchA = pathA.match(/(\d+)\.?\.webp$/);
      const matchB = pathB.match(/(\d+)\.?\.webp$/);
      const numA = matchA && matchA[1] ? parseInt(matchA[1], 10) : 0;
      const numB = matchB && matchB[1] ? parseInt(matchB[1], 10) : 0;
      return numA - numB;
    });

  const featuredImage = mainEntry ? mainEntry[1] : (numberedEntries[0] ? numberedEntries[0][1] : "");

  const images = mainEntry
    ? [mainEntry[1], ...numberedEntries.map(([, src]) => src)]
    : numberedEntries.map(([, src]) => src);

  return { featuredImage, images };
}

const babyShower = getSortedEventImages("Baby shower Photo Gallery");
const gala = getSortedEventImages("Gala & Awards Event Gallery");
const mitzvah = getSortedEventImages("Mitzvahs Photo Gallery");

export const celebrationProjects: CelebrationProject[] = [
  {
    id: "baby-shower",
    number: "01",
    category: "babyshower",
    categoryLabel: "Baby Shower",
    title: "Baby Shower",
    subtitle: "Enchanted Garden Nursery Celebration",
    location: "Coral Gables Private Estate",
    overviewParagraph:
      "A delightful garden celebration designed to welcome new beginnings with playful elegance and bespoke warmth. Soft pastel florals, hand painted storybook details, tiered artisanal confections, and tailored seating created an intimate afternoon surrounded by loved ones and timeless charm.",
    folderName: "Baby shower Photo Gallery",
    featuredImage: babyShower.featuredImage,
    images: babyShower.images,
    highlights: [
      "Custom floral carriage centerpiece surrounded by delicate pastel garden blooms",
      "Artisanal multi tier dessert presentation with personalized storybook confections",
      "Intimate garden estate seating framed with soft blush linens and custom stationery",
      "Curated welcome mocktail bar and afternoon tea service flow",
    ],
  },
  {
    id: "gala-awards",
    number: "02",
    category: "gala",
    categoryLabel: "Gala & Corporate",
    title: "Gala & Awards",
    subtitle: "Architectural Ballroom Black-Tie Evening",
    location: "Downtown Miami Luxury Venue",
    overviewParagraph:
      "An elevated black tie gala balancing corporate prestige with breathtaking aesthetic ambiance. Dramatic statement lighting, precision multi course dining choreography, and an electric live stage presentation delivered an unforgettable evening for esteemed honorees and guests.",
    folderName: "Gala & Awards Event Gallery",
    featuredImage: gala.featuredImage,
    images: gala.images,
    highlights: [
      "Precision stage design and dynamic audiovisual production choreography",
      "Grand ballroom architectural uplighting synchronized with live awards program",
      "Seamless VIP red carpet arrival and high volume champagne hospitality",
      "Multi course gourmet banquet service executed with flawless timing",
    ],
  },
  {
    id: "mitzvah-moments",
    number: "03",
    category: "mitzvah",
    categoryLabel: "Mitzvahs",
    title: "Mitzvah Moments",
    subtitle: "Neon Glow Celebration & Traditional Simcha",
    location: "South Florida Country Club",
    overviewParagraph:
      "A high octane celebration honoring tradition while dialing up the fun. Featuring interactive custom dessert lounges, dynamic live DJ entertainment, and immersive themed decor that kept the dance floor packed and guests of every age smiling all night long.",
    folderName: "Mitzvahs Photo Gallery",
    featuredImage: mitzvah.featuredImage,
    images: mitzvah.images,
    highlights: [
      "High energy live DJ interactive dance floor programming and giveaways",
      "Custom youth mocktail lounge and immersive LED glow decor installations",
      "Meaningful traditional hora, candle lighting, and family tribute staging",
      "Interactive dessert action stations and personalized late night bites",
    ],
  },
];
