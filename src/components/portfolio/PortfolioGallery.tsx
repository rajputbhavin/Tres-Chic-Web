import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import type { MediaItem } from "@/data/media";

const INITIAL_BATCH = 24;
const BATCH_SIZE = 24;

/** Masonry gallery of real celebration imagery. */
export function PortfolioGallery({ items }: { items: MediaItem[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);

  // When category changes or items array updates, reset count to initial batch
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH);
  }, [items]);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <div>
      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {visibleItems.map((item, i) => (
          <Reveal key={item.slug} delay={Math.min(i % BATCH_SIZE, 8) * 50} className="break-inside-avoid">
            <figure className="group">
              <div className="overflow-hidden bg-neutral-soft/50">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={i < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="caption mt-3 normal-case tracking-normal">
                {item.caption}
                {item.tradition ? <span className="text-taupe"> · {item.tradition}</span> : null}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <div className="mt-14 flex flex-col items-center justify-center gap-3">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Showing {visibleItems.length} of {items.length} moments
          </p>
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-neutral-soft/60 px-7 py-3 text-xs font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:border-gold hover:bg-neutral-soft active:scale-[0.98]"
          >
            <span>Load More Imagery</span>
            <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>
      )}
    </div>
  );
}
