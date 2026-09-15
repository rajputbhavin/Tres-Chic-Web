import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/ui/PageHero";
import { ExperienceProcessStack } from "@/components/sections/experience/ExperienceProcessStack";
import { media } from "@/data/media";

export const Route = createFileRoute("/the-experience")({
  head: () => ({
    meta: [
      { title: "The Experience | How Très CHIC Plans Your Wedding" },
      {
        name: "description",
        content:
          "Heard. Understood. Guided. Present. The six steps of working with Très CHIC, from the first conversation to the morning after your celebration.",
      },
      { property: "og:title", content: "The Experience | How Très CHIC Plans Your Wedding" },
      {
        property: "og:description",
        content:
          "Exactly what working with Très CHIC looks like, discovery, onboarding, design, final details, wedding week and the celebration itself.",
      },
      { property: "og:url", content: "/the-experience" },
    ],
    links: [{ rel: "canonical", href: "/the-experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work Together"
        headline="Heard. Understood. Guided. Present."
        body="Here's exactly what working with Très CHIC looks like, from our first conversation to the morning after."
        image={media.fireworksCouplePalms}
        imageAlt="A couple beneath fireworks and palm trees at the close of the night"
      />

      <ExperienceProcessStack />

      <ClosingCta headline="Ready to start at Step 1?" />
    </>
  );
}
