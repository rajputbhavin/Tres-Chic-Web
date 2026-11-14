import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  HeartHandshake,
  Layers,
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

const partialPlanningFaqs = [
  {
    question: "What is Partial Wedding Planning?",
    answer:
      "Partial wedding planning is designed for couples who have already secured their venue and want to take an active role in their wedding, while benefiting from seasoned professional guidance, creative design direction, vendor coordination, and complete wedding-day execution.",
  },
  {
    question: "When should we hire a partial wedding planner in Miami?",
    answer:
      "We recommend engaging Très CHIC 6 to 10 months prior to your wedding day, immediately after securing your venue. This gives us ample runway to curate your remaining vendor team, architect your design boards, review contracts, and build your production timeline.",
  },
  {
    question: "What if we already have some vendors contracted?",
    answer:
      "That is the natural foundation of Partial Planning! We review all contracted vendor proposals and agreements, align with your team, manage ongoing communications and schedules, and recommend top-tier professionals for any remaining vendor categories.",
  },
  {
    question: "How does the design and styling support work?",
    answer:
      "Mariane Fahmy collaborates with you to refine your aesthetic. We develop bespoke design inspiration boards and provide hands-on guidance for floral design, specialty linens, tabletop rentals, stationery, and ambient lighting, attending design consultations to ensure seamless visual cohesion.",
  },
  {
    question: "What does the $7,500–$9,500+ investment cover?",
    answer:
      "Our partial planning investment typically ranges from $7,500 to $9,500+. Each proposal is customized based on guest count, event complexity, design scope, venue logistics (e.g. outdoor estates vs. hotel ballrooms), and on-site execution team requirements.",
  },
];

export const Route = createFileRoute("/partial-planning")({
  head: () => ({
    meta: [
      {
        title:
          "Partial Wedding Planning Miami | Design & Vendor Coordination · Très CHIC",
      },
      {
        name: "description",
        content:
          "Partial wedding planning in Miami & South Florida ($7,500–$9,500+). Secured your venue? Get expert design direction, curated vendor coordination & flawless day-of execution.",
      },
      {
        name: "keywords",
        content:
          "partial wedding planning miami, partial wedding planner miami, partial planning wedding cost miami, wedding design and coordination miami, south florida partial wedding planner, mariane fahmy partial planning",
      },
      {
        property: "og:title",
        content:
          "Partial Wedding Planning Miami | Design & Vendor Coordination · Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Your vision, refined. Your celebration, beautifully brought to life. Partial wedding planning and curated design across Miami and South Florida ($7,500–$9,500+).",
      },
      {
        property: "og:url",
        content: "https://treschiceventplanning.com/partial-planning",
      },
      {
        property: "og:image",
        content: media.gardenReceptionTallFlorals,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Partial Wedding Planning Miami | Design & Vendor Coordination · Très CHIC",
      },
      {
        name: "twitter:description",
        content:
          "Partial wedding planning in Miami & South Florida ($7,500–$9,500+). Expert guidance, personalized design support & master execution led by Mariane Fahmy.",
      },
      {
        name: "twitter:image",
        content: media.gardenReceptionTallFlorals,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://treschiceventplanning.com/partial-planning",
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
              "@id": "https://treschiceventplanning.com/partial-planning#service",
              name: "Partial Wedding Planning & Design Miami",
              serviceType: "Partial Wedding Planning",
              description:
                "Professional planning guidance, personalized design inspiration, vendor coordination, and wedding-day execution for couples who have secured their venue.",
              url: "https://treschiceventplanning.com/partial-planning",
              provider: {
                "@type": "LocalBusiness",
                name: "Très CHIC Event Planning & Design",
                telephone: "(954) 517-1818",
                url: "https://treschiceventplanning.com",
                image: media.gardenReceptionTallFlorals,
                priceRange: "$$$",
              },
              areaServed: [
                { "@type": "City", name: "Miami" },
                { "@type": "City", name: "Miami Beach" },
                { "@type": "City", name: "Coral Gables" },
                { "@type": "City", name: "Coconut Grove" },
                { "@type": "AdministrativeArea", name: "South Florida" },
              ],
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "7500",
                highPrice: "9500",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description:
                  "Investment range: $7,500–$9,500+. Customized based on guest count, design requirements, and on-site logistics.",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/partial-planning#faq",
              mainEntity: partialPlanningFaqs.map((faq) => ({
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
                  name: "Partial Planning",
                  item: "https://treschiceventplanning.com/partial-planning",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: PartialPlanningPage,
});

function PartialPlanningPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="PARTIAL PLANNING · GUIDED LUXURY COLLABORATION"
        seoH1="Partial Wedding Planning in Miami"
        headline="Your vision, refined. Your celebration, beautifully brought to life."
        body="Designed for couples who have secured their venue and want to take the lead in planning while benefiting from professional guidance, personalized design support, and ongoing vendor coordination."
        image={media.gardenReceptionTallFlorals}
        imageAlt="Elegant garden wedding reception in Miami with refined florals and tabletop design by Très CHIC"
        fullScreen
      />

      {/* Philosophy & Narrative Overview Strip */}
      <Section tone="ivory" className="py-20 md:py-28 border-b border-border/60">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>The Guided Planning Experience</Eyebrow>
            <h2 className="display-md mt-4 text-balance text-emerald">
              Refined Direction. Seamless Coordination. Flawless Execution.
            </h2>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              From curated vendor recommendations and wedding design to logistical planning and
              wedding-day execution, Très CHIC brings the details together to create a cohesive,
              thoughtfully planned celebration—allowing you to enjoy the journey and be fully
              present on your wedding day.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs uppercase tracking-widest text-muted-foreground border-t border-border/60 pt-10"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-gold" />
              <span>Investment: $7,500–$9,500+</span>
            </div>
            <span className="text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-gold" />
              <span>6–10 Month Guided Partnership</span>
            </div>
            <span className="text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold" />
              <span>Venue-Secured Couples</span>
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
              What's Included in Partial Planning
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Every detail is shaped with artistic direction and rigorous logistics. Here is
              exactly what our partial planning partnership covers:
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
                    <span>
                      Professional planning guidance and support throughout the planning process
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Personalized vendor recommendations aligned with your style, priorities, and budget
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Review of selected vendor proposals and contracts with professional recommendations
                    </span>
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
                  Vendor Coordination & Management
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Ongoing communication and coordination with contracted vendors throughout planning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Management of vendor planning details, schedules, and logistical requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Timeline alignment, load-in coordination, and vendor insurance confirmations
                    </span>
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
                    <span>
                      Personalized wedding design inspiration boards and creative direction
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Guidance on floral design, rentals, linens, tabletop details, and décor selections
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Design vendor consultations and coordination to create a cohesive aesthetic
                    </span>
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
                    <span>
                      Venue walkthroughs, floor plan assistance, and event logistics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Comprehensive wedding-day timeline and production schedule development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Coordination of ceremony flow, vendor schedules, setup, and breakdown
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Final vendor confirmations and coordination of event details
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md md:col-span-2 lg:col-span-2">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Award className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 05
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Wedding-Day Coordination & Execution
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                      <span>Ceremony rehearsal coordination and management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                      <span>
                        Complete wedding-day oversight, including vendor setup, ceremony and reception flow, formalities, and breakdown
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                      <span>
                        Lead planner and dedicated assistant team managing on-site production from first load-in to departure
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                      <span>
                        Discreet dispute and timeline mitigation so you remain completely relaxed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Investment & Transparent Pricing Spotlight */}
      <Section tone="ivory" className="py-20 md:py-28 border-y border-border/60">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xs border border-gold/40 bg-card shadow-xl">
            <div className="grid md:grid-cols-12">
              {/* Left Column: Pricing Callout */}
              <div className="p-8 md:p-12 md:col-span-5 bg-emerald text-white flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/15 px-3 py-1 rounded-xs border border-gold/30">
                    Investment Tier
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-white mt-4">
                    Partial Planning
                  </h3>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest text-emerald-100">
                      Investment Range
                    </p>
                    <p className="font-display text-4xl md:text-5xl text-gold mt-1">
                      $7,500–$9,500<span className="text-2xl text-emerald-200">+</span>
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-emerald-100/90 leading-relaxed font-light">
                    Every proposal is customized based on guest count, event complexity, design
                    requirements, venue logistics, and on-site execution needs.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-emerald-700/60 flex items-center gap-3 text-xs text-emerald-200">
                  <ShieldCheck className="size-4 text-gold shrink-0" />
                  <span>Transparent contracts with zero hidden vendor markups</span>
                </div>
              </div>

              {/* Right Column: Custom Proposal Details */}
              <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-between">
                <div>
                  <Eyebrow>Bespoke Proposal Architecture</Eyebrow>
                  <h4 className="font-display text-2xl text-emerald mt-2">
                    What Shapes Your Custom Proposal?
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    No two celebrations in Miami are identical. We tailor our staffing and scope
                    around your venue's unique layout and your celebration's scale:
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Guest Count & Tabletop Scale</p>
                        <p className="text-xs text-muted-foreground">
                          Directly influences the design hours, floor plans, and assistant coordinators needed.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Venue Infrastructure & Curfews</p>
                        <p className="text-xs text-muted-foreground">
                          Historic estates vs. turnkey resort ballrooms dictate load-in logistics and vendor management.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Design Complexity & Custom Rentals</p>
                        <p className="text-xs text-muted-foreground">
                          Custom lighting installations, lounge vignettes, and specialized tabletop rentals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground font-light text-center sm:text-left">
                    Dates are strictly limited each wedding season to preserve executive attention.
                  </span>
                  <CtaButton to="/start-planning">
                    Inquire for Your Date
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who Partial Planning Is Designed For */}
      <Section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>Tailored Alignment</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              Is Partial Planning Right for You?
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Partial planning bridges the gap between couples who want to stay actively involved
              and those who need executive oversight, artistic cohesion, and complete day-of peace of mind.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xs border border-border/80 bg-card p-8 shadow-xs">
              <div className="inline-flex size-10 items-center justify-center rounded-xs bg-gold/15 text-gold mb-5">
                <MapPin className="size-5" />
              </div>
              <h3 className="font-display text-xl text-emerald mb-2">
                Secured Your Venue
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You've already found and contracted your dream Miami venue (hotel ballroom, private
                estate, or waterfront lawn) and need an expert to carry the vision across the finish line.
              </p>
            </div>

            <div className="rounded-xs border border-border/80 bg-card p-8 shadow-xs">
              <div className="inline-flex size-10 items-center justify-center rounded-xs bg-gold/15 text-gold mb-5">
                <Palette className="size-5" />
              </div>
              <h3 className="font-display text-xl text-emerald mb-2">
                Seeking Design Cohesion
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You have vision boards and ideas, but want a seasoned creative director to curate
                linens, tabletop settings, florals, and lighting into one cohesive luxury aesthetic.
              </p>
            </div>

            <div className="rounded-xs border border-border/80 bg-card p-8 shadow-xs">
              <div className="inline-flex size-10 items-center justify-center rounded-xs bg-gold/15 text-gold mb-5">
                <HeartHandshake className="size-5" />
              </div>
              <h3 className="font-display text-xl text-emerald mb-2">
                Hands-On With Support
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You enjoy making choices and communicating, but want vendor vetting, contract reviews,
                minute-by-minute production schedules, and flawless day-of management.
              </p>
            </div>
          </div>

          {/* Comparison Callout */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Not sure which service fits? Explore our{" "}
              <Link
                to="/full-planning"
                className="font-semibold text-emerald underline decoration-gold underline-offset-4 hover:text-gold transition-colors"
              >
                Full-Service Planning
              </Link>{" "}
              or compare all tiers on our{" "}
              <Link
                to="/weddings"
                className="font-semibold text-emerald underline decoration-gold underline-offset-4 hover:text-gold transition-colors"
              >
                Weddings Overview Page
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Interactive FAQ Accordion */}
      <Section tone="ivory" className="py-24 md:py-32 border-t border-border/60">
        <div className="mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Got Questions?</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Everything you need to know about partnering with Très CHIC for partial wedding
              planning in Miami and South Florida.
            </p>
          </div>

          <FaqAccordion items={partialPlanningFaqs} />
        </div>
      </Section>

      {/* Closing CTA */}
      <ClosingCta
        headline="Let's refine your vision together."
        body="Tell us about your secured venue, wedding date, and aesthetic ideas. We will prepare a personalized proposal tailored specifically to your celebration."
        tone="ivory"
      />
    </>
  );
}

