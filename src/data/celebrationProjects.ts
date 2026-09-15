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

function getSortedEventImages(folderName: string): string[] {
  return Object.entries(rawEventImages)
    .filter(([path]) => path.includes(folderName))
    .sort(([pathA], [pathB]) => {
      const matchA = pathA.match(/(\d+)\.?\.webp$/);
      const matchB = pathB.match(/(\d+)\.?\.webp$/);
      const numA = matchA && matchA[1] ? parseInt(matchA[1], 10) : 0;
      const numB = matchB && matchB[1] ? parseInt(matchB[1], 10) : 0;
      return numA - numB;
    })
    .map(([, src]) => src);
}

const babyShowerImages = getSortedEventImages("Baby shower Photo Gallery");
const galaImages = getSortedEventImages("Gala & Awards Event Gallery");
const mitzvahImages = getSortedEventImages("Mitzvahs Photo Gallery");

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
    featuredImage: babyShowerImages[0] || "",
    images: babyShowerImages,
    highlights: [
      "Custom floral carriage centerpiece surrounded by delicate pastel garden blooms",
      "Artisanal multi tier dessert presentation with personalized storybook confections",
      "Intimate garden estate seating framed with soft blush linens and custom stationery",
      "Bespoke welcome drinks and curated tablescapes designed for meaningful connection",
    ],
  },
  {
    id: "gala-awards",
    number: "02",
    category: "gala",
    categoryLabel: "Gala & Awards",
    title: "Gala and Awards",
    subtitle: "Black Tie Corporate and Philanthropic Evening",
    location: "Miami Historic Grand Ballroom",
    overviewParagraph:
      "A grand black tie celebration crafted for high profile honorees and discerning guests. Architectural lighting, towering floral centerpieces, gilded table settings, and dynamic ballroom staging set the stage for an unforgettable evening of recognition and celebration.",
    folderName: "Gala & Awards Event Gallery",
    featuredImage: galaImages[0] || "",
    images: galaImages,
    highlights: [
      "Architectural uplighting and spotlight production synchronized with award presentations",
      "Towering floral centerpieces interwoven with opulent golden candelabras",
      "Seamless multi hundred guest registration and VIP hospitality lounge coordination",
      "Full room transformation with polished ballroom dance floor and live stage choreography",
    ],
  },
  {
    id: "bar-bat-mitzvahs",
    number: "03",
    category: "mitzvah",
    categoryLabel: "Bar & Bat Mitzvahs",
    title: "Mitzvah Moments",
    subtitle: "Vibrant Heritage and Nightclub Extravaganza",
    location: "South Florida Luxury Venue",
    overviewParagraph:
      "An unforgettable celebration uniting meaningful tradition with high octane entertainment. From the dignified ceremonial tributes to the luminous nightclub dance floor with live interactive performers, every detail kept guests of all generations engaged and celebrating together.",
    folderName: "Mitzvahs Photo Gallery",
    featuredImage: mitzvahImages[0] || "",
    images: mitzvahImages,
    highlights: [
      "Seamless ceremonial transition from family heritage tributes to an electric party",
      "Luminous custom LED staging with interactive performers and live festival sound",
      "Customized lounge pods with personalized graphic branding and festive favor displays",
      "Dynamic dining and dessert pacing tailored for both adults and young guests",
    ],
  },
];
