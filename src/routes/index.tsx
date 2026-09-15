import { createFileRoute } from "@tanstack/react-router";

import { HomeAcknowledgment } from "@/components/sections/home/HomeAcknowledgment";
import { HomeCrisisStory } from "@/components/sections/home/HomeCrisisStory";
import { HomeCulturalExpertise } from "@/components/sections/home/HomeCulturalExpertise";
import { HomeFinalCta } from "@/components/sections/home/HomeFinalCta";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomePortfolioPreview } from "@/components/sections/home/HomePortfolioPreview";
import { HomeReviews } from "@/components/sections/home/HomeReviews";
import { HomeTwoSides } from "@/components/sections/home/HomeTwoSides";
import { PressStrip } from "@/components/sections/shared/PressStrip";
import { homeHero } from "@/data/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Très CHIC Event Planning & Design | Miami Wedding Planner" },
      {
        name: "description",
        content:
          "South Florida and destination wedding planning and design for elevated, culturally rich celebrations, so you experience your wedding instead of managing it.",
      },
      {
        property: "og:title",
        content: "Très CHIC Event Planning & Design | Miami Wedding Planner",
      },
      {
        property: "og:description",
        content:
          "Elevated, culturally rich weddings across South Florida and worldwide. Multicultural, interfaith and multi-day celebrations, planned and executed by Mariane Fahmy.",
      },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content: homeHero.image,
      },
      {
        name: "twitter:image",
        content: homeHero.image,
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

/** Composition only. Each section owns its own markup under components/sections/home. */
function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAcknowledgment />
      <HomeTwoSides />
      <HomeCulturalExpertise />
      <HomeCrisisStory />
      <HomePortfolioPreview />
      <HomeReviews />
      <PressStrip />
      <HomeFinalCta />
    </>
  );
}
