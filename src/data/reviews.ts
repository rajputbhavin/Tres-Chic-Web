/**
 * Paraphrased review excerpts. Never verbatim-quoted at length, per the
 * blueprint's copyright note. Each still needs Mariane's confirmation before
 * launch; the same rows live in the `reviews` table.
 */
export type Review = {
  excerpt: string;
  attribution: string;
  weddingType?: string;
  platform: string;
};

export const reviews: Review[] = [
  {
    excerpt:
      "Within days of reviewing our vendor contracts, Mariane caught discrepancies no one else had noticed, and renegotiated them, saving us real money without cutting a single corner.",
    attribution: "A Hollywood, Florida couple",
    weddingType: "Wedding",
    platform: "WeddingWire",
  },
  {
    excerpt:
      "Our venue cancelled at the start of a four-day wedding weekend. We only found out after Mariane had already secured a new one, moved every vendor and rerouted our guests. We never had to solve it.",
    attribution: "A four-day wedding weekend",
    weddingType: "Multi-day wedding",
    platform: "WeddingWire",
  },
  {
    excerpt:
      "They described it themselves as a big fat Indian-Italian wedding, a Hindu ceremony, a Catholic ceremony, a reception and an after-party, with guests flying in from everywhere. Mariane held all of it together.",
    attribution: "An Indian-Italian celebration",
    weddingType: "Interfaith & fusion wedding",
    platform: "The Knot",
  },
  {
    excerpt:
      "The thing we did not expect was how calm the day felt. We were not managing anything. We were just there, with our families, in it.",
    attribution: "A South Florida couple",
    weddingType: "Wedding",
    platform: "Google",
  },
];
