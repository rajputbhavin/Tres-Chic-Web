/** Founder page copy, blueprint "Meet Mariane". */

import { media } from "@/data/media";

export type StoryParagraph = {
  text: string;
  /** Typographic treatment for pull-quote style beats in the story. */
  emphasis?: "display-emerald" | "display-gold" | "foreground";
};

export const marianePortrait = {
  src: media.marianePortrait,
  alt: "Mariane Fahmy, founder and Creative Director of Très CHIC Event Planning & Design",
  caption: "Mariane Fahmy, Founder & Creative Director",
};

export const marianeStory: StoryParagraph[] = [
  {
    text: "I've always noticed the details other people miss. Long before Très CHIC existed, I was the one planning events for friends, family and my church, not because anyone asked, but because I couldn't help it.",
  },
  {
    text: "For twenty years, though, that stayed a hobby. I built a career in corporate leadership instead, eventually becoming an Executive Director. Looking back, that career taught me almost everything I use today, how to lead, how to manage a hundred moving parts at once, how to stay calm when circumstances change without warning, and how to keep a group of very different people moving toward the same goal.",
  },
  { text: "Then I got married.", emphasis: "display-emerald" },
  {
    text: "I planned my own wedding down to the smallest detail, and I hired a coordinator specifically so that when the day came, I could finally stop being the planner and just be the bride.",
  },
  { text: "That's not what happened.", emphasis: "display-gold" },
  {
    text: "Because the execution wasn't handled the way I needed it to be, I spent my own wedding day still managing it, still thinking about the timeline, still watching the details, instead of being present with my husband and the people I love. I knew exactly how much work had gone into that day. I just never got to actually experience it.",
  },
  { text: "That stayed with me." },
  {
    text: "It's the reason Très CHIC exists. Beautiful planning and thoughtful design only get you halfway there. If you have to manage your own wedding when it finally arrives, you lose something you can never get back, the chance to actually be in the moment you spent a year creating.",
  },
  {
    text: "I finally pursued the thing I'd set aside for twenty years. I completed my wedding and event planning certification, and I founded Très CHIC.",
  },
  {
    text: "Today, my work brings together both halves of who I am, the side that sees the beauty, the design, the feeling I want a room to have, and the side that sees the timeline, the vendors, the contingency plans and everything that has to happen so none of that beauty falls apart.",
  },
  {
    text: "I don't want another couple to spend their wedding day managing the celebration they hired me to manage. I want them to experience it. That's not a tagline. It's the whole reason I do this.",
  },
];

export const marianeOffDuty = {
  eyebrow: "Off Duty",
  headline: "Everything I fall in love with eventually shows up in a detail.",
  body: "When I'm not working, you'll find me traveling, discovering new restaurants, or getting lost in a beautiful hotel lobby I'll probably steal ideas from later. I love fashion, interiors and anything that makes me look twice. None of it is unrelated to the work, every trip, every meal, every space I fall in love with eventually shows up in a detail at someone's wedding.",
image: {
    src: media.cockpitCouple,
    alt: "Mariane and her husband in the cockpit of a Delta aircraft at night",
  },
};
