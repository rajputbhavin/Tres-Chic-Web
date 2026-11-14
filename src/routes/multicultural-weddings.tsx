import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  CalendarCheck,
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

import { TraditionsGrid } from "@/components/sections/multicultural/TraditionsGrid";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";
import { site } from "@/data/site";

const multiculturalFaqs = [
  {
    question: "What is included in Multicultural & Multi-Day Wedding Planning?",
    answer:
      "Our multicultural service is comprehensive, white-glove planning across all events of your celebration. From pre-wedding rituals (such as Mehendi, Sangeet, or Welcome Dinners) and traditional religious ceremonies (Hindu, Middle Eastern, Jewish, Catholic, or fusion) to grand receptions and farewell brunches, Très CHIC orchestrates design, specialized cultural vendors, guest travel logistics, and multi-day on-site production.",
  },
  {
    question: "What does the 'Starting at $25,500' investment include?",
    answer:
      "Our multi-day planning investment begins at $25,500, architected specifically for a two-day celebration featuring three distinct events with up to 200 guests. This covers multi-event creative direction, floor plan and permit management, custom logistics across multiple venues, vendor negotiations, and continuous executive on-site coordination across all days.",
  },
  {
    question: "Can you accommodate specialized cultural and ceremonial vendors?",
    answer:
      "Yes! With extensive expertise in South Florida's diverse wedding landscape—and our in-house connection to Zaffa Entertainment—we collaborate with authentic cultural caterers (Halal, Kosher, South Asian, Mediterranean), traditional musicians (Zaffa bands, Takht ensembles, Dhol players), Henna artists, Mandap/Chuppah floral designers, and experienced cultural officiants.",
  },
  {
    question: "How do you coordinate guest logistics and transitions between multi-day events?",
    answer:
      "Multi-day celebrations often welcome guests from across the world. We coordinate hotel room blocks, chartered luxury transportation shuttles between venues, multi-lingual welcome suites, clear attire guidance for each ceremony, and synchronized schedules so every guest feels welcomed and informed.",
  },
  {
    question: "How far in advance should we engage Très CHIC for a multi-day wedding?",
    answer:
      "We recommend booking 12 to 18 months prior to your wedding weekend. Securing prime South Florida venues and specialized cultural vendors across multiple consecutive dates requires strategic early planning.",
  },
];

export const Route = createFileRoute("/multicultural-weddings")({
  head: () => ({
    meta: [
      {
        title:
          "Multicultural & Multi-Day Wedding Planner Miami | Fusion Weddings · Très CHIC",
      },
      {
        name: "description",
        content:
          "Multicultural & multi-day luxury wedding planning in Miami starting at $25,500. South Asian, Middle Eastern, Jewish, interfaith & fusion celebrations planned as one seamless story.",
      },
      {
        name: "keywords",
        content:
          "multicultural wedding planner miami, multi day wedding planner miami, indian wedding planner miami, south asian wedding planner miami, middle eastern wedding planner miami, fusion wedding planner south florida, jewish wedding planner miami, interfaith wedding planner miami",
      },
      {
        property: "og:title",
        content:
          "Multicultural & Multi-Day Wedding Planner Miami | Fusion Weddings · Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Honoring your traditions. Celebrating your story. Every detail, thoughtfully planned. Full planning for multi-day, multicultural celebrations starting at $25,500.",
      },
      {
        property: "og:url",
        content: "https://treschiceventplanning.com/multicultural-weddings",
      },
      {
        property: "og:image",
        content: media.multiculturalHero,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Multicultural & Multi-Day Wedding Planner Miami | Fusion Weddings · Très CHIC",
      },
      {
        name: "twitter:description",
        content:
          "Multicultural and multi-day luxury wedding planning in Miami led by Mariane Fahmy. Comprehensive vendor curation, cultural reverence, and multi-event production.",
      },
      {
        name: "twitter:image",
        content: media.multiculturalHero,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://treschiceventplanning.com/multicultural-weddings",
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
              "@id": "https://treschiceventplanning.com/multicultural-weddings#service",
              name: "Multicultural & Multi-Day Wedding Planning Miami",
              serviceType: "Multicultural Wedding Planning",
              description:
                "Comprehensive planning, creative direction, specialized cultural vendor management, and multi-day production for South Asian, Middle Eastern, Jewish, and fusion weddings in Miami.",
              url: "https://treschiceventplanning.com/multicultural-weddings",
              provider: {
                "@type": "LocalBusiness",
                name: "Très CHIC Event Planning & Design",
                telephone: "(954) 517-1818",
                url: "https://treschiceventplanning.com",
                image: media.multiculturalHero,
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
                price: "25500",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description:
                  "Starting at $25,500 based on a two-day celebration featuring three events and up to 200 guests. Custom proposal tailored to your multi-day celebration.",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/multicultural-weddings#faq",
              mainEntity: multiculturalFaqs.map((faq) => ({
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
                  name: "Multicultural Weddings",
                  item: "https://treschiceventplanning.com/multicultural-weddings",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: MulticulturalPage,
});

function MulticulturalPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="MULTICULTURAL & MULTI-DAY WEDDINGS · SIGNATURE EXPERTISE"
        seoH1="Multicultural Wedding Planner in Miami Florida"
        headline="Honoring your traditions. Celebrating your story. Every detail, thoughtfully planned."
        body="Designed for couples and families planning multicultural, fusion, or multi-day weddings that bring together meaningful traditions, personal touches, and distinctive celebrations."
        image={media.multiculturalHero}
        imageAlt="A groom placing a wedding ring on his bride's hand adorned with intricate henna and mehndi art"
        fullScreen
      />

      {/* Philosophy & Narrative Overview Strip */}
      <Section tone="ivory" className="py-20 md:py-28 border-b border-border/60">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>Two Families. Multiple Days. One Cohesive Story.</Eyebrow>
            <h2 className="display-md mt-4 text-balance text-emerald">
              Where Cultural Reverence Meets Flawless Execution.
            </h2>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              Whether blending cultures, honoring religious or family customs, or hosting multiple
              events across several days, Très CHIC provides comprehensive planning, creative
              direction, vendor management, and seamless coordination from beginning to end.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground font-light">
              We thoughtfully manage every detail and the complexities behind the scenes, creating a
              cohesive and memorable experience that reflects your unique story—allowing you and your
              loved ones to be fully present for every celebration.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs uppercase tracking-widest text-muted-foreground border-t border-border/60 pt-10"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-gold" />
              <span>Investment Starting at $25,500</span>
            </div>
            <span className="text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-gold" />
              <span>Multi-Day & Multi-Venue Coordination</span>
            </div>
            <span className="text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold" />
              <span>In-House Cultural Entertainment Access</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Cultural Traditions Showcase */}
      <Section className="py-20 md:py-28 bg-background border-b border-border/60">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl mb-14">
            <Eyebrow>Cultural Reverence</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              Every Custom Respected. Never Standardized.
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              We don't believe every South Asian wedding follows a template, or that every Jewish or
              Middle Eastern celebration is identical. We begin by learning what matters to you and
              your families.
            </p>
          </div>
          <TraditionsGrid />
        </div>
      </Section>

      {/* What's Included - 6 Architectural Scope Pillars */}
      <Section tone="soft" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>Comprehensive Scope of Work</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              What's Included in Multicultural & Multi-Day Planning
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Every celebration across your wedding weekend is orchestrated with executive precision,
              artistic distinction, and cultural sensitivity:
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
                      Comprehensive planning support, ongoing communication, and customized planning schedules
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Wedding budget development and management across multiple celebrations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Venue research, selection, and contract negotiations for each event, as needed
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
                  Vendor Curation & Management
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Curated vendor recommendations aligned with your vision, traditions, and budget
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Vendor selection, contract negotiations, and ongoing coordination throughout planning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Collaboration with specialized vendors to accommodate cultural, religious, and ceremonial requirements
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
                      Personalized design concepts, inspiration boards, and creative direction for each celebration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Guidance on floral design, rentals, linens, tabletop details, stationery, and décor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Design vendor coordination to create a cohesive aesthetic while giving each event its own distinctive character
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <HeartHandshake className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 04
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Traditions, Ceremonies & Guests
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Planning and coordination of cultural, religious, and family traditions across celebrations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Collaboration with families, officiants, and ceremonial specialists to incorporate meaningful customs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Coordination of guest transportation, accommodations, and transitions between events
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Clock className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 05
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Logistics & Production Planning
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Venue walkthroughs, floor plans, and logistical coordination across event locations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Comprehensive timelines, production schedules, and vendor logistics for each celebration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Coordination of vendor setup, venue transitions, breakdown, and final event details
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="flex flex-col justify-between rounded-xs border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xs bg-emerald/10 text-emerald mb-6">
                  <Award className="size-6 text-gold" />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-widest text-gold uppercase block mb-1">
                  Pillar 06
                </span>
                <h3 className="font-display text-2xl text-emerald mb-4">
                  Wedding Weekend Execution
                </h3>
                <ul className="space-y-3.5 text-sm md:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Complete on-site management and execution of all contracted wedding celebrations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Oversight of vendor teams, ceremonial processions, event flow, and reception formalities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Seamless transitions between celebrations so your loved ones can be fully present
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Investment Spotlight & Proposal Clarity */}
      <Section tone="ivory" className="py-20 md:py-28 border-y border-border/60">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xs border border-gold/40 bg-card shadow-xl">
            <div className="grid md:grid-cols-12">
              {/* Left Column: Investment Details */}
              <div className="p-8 md:p-12 md:col-span-5 bg-emerald text-white flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/15 px-3 py-1 rounded-xs border border-gold/30">
                    Full Planning Investment
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-white mt-4">
                    Multicultural & Multi-Day
                  </h3>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest text-emerald-100">
                      Starting Investment
                    </p>
                    <p className="font-display text-4xl md:text-5xl text-gold mt-1">
                      $25,500
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-emerald-100/90 leading-relaxed font-light">
                    Based on a two-day celebration featuring three events and up to 200 guests.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-emerald-700/60 flex items-center gap-3 text-xs text-emerald-200">
                  <ShieldCheck className="size-4 text-gold shrink-0" />
                  <span>White-glove executive production for multi-venue weekends</span>
                </div>
              </div>

              {/* Right Column: Custom Proposal Details */}
              <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-between">
                <div>
                  <Eyebrow>Bespoke Proposal Architecture</Eyebrow>
                  <h4 className="font-display text-2xl text-emerald mt-2">
                    How We Tailor Your Multi-Day Proposal
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Each proposal is customized based on the number of events, guest count, planning
                    requirements, venue logistics, design complexity, staffing, and on-site execution
                    needs:
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Number of Events & Days</p>
                        <p className="text-xs text-muted-foreground">
                          From 2-day dual ceremonies to full 4-day South Asian or Middle Eastern wedding weekends.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Specialized Cultural Vendor Teams</p>
                        <p className="text-xs text-muted-foreground">
                          Coordinating distinct caterers, ceremonial decorators, Baraat horses/cars, and Zaffa bands.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald">Multi-Venue Shuttles & Guest Management</p>
                        <p className="text-xs text-muted-foreground">
                          Managing guest transportation, room blocks, and setup timelines between distinct venues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground font-light text-center sm:text-left">
                    We accept a limited number of multi-day celebrations each calendar year.
                  </span>
                  <CtaButton to="/start-planning">
                    Inquire for Your Dates
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Interactive FAQ Accordion */}
      <Section className="py-24 md:py-32 bg-background border-t border-border/60">
        <div className="mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Planning FAQs</Eyebrow>
            <h2 className="display-lg mt-3 text-balance text-emerald">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Essential questions on bringing multiple traditions, cultures, and celebrations
              together in South Florida.
            </p>
          </div>

          <FaqAccordion items={multiculturalFaqs} />
        </div>
      </Section>

      {/* Closing CTA */}
      <ClosingCta
        headline="Honoring your traditions. Celebrating your story."
        body="Tell us about your multi-day celebration, ceremonial traditions, and vision. We will curate a bespoke proposal tailored specifically to your family's story."
        tone="ivory"
      />
    </>
  );
}
