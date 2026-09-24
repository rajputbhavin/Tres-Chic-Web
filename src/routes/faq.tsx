import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import { media } from "@/data/media";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Très CHIC Event Planning & Design" },
      {
        name: "description",
        content:
          "Timelines, pricing, service area, multicultural traditions, remote planning and à la carte support, the questions couples ask Très CHIC most often.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Très CHIC" },
      {
        property: "og:description",
        content:
          "Answers on planning timelines, pricing, destination weddings and multicultural celebrations.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        headline="The things couples ask us most."
        body="If your question isn't here, ask it directly, you'll hear back from Mariane."
        image={media.questionsHero}
        imageAlt="Clear-top tented wedding reception illuminated with bistro lights, checkered dance floor and elegant floral arrangements"
        fullScreen
      />

      <Section>
        <FaqAccordion items={faqs} />
      </Section>

      <ClosingCta headline="Still have a question? Ask Mariane directly." />
    </>
  );
}
