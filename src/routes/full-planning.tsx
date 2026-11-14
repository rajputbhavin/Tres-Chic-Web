import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  HeartHandshake,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";
import { site } from "@/data/site";

const fullPlanningFaqs = [
  {
    question: "What exactly is included in Full-Service Wedding Planning?",
    answer:
      "Full-Service Planning is our most comprehensive partnership. From your initial creative vision and budget architecture to venue scouting, curated vendor negotiations, bespoke floral and tabletop design, minute-by-minute master production schedules, and complete wedding-day execution, Très CHIC leads every single detail so you are only ever asked about the choices that bring you joy.",
  },
  {
    question: "When should we hire a full-service wedding planner in Miami?",
    answer:
      "We recommend engaging Très CHIC 12 to 18 months prior to your desired date, ideally before booking your venue. We audit venue contracts, uncover hidden infrastructural costs (load-in curfews, power needs, tent permitting), and ensure your venue aligns seamlessly with your guest count and design vision.",
  },
  {
    question: "How do you handle multicultural and multi-day celebrations?",
    answer:
      "Mariane Fahmy and the Très CHIC team specialize in complex multicultural celebrations. Whether coordinating multi-day South Asian ceremonies (Baraat, Sangeet, Mandap), traditional Middle Eastern Zaffa entrances, Jewish rituals, or fusion interfaith celebrations, we honor every sacred family custom with dignity, authentic vendors, and flawless timing.",
  },
  {
    question: "Can we book full planning if we live out of state or abroad?",
    answer:
      "Yes, over 60% of our couples live outside Florida or internationally. We provide a white-glove remote planning journey complete with collaborative digital planning suites, virtual 3D venue walkthroughs, curated video tastings, and concentrated in-person planning weekend itineraries when you travel to Miami.",
  },
  {
    question: "What does the 'Starting at $12,500' investment cover?",
    answer:
      "Our full-service investment starts at $12,500 for single-day luxury celebrations. Every proposal is custom-tailored based on your guest count, event complexity, venue logistics (e.g. historic estates like Vizcaya vs. luxury ballrooms), number of event days, and on-site staffing requirements.",
  },
];

export const Route = createFileRoute("/full-planning")({
  head: () => ({
    meta: [
      {
        title:
          "Full-Service Wedding Planning Miami | Bespoke Luxury Design · Très CHIC",
      },
      {
        name: "description",
        content:
          "Comprehensive full-service wedding planning in Miami & South Florida starting at $12,500. Bespoke design, budget management, curated vendors & flawless coordination by Mariane Fahmy.",
      },
      {
        name: "keywords",
        content:
          "full service wedding planner miami, full wedding planning miami, luxury wedding planner miami cost, wedding planning packages miami, full service wedding design south florida, bespoke wedding planner miami, mariane fahmy full planning",
      },
      {
        property: "og:title",
        content:
          "Full-Service Wedding Planning Miami | Bespoke Luxury Design · Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Every detail, thoughtfully planned. Your celebration, beautifully brought to life. Full-service wedding planning and bespoke design across Miami and South Florida starting at $12,500.",
      },
      {
        property: "og:url",
        content: "https://treschiceventplanning.com/full-planning",
      },
      {
        property: "og:image",
        content: media.fullServicePlanning,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Full-Service Wedding Planning Miami | Bespoke Luxury Design · Très CHIC",
      },
      {
        name: "twitter:description",
        content:
          "Comprehensive full-service luxury wedding planning in Miami & South Florida starting at $12,500. Led by Mariane Fahmy.",
      },
      {
        name: "twitter:image",
        content: media.fullServicePlanning,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://treschiceventplanning.com/full-planning",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Service", "WeddingService"],
              "@id": "https://treschiceventplanning.com/full-planning#service",
              name: "Full-Service Wedding Planning & Design Miami",
              serviceType: "Full-Service Wedding Planning",
              description:
                "Comprehensive white-glove wedding planning, budget architecture, vendor curation, bespoke design, and complete production across Miami and South Florida.",
              url: "https://treschiceventplanning.com/full-planning",
              provider: {
                "@type": "LocalBusiness",
                name: "Très CHIC Event Planning & Design",
                telephone: "(954) 517-1818",
                url: "https://treschiceventplanning.com",
                image: media.fullServicePlanning,
                priceRange: "$$$$",
              },
              areaServed: [
                { "@type": "City", name: "Miami" },
                { "@type": "City", name: "Miami Beach" },
                { "@type": "City", name: "Coral Gables" },
                { "@type": "City", name: "Coconut Grove" },
                { "@type": "AdministrativeArea", name: "South Florida" },
              ],
              offers: {
                "@type": "Offer",
                price: "12500",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description:
                  "Starting at $12,500. Custom proposal tailored to guest count, venue logistics, and production complexity.",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/full-planning#faq",
              mainEntity: fullPlanningFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://treschiceventplanning.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Weddings",
                  item: "https://treschiceventplanning.com/weddings",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Full Planning",
                  item: "https://treschiceventplanning.com/full-planning",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: FullPlanningPage,
});

function FullPlanningPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="FULL PLANNING · BESPOKE LUXURY SERVICE"
        seoH1="Full-Service Wedding Planning in Miami"
        headline="Every detail, thoughtfully planned. Your celebration, beautifully brought to life."
        body="Designed for busy couples and those planning sophisticated, multicultural, multi-day, or destination weddings who want expert guidance and comprehensive support from beginning to end."
        image={media.fullServicePlanning}
        imageAlt="Grand full-service wedding reception in Miami designed and produced by Très CHIC"
        fullScreen
      />

      {/* Philosophy & Narrative Overview Strip */}
      <Section tone="ivory" className="py-20 md:py-28 border-b border-border/60">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>The Très CHIC Standard</Eyebrow>
            <h2 className="display-md mt-4 text-balance text-emerald">
              Unflappable Logistics. Artful Design. Complete Peace of Mind.
            </h2>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              From initial planning and creative design to vendor management, logistics, and
              wedding-day execution, Très CHIC thoughtfully manages every element of your
              celebration, allowing you to enjoy the planning journey and be fully present on your
              wedding day.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs uppercase tracking-widest text-muted-foreground border-t border-border/60 pt-10">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-gold" />
              <span>Starting at $12,500</span>
            </div>
            <span className="text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-gold" />
              <span>12–18 Month Full Concierge</span>
            </div>
            <span className="text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold" />
              <span>20+ Years Executive Operations</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What's Included - 5 Architectural Scope Pillars */}
      <Section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>Comprehensive Scope of Work</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              What's Included in Full Planning
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Every stage of your wedding is orchestrated with executive precision and artistic
              distinction. Here is exactly what our comprehensive partnership covers:
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Pillar 1 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Compass className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 01
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Personalized Planning & Guidance
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Comprehensive planning guidance, ongoing communication, and customized planning checklist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Wedding budget development, management, and vendor payment tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Venue search, selection, and contract negotiation, as needed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Users className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 02
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Vendor Curation & Management
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Curated vendor recommendations, selection, and contract negotiations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Vendor meeting coordination, communication, and ongoing management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Insurance verification, load-in permit compliance, and fee audits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Palette className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 03
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Wedding Design & Styling
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Personalized wedding design concept, inspiration boards, and creative direction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Guidance on floral design, rentals, linens, tabletop details, stationery, and décor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Design vendor coordination and oversight to ensure a cohesive aesthetic</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Clock className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 04
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Logistics & Production Planning
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Venue walkthroughs, floor plan coordination, and event logistics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Coordination of guest logistics, multi-day celebrations, and cultural traditions, as applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Comprehensive wedding-day timelines, production schedules, and vendor logistics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Final vendor confirmations and coordination of all event details</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md md:col-span-2 lg:col-span-2">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <HeartHandshake className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 05
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Wedding-Day Coordination & Execution
                </h3>
                <ul className="grid gap-3.5 md:grid-cols-2 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Ceremony rehearsal coordination and management the day prior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Complete wedding-day oversight from early morning vendor load-in to midnight strike</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Ceremony, cocktail, and reception flow management, cueing musicians & formalities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Dedicated lead luxury planner and assistants on-site throughout your celebration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Investment Spotlight Card */}
      <Section tone="ivory" className="py-20 md:py-28 border-y border-border/70">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xs border border-gold/40 bg-card shadow-xl p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <span className="eyebrow text-gold text-xs tracking-widest uppercase">
                  Transparent Luxury Investment
                </span>
                <h2 className="display-md mt-2 text-emerald">
                  Investment Starting at $12,500
                </h2>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
                  Each proposal is customized based on guest count, event complexity, venue logistics,
                  planning requirements, and on-site execution needs.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                    <Award className="size-4 text-gold shrink-0" />
                    <span>100% White-Glove Concierge from Day One</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                    <MapPin className="size-4 text-gold shrink-0" />
                    <span>Miami, South Florida & Destination Celebrations Worldwide</span>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-soft/50 rounded-xs border border-border/70 p-8 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-xl text-emerald mb-2">
                    Begin with a Conversation
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connect directly with Mariane Fahmy to discuss your date, your venue ideas, and your
                    vision. We prepare your bespoke proposal within 48 business hours.
                  </p>
                </div>
                <div className="mt-8">
                  <CtaButton
                    to="/start-planning"
                    className="w-full justify-center"
                  >
                    Request Your Custom Proposal
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who This Service Is Designed For */}
      <Section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Ideal For</Eyebrow>
            <h2 className="display-md mt-2 text-emerald">Who Full Planning Is Designed For</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-xs border border-border/70 bg-card">
              <h3 className="font-display text-xl text-emerald mb-3">
                Busy Couples & Executives
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You lead demanding professional lives. You want an experienced partner carrying the
                research, contract negotiations, and day-to-day coordination, so wedding planning
                never becomes a burdensome second job.
              </p>
            </div>

            <div className="p-8 rounded-xs border border-border/70 bg-card">
              <h3 className="font-display text-xl text-emerald mb-3">
                Multicultural & Multi-Day
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your celebration unites distinct cultural backgrounds, multiple ceremonies (Mehendi,
                Zaffa, Chuppah), and complex logistical layers where family traditions must be honored
                flawlessly.
              </p>
            </div>

            <div className="p-8 rounded-xs border border-border/70 bg-card">
              <h3 className="font-display text-xl text-emerald mb-3">
                Destination & Estate Weddings
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You are planning from outside Florida or bringing guests to iconic South Florida
                historic estates like Vizcaya or The Biltmore that require strict permitting and
                high-stakes operations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section tone="soft" className="py-20 md:py-28 border-t border-border/70">
        <div className="mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="display-md mt-2 text-emerald">Full Planning Details & Clarifications</h2>
          </div>

          <FaqAccordion items={fullPlanningFaqs} />
        </div>
      </Section>

      {/* Closing CTA */}
      <ClosingCta
        headline="Every detail, thoughtfully planned. Your celebration, beautifully brought to life."
        body="Let's begin with a personal conversation about your date, venue, and vision."
        buttonText="Schedule Your Consultation"
        buttonLink="/start-planning"
      />
    </>
  );
}

