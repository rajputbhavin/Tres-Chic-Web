import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  HeartHandshake,
  MapPin,
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

const weddingCoordinationFaqs = [
  {
    question: "How is Wedding Coordination different from typical 'Day-Of' coordination?",
    answer:
      "True luxury execution cannot happen in a single day. At Très CHIC, coordination begins four months prior to your wedding day. This dedicated runway allows us to thoroughly review all your vendor contracts, conduct detailed venue walkthroughs, uncover logistical gaps, and develop a minute-by-minute master production schedule before wedding week arrives.",
  },
  {
    question: "When does our coordination partnership officially begin?",
    answer:
      "We begin four months before your wedding date with an in-depth kickoff meeting. During this session, we review your completed vendor contracts, vision, priorities, ceremony customs, and guest experience goals to build your comprehensive execution plan.",
  },
  {
    question: "Do you coordinate the ceremony rehearsal?",
    answer:
      "Yes. We lead and coordinate your ceremony rehearsal, orchestrating the wedding party processional, recessional, pacing, and placement in close collaboration with your officiant or ceremony director so everyone feels confident and relaxed.",
  },
  {
    question: "How do you handle vendor logistics and unexpected issues on the day?",
    answer:
      "Beginning four months prior, we take over direct communication with all your contracted vendors, verifying insurance, delivery windows, power requirements, and breakdown schedules. On the wedding day, our team oversees every vendor arrival and quietly mitigates unexpected challenges behind the scenes.",
  },
  {
    question: "What determines the $3,250–$5,500+ investment range?",
    answer:
      "Each proposal is customized based on guest count, event complexity, venue logistics (e.g. multi-space outdoor estates vs. self-contained hotel ballrooms), number of contracted vendors, and the on-site assistant coordination staffing required for flawless execution.",
  },
];

export const Route = createFileRoute("/wedding-coordination")({
  head: () => ({
    meta: [
      {
        title:
          "Wedding Coordination Miami | Month-Of Wedding Coordinator · Très CHIC",
      },
      {
        name: "description",
        content:
          "Wedding coordination in Miami ($3,250–$5,500+). Beginning 4 months before your day, Très CHIC manages timelines, vendor logistics, rehearsal & flawless wedding-day execution.",
      },
      {
        name: "keywords",
        content:
          "wedding coordination miami, month of wedding coordinator miami, day of wedding coordinator miami cost, wedding timeline coordinator south florida, wedding day manager miami, mariane fahmy coordination",
      },
      {
        property: "og:title",
        content:
          "Wedding Coordination Miami | Month-Of Wedding Coordinator · Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Your plans, brought to life. Your final months, made simpler. Executive wedding coordination in Miami and South Florida starting at $3,250–$5,500+.",
      },
      {
        property: "og:url",
        content: "https://treschiceventplanning.com/wedding-coordination",
      },
      {
        property: "og:image",
        content: media.finalDetailsLogistics,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Wedding Coordination Miami | Month-Of Wedding Coordinator · Très CHIC",
      },
      {
        name: "twitter:description",
        content:
          "Wedding coordination in Miami ($3,250–$5,500+). Beginning 4 months before your wedding, Très CHIC organizes final details, vendor logistics & day-of execution.",
      },
      {
        name: "twitter:image",
        content: media.finalDetailsLogistics,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://treschiceventplanning.com/wedding-coordination",
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
              "@id": "https://treschiceventplanning.com/wedding-coordination#service",
              name: "Wedding Coordination Miami",
              serviceType: "Wedding Coordination",
              description:
                "Four-month executive wedding coordination, vendor management, timeline development, ceremony rehearsal, and complete wedding-day execution across Miami and South Florida.",
              url: "https://treschiceventplanning.com/wedding-coordination",
              provider: {
                "@type": "LocalBusiness",
                name: "Très CHIC Event Planning & Design",
                telephone: "(954) 517-1818",
                url: "https://treschiceventplanning.com",
                image: media.finalDetailsLogistics,
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
                lowPrice: "3250",
                highPrice: "5500",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description:
                  "Investment range: $3,250–$5,500+. Customized based on guest count, event complexity, venue logistics, and on-site execution needs.",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/wedding-coordination#faq",
              mainEntity: weddingCoordinationFaqs.map((faq) => ({
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
                  name: "Wedding Coordination",
                  item: "https://treschiceventplanning.com/wedding-coordination",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: WeddingCoordinationPage,
});

function WeddingCoordinationPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="WEDDING COORDINATION · 4-MONTH EXECUTIVE SERVICE"
        seoH1="Wedding Coordination & Month-of Coordinator in Miami"
        headline="Your plans, brought to life. Your final months, made simpler."
        body="Designed for couples who have planned their wedding and want experienced professionals to bring all the details together for a seamless celebration."
        image={media.finalDetailsLogistics}
        imageAlt="Refined table setting and logistical wedding details curated by Très CHIC"
        fullScreen
      />

      {/* Philosophy & Narrative Overview Strip */}
      <Section tone="ivory" className="py-20 md:py-28 border-b border-border/60">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>The Final Months Made Effortless</Eyebrow>
            <h2 className="display-md mt-4 text-balance text-emerald">
              Executive Logistics. Master Timelines. Total Celebration.
            </h2>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              Beginning four months before your wedding, Très CHIC steps in to organize final
              details, coordinate contracted vendors, manage timelines and logistics, and oversee
              wedding-day execution—allowing you to enjoy the final months and be fully present for
              your celebration.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs uppercase tracking-widest text-muted-foreground border-t border-border/60 pt-10"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-gold" />
              <span>Investment: $3,250–$5,500+</span>
            </div>
            <span className="text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <CalendarCheck className="size-4 text-gold" />
              <span>Begins 4 Months Prior</span>
            </div>
            <span className="text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold" />
              <span>Full Wedding-Day Oversight</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What's Included - 4 Architectural Scope Pillars */}
      <Section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>Detailed Scope of Work</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              What's Included in Wedding Coordination
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              We take over the operational reins four months prior so you step into your wedding week
              as guests of honor, not event managers:
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Pillar 1 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 md:p-10 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Clock className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 01
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Final Planning & Timelines
                </h3>
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Initial coordination meeting four months before your wedding to review plans and priorities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Development and management of a comprehensive wedding-day timeline and production schedule
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Ongoing communication, planning support, and final details review during the last four months
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 md:p-10 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Users className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 02
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Logistics & Vendor Coordination
                </h3>
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Ceremony and reception venue walkthroughs, floor plan review, and logistical coordination
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Coordination of ceremony flow, wedding party processional, and key event transitions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Direct communication and logistical coordination with contracted vendors
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Final vendor confirmations, timeline distribution, and coordination of setup and breakdown schedules
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 md:p-10 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Compass className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 03
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Ceremony Rehearsal
                </h3>
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Ceremony rehearsal coordination and guidance for the wedding party
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Collaboration with your officiant or designated ceremony coordinator, as applicable
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Processional pacing, aisle choreography, and placement alignment so the ceremony flows seamlessly
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 md:p-10 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Award className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 04
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Wedding-Day Execution
                </h3>
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Oversight of ceremony and reception setup, vendor arrivals, and contracted services
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Coordination of personal details, ceremony and reception flow, and key formalities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Complete wedding-day timeline management, on-site coordination, and oversight through event conclusion
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Lead coordinator and assistant presence to handle timeline adjustments quietly behind the scenes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Investment Spotlight & Custom Proposal Callout */}
      <Section tone="ivory" className="py-20 md:py-28 border-y border-border/60">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xs border border-gold/40 bg-card shadow-xl">
            <div className="grid md:grid-cols-12">
              {/* Left Column: Investment Details */}
              <div className="p-8 md:p-12 md:col-span-5 bg-emerald text-white flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/15 px-3 py-1 rounded-xs border border-gold/30">
                    Investment Tier
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-white mt-4">
                    Wedding Coordination
                  </h3>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest text-emerald-100">
                      Investment Range
                    </p>
                    <p className="font-display text-4xl md:text-5xl text-gold mt-1">
                      $3,250–$5,500<span className="text-2xl text-emerald-200">+</span>
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-emerald-100/90 leading-relaxed font-light">
                    Each proposal is customized based on guest count, event complexity, venue logistics,
                    and on-site execution needs.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-emerald-700/60 flex items-center gap-3 text-xs text-emerald-200">
                  <ShieldCheck className="size-4 text-gold shrink-0" />
                  <span>20+ Years Corporate Operations & High-Stakes Logistics</span>
                </div>
              </div>

              {/* Right Column: Why 4 Months Matters */}
              <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-between">
                <div>
                  <Eyebrow>The 4-Month Advantage</Eyebrow>
                  <h4 className="font-display text-2xl text-emerald mt-2">
                    Why We Start 4 Months Before Your Day
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Most coordinators only step in 30 days prior—when contracted schedules are locked
                    and mistakes are costly to fix. Beginning four months out ensures:
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Contract Audit & Gap Detection</p>
                        <p className="text-xs text-muted-foreground">
                          Catching missing rentals, power limitations, or vendor load-in curfews months in advance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Master Production Timeline Architecture</p>
                        <p className="text-xs text-muted-foreground">
                          Building a synchronized timeline agreed upon by your caterer, band/DJ, photographer, and venue.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Complete Mental Freedom</p>
                        <p className="text-xs text-muted-foreground">
                          Passing the operational baton early so you can enjoy your bachelorette, bachelor party, and final tastings stress-free.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground font-light text-center sm:text-left">
                    Limited coordination dates available per wedding season.
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

      {/* Who Coordination Is Designed For */}
      <Section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>Is Coordination Right for You?</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              Designed for Confident Planners Who Want Total Day-Of Freedom
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              If you have already contracted your venue and chosen your creative team, Wedding
              Coordination ensures every investment you made is executed without friction.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xs border border-border/80 bg-card p-8 shadow-xs">
              <div className="inline-flex size-10 items-center justify-center rounded-xs bg-gold/15 text-gold mb-5">
                <FileCheck className="size-5" />
              </div>
              <h3 className="font-display text-xl text-emerald mb-2">
                Vendors Contracted
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You've chosen your venue, caterer, entertainment, and photo team, and need an
                authoritative leader to coordinate everyone under one master schedule.
              </p>
            </div>

            <div className="rounded-xs border border-border/80 bg-card p-8 shadow-xs">
              <div className="inline-flex size-10 items-center justify-center rounded-xs bg-gold/15 text-gold mb-5">
                <HeartHandshake className="size-5" />
              </div>
              <h3 className="font-display text-xl text-emerald mb-2">
                Present on the Day
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You don't want your mother, bridesmaids, or yourself holding clipboards, directing
                deliveries, or solving vendor questions while getting your hair and makeup done.
              </p>
            </div>

            <div className="rounded-xs border border-border/80 bg-card p-8 shadow-xs">
              <div className="inline-flex size-10 items-center justify-center rounded-xs bg-gold/15 text-gold mb-5">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-display text-xl text-emerald mb-2">
                Executive Precision
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You want the assurance of 20+ years of logistics leadership overseeing room reveals,
                bilingual vendor teams, formal transitions, and breakdown compliance.
              </p>
            </div>
          </div>

          {/* Comparison Callout */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Need assistance with creative design direction or remaining vendor selection? Explore our{" "}
              <Link
                to="/partial-planning"
                className="font-semibold text-emerald underline decoration-gold underline-offset-4 hover:text-gold transition-colors"
              >
                Partial Planning
              </Link>{" "}
              or{" "}
              <Link
                to="/full-planning"
                className="font-semibold text-emerald underline decoration-gold underline-offset-4 hover:text-gold transition-colors"
              >
                Full-Service Planning
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
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Everything you need to know about our four-month wedding coordination service across
              Miami and South Florida.
            </p>
          </div>

          <FaqAccordion items={weddingCoordinationFaqs} />
        </div>
      </Section>

      {/* Closing CTA */}
      <ClosingCta
        headline="Your plans, brought to life. Your final months, made simpler."
        body="Beginning four months before your wedding, we step in so you can enjoy every single moment. Connect with Mariane Fahmy to secure your coordination date."
        tone="ivory"
      />
    </>
  );
}

