import { Reveal } from "@/components/ui/Reveal";
import type { Review } from "@/data/reviews";

/** Two-column editorial grid of paraphrased review excerpts. */
export function ReviewsGrid({ items }: { items: Review[] }) {
  return (
    <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
      {items.map((review, i) => (
        <Reveal key={review.excerpt} delay={(i % 2) * 120}>
          <figure className="flex h-full flex-col border-t border-gold pt-8">
            <blockquote className="font-display text-xl leading-snug text-emerald md:text-2xl">
              {review.excerpt}
            </blockquote>
            <figcaption className="mt-auto pt-8 text-sm text-muted-foreground">
              <span className="text-foreground">{review.attribution}</span>
              {review.weddingType ? <> · {review.weddingType}</> : null}
              <span className="caption mt-2 block normal-case tracking-normal">
                via {review.platform}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
