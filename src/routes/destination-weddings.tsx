import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/ui/Reveal";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";

export const Route = createFileRoute("/destination-weddings")({
  head: () => ({
    meta: [
      { title: "Destination Wedding Planner | South Florida & Worldwide | Très CHIC" },
      {
        name: "description",
        content:
          "Destination wedding planning in Miami, Fort Lauderdale, Coral Gables and Boca Raton, or anywhere your celebration takes us. Fully remote planning, same level of care.",
      },
      {
        property: "og:title",
        content: "Destination Wedding Planner | South Florida & Worldwide | Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Flying your whole world into South Florida, or asking Très CHIC to travel with you, the process stays just as organized, just as personal.",
      },
      { property: "og:url", content: "/destination-weddings" },
    ],
    links: [{ rel: "canonical", href: "/destination-weddings" }],
  }),
  component: DestinationPage,
});

function DestinationPage() {
  return (
    <>
      <PageHero
        eyebrow="Destination Weddings"
        headline="Local to South Florida. At home wherever your celebration takes us."
        body="Whether you're flying your whole world into Miami, Fort Lauderdale, Coral Gables or Boca, or asking Très CHIC to travel with you somewhere else entirely, the process stays just as organized, just as personal."
        image={media.destinationHero}
        imageAlt="Bride and groom celebrating together on a pink velvet couch"
        fullScreen
      />

      <Section>
        <div className="grid items-center gap-x-16 gap-y-10 md:grid-cols-2">
          <Reveal className="order-1 self-end">
            <Eyebrow>Why South Florida</Eyebrow>
            <h2 className="display-lg rule-gold mt-5 text-balance text-emerald">
              One of the easiest places in the world to bring everyone together beautifully.
            </h2>
          </Reveal>
          <Reveal className="order-2 md:col-start-2 md:row-span-2 md:row-start-1" delay={150}>
            <img
              src={media.vizcayaVillaEvening}
              alt="The historic Vizcaya villa lit at night with a draped entry and florals"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-3 self-start" delay={200}>
            <p className="mt-8 text-muted-foreground">
              South Florida offers extraordinary venues, a genuinely international guest experience and
              a level of hospitality infrastructure built for exactly this kind of celebration. If your
              family is scattered across the country, or the world, this is one of the easiest places
              to bring everyone together beautifully.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-x-16 gap-y-10 md:grid-cols-2">
          <Reveal className="order-2 md:order-1 md:row-span-2">
            <img
              src={media.tentedLongTable}
              alt="One long banquet table set under a clear tent with candles and low florals"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-1 self-end md:order-2" delay={100}>
            <Eyebrow>How remote planning works</Eyebrow>
            <h2 className="display-lg rule-gold mt-5 text-balance text-emerald">
              Distance changes the communication plan. It never changes the level of care.
            </h2>
          </Reveal>
          <Reveal className="order-3 self-start" delay={200}>
            <p className="mt-8 text-muted-foreground">
              I've coordinated full events for clients I never met in person until the day itself , 
              over calls, video and detailed planning documents that leave nothing to guess.
            </p>
          </Reveal>
        </div>
      </Section>

      <ClosingCta headline="Tell me where, and let's start planning from there." tone="ivory" />
    </>
  );
}
