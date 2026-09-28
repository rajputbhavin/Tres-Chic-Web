/**
 * Portfolio data: the filter pills, the three featured stories used on the
 * homepage preview, and the story-page content.
 *
 * IMPORTANT: story bodies below are clearly labelled PLACEHOLDER copy in the
 * blueprint's five-part structure (Couple & Context, Complexity, What Mariane
 * Noticed, What Mariane Solved, Result). No client story has been invented,
 * and none may ship. Replace each `placeholder: true` entry with Mariane's
 * approved account before launch.
 */

import { media } from "@/data/media";

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "couples", label: "Couples" },
  { id: "south-asian", label: "South Asian Weddings" },
  { id: "destination", label: "Destination Weddings" },
  { id: "fusion", label: "Fusion Weddings" },
  { id: "middle-eastern", label: "Middle Eastern Weddings" },
  { id: "jewish", label: "Jewish Weddings" },
  { id: "events", label: "Events" },
  { id: "reception", label: "Receptions" },
  { id: "tablescape", label: "Tablescapes" },
  { id: "detail", label: "Details" },
  { id: "entertainment", label: "Entertainment" },
  { id: "ceremony", label: "Ceremonies" },
] as const;

export type PortfolioStorySection = { heading: string; body: string };

export type PortfolioStory = {
  slug: string;
  title: string;
  location: string;
  hook: string;
  image: { src: string; alt: string };
  /** Layout hints for the homepage editorial grid. */
  gridSpan: string;
  gridRatio: string;
  /** True until Mariane approves the real account of this celebration. */
  placeholder: boolean;
  sections: PortfolioStorySection[];
  galleryCategory?: string;
};

const placeholderSections = (label: string): PortfolioStorySection[] => [
  {
    heading: "Couple & Context",
    body: `[PLACEHOLDER — COUPLE & CONTEXT / ${label}] Who this couple is, where they came from and what they wanted the celebration to feel like. To be written with Mariane from the real celebration.`,
  },
  {
    heading: "Complexity",
    body: `[PLACEHOLDER — COMPLEXITY / ${label}] The traditions, families, venue constraints or multi-day logistics that made this celebration genuinely hard to plan.`,
  },
  {
    heading: "What Mariane Noticed",
    body: `[PLACEHOLDER — WHAT MARIANE NOTICED / ${label}] The detail nobody else caught, the thing that would have gone wrong if she hadn't been looking.`,
  },
  {
    heading: "What Mariane Solved",
    body: `[PLACEHOLDER — WHAT MARIANE SOLVED / ${label}] The decision, negotiation or rebuild that removed the problem before it reached the couple.`,
  },
  {
    heading: "Result",
    body: `[PLACEHOLDER — RESULT / ${label}] What the day actually felt like for the couple and their families, in their words where possible.`,
  },
];

export const portfolioStories: PortfolioStory[] = [
  {
    slug: "a-vizcaya-wedding",
    title: "A Vizcaya Wedding",
    location: "Vizcaya Museum, Miami",
    hook: "A historic villa, dressed for one night only.",
    image: {
      src: media.vizcayaVillaEvening,
      alt: "Historic Vizcaya villa lit at night with a draped entry and florals",
    },
    gridSpan: "md:col-span-7 md:row-span-2",
    gridRatio: "aspect-[4/5] md:aspect-[4/5]",
    placeholder: true,
    sections: placeholderSections("A VIZCAYA WEDDING"),
    galleryCategory: "reception",
  },
  {
    slug: "a-cultural-fusion-celebration",
    title: "A Cultural Fusion Celebration",
    location: "Vizcaya Museum, Miami",
    hook: "The zaffa came down the staircase first. Everything else followed.",
    image: {
      src: media.zaffaProcession,
      alt: "A zaffa procession with drummers leading a couple down a staircase",
    },
    gridSpan: "md:col-span-5",
    gridRatio: "aspect-[4/3]",
    placeholder: true,
    sections: placeholderSections("A CULTURAL FUSION CELEBRATION"),
    galleryCategory: "entertainment",
  },
  {
    slug: "candlelight-end-to-end",
    title: "Candlelight, End to End",
    location: "South Florida",
    hook: "One table, five hundred candles, zero shortcuts.",
    image: {
      src: media.candlelitHeadTable,
      alt: "A long head table covered in candlelight, roses and gold flatware",
    },
    gridSpan: "md:col-span-5",
    gridRatio: "aspect-[4/3]",
    placeholder: true,
    sections: placeholderSections("CANDLELIGHT, END TO END"),
    galleryCategory: "reception",
  },
];

export const getPortfolioStory = (slug: string): PortfolioStory | undefined =>
  portfolioStories.find((story) => story.slug === slug);

export const portfolioPageCopy = {
  eyebrow: "Portfolio",
  headline: "Real celebrations. Real rooms. Real families.",
  body: "Every image here is from an actual Très CHIC celebration, nothing staged, nothing borrowed.",
  browseLabel: "Browse",
  emptyState: "No images in this category yet.",
  closingHeadline: "Let's create the next one.",
};
