import { createFileRoute } from "@tanstack/react-router";

import { MarianeOffDuty } from "@/components/sections/mariane/MarianeOffDuty";
import { MarianeStory } from "@/components/sections/mariane/MarianeStory";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/ui/PageHero";
import { media } from "@/data/media";

export const Route = createFileRoute("/mariane")({
  head: () => ({
    meta: [
      { title: "Meet Mariane Fahmy | Founder, Très CHIC Event Planning & Design" },
      {
        name: "description",
        content:
          "Mariane Fahmy spent her own wedding day managing it instead of living it. That is why Très CHIC exists, and why you should never have to run your own celebration.",
      },
      { property: "og:title", content: "Meet Mariane Fahmy | Très CHIC Event Planning & Design" },
      {
        property: "og:description",
        content:
          "Twenty years of corporate operations, a lifetime of noticing beauty, and one wedding day that changed how she plans every celebration since.",
      },
      { property: "og:url", content: "/mariane" },
    ],
    links: [{ rel: "canonical", href: "/mariane" }],
  }),
  component: MarianePage,
});

function MarianePage() {
  return (
    <>
<PageHero
        eyebrow="Meet the Founder"
        headline="I used to be the bride who couldn't stop being the planner."
        body="That day changed how I think about every celebration I've planned since."
        image={media.tentedBabysbreathReception}
        imageAlt="A tented reception filled with baby's breath and candlelight"
        overlay
      />

      <MarianeStory />

      <MarianeOffDuty />

      <ClosingCta
        headline="Let's talk about your celebration."
        body="Tell me a little about what you're envisioning, and I'll follow up personally."
      />
    </>
  );
}
