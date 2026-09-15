import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { WeddingProjectCard } from "@/components/sections/weddings/WeddingProjectCard";
import { PageHero } from "@/components/ui/PageHero";
import { media } from "@/data/media";
import { weddingProjects } from "@/data/weddingProjects";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Wedding Planning & Design in Miami | Très CHIC" },
      {
        name: "description",
        content:
          "Full planning, partial planning, month-of coordination and design for South Florida and destination weddings, built around how much you actually want to hold.",
      },
      { property: "og:title", content: "Wedding Planning & Design in Miami | Très CHIC" },
      {
        property: "og:description",
        content:
          "Full and partial planning, wedding week coordination and à la carte design from Très CHIC Event Planning & Design.",
      },
      { property: "og:url", content: "/weddings" },
    ],
    links: [{ rel: "canonical", href: "/weddings" }],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wedding Planning & Design"
        headline="Full and partial planning, design and coordination, built around how much you actually want to hold."
        body="Explore our featured real wedding celebrations across South Florida and beyond, from historic Vizcaya and oceanfront luxury to grand multicultural estates."
        image={media.blushBallroomLongtable}
        imageAlt="A blush and ivory ballroom set with long banquet tables and candlelight"
      />

      <div className="flex flex-col">
        {weddingProjects.map((project, i) => (
          <WeddingProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <ClosingCta
        headline="Ready to design your own unforgettable celebration? Let's talk."
        tone="ivory"
      />
    </>
  );
}
