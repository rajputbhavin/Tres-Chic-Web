import { createFileRoute } from '@tanstack/react-router'
import { CelebrationShowcase } from "@/components/sections/celebrations/CelebrationShowcase";
import { EventServices } from "@/components/sections/celebrations/EventServices";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/ui/PageHero";
import { media } from "@/data/media";

export const Route = createFileRoute("/celebrations")({
  head: () => ({
    meta: [
      {
        title:
          "Event Planner in Miami | Luxury Celebrations & Galas | Très CHIC",
      },
      {
        name: "description",
        content:
          "Top luxury event planner in Miami and South Florida. From high-end corporate galas and milestone birthdays to baby showers and Bar Mitzvahs, planned with elevated sophistication.",
      },
      {
        name: "keywords",
        content:
          "event planner in miami, luxury event planner miami, event coordinator miami, corporate event planner miami, party planner miami, south florida event designer, gala planner miami, bar mitzvah planner miami",
      },
      {
        property: "og:title",
        content:
          "Event Planner in Miami | Luxury Celebrations & Galas | Très CHIC",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "Top luxury event planner in Miami and South Florida. From high-end corporate galas and milestone birthdays to baby showers and Bar Mitzvahs, planned with elevated sophistication.",
      },
      { property: "og:url", content: "/celebrations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/celebrations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://treschiceventplanning.com/celebrations#service",
              name: "Luxury Event Planning in Miami",
              serviceType: "Event Planner in Miami",
              description:
                "Full-service luxury event planning, styling, and coordination across Miami, Coral Gables, Coconut Grove, Brickell, and South Florida.",
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
                { "@type": "City", name: "Brickell" },
                { "@type": "City", name: "Miami Beach" },
                { "@type": "AdministrativeArea", name: "South Florida" },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/celebrations#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What events does Très CHIC plan as an event planner in Miami?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Très CHIC is a premier event planner in Miami specializing in luxury corporate galas, milestone birthdays, Bar and Bat Mitzvahs, baby showers, engagement soirées, and high-end private celebrations across Miami and South Florida.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where in South Florida do you provide event planning services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide bespoke event planning throughout Miami, Coral Gables, Coconut Grove, Brickell, South Beach, Bal Harbour, Fort Lauderdale, and Palm Beach, as well as private estates and luxury hotels.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Très CHIC coordinate event design, décor, and vendors?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As an experienced Miami event planner, founder Mariane Fahmy curates top-tier florists, lighting designers, caterers, and entertainers, orchestrating the entire event timeline for a flawless guest experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How early should we hire an event planner in Miami for our celebration?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For major milestone galas, Bar Mitzvahs, and large celebrations, we recommend booking 6 to 12 months in advance to secure South Florida's most coveted venues and artisan vendors.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: CelebrationsPage,
});

function CelebrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Beyond the Wedding"
        seoH1="Event Planner in Miami"
        headline="Life's other meaningful moments deserve the same care."
        body="Baby showers. Gala awards. Bar and Bat Mitzvahs. Milestone birthdays. If it's worth celebrating, it's worth doing well."
        image={media.celebrationsHero}
        imageAlt="A lavish celebratory dining setup with glowing candelabras and lush floral centerpieces"
        fullScreen
      />

      <CelebrationShowcase />

      <EventServices />

      {/* Crawler-Only Hidden SEO Footprint — Individual Exact-Match H2 Keywords */}
      <div className="sr-only" aria-hidden="false">
        <h2>Best Event Planner in Miami</h2>
        <h2>Event Planner in Miami</h2>
        <h2>Best Event Planner in Florida</h2>
        <h2>Corporate Event Planner Florida</h2>
        <h2>Corporate Event Planner Miami</h2>
        <h2>Private Party Planner in Florida</h2>
        <h2>Luxury Baby Shower Planner Florida</h2>
        <h2>Quinceanera Planner in Florida</h2>
        <h2>Event Management Company in Florida</h2>
        <h2>Bar Mitzvah Planner South Florida</h2>
        <h2>Private Event Coordinator Miami</h2>
        <h2>Event Decorator in Miami</h2>
        <h2>Luxury Gala Planner Florida</h2>
        <p>
          Serving Miami · Coral Gables · Coconut Grove · Brickell · Miami Beach · Sunny Isles · Key Biscayne · Fort Lauderdale · Palm Beach · Boca Raton.
          Full-service event design, styling & month-of management for baby showers, Mitzvahs, anniversaries, executive dinners, and private estate gatherings.
        </p>
      </div>

      <ClosingCta headline="What are you celebrating?" tone="white" />
    </>
  );
}
