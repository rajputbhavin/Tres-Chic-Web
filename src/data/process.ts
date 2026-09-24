/** The Très CHIC planning experience: six steps plus the condensed timeline. */
import { media } from "@/data/media";

export type ProcessStep = {
  n: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Discovery & Connection",
    body: "We talk about more than your date and guest count. I want to understand who you are, what matters most to you, your families, your worries and what you want your celebration to feel like. This is where trust starts.",
    image: media.marianePortrait,
    imageAlt: "Mariane in conversation at the start of the planning relationship",
  },
  {
    n: "02",
    title: "Onboarding & Clarity",
    body: "We set the foundation together, priorities, budget direction and a clear plan, so you know exactly where things stand and never feel responsible for figuring it out alone.",
    image: media.invitationSuiteRings,
    imageAlt: "An invitation suite and rings laid out during onboarding",
  },
  {
    n: "03",
    title: "Planning, Design & Curation",
    body: "I guide you through decisions in the right order, not all at once. For multicultural and fusion celebrations especially, I take the time to understand what each tradition means to your families before we build it into the plan.",
    image: media.ballroomSuspendedFlorals,
    imageAlt: "A ballroom with suspended florals taking shape through design",
  },
  {
    n: "04",
    title: "Final Details & Logistics",
    body: "As your date approaches, the plan tightens: timelines confirmed, vendors locked, floor plans finalized, contingencies considered. You should be doing less by now, not more.",
    image: media.finalDetailsLogistics,
    imageAlt: "Bride and groom with vintage car and fountain during wedding day logistics",
  },
  {
    n: "05",
    title: "Wedding Week & Wedding Day",
    body: "My team becomes the eyes, ears and operations center behind the scenes, so if anything changes, my first question is never \u201chow do I tell them there's a problem,\u201d it's \u201chow do we solve it.\u201d",
    image: media.tentedWaterfrontReception,
    imageAlt: "A tented waterfront reception set during wedding week",
  },
  {
    n: "06",
    title: "The Celebration & Beyond",
    body: "You dance. You eat. You hug your parents. You're fully present. Afterward, we wrap up every remaining detail, and I love nothing more than hearing that it exceeded what you imagined.",
    image: media.fireworksCouplePalms,
    imageAlt: "A couple beneath fireworks at the close of the celebration",
  },
];

export const timelineMilestones: string[] = [
  "Discovery",
  "Planning & Design",
  "Final Details",
  "Wedding Week",
  "Celebration",
];

/** Which timeline milestone each of the six steps sits under. */
export const stepMilestoneIndex: number[] = [0, 0, 1, 2, 3, 4];
