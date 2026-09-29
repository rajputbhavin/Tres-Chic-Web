/**
 * 5 Real Wedding Couple Projects from src/assets/gallery/Couples
 */

export type WeddingProject = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  overviewParagraph: string;
  folderName: string;
  featuredImage: string;
  images: string[];
  highlights: string[];
  status?: "published" | "draft";
};

// Import all webp images in src/assets/gallery/Couples/*/*.webp
const rawImages = import.meta.glob<string>(
  "../assets/gallery/Couples/*/*.webp",
  {
    eager: true,
    import: "default",
  }
);

function getProjectImagesForFolder(folderName: string): { featuredImage: string; images: string[] } {
  const entries = Object.entries(rawImages).filter(([path]) =>
    path.toLowerCase().includes(folderName.toLowerCase())
  );

  // Find image that user designated as "main" (e.g. "main.webp", "main 1.webp")
  const mainEntry = entries.find(([path]) => /main/i.test(path));

  // Sort other numbered or named images
  const otherEntries = entries
    .filter(([path]) => !/main/i.test(path))
    .sort(([pathA], [pathB]) => {
      const matchA = pathA.match(/(\d+)\.?\.webp$/i);
      const matchB = pathB.match(/(\d+)\.?\.webp$/i);
      const numA = matchA && matchA[1] ? parseInt(matchA[1], 10) : 0;
      const numB = matchB && matchB[1] ? parseInt(matchB[1], 10) : 0;
      if (numA && numB) return numA - numB;
      return pathA.localeCompare(pathB);
    });

  const featuredImage = mainEntry ? mainEntry[1] : (otherEntries[0] ? otherEntries[0][1] : "");

  // In the photo ribbon and lightbox, put the main featured image first, followed by all others
  const images = mainEntry
    ? [mainEntry[1], ...otherEntries.map(([, src]) => src)]
    : otherEntries.map(([, src]) => src);

  return { featuredImage, images };
}

const carolinePravan = getProjectImagesForFolder("Caroline & Pravan");
const carolineJoe = getProjectImagesForFolder("Caroline and Joe");
const leilaTarek = getProjectImagesForFolder("Leila & Tarek Vizcaya");
const nadraKareem = getProjectImagesForFolder("Nadra & Kareem");
const zoeOliver = getProjectImagesForFolder("Zoe & Oliver");

export const weddingProjects: WeddingProject[] = [
  {
    id: "caroline-pravan",
    number: "01",
    title: "Caroline & Pravan",
    subtitle: "Romantic Multicultural Wedding Celebration",
    location: "South Florida Luxury Estate",
    description:
      "A breathtaking fusion of cultures and cherished traditions. From sacred ceremonial rituals to an energetic reception surrounded by family and friends, every moment was choreographed with timeless beauty and seamless logistics.",
    overviewParagraph:
      "A breathtaking celebration bringing together two distinct heritages into one unforgettable wedding weekend. Caroline & Pravan's celebration featured reverent ceremonial rituals, rich traditional hues, and a high-energy reception that celebrated the joining of two loving families.",
    folderName: "Caroline & Pravan",
    featuredImage: carolinePravan.featuredImage,
    images: carolinePravan.images,
    highlights: [
      "Sacred ceremony rituals executed with cultural authenticity and reverent styling",
      "Custom botanical mandap and floral installations with rich traditional hues",
      "Sunset couple portraits capturing heirloom jewelry and couture attire",
      "High-energy multi-cultural dance floor and live musical entertainment",
    ],
  },
  {
    id: "caroline-joe",
    number: "02",
    title: "Caroline & Joe",
    subtitle: "Intimate Garden & Coastal Romance",
    location: "South Florida Waterfront Private Club",
    description:
      "Understated elegance and classic romance defined Caroline and Joe's wedding day. Set amidst lush coastal greenery, cascading ivory florals, and soft candlelight, the celebration offered an effortless flow from ceremony to an unforgettable evening under the stars.",
    overviewParagraph:
      "Set amidst the sun-dappled coastal greenery of South Florida, this celebration brought together timeless floral artistry and classic elegance. Guests experienced an intimate garden ceremony followed by open-air dining under strings of golden light, with lush ivory florals and bespoke tabletop curation.",
    folderName: "Caroline and Joe",
    featuredImage: carolineJoe.featuredImage,
    images: carolineJoe.images,
    highlights: [
      "Lush garden ceremony aisle framed with cascading ivory and blush blooms",
      "Open-air cocktail terrace transition with signature drinks and live strings",
      "Intimate candlelit dining tables adorned with gold accents and bespoke stationery",
      "Joyous first dance and celebration under ambient twilight lighting",
    ],
  },
  {
    id: "leila-tarek",
    number: "03",
    title: "Leila & Tarek",
    subtitle: "Historic Vizcaya Museum & Gardens Wedding",
    location: "Villa Vizcaya, Miami, Florida",
    description:
      "An awe-inspiring celebration set against the historic grandeur of Vizcaya. A dramatic courtyard reception, romantic stone terrace portraits, and exquisite floral artistry overlooking the bay.",
    overviewParagraph:
      "An architectural dream framed by the historic estate of Vizcaya Museum and Gardens. The celebration featured a sunset ceremony on the stone terraces, dramatic courtyard dining, and exquisite floral installations designed to complement panoramic views of Biscayne Bay.",
    folderName: "Leila & Tarek Vizcaya",
    featuredImage: leilaTarek.featuredImage,
    images: leilaTarek.images,
    highlights: [
      "Historic estate navigation adhering strictly to Vizcaya preservation protocols",
      "Sunset courtyard ceremony framed by Mediterranean architectural elegance",
      "Atmospheric evening architectural uplighting and curated bayfront sound",
      "Full weather contingency planning and precision vendor load-in management",
    ],
  },
  {
    id: "nadra-kareem",
    number: "04",
    title: "Nadra & Kareem",
    subtitle: "Opulent Celebration & Grand Zaffa Entrance",
    location: "South Florida Luxury Ballroom & Country Club",
    description:
      "Rich in heritage, family warmth, and infectious energy, Nadra & Kareem's wedding was a masterclass in celebration. From the thunderous drums of a grand zaffa entrance to lavish tablescapes glowing in candlelight, every element radiated love and regal sophistication.",
    overviewParagraph:
      "Rich in family heritage and infectious joy, this celebration illuminated the grand ballroom. From the live zaffa entrance and traditional drummers to the lavish banquet, every ritual was planned and executed with effortless grace and vibrant warmth.",
    folderName: "Nadra & Kareem",
    featuredImage: nadraKareem.featuredImage,
    images: nadraKareem.images,
    highlights: [
      "Electrifying grand zaffa procession featuring traditional drummers and horns",
      "Opulent ballroom transformation with dramatic crystal chandeliers and florals",
      "Seamless multi-course banquet pacing honoring family dining traditions",
      "High-energy dance floor celebration keeping guests smiling until the final sendoff",
    ],
  },
  {
    id: "zoe-oliver",
    number: "05",
    title: "Zoe & Oliver",
    subtitle: "Chic Modern Romance & Contemporary Glamour",
    location: "Miami Modern Architectural Venue",
    description:
      "Effortless modern chic meets timeless celebration. Zoe & Oliver's wedding featured striking contemporary aesthetics, dramatic floral statement pieces, curated craft cocktails, and an intimate atmosphere where every guest felt part of something truly magical.",
    overviewParagraph:
      "Understated modern luxury and editorial beauty defined Zoe & Oliver's private celebration. Contemporary florals, textured natural linens, and personalized styling touches created an intimate ambiance where the couple and their closest guests could truly savor each moment.",
    folderName: "Zoe & Oliver",
    featuredImage: zoeOliver.featuredImage,
    images: zoeOliver.images,
    highlights: [
      "Modern editorial ceremony arch styling with sculptural contemporary florals",
      "Chic custom lounge vignette groupings with sleek velvet and metallic finishes",
      "Custom interactive cocktail bar and gourmet culinary station pairings",
      "Unstoppable late-night dance floor illuminated by architectural accent lighting",
    ],
  },
];
