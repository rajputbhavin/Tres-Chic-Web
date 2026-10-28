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
      { title: "Event Planner in Miami | Wedding Planner in Miami | Très CHIC" },
      {
        name: "description",
        content:
          "Top luxury event planner and wedding planner in Miami and South Florida. Elevated, culturally rich weddings and celebrations planned start to finish. Book a free consultation.",
      },
      {
        name: "keywords",
        content:
          "event planner in miami, wedding planner in miami, luxury event planner miami, luxury wedding planner miami, wedding designer miami, south florida event planner, wedding coordinator miami, multicultural wedding planner south florida",
      },
      {
        property: "og:title",
        content: "Event Planner in Miami | Wedding Planner in Miami | Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Top luxury event planner and wedding planner in Miami and South Florida. Elevated, culturally rich weddings and celebrations planned start to finish. Book a free consultation.",
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
    links: [{ rel: "canonical", href: "https://treschiceventplanning.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://treschiceventplanning.com/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is the premier event planner and wedding planner in Miami?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Très CHIC Event Planning & Design, founded by Mariane Fahmy, is recognized as a premier luxury event planner and wedding planner in Miami, specializing in elevated, culturally rich celebrations across South Florida.",
              },
            },
            {
              "@type": "Question",
              name: "What locations in Miami and South Florida does Très CHIC serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve Miami, Coral Gables, Coconut Grove, Brickell, South Beach, Key Biscayne, Sunny Isles, Fort Lauderdale, Palm Beach, Boca Raton, and destination celebrations worldwide.",
              },
            },
            {
              "@type": "Question",
              name: "What wedding and event planning services do you offer in Miami?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We provide full-service luxury wedding planning, partial planning, month-of coordination, bespoke event design, corporate galas, milestone birthdays, Bar Mitzvahs, and specialized multicultural and fusion wedding production.",
              },
            },
            {
              "@type": "Question",
              name: "How can I book a consultation with Très CHIC Event Planning in Miami?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can start planning directly through our website at treschiceventplanning.com/start-planning or call (954) 517-1818. We typically reply within one business day.",
              },
            },
          ],
        }),
      },
    ],
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
