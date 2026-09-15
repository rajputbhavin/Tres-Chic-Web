/**
 * Start Planning form definition. Field order, labels, helper text and the
 * success/error messages are the approved blueprint copy.
 */

export const formOptions = {
  celebration: [
    "Wedding",
    "Engagement Party",
    "Shower",
    "Milestone Birthday",
    "Bar or Bat Mitzvah",
    "Vow Renewal",
    "Other",
  ],
  support: [
    "Full Planning",
    "Partial Planning",
    "Month-of Coordination",
    "Design Only",
    "Not Sure Yet, Let's Talk",
  ],
  guests: ["Under 75", "75–150", "150–300", "300+"],
  referral: ["Instagram", "Google", "Referral", "WeddingWire or The Knot", "Other"],
} as const;

export const startPlanningCopy = {
  labels: {
    names: "Your names *",
    email: "Email *",
    phone: "Phone",
    eventDate: "Celebration date",
    dateUndecided: "We haven't set a date yet",
    celebrationType: "Type of celebration",
    supportLevel: "Support you're looking for",
    location: "Location or venue (if known)",
    guestRange: "Estimated guests",
    traditions: "Cultures, faiths or traditions you'd like honored",
    notes: "What matters most to you about this day?",
    referralSource: "How did you find us?",
  },
  placeholders: {
    traditions: "Optional, and welcome",
    select: "Select",
  },
  submit: "Send my inquiry",
  submitting: "Sending…",
  success: {
    heading: "Thank you, it's with me now.",
    body: "I'll be in touch personally, usually within one business day. If your date is close, feel free to call",
  },
  error: "Something went wrong sending that. Please email",
  aside: {
    talkLabel: "Prefer to talk?",
    whereLabel: "Where we work",
    nextLabel: "What happens next",
    nextBody:
      "A reply from Mariane, usually within one business day, followed by a conversation about you, not a sales pitch.",
  },
};
