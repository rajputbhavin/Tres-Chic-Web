import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { ServiceTierSection } from "@/components/sections/weddings/ServiceTierSection";
import { WeddingsSpecialties } from "@/components/sections/weddings/WeddingsSpecialties";
import { PageHero } from "@/components/ui/PageHero";
import { media } from "@/data/media";
import { services } from "@/data/services";

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
        body="However involved you want to be, the outcome is the same: a wedding that feels entirely yours, and a day you're actually present for."
        image={media.weddingHero}
        imageAlt="Bride and groom smiling at their sweetheart table during toasts surrounded by guests"
        fullScreen
      />

      <div className="flex flex-col">
        {services.map((service, i) => (
          <ServiceTierSection key={service.slug} service={service} index={i} />
        ))}
      </div>

      <WeddingsSpecialties />

      <ClosingCta
        headline="Not sure which fits? That's exactly what the first conversation is for."
        tone="ivory"
      />
    </>
  );
}
