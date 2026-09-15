import { Reveal } from "@/components/ui/Reveal";
import type { MediaItem } from "@/data/media";

/** Masonry gallery of real celebration imagery. */
export function PortfolioGallery({ items }: { items: MediaItem[] }) {
  return (
    <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
      {items.map((item, i) => (
        <Reveal key={item.slug} delay={Math.min(i, 8) * 60} className="break-inside-avoid">
          <figure className="group">
            <div className="overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                loading={i < 6 ? "eager" : "lazy"}
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
  );
}
