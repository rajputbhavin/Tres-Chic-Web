/** Named cultural expertise, blueprint Section 4 and the Multicultural page. */

import { media } from "@/data/media";

export type Tradition = {
  slug: string;
  label: string;
  short: string;
  body: string;
};

export const traditions: Tradition[] = [
  {
    slug: "south-asian",
    label: "South Asian, Hindu, Sikh & Muslim celebrations",
    short: "South Asian Celebrations",
    body: "Multi-day, multi-ceremony weddings are where I do some of my best work, coordinating a Sangeet, a Mehendi, a Baraat and a wedding ceremony as one connected story instead of four separate events. I understand the pace, the guest logistics and the sequencing these celebrations require.",
  },
  {
    slug: "jewish",
    label: "Jewish weddings & simchas",
    short: "Jewish Weddings",
    body: "From the ketubah signing to the chuppah to the hora, I build a timeline that honors every ritual with the time and attention it deserves, while keeping the celebration feeling like your family's, not a template.",
  },
  {
    slug: "middle-eastern",
    label: "Middle Eastern weddings",
    short: "Middle Eastern weddings",
    body: "Beyond planning, Très CHIC has an in-house connection to Zaffa Entertainment, traditional grand-entrance zaffa bands, takht ensembles, Arabic and English DJs and live musicians, so the entertainment your family expects is never an afterthought.",
  },
  {
    slug: "interfaith-fusion",
    label: "Interfaith & fusion weddings",
    short: "Interfaith & Fusion Weddings",
    body: "Two ceremonies. Two officiants. Two sets of traditions, woven into one day that feels considered rather than compromised. This is some of the most personal work I do, and I take the responsibility of getting it right seriously.",
  },
  {
    slug: "western-destination",
    label: "Western & destination weddings",
    short: "Western & Destination Weddings",
    body: "Elegant, editorial and entirely tailored, whether it's an intimate ceremony or a black-tie affair, the same level of design and logistical care applies.",
  },
  {
    slug: "multi-day",
    label: "Multi-day, multi-family celebrations",
    short: "Multi-Day, Multi-Family Celebrations",
    body: "Welcome parties, ceremonies, receptions and after-parties, each with its own personality, all connected by one story. This is the format I know best.",
  },
];

/**
 * Page art for each tradition. Some entries have no real image yet and instead
 * declare the asset that must be sourced from Mariane's archive before launch.
 */
export type TraditionArt = { src?: string; alt?: string; assetGap?: string };

export const traditionArt: Record<string, TraditionArt> = {
  "south-asian": {
    src: media.southAsianCeremony,
    alt: "South Asian, Hindu, Sikh & Muslim celebrations with traditional attire and ceremony",
  },
  jewish: {
    src: media.chuppahCeremony,
    alt: "Jewish wedding ceremony under chuppah with florals and greenery",
  },
  "middle-eastern": {
    src: media.middleEasternWeddings,
    alt: "Middle Eastern wedding celebration featuring traditional zaffa music and dance",
  },
  "interfaith-fusion": {
    src: media.interfaithFusionWeddings,
    alt: "Interfaith and fusion wedding celebration beautifully harmonizing traditions",
  },
  "western-destination": {
    src: media.westernDestinationWeddings,
    alt: "Western and destination wedding celebration with bride and groom",
  },
  "multi-day": {
    src: media.multiDayCelebrations,
    alt: "Multi-day multi-family celebrations with grand reception ballroom",
  },
};
