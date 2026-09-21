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
      { title: "Client Reviews & Testimonials | Très CHIC Event Planning & Design" },
      {
        name: "description",
        content:
          "Read verified 5.0-star reviews from real couples and families about working with Mariane Fahmy and Très CHIC Event Planning across South Florida and destination celebrations.",
      },
      { property: "og:title", content: "Client Reviews & Testimonials | Très CHIC Event Planning & Design" },
      {
        property: "og:description",
        content:
          "Verified 5.0-star reviews from South Florida, multi-day, and multicultural fusion celebrations planned by Très CHIC.",
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
        eyebrow="Client Testimonials"
        headline="The same thing, over and over: they were present."
        body="Real experiences from couples and families who trusted Mariane Fahmy and the Très CHIC team with their most meaningful celebrations."
        image={media.ballroomDanceFloor}
        imageAlt="Guests filling a ballroom dance floor under warm uplighting"
      />

      <Section>
        <ReviewsGrid items={reviews} />

        <Reveal className="mt-16 max-w-2xl">
          <Eyebrow>Google Verified Experiences</Eyebrow>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Every review above reflects an authentic celebration planned and executed by Mariane Fahmy
            and the Très CHIC Event Planning & Design team. We are deeply grateful to our couples,
            families, and corporate partners for their trust and lifelong friendship.
          </p>
        </Reveal>
      </Section>

      <ClosingCta headline="We'd love for your day to feel like this too." />
    </>
  );
}
