import { createFileRoute } from "@tanstack/react-router";

import { InquiryAside } from "@/components/sections/start-planning/InquiryAside";
import { InquiryForm } from "@/components/sections/start-planning/InquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";

export const Route = createFileRoute("/start-planning")({
  head: () => ({
    meta: [
      { title: "Start Planning | Très CHIC Event Planning & Design" },
      {
        name: "description",
        content:
          "Tell Mariane about your celebration, date, guest count, traditions and what matters most. She replies personally, usually within one business day.",
      },
      { property: "og:title", content: "Start Planning | Très CHIC Event Planning & Design" },
      {
        property: "og:description",
        content:
          "Share a few details about your wedding or celebration and hear back from Mariane personally.",
      },
      { property: "og:url", content: "/start-planning" },
    ],
    links: [{ rel: "canonical", href: "/start-planning" }],
  }),
  component: StartPlanningPage,
});

function StartPlanningPage() {
  return (
    <>
      <PageHero
        eyebrow="Start Planning"
        headline="Tell me about your celebration."
        body="A few details are enough to begin. I read every inquiry personally and usually reply within one business day."
        image={media.floralDetail}
        imageAlt="A close detail of ivory and blush garden roses"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <Reveal>
            <InquiryForm />
          </Reveal>
          <Reveal delay={150} className="md:border-l md:border-border md:pl-12">
            <InquiryAside />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
