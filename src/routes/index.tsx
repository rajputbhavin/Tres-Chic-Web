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
      { title: "Miami Wedding Planner & Designer | Très CHIC Event Planning" },
      {
        name: "description",
        content:
          "Elevated, culturally rich weddings in Miami and South Florida, planned and designed start to finish. 5.0 stars on Google. Book a free consultation.",
      },
      {
        property: "og:title",
        content: "Miami Wedding Planner & Designer | Très CHIC Event Planning",
      },
      {
        property: "og:description",
        content:
          "Elevated, culturally rich weddings in Miami and South Florida, planned and designed start to finish. 5.0 stars on Google. Book a free consultation.",
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
