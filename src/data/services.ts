/** Wedding service tiers, blueprint Weddings page. */

import { media } from "@/data/media";

export type Service = {
  slug: string;
  label: string;
  investment: string;
  title: string;
  body: string;
  builtFor: string;
  /** Copy for the "Built for" line is prefixed unless the tier opts out. */
  prefixBuiltFor: boolean;
  image: { src: string; alt: string };
};

export const services: Service[] = [
  {
    slug: "full-service-planning",
    label: "Full-Service Planning",
    investment: "Starting at $12,500",
    title: "For couples who want one person carrying it all.",
    body: "From the first conversation to the last dance, I lead every decision, venue, vendors, design, budget, logistics, timeline, so you're only ever asked about the choices that matter to you. This is the most hands-on way to work together, and the one that lets you disappear most completely into simply being engaged.",
    builtFor:
      "Couples who are busy, out of town, planning a multi-day or multicultural celebration, or who simply don't want wedding planning to become a second job.",
    prefixBuiltFor: true,
    image: {
      src: media.fullServicePlanning,
      alt: "Full-service wedding planning celebration by Très CHIC",
    },
  },
  {
    slug: "partial-planning",
    label: "Partial Planning",
    investment: "$7,500 to $9,500+",
    title: "For couples who've started, and want an expert to take it the rest of the way.",
    body: "You've made some decisions already, maybe a venue, maybe a vision board full of ideas. I step in, organize what you have, fill the gaps with the right vendors and design direction, and carry it through to execution.",
    builtFor: "Couples who are partway in and need direction, judgment and execution.",
    prefixBuiltFor: true,
    image: {
      src: media.gardenReceptionTallFlorals,
      alt: "A garden reception with tall blush and ivory florals",
    },
  },
  {
    slug: "coordination",
    label: "Month-of & Wedding Week Coordination",
    investment: "$3,250 to $5,500+",
    title: "For couples who've planned everything, and need someone else to run it.",
    body: "In the final weeks, I take over every remaining detail: confirming vendors, building the timeline, running the rehearsal and managing your wedding day floor-to-finish, so the only job left for you is to show up and enjoy it.",
    builtFor: "Couples who have planned it all and want a professional running it.",
    prefixBuiltFor: true,
    image: {
      src: media.candlelitHeadTable,
      alt: "A long head table covered in candlelight and roses",
    },
  },
  {
    slug: "design-a-la-carte",
    label: "Design & À La Carte",
    investment: "Custom proposal",
    title: "Design, without the full planning process.",
    body: "Custom centerpieces and statement bridal bouquets. Floor plans and seating charts. Budget tracking and vendor contract review. Tablescape and décor consultations. Rehearsal dinner coordination. If you need one expert eye on one part of the puzzle, we can talk about exactly what that looks like.",
    builtFor: "Contact us for details and pricing on à la carte services.",
    prefixBuiltFor: false,
    image: {
      src: media.bridalBouquet,
      alt: "A full bridal bouquet of ivory and blush garden roses",
    },
  },
];
