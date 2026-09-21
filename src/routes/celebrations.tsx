import { createFileRoute } from '@tanstack/react-router'
import { CelebrationShowcase } from "@/components/sections/celebrations/CelebrationShowcase";
import { EventServices } from "@/components/sections/celebrations/EventServices";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/ui/PageHero";
import { media } from "@/data/media";

export const Route = createFileRoute("/celebrations")({
  head: () => ({
    meta: [
      { title: "Celebrations & Events in Miami | Très CHIC Event Planning" },
      {
        name: "description",
        content:
          "Baby showers, gala awards, and Bar and Bat Mitzvahs, planned with the same care as a wedding.",
      },
      { property: "og:title", content: "Celebrations & Events in Miami | Très CHIC" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "Life's other meaningful moments deserve the same care, from baby showers to corporate galas and Mitzvahs.",
      },
      { property: "og:url", content: "/celebrations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/celebrations" }],
  }),
  component: CelebrationsPage,
});

function CelebrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Beyond the Wedding"
        headline="Life's other meaningful moments deserve the same care."
        body="Baby showers. Gala awards. Bar and Bat Mitzvahs. Milestone birthdays. If it's worth celebrating, it's worth doing well."
        image={media.eventDancefloorGreen}
        imageAlt="Guests watching a performance beside a custom patterned dance floor"
      />

      <CelebrationShowcase />

      <EventServices />

      <ClosingCta headline="What are you celebrating?" />
    </>
  );
}
