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
        "Mariane was amazing! She created a plan and executed it perfectly. Whenever an issue came up she handled it without us knowing. She is assertive and so kind. She really made our vision come to life and eased all our stresses. I 1000% recommend!!!",
      attribution: "Wedding client",
    },
    {
      quote:
        "Mariane planned my family's New Year's Eve party. She was more than any of us could have ever asked for. Every small request was fulfilled within hours. She decorated our backyard so beautifully, I hardly recognized it. She is truly talented at her job and cares so much about her clients. She will always go the extra mile. Absolutely recommend her service for your event.",
      attribution: "Private event client",
    },
    {
      quote:
        "Mariane was amazing! She exceeded our expectations in bringing our Mitzvah vision to life. She is kind, patient, and pays close attention to every detail. She worked within our tight budget and made the room look incredible! It definitely had the wow factor! I highly recommend her team for any event.",
      attribution: "Mitzvah client",
    },
    {
      quote:
        "Mariane was a true joy to work with! I knew from the first call that she would be the one to help make my vision come to life, and my goodness, was I right! She made us feel so heard the entire process and always settled any stress throughout the way for me. Our wedding could not have been more perfect, our dream come true. Mariane and her team ran the show with such attention to detail, grace, and professionalism and I could not be more grateful! I recommend her to ANYONE! She really is the best. We are over the moon.",
      attribution: "Wedding client",
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
