/**
 * Homepage copy, one entry per approved section, in blueprint order.
 * Edit text here; the section components under src/components/sections/home
 * only handle layout and motion.
 */

import { media } from "@/data/media";

export const homeHero = {
headline: "You planned this forever.",
  headlineSecond: "You deserve to live it.",
  body: "Très CHIC designs and executes elevated, culturally rich celebrations, so you experience your wedding instead of managing it.",
  /**
   * Silent, looping 12s clip of a real zaffa entrance, trimmed from Mariane's
   * own footage starting at the 33 second mark.
   * [HERO — REAL WEDDING COUPLE / PURE DESIRE / 16:9]
   */
  video: media.heroLoopVideo,
  poster: media.heroPoster,
  image: media.heroWeddingPartyPalms,
  imageAlt:
    "A bride and groom walking joyfully with their wedding party under palm trees in South Florida",
};

export const homeAcknowledgment = {
  body: "There are a hundred decisions between “we're engaged” and “we're married.” Which traditions matter most. What your parents expect. What you actually want. How to keep your budget working as hard as you do. Whether the day will feel like you, and whether you'll actually get to enjoy it once it arrives.",
  close: "That's the part I take on.",
};

export const homeTwoSides = {
  eyebrow: "Why Très CHIC",
  headline: "Twenty years of operations. A lifetime of noticing beauty.",
  paragraphs: [
    "Before Très CHIC, I spent two decades in corporate leadership, running operations, managing people, solving problems under pressure. Before that, I was the one planning events for friends, family and church, because I couldn't help noticing the details everyone else missed.",
    "I built Très CHIC because I didn't want to choose between the two. My clients get both: the eye that sees the beauty, and the mind that's already three steps ahead on the logistics.",
  ],
  link: { label: "Read my story", to: "/about" },
  portrait: {
    src: media.marianePortrait,
    alt: "Mariane Fahmy, founder of Très CHIC Event Planning & Design",
  },
};

export const homeCulturalExpertise = {
  eyebrow: "Multicultural & Fusion Expertise",
  headline:
    "I don't believe every South Asian wedding, or every Jewish wedding, or every Middle Eastern wedding, should follow the same formula.",
  body: "I listen first. What matters to your family. What matters to theirs. What feels authentic to you as a couple, today, not what a template says it should look like.",
  link: { label: "Explore Weddings", to: "/weddings" },
};

/** Real imagery where it exists; required-but-missing assets are marked. */
export const traditionArt: Record<string, { src?: string; alt?: string; gap?: string }> = {
  "south-asian": {
    src: media.southAsianCeremony,
    alt: "South Asian, Hindu, Sikh & Muslim celebrations",
  },
  jewish: {
    src: media.chuppahCeremony,
    alt: "Jewish weddings & simchas ceremony under chuppah",
  },
  "middle-eastern": {
    src: media.middleEasternWeddings,
    alt: "Middle Eastern wedding celebration with zaffa procession",
  },
  "interfaith-fusion": {
    src: media.interfaithFusionWeddings,
    alt: "Interfaith and fusion wedding celebration",
  },
  "western-destination": {
    src: media.westernDestinationWeddings,
    alt: "Western & destination wedding celebration",
  },
  "multi-day": {
    src: media.multiDayCelebrations,
    alt: "Multi-day, multi-family celebrations",
  },
};

export const homeCrisisStory = {
  eyebrow: "What “flawless execution” actually means",
  headline: "The venue cancelled on day one of a four-day wedding.",
  paragraphs: [
    "Before I told the couple, I found a solution. Within four hours, I'd secured a new venue, coordinated every vendor around it, rerouted the guests and made sure the original venue took responsibility for the cost.",
    "Only then did I bring it to the family, with a plan already in place, not a problem for them to solve. They spent the rest of that week exactly where they should have been: celebrating with the people they love.",
  ],
  /** Rendered at full ivory, the blueprint's emphasis line. */
  emphasis:
    "That's the job. Not just building a beautiful plan, knowing exactly what to do when the plan changes.",
  cta: { label: "See how a real experience comes together", to: "/the-experience" },
  image: {
    src: media.venueCancellation,
    alt: "A newlywed couple walking together up the stone steps at Vizcaya",
  },
};

export const homePortfolioPreview = {
  eyebrow: "Real Celebrations",
  headline: "Every wedding tells its own story. Here are a few.",
  link: { label: "View the Full Portfolio", to: "/celebrations-we-love" },
};

export const homeReviews = {
  eyebrow: "In Their Words",
  headline: "What it feels like to hand it over.",
  testimonials: [
    {
      quote:
        "We had an absolutely amazing experience working with Mariane Fahmy and the Très CHIC team! Every interaction we had with her made us feel confident that our wedding was in great hands. Everything came together beautifully.",
      attribution: "Omar Bashi · Verified Google Review",
    },
    {
      quote:
        "Every detail was thoughtful, intentional, and so perfectly aligned with us that it genuinely felt like she had copy-pasted our dream wedding straight from our brains. Our entire wedding weekend felt like a dream from start to finish.",
      attribution: "Rima & Armaan · Wedding Couple",
    },
    {
      quote:
        "Within days of reviewing our vendor contracts, Mariane spotted multiple discrepancies that had gone unnoticed, saving us thousands of dollars. Her wedding day timeline was a true work of art.",
      attribution: "Sarah & Avrahm Reindorf · Local Guide Review",
    },
    {
      quote:
        "Mariane didn’t just plan our wedding, she understood me. When our plans shifted from an intimate event to a much larger celebration, she handled everything with calm confidence and executed it flawlessly.",
      attribution: "Zoe Giardina · Wedding Client",
    },
    {
      quote:
        "On the day of the wedding, Mariane and her phenomenal team stood by us like family. With their flawless coordinating and organizing, the day felt like a dream!",
      attribution: "Nadra Mabrouk · Multicultural Celebration",
    },
    {
      quote:
        "From start to finish, her attention to detail was impeccable—nothing was overlooked, and every element felt thoughtfully curated. Her level of professionalism made the process smooth and stress-free.",
      attribution: "M. R. · Private Celebration Client",
    },
  ],
  link: { label: "Read More Reviews", to: "/reviews" },
  image: {
    src: media.homeReview,
    alt: "Mariane sharing a joyful moment with a bride and groom at their reception",
  },
};

export const homeFinalCta = {
  headline: "Let's talk about what you're planning.",
  body: "Not a sales call. A real conversation about your celebration, your families and what matters most to you.",
  cta: { label: "Start Planning", to: "/start-planning" },
};
