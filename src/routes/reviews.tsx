import { createFileRoute } from "@tanstack/react-router";

import { ReviewsGrid } from "@/components/sections/reviews/ReviewsGrid";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";
import { reviews } from "@/data/reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews | Très CHIC Event Planning & Design" },
      {
        name: "description",
        content:
          "What couples say about working with Mariane Fahmy, contracts caught, venues rescued mid-weekend, and wedding days they were finally present for.",
      },
      { property: "og:title", content: "Client Reviews | Très CHIC Event Planning & Design" },
      {
        property: "og:description",
        content:
          "Reviews from South Florida, multi-day and fusion celebrations planned by Très CHIC.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="In Their Words"
        headline="The same thing, over and over: they were present."
        body="Excerpts are paraphrased summaries of reviews left on WeddingWire, The Knot and Google."
        image={media.ballroomDanceFloor}
        imageAlt="Guests filling a ballroom dance floor under warm uplighting"
      />

      <Section>
        <ReviewsGrid items={reviews} />

        <Reveal className="mt-16 max-w-2xl">
          <Eyebrow>A note on these</Eyebrow>
          <p className="mt-5 text-sm text-muted-foreground">
            These are paraphrased for length and privacy rather than quoted verbatim, and each still
            needs Mariane's confirmation, along with couple names, dates and permission, before
            launch.
          </p>
        </Reveal>
      </Section>

      <ClosingCta headline="We'd love for your day to feel like this too." />
    </>
  );
}
