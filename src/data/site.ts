/**
 * Site-level facts and navigation. Every line traces back to the approved
 * blueprint (V2 overrides V1) or the current website. Nothing here is invented.
 */

export const site = {
  name: "Très CHIC Event Planning & Design",
  shortName: "Très CHIC",
  tagline: "Elevated, culturally rich celebrations, designed and executed with care.",
  serviceArea:
    "Serving Miami, Fort Lauderdale, Coral Gables, Boca Raton and the surrounding area, plus destination celebrations worldwide.",
  // Verified from the current website footer.
  phone: "(954) 517-1818",
  email: "info@treschiceventplanning.com",
  instagram: "https://www.instagram.com/treschiceventsfl/",
  facebook: "https://www.facebook.com/TresCHICeventsFL",
  pinterest: "https://www.pinterest.com/TresChicFL/",
  youtube: "https://www.youtube.com/@treschiceventplanningdesig4523",
  regionsLine: "Miami · Fort Lauderdale · Coral Gables · Boca Raton · Worldwide",
  replyPromise: "Usually a reply within one business day.",
};

export type NavItem = { label: string; to: string };

/** Header order, approved with Mariane. Start Planning renders as the button. */
export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Meet Mariane", to: "/mariane" },
  { label: "The Experience", to: "/the-experience" },
  { label: "Weddings", to: "/weddings" },
  { label: "Events", to: "/celebrations" },
  { label: "Gallery", to: "/celebrations-we-love" },
];

/**
 * Secondary links. Multicultural and destination weddings live inside the
 * Weddings page rather than the header, so they surface here and in the footer.
 */
export const utilityNav: NavItem[] = [
  { label: "Multicultural & Fusion", to: "/multicultural-weddings" },
  { label: "Destination Weddings", to: "/destination-weddings" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQs", to: "/faq" },
];
