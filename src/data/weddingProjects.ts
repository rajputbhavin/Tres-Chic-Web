/**
 * 6 Real Wedding Projects from src/assets/weddings
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
};

// Import all webp images in src/assets/weddings/*/*.webp
const rawImages = import.meta.glob<string>("../assets/weddings/*/*.webp", {
  eager: true,
  import: "default",
});

function getProjectImagesForFolder(folderName: string): { featuredImage: string; images: string[] } {
  const entries = Object.entries(rawImages).filter(([path]) => path.includes(folderName));

  // Find image that user designated as "main" (e.g. "main 1.webp")
  const mainEntry = entries.find(([path]) => /main/i.test(path));

  // Sort other numbered images numerically (1.webp, 2.webp, 3.webp, etc.)
  const numberedEntries = entries
    .filter(([path]) => !/main/i.test(path))
    .sort(([pathA], [pathB]) => {
      const matchA = pathA.match(/(\d+)\.webp$/);
      const matchB = pathB.match(/(\d+)\.webp$/);
      const numA = matchA && matchA[1] ? parseInt(matchA[1], 10) : 0;
      const numB = matchB && matchB[1] ? parseInt(matchB[1], 10) : 0;
      return numA - numB;
    });

  const featuredImage = mainEntry ? mainEntry[1] : (numberedEntries[0] ? numberedEntries[0][1] : "");

  // In the photo ribbon and lightbox, put the main featured image first, followed by all others
  const images = mainEntry
    ? [mainEntry[1], ...numberedEntries.map(([, src]) => src)]
    : numberedEntries.map(([, src]) => src);

  return { featuredImage, images };
}

const carolina = getProjectImagesForFolder("Carolina & Ash Romantic Coral Gables Wedding Photos");
const edenRoc = getProjectImagesForFolder("Eden Roc Laura & Chris's Wedding Photos");
const judeShula = getProjectImagesForFolder("Jude & Elee Shula's Wedding Photos");
const leahBoca = getProjectImagesForFolder("Leah & Jake's Intimate Boca wedding photos");
const leilaVizcaya = getProjectImagesForFolder("Leila & Tarek Vizcaya Wedding Photos");
const luxuryTent = getProjectImagesForFolder("Luxury Tent Wedding Photos");

export const weddingProjects: WeddingProject[] = [
  {
    id: "carolina-ash",
    number: "01",
    title: "Carolina & Ash",
    subtitle: "Romantic Coral Gables Wedding",
    location: "Coral Gables, Florida",
    description:
      "A sun drenched, deeply romantic celebration in Coral Gables with cascading garden florals, timeless bespoke styling, and an intimate candlelit dinner under the South Florida sky.",
    overviewParagraph:
      "Set beneath the sunlit banyan canopy of Coral Gables, this celebration brought together timeless floral artistry and classic South Florida elegance. Guests experienced an intimate garden ceremony followed by an open air dinner under strings of golden light, with lush ivory florals and bespoke tabletop curation.",
    folderName: "Carolina & Ash Romantic Coral Gables Wedding Photos",
    featuredImage: carolina.featuredImage,
    images: carolina.images,
    highlights: [
      "Full day wedding coordination with seamless multi vendor timeline execution",
      "Custom botanical ceremony arch and romantic candlelit tablescapes",
      "Sunset couple portraits aligned with natural golden hour lighting",
      "Smooth transition from cocktail hour to an intimate outdoor dinner",
    ],
  },
  {
    id: "laura-chris",
    number: "02",
    title: "Laura & Chris",
    subtitle: "Eden Roc Miami Beach Wedding",
    location: "Miami Beach, Florida",
    description:
      "A coastal luxury affair at the iconic Eden Roc Miami Beach. Effortlessly balancing ocean breezes with architectural glamour, statement floral chandeliers, and an unforgettable dance floor.",
    overviewParagraph:
      "An oceanfront luxury celebration at the iconic Eden Roc Miami Beach. The design balanced ocean breezes with architectural glamour, featuring statement suspended floral chandeliers, elevated guest hospitality, and an electric reception that carried through the night.",
    folderName: "Eden Roc Laura & Chris's Wedding Photos",
    featuredImage: edenRoc.featuredImage,
    images: edenRoc.images,
    highlights: [
      "Oceanfront terrace ceremony staging with coastal wind contingency care",
      "Grand ballroom transformation featuring custom suspended floral chandeliers",
      "Bilingual vendor collaboration and dynamic late night reception choreography",
      "White glove VIP guest hospitality from welcome drinks to final sendoff",
    ],
  },
  {
    id: "jude-elee",
    number: "03",
    title: "Jude & Elee",
    subtitle: "Shula's Hotel & Golf Club Wedding",
    location: "Miami Lakes, Florida",
    description:
      "Rich in cultural tradition and vibrant energy, this grand celebration brought families together with a heart pumping live zaffa procession, opulent ballroom staging, and joyful hospitality.",
    overviewParagraph:
      "Rich in family heritage and infectious joy, this celebration illuminated the grand ballroom at Shulas. From the live zaffa entrance and traditional drummers to the lavish banquet, every ritual was planned and executed with effortless grace and vibrant warmth.",
    folderName: "Jude & Elee Shula's Wedding Photos",
    featuredImage: judeShula.featuredImage,
    images: judeShula.images,
    highlights: [
      "High energy grand Zaffa entrance featuring live drummers and horn players",
      "Opulent multicultural ballroom staging and synchronized spotlight design",
      "Multi family timeline honoring traditional rituals and celebrations",
      "Seamless multi course banquet pacing and hospitality management",
    ],
  },
  {
    id: "leah-jake",
    number: "04",
    title: "Leah & Jake",
    subtitle: "Intimate Boca Raton Wedding",
    location: "Boca Raton, Florida",
    description:
      "Modern sophistication tailored for an intimate guest list. Delicate blush florals, bespoke textured linens, and personalized details created an ambiance that felt both elevated and deeply personal.",
    overviewParagraph:
      "Understated luxury and editorial beauty defined this private Boca Raton celebration. Soft blush florals, textured natural linens, and personalized styling touches created an intimate ambiance where the couple and their closest guests could truly savor each moment.",
    folderName: "Leah & Jake's Intimate Boca wedding photos",
    featuredImage: leahBoca.featuredImage,
    images: leahBoca.images,
    highlights: [
      "Bespoke editorial styling focused on fine tabletop details and custom stationery",
      "Tailored botanical floral artistry with delicate garden rose arrangements",
      "Effortless flow between outdoor ceremony lawn and covered reception veranda",
      "Calm and peaceful schedule allowing the couple to truly savor every moment",
    ],
  },
  {
    id: "leila-tarek",
    number: "05",
    title: "Leila & Tarek",
    subtitle: "Vizcaya Museum & Gardens Wedding",
    location: "Vizcaya, Miami, Florida",
    description:
      "An awe inspiring celebration set against the historic grandeur of Vizcaya. A dramatic courtyard reception, romantic stone terrace portraits, and exquisite floral artistry overlooking the bay.",
    overviewParagraph:
      "An architectural dream framed by the historic estate of Vizcaya Museum and Gardens. The celebration featured a sunset ceremony on the stone terraces, dramatic courtyard dining, and exquisite floral installations designed to complement panoramic views of Biscayne Bay.",
    folderName: "Leila & Tarek Vizcaya Wedding Photos",
    featuredImage: leilaVizcaya.featuredImage,
    images: leilaVizcaya.images,
    highlights: [
      "Historic estate navigation adhering strictly to Vizcaya preservation protocols",
      "Sunset courtyard ceremony framed by Mediterranean architectural elegance",
      "Atmospheric evening architectural uplighting and curated bayfront sound",
      "Full weather contingency planning and precision vendor load in management",
    ],
  },
  {
    id: "luxury-tent",
    number: "06",
    title: "Luxury Waterfront Tent Celebration",
    subtitle: "Bespoke Clear Span Reception",
    location: "South Florida Coast",
    description:
      "A masterclass in tent design and logistical precision. Crystal chandeliers glowing under a transparent canopy, lush botanical hanging installations, and panoramic sunset views for a night to remember.",
    overviewParagraph:
      "A masterclass in custom tent engineering and high design on the South Florida shoreline. Suspended crystal chandeliers glowed beneath a transparent canopy while cascading greenery and sweeping sunset ocean views transformed an open lawn into a world class ballroom.",
    folderName: "Luxury Tent Wedding Photos",
    featuredImage: luxuryTent.featuredImage,
    images: luxuryTent.images,
    highlights: [
      "Complex clear span tent engineering with custom flooring and climate control",
      "Suspended crystal chandeliers interwoven with lush overhead greenery",
      "Precision waterfront load in, power distribution, and multi team scheduling",
      "Immersive guest journey transitioning from dusk cocktails to dance celebration",
    ],
  },
];
