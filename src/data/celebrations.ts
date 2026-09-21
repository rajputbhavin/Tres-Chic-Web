import engagementPartiesImg from "@/assets/social-celebrations/Engagement Parties.webp";
import bridalBabyShowersImg from "@/assets/social-celebrations/Bridal & Baby Showers.webp";
import milestoneBirthdaysImg from "@/assets/social-celebrations/Milestone Birthdays.webp";
import barBatMitzvahsImg from "@/assets/social-celebrations/Bar & Bat Mitzvahs.webp";
import vowRenewalsImg from "@/assets/social-celebrations/Vow Renewals.webp";
import sweet16CelebrationsImg from "@/assets/social-celebrations/Sweet 16 Celebrations.webp";
import otherOccasionsImg from "@/assets/social-celebrations/And other meaningful occasions, ask us..webp";

export type CelebrationShowcase = {
  title: string;
  image: string;
  alt: string;
};

export type EventService = {
  title: string;
  investment: string;
  body: string;
};

/** The current website publishes these event services without fixed prices. */
export const eventServices: EventService[] = [
  {
    title: "Event Planning & Coordination",
    investment: "Custom proposal",
    body: "Hands-on planning and coordination for engagement parties, showers, milestone birthdays, Bar and Bat Mitzvahs, vow renewals, Sweet 16 celebrations and other meaningful occasions.",
  },
  {
    title: "Event Design & Decor",
    investment: "Custom proposal",
    body: "A tailored visual direction for your venue, from the atmosphere and room design to the decorative details that make the celebration feel distinctly yours.",
  },
  {
    title: "Custom Decor & Entertainment",
    investment: "Custom proposal",
    body: "Bespoke decorative details and entertainment options are scoped around your event, venue, guest count and the level of production required.",
  },
];

/** Curated showcases paired with the client's dedicated celebration photography. */
export const celebrationShowcases: CelebrationShowcase[] = [
  {
    title: "Engagement Parties",
    image: engagementPartiesImg,
    alt: "Engagement Parties celebration by Très CHIC",
  },
  {
    title: "Bridal & Baby Showers",
    image: bridalBabyShowersImg,
    alt: "Bridal & Baby Showers celebration by Très CHIC",
  },
  {
    title: "Milestone Birthdays",
    image: milestoneBirthdaysImg,
    alt: "Milestone Birthdays celebration by Très CHIC",
  },
  {
    title: "Bar & Bat Mitzvahs",
    image: barBatMitzvahsImg,
    alt: "Bar & Bat Mitzvahs celebration by Très CHIC",
  },
  {
    title: "Vow Renewals",
    image: vowRenewalsImg,
    alt: "Vow Renewals celebration by Très CHIC",
  },
  {
    title: "Sweet 16 Celebrations",
    image: sweet16CelebrationsImg,
    alt: "Sweet 16 Celebrations celebration by Très CHIC",
  },
  {
    title: "And other meaningful occasions, ask us.",
    image: otherOccasionsImg,
    alt: "Meaningful social occasions planned and designed by Très CHIC",
  },
];
