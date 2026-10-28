import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { ServiceTierSection } from "@/components/sections/weddings/ServiceTierSection";
import { WeddingsSpecialties } from "@/components/sections/weddings/WeddingsSpecialties";
import { PageHero } from "@/components/ui/PageHero";
import { media } from "@/data/media";
import { services } from "@/data/services";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      {
        title:
          "Wedding Planner in Miami | Luxury Wedding Design South Florida | Très CHIC",
      },
      {
        name: "description",
        content:
          "Top luxury wedding planner in Miami and South Florida. Bespoke full-service planning, partial planning, and design for Vizcaya, estate, and multicultural celebrations.",
      },
      {
        name: "keywords",
        content:
          "wedding planner in miami, luxury wedding planner miami, south florida wedding planner, vizcaya wedding planner, miami wedding designer, multicultural wedding planner miami, biltmore wedding planner, wedding coordinator miami",
      },
      {
        property: "og:title",
        content:
          "Wedding Planner in Miami | Luxury Wedding Design South Florida | Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Top luxury wedding planner in Miami and South Florida. Bespoke full-service planning, partial planning, and design for Vizcaya, estate, and multicultural celebrations.",
      },
      { property: "og:url", content: "/weddings" },
    ],
    links: [{ rel: "canonical", href: "/weddings" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://treschiceventplanning.com/weddings#service",
              name: "Luxury Wedding Planning & Design in Miami",
              serviceType: "Wedding Planner in Miami",
              description:
                "Full-service wedding planning, day-of coordination, and artistic design for elevated celebrations in Miami and South Florida.",
              provider: {
                "@type": "LocalBusiness",
                name: "Très CHIC Event Planning & Design",
                telephone: "(954) 517-1818",
                url: "https://treschiceventplanning.com",
              },
              areaServed: [
                { "@type": "City", name: "Miami" },
                { "@type": "City", name: "Coral Gables" },
                { "@type": "City", name: "Coconut Grove" },
                { "@type": "City", name: "Miami Beach" },
                { "@type": "AdministrativeArea", name: "South Florida" },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/weddings#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why hire Très CHIC as your wedding planner in Miami?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Très CHIC and founder Mariane Fahmy bring years of South Florida mastery, orchestrating elevated, culturally authentic, and luxury weddings at iconic venues like Vizcaya Museum & Gardens, The Biltmore, and private waterfront estates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What wedding planning packages do you offer in Miami?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer Full-Service Planning & Design, Partial Planning & Design, and Month-Of Coordination, each tailored to how much involvement the couple desires.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you specialize in multicultural and fusion weddings in Miami?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Très CHIC is acclaimed across South Florida for executing South Asian, Middle Eastern (Zaffa & Dabke), Jewish (Chuppah & Horah), and multi-day interfaith celebrations with deep cultural authenticity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the typical investment for a wedding planner in Miami?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our bespoke wedding planning and design investments are tailored based on guest count, multi-day complexity, venue logistics, and required scope. Contact us for a personalized consultation.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wedding Planning & Design"
        seoH1="Wedding Planner in Miami & Luxury Wedding Design South Florida"
        headline="Full and partial planning, design and coordination, built around how much you actually want to hold."
        body="However involved you want to be, the outcome is the same: a wedding that feels entirely yours, and a day you're actually present for."
        image={media.weddingHero}
        imageAlt="Bride and groom smiling at their sweetheart table during toasts surrounded by guests"
        fullScreen
      />

      <div className="flex flex-col">
        {services.map((service, i) => (
          <ServiceTierSection key={service.slug} service={service} index={i} />
        ))}
      </div>

      <WeddingsSpecialties />

      {/* Crawler-Only Hidden SEO Footprint — Individual Exact-Match H2 Keywords */}
      <div className="sr-only" aria-hidden="false">
        <h2>Best Wedding Planner in Miami</h2>
        <h2>Luxury Wedding Planner in Miami</h2>
        <h2>Wedding Planner Miami FL</h2>
        <h2>Wedding Planner Miami Beach</h2>
        <h2>Best Wedding Planner in Miami Beach</h2>
        <h2>Luxury Wedding Planner Miami Beach</h2>
        <h2>Destination Wedding Planner Miami Beach</h2>
        <h2>Beach Wedding Planner Miami Beach</h2>
        <h2>Day of Wedding Coordinator Miami Beach</h2>
        <h2>Wedding Decorator Miami Beach</h2>
        <h2>Oceanfront Wedding Planner Miami Beach</h2>
        <h2>Best Wedding Planner in Florida</h2>
        <h2>Luxury Wedding Planner in Florida</h2>
        <h2>Wedding Planner South Florida</h2>
        <h2>Day of Wedding Coordinator in Florida</h2>
        <h2>Full Service Wedding Planner Florida</h2>
        <h2>Wedding Decorator in Florida</h2>
        <h2>Wedding Design and Decor South Florida</h2>
        <h2>Destination Wedding Planner Florida</h2>
        <h2>Beach Wedding Planner in Florida</h2>
        <h2>Indian Wedding Planner in Florida</h2>
        <h2>Nigerian Wedding Planner South Florida</h2>
        <h2>Wedding Floral Designer South Florida</h2>
        <h2>Wedding Planning Packages Florida</h2>
        <h2>Best Wedding Coordinator South Florida</h2>
        <p>
          Vizcaya Museum & Gardens · The Biltmore Coral Gables · Faena Miami Beach · Four Seasons Surfside · Fisher Island Club · The Breakers Palm Beach.
          Full planning, bespoke event design, rehearsal dinner coordination, and cultural wedding management for local and destination couples across Miami-Dade, Broward, and Palm Beach.
        </p>
      </div>

      <ClosingCta
        headline="Not sure which fits? That's exactly what the first conversation is for."
        tone="ivory"
      />
    </>
  );
}
