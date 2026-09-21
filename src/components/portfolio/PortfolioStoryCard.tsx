import { Link } from "@tanstack/react-router";

import type { PortfolioStory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Editorial card linking into a single celebration story. */
export function PortfolioStoryCard({ story }: { story: PortfolioStory }) {
  return (
    <Link
      to="/celebrations-we-love"
      className="group flex flex-col"
    >
      <h3 className="order-1 display-md text-emerald md:order-2 md:mt-4">{story.title}</h3>
      <div className="relative order-2 mt-5 overflow-hidden md:order-1 md:mt-0">
        <img
          src={story.image.src}
          alt={story.image.alt}
          className={cn(
            "w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]",
            story.gridRatio,
          )}
        />
      </div>
      <div className="order-3">
        <p className="caption mt-2">{story.location}</p>
        <p className="mt-3 text-sm text-muted-foreground">{story.hook}</p>
      </div>
    </Link>
  );
}
