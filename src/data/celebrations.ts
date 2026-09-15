import { socialCelebrationPhotos as social } from "@/data/socialCelebrations";

export type CelebrationShowcase = {
  title: string;
  images: Array<{ src: string; alt: string }>;
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

/** Curated, compact galleries for the interactive Events page showcase. */
export const celebrationShowcases: CelebrationShowcase[] = [
  {
    title: "Engagement Parties",
    images: [
      { src: social.birthday119, alt: "Black and gold social celebration dining room" },
      { src: social.birthday15, alt: "White floral centerpiece with black and gold place settings" },
      { src: social.birthday31, alt: "Outdoor lounge arranged for an intimate social event" },
      { src: social.birthday68, alt: "Black and gold place setting with custom details" },
      { src: social.birthday42, alt: "Elegant lounge and photo backdrop for a social celebration" },
    ],
  },
  {
    title: "Bridal & Baby Showers",
    images: [
      { src: social.showerTable, alt: "Pink and ivory baby shower dessert table" },
      { src: social.showerDesserts, alt: "Assorted shower desserts displayed with floral details" },
      { src: social.showerCastle, alt: "Pink storybook dessert display for a baby shower" },
      { src: social.showerCarriage, alt: "Floral carriage centerpiece for a shower" },
      { src: social.showerDetails, alt: "Pastel shower table with layered decorative details" },
    ],
  },
  {
    title: "Milestone Birthdays",
    images: [
      { src: social.birthday3, alt: "Illuminated 50th birthday backdrop with black and gold balloons" },
      { src: social.birthday40, alt: "Black and gold dance floor beneath a balloon installation" },
      { src: social.birthday8, alt: "Milestone birthday dining room with balloon ceiling" },
      { src: social.birthday9, alt: "Black and gold milestone birthday tablescape" },
      { src: social.birthday41, alt: "Personalized milestone birthday display" },
    ],
  },
  {
    title: "Bar & Bat Mitzvahs",
    images: [
      { src: social.mitzvahSign, alt: "Personalized Bar Mitzvah dessert and favor display" },
      { src: social.mitzvahRoom, alt: "Bar Mitzvah reception room prepared for guests" },
      { src: social.mitzvahTable, alt: "Striped Bar Mitzvah tablescape with personalized details" },
      { src: social.mitzvahDining, alt: "Bar Mitzvah dining room with colorful uplighting" },
      { src: social.mitzvahReception, alt: "Social celebration reception with a custom stage" },
    ],
  },
  {
    title: "Vow Renewals",
    images: [
      { src: social.birthday14, alt: "Refined black and gold dining room for a social celebration" },
      { src: social.birthday21, alt: "Balloon-filled dining space designed for a meaningful occasion" },
      { src: social.birthday63, alt: "Candlelit tables beneath a black and gold balloon installation" },
      { src: social.showerRoom, alt: "Bright intimate venue with delicately styled tables" },
    ],
  },
  {
    title: "Sweet 16 Celebrations",
    images: [
      { src: social.birthday53, alt: "Black and gold social celebration lounge and dance floor" },
      { src: social.birthday22, alt: "Dining table beneath an abundant balloon installation" },
      { src: social.birthday4, alt: "Illuminated milestone number framed by balloons" },
      { src: social.showerDesserts, alt: "Colorful sweets displayed for a social celebration" },
      { src: social.mitzvahDining, alt: "Festive event room with colorful uplighting" },
    ],
  },
  {
    title: "And other meaningful occasions, ask us.",
    images: [
      { src: social.birthday119, alt: "An immersive black and gold social celebration" },
      { src: social.mitzvahTable, alt: "Personalized table design for a family celebration" },
      { src: social.showerCarriage, alt: "Floral centerpiece created for a meaningful occasion" },
      { src: social.birthday31, alt: "Outdoor lounge set for guests" },
      { src: social.showerDetails, alt: "Pastel celebration details with flowers and balloons" },
    ],
  },
];
