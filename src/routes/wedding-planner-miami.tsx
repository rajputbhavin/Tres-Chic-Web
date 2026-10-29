import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Check,
  ExternalLink,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PressStrip } from "@/components/sections/shared/PressStrip";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

const miamiFaqs = [
  {
    question: "How much does a luxury wedding planner in Miami cost?",
    answer:
      "In Miami and South Florida, luxury wedding planning investments typically range depending on service level, guest count, and event complexity. At Très CHIC, our Month-of & Wedding Week Coordination begins at $3,250 to $5,500+, Partial Planning ranges between $7,500 and $9,500+, and Full-Service Planning & Bespoke Design starts at $12,500. Multi-day, multicultural, and complex estate productions receive custom proposals tailored to their logistical demands.",
  },
  {
    question: "Why should we hire a private wedding planner instead of relying on a Miami venue coordinator?",
    answer:
      "A venue coordinator is employed by and advocates for the venue—their scope is strictly limited to venue operations, in-house food/beverage schedules, and facility rules. A private luxury wedding planner like Très CHIC is your personal advocate. We design your overall aesthetic, negotiate vendor contracts, manage your entire budget, engineer complex weather contingencies, craft minute-by-minute master timelines, direct rehearsals, and coordinate every single outside vendor from load-in to post-event strike.",
  },
  {
    question: "When should we hire a wedding planner for our Miami wedding?",
    answer:
      "Miami is one of the nation's premier wedding destinations, and top venues (such as Vizcaya, The Biltmore, and Faena) often book 12 to 18 months in advance. We recommend hiring your wedding planner before securing your venue. We assess contracts, analyze hidden infrastructural costs (tent permits, power generators, load-in curfews), and ensure your venue aligns with your aesthetic and guest capacity.",
  },
  {
    question: "Can you help couples planning a destination wedding in Miami from out of state or abroad?",
    answer:
      "Yes, over 60% of our couples live outside of Florida or internationally. We provide comprehensive remote planning powered by collaborative digital planning suites, virtual 3D walkthroughs, curated video tastings, and concentrated planning weekend itineraries when you visit Miami.",
  },
  {
    question: "How do you handle outdoor and waterfront wedding logistics in Miami's climate?",
    answer:
      "South Florida’s subtropical climate requires seasoned logistical foresight. We design proactive Weather Action Plans (Plan A, Plan B, and Plan C) weeks ahead of time. This includes wind-rated clear-span tenting, high-tonnage climate control units, backup power generators, and humidity-tested floral choices that remain crisp from the midday ceremony through the midnight afterparty.",
  },
  {
    question: "Do you specialize in multicultural, fusion, and multi-day weddings in Miami?",
    answer:
      "Absolutely. Mariane Fahmy and the Très CHIC team are celebrated across South Florida for orchestrating vibrant multicultural celebrations. We have deep expertise in South Asian traditions (Baraats, Mandaps, Sangeets), authentic Middle Eastern Zaffa processions and Dabke performances, Jewish rituals (Chuppahs, Kosher catering oversight, Horah dances), and multi-day fusion celebrations where distinct cultures are honored with dignity and flair.",
  },
  {
    question: "Which areas in and around Miami does Très CHIC service?",
    answer:
      "We serve all of Miami-Dade, Broward, and Palm Beach counties, including Miami Beach, Brickell, Coral Gables, Coconut Grove, Key Biscayne, Bal Harbour, Sunny Isles Beach, Fort Lauderdale, Boca Raton, and Palm Beach, as well as destination celebrations worldwide.",
  },
];

const miamiVenues = [
  {
    name: "Vizcaya Museum & Gardens",
    location: "Coconut Grove, Miami",
    description:
      "A Gilded Age Italian Renaissance villa framed by subtropical Biscayne Bay. We manage strict historical preservation rules, complex evening load-ins, and breathtaking waterfront courtyard receptions.",
    image: media.vizcayaVillaEvening,
    highlight: "Waterfront Estate & Formal Gardens",
  },
  {
    name: "The Biltmore Hotel",
    location: "Coral Gables, Miami",
    description:
      "Timeless Mediterranean revival architecture featuring hand-painted ceilings, majestic colonnades, and sprawling golf course vistas for regal Miami ballroom celebrations.",
    image: media.ballroomBlushFlorals,
    highlight: "Grand Ballroom & Historic Architecture",
  },
  {
    name: "Faena Hotel & Miami Beach EDITION",
    location: "Miami Beach, FL",
    description:
      "Where high-fashion artistry meets oceanfront coastal energy. Ideal for couples seeking glamorous, late-night Miami Beach celebrations with cutting-edge culinary and design flair.",
    image: media.tentedWaterfrontReception,
    highlight: "Oceanfront Contemporary Luxury",
  },
  {
    name: "Four Seasons Hotel at The Surf Club",
    location: "Surfside / Miami Beach",
    description:
      "Old-world coastal glamour reimagined with contemporary sophistication. Featuring the legendary 1930s ballroom, pristine oceanfront lawns, and world-renowned hospitality.",
    image: media.candlelitHeadTable,
    highlight: "Timeless Coastal Sophistication",
  },
];

const planningTiers = [
  {
    slug: "full-service-miami",
    title: "Full-Service Miami Wedding Planning & Design",
    investment: "Starting at $12,500",
    badge: "Most Popular · Complete White-Glove Curation",
    body: "Designed for busy couples, out-of-state clients, and multi-day celebrations who desire complete peace of mind. We oversee every logistical and artistic detail from venue procurement, budget architecture, and custom design deck fabrication to vendor negotiations, guest concierge, and full wedding weekend execution.",
    features: [
      "Comprehensive venue scouting & contract negotiation across Miami",
      "Bespoke floral, lighting, linen, and spatial design concepts with 3D floorplans",
      "Curated vendor selection from our private South Florida black-book",
      "Detailed financial budgeting & payment milestone tracking",
      "Full wedding weekend management: rehearsal dinner, ceremony, reception & afterparty",
    ],
  },
  {
    slug: "partial-planning-miami",
    title: "Partial Wedding Planning & Design Direction",
    investment: "$7,500 to $9,500+",
    badge: "Design Direction & Vendor Mastery",
    body: "For couples who have secured their Miami venue and wish to collaborate with a seasoned professional to elevate their design concept, assemble the perfect vendor team, and streamline all logistics into a seamless, stress-free execution.",
    features: [
      "Review of already booked venue & vendor agreements",
      "Cohesive aesthetic direction: color palettes, rentals, and custom tablescapes",
      "Targeted recommendations for remaining top-tier Miami vendors",
      "Master timeline creation and logistical coordination beginning 3-4 months out",
      "Complete on-site rehearsal and wedding day production",
    ],
  },
  {
    slug: "month-of-coordination-miami",
    title: "Month-Of & Wedding Week Coordination",
    investment: "$3,250 to $5,500+",
    badge: "Flawless Execution & Logistics Takeover",
    body: "You've curated the vision and booked the vendors; now let an experienced Miami wedding coordinator take over the reins. Starting 6-8 weeks prior to your date, we step in to finalize logistics, confirm vendors, run your rehearsal, and orchestrate the wedding day so you can be fully present.",
    features: [
      "Complete vendor contract audit & insurance verification",
      "Creation of an exhaustive, minute-by-minute master wedding timeline",
      "Direct communication with all venue staff, catering, and entertainment",
      "Direction of the ceremony rehearsal the day prior",
      "14+ hours of continuous on-site coordination with lead planner and assistants",
    ],
  },
];

export const Route = createFileRoute("/wedding-planner-miami")({
  head: () => ({
    meta: [
      {
        title: "Wedding Planner Miami | Luxury Miami Wedding Planner · Très CHIC",
      },
      {
        name: "description",
        content:
          "Top luxury wedding planner in Miami, FL. Très CHIC orchestrates bespoke full-service planning, artistic design & day-of coordination for iconic South Florida celebrations.",
      },
      {
        name: "keywords",
        content:
          "wedding planner miami, wedding planner in miami, luxury wedding planner miami, best wedding planner in miami, wedding planner miami fl, miami wedding planner, wedding coordinator miami, wedding designer miami, vizcaya wedding planner, miami beach wedding planner, south florida wedding planner, wedding planner coral gables",
      },
      {
        property: "og:title",
        content: "Wedding Planner Miami | Luxury Miami Wedding Planner · Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Premier luxury wedding planner in Miami, FL. Bespoke full-service planning, artistic design & day-of coordination for elevated South Florida weddings.",
      },
      {
        property: "og:url",
        content: "https://treschiceventplanning.com/wedding-planner-miami",
      },
      {
        property: "og:image",
        content: media.tentedWaterfrontReception,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Wedding Planner Miami | Luxury Miami Wedding Planner · Très CHIC",
      },
      {
        name: "twitter:description",
        content:
          "Top luxury wedding planner in Miami, FL. Full-service planning, artistic design & coordination for Vizcaya, estate, and oceanfront celebrations.",
      },
      {
        name: "twitter:image",
        content: media.tentedWaterfrontReception,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://treschiceventplanning.com/wedding-planner-miami",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["EventPlanner", "WeddingService", "LocalBusiness"],
              "@id": "https://treschiceventplanning.com/wedding-planner-miami#business",
              name: "Très CHIC Event Planning & Design - Wedding Planner Miami",
              alternateName: [
                "Wedding Planner Miami",
                "Très CHIC Miami Wedding Planner",
                "Luxury Wedding Planner Miami FL",
                "Miami Wedding Coordinator",
              ],
              serviceType: "Wedding Planner in Miami",
              description:
                "Premier luxury wedding planner in Miami and South Florida. Bespoke full-service planning, design, and day-of coordination for Vizcaya, oceanfront, estate, and multicultural weddings.",
              url: "https://treschiceventplanning.com/wedding-planner-miami",
              telephone: "(954) 517-1818",
              email: "info@treschiceventplanning.com",
              priceRange: "$$$$",
              image: media.tentedWaterfrontReception,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Miami",
                addressRegion: "FL",
                postalCode: "33131",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.7617,
                longitude: -80.1918,
              },
              areaServed: [
                { "@type": "City", name: "Miami" },
                { "@type": "City", name: "Miami Beach" },
                { "@type": "City", name: "Coral Gables" },
                { "@type": "City", name: "Coconut Grove" },
                { "@type": "City", name: "Brickell" },
                { "@type": "City", name: "Key Biscayne" },
                { "@type": "City", name: "Bal Harbour" },
                { "@type": "City", name: "Sunny Isles Beach" },
                { "@type": "AdministrativeArea", name: "South Florida" },
              ],
              founder: {
                "@type": "Person",
                name: "Mariane Fahmy",
                jobTitle: "Founder & Lead Luxury Wedding Designer",
                sameAs: site.instagram,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Miami Wedding Planning Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full-Service Wedding Planning & Design Miami",
                      description:
                        "Comprehensive white-glove wedding planning, budget architecture, vendor curation, and complete production across Miami.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Partial Wedding Planning & Design Miami",
                      description:
                        "Design curation, vendor team completion, and structured wedding production for couples with a booked Miami venue.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Month-Of Wedding Coordination Miami",
                      description:
                        "Logistical takeover 6 to 8 weeks prior, vendor management, timeline creation, and on-site day-of coordination.",
                    },
                  },
                ],
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/wedding-planner-miami#faq",
              mainEntity: miamiFaqs.map((faq) => ({
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
              "@id": "https://treschiceventplanning.com/wedding-planner-miami#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://treschiceventplanning.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Wedding Planner Miami",
                  item: "https://treschiceventplanning.com/wedding-planner-miami",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: WeddingPlannerMiamiPage,
});

function WeddingPlannerMiamiPage() {
  const featuredReviews = reviews
    .filter((r) => r.category === "Weddings" || r.category === "Multicultural & Fusion")
    .slice(0, 4);

  return (
    <>
      {/* Editorial Inner Page Hero */}
      <PageHero
        eyebrow="MIAMI WEDDING PLANNER & DESIGNER"
        seoH1="Wedding Planner Miami · Luxury Wedding Planning & Design"
        headline="You Planned for This Forever. We Bring Your Miami Dream to Life."
        body="From sunset vows overlooking Biscayne Bay to grand ballroom galas at historic Miami estates, Très CHIC delivers bespoke luxury wedding planning, visionary design, and unflappable coordination across Miami, Florida. Led by Mariane Fahmy, we carry every logistical detail so you can simply be present."
        image={media.tentedWaterfrontReception}
        imageAlt="Luxury tented waterfront wedding in Miami planned and designed by Très CHIC"
        fullScreen
      />

      {/* Trust & Google Business Profile (GBP) Primary Category & Review Anchor Strip */}
      <section className="border-y border-border/80 bg-neutral-soft/60 px-6 py-6 md:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex text-[#c59b4c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-[#c59b4c]" aria-hidden />
              ))}
            </div>
            <span className="text-xs font-semibold tracking-wide uppercase text-foreground">
              5.0 Star Rated on Google · 50+ Verified Reviews
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-emerald" aria-hidden />
            <span>Google Business Profile Primary Category: </span>
            <strong className="text-foreground">Event Planner & Wedding Planner · Miami, FL</strong>
          </div>

          <a
            href="https://maps.google.com/?cid=109278798882227478119"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald uppercase transition-colors hover:text-gold"
          >
            <span>View Verified Google Reviews</span>
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </div>
      </section>

      {/* Press Recognition Row */}
      <PressStrip />

      {/* Section 1: Why Hire a Specialized Miami Wedding Planner */}
      <Section tone="ivory">
        <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-2">
          <Reveal className="self-center">
            <Eyebrow>The Miami Standard</Eyebrow>
            <h2 className="display-lg rule-gold mt-4 text-balance text-emerald">
              Why Discerning Couples Choose Très CHIC as Their Wedding Planner in Miami
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              Miami is celebrated globally for its sun-drenched coastlines, iconic architecture, and
              vibrant international spirit. Yet planning a wedding in South Florida requires far
              more than aesthetic vision.
            </p>
            <p className="mt-4 text-muted-foreground">
              Between tropical weather patterns requiring robust tenting engineering, strict sound
              curfews in residential neighborhoods and historic preservation estates, and a
              competitive vendor landscape, having an established, respected local planner is the
              single greatest investment in your celebration.
            </p>
            <p className="mt-4 text-muted-foreground">
              At Très CHIC, founder Mariane Fahmy and our team bring deep local roots, intimate
              relationships with South Florida's finest artisans, and an unflinching commitment to
              calm, composed execution. We ensure that on your wedding day, you are not managing
              logistics—you are savoring every unforgettable moment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton to="/start-planning" variant="solid">
                Inquire For Your Date
              </CtaButton>
              <CtaButton to="/celebrations-we-love" variant="outline-emerald">
                View Miami Portfolio
              </CtaButton>
            </div>
          </Reveal>

          <Reveal className="space-y-6" delay={150}>
            <div className="relative overflow-hidden shadow-xl">
              <img
                src={media.vizcayaVillaEvening}
                alt="Historic Vizcaya Museum and Gardens villa lit up for a luxury evening wedding in Miami"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#e5c06e]">
                  Iconic Miami Venues
                </p>
                <p className="font-display text-lg text-white">
                  Historic Villa Vizcaya & Private Coconut Grove Waterfronts
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-border/80 bg-neutral-soft p-5">
                <p className="font-display text-2xl text-emerald">10+ Years</p>
                <p className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">
                  South Florida Excellence
                </p>
              </div>
              <div className="border border-border/80 bg-neutral-soft p-5">
                <p className="font-display text-2xl text-emerald">100% Calm</p>
                <p className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">
                  Zero Stress Guarantee
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Section 2: Local Expertise Pillars */}
      <Section tone="soft">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Local Mastery</Eyebrow>
          <h2 className="display-lg mt-4 text-balance text-emerald">
            Mastering Every Layer of the Miami Wedding Landscape
          </h2>
          <p className="lede mt-5 text-muted-foreground">
            From oceanfront estate permitting to high-heat floral chemistry, our localized precision
            turns complex Miami logistics into seamless elegance.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={50} className="border border-border/70 bg-card p-7 shadow-xs">
            <div className="inline-flex size-11 items-center justify-center bg-emerald text-gold">
              <MapPin className="size-5" />
            </div>
            <h3 className="font-display text-xl text-emerald mt-5">Venue Access & Nuance</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Intimate knowledge of load-in windows, staging restrictions, and noise curfews at
              landmark venues from Vizcaya to Faena and Fisher Island.
            </p>
          </Reveal>

          <Reveal delay={100} className="border border-border/70 bg-card p-7 shadow-xs">
            <div className="inline-flex size-11 items-center justify-center bg-emerald text-gold">
              <Calendar className="size-5" />
            </div>
            <h3 className="font-display text-xl text-emerald mt-5">Subtropical Engineering</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Rigorous rain and wind action plans, commercial-grade clear-span tenting, AC
              infrastructure, and humidity-tested floral design.
            </p>
          </Reveal>

          <Reveal delay={150} className="border border-border/70 bg-card p-7 shadow-xs">
            <div className="inline-flex size-11 items-center justify-center bg-emerald text-gold">
              <Sparkles className="size-5" />
            </div>
            <h3 className="font-display text-xl text-emerald mt-5">Elite Vendor Black-Book</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Direct access to Miami's most coveted floral couturiers, Michelin-caliber caterers,
              custom rental artisans, and world-class cinematographers.
            </p>
          </Reveal>

          <Reveal delay={200} className="border border-border/70 bg-card p-7 shadow-xs">
            <div className="inline-flex size-11 items-center justify-center bg-emerald text-gold">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="font-display text-xl text-emerald mt-5">Cultural Fluency</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Renowned for authentic execution of South Asian Baraats, Middle Eastern Zaffa
              processions, Jewish Chuppah ceremonies, and modern fusion galas.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Section 3: Signature Planning Packages for Miami Weddings */}
      <Section tone="ivory">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Bespoke Offerings</Eyebrow>
          <h2 className="display-lg mt-4 text-balance text-emerald">
            Miami Wedding Planning Packages & Services
          </h2>
          <p className="lede mt-5 text-muted-foreground">
            Whether you desire end-to-end concierge design or seasoned day-of execution, we tailor
            our involvement around how much you actually want to hold.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {planningTiers.map((tier, idx) => (
            <Reveal
              key={tier.slug}
              delay={idx * 100}
              className="flex flex-col justify-between border border-border/90 bg-card p-8 shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-md"
            >
              <div>
                <span className="inline-block border border-gold/40 bg-neutral-soft px-3 py-1 text-[0.6875rem] font-bold tracking-wider uppercase text-emerald">
                  {tier.badge}
                </span>
                <h3 className="font-display text-2xl text-emerald mt-4">{tier.title}</h3>
                <p className="font-sans text-lg font-semibold text-[#b38838] mt-2">
                  {tier.investment}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{tier.body}</p>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs font-semibold tracking-wider uppercase text-foreground">
                    Key Deliverables:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <Check className="size-4 shrink-0 text-emerald" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/start-planning"
                  className="flex w-full items-center justify-center gap-2 bg-emerald py-3.5 text-xs font-semibold tracking-widest text-ivory uppercase transition-colors hover:bg-gold hover:text-ink"
                >
                  <span>Select Service</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Planning a multi-day South Asian or Middle Eastern wedding weekend?{" "}
            <Link to="/multicultural-weddings" className="font-medium text-emerald underline hover:text-gold">
              Explore our Multicultural & Fusion Wedding expertise
            </Link>{" "}
            or{" "}
            <Link to="/start-planning" className="font-medium text-emerald underline hover:text-gold">
              request a custom proposal
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      {/* Section 4: Iconic Miami Venues We Know Inside & Out */}
      <Section tone="soft">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>South Florida Venues</Eyebrow>
            <h2 className="display-lg mt-4 text-balance text-emerald">
              Iconic Miami Wedding Venues Where We Regularly Orchestrate Celebrations
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/celebrations-we-love"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald uppercase hover:text-gold transition-colors"
            >
              <span>Explore Full Portfolio</span>
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {miamiVenues.map((venue, i) => (
            <Reveal
              key={venue.name}
              delay={i * 100}
              className="group overflow-hidden border border-border/80 bg-card shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={venue.image}
                  alt={`${venue.name} wedding planned by Très CHIC in Miami`}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[0.6875rem] font-bold tracking-widest uppercase text-[#e5c06e]">
                    {venue.highlight}
                  </span>
                  <h3 className="font-display text-2xl text-white mt-1">{venue.name}</h3>
                  <p className="text-xs text-ivory/80 flex items-center gap-1.5 mt-1">
                    <MapPin className="size-3 text-[#e5c06e]" />
                    <span>{venue.location}</span>
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{venue.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 5: The Four-Phase Miami Planning Journey */}
      <Section tone="ivory">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>The Methodology</Eyebrow>
          <h2 className="display-lg mt-4 text-balance text-emerald">
            The Très CHIC Experience: How We Plan Your Miami Wedding
          </h2>
          <p className="lede mt-5 text-muted-foreground">
            Clear communication, meticulous timelines, and relentless attention to detail so you
            can savor being engaged without becoming overwhelmed.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={50} className="relative border-t-2 border-gold pt-6">
            <span className="font-display text-3xl text-gold">01</span>
            <h3 className="font-display text-xl text-emerald mt-2">Discovery & Vision</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We begin with a deep exploration of your story, design aspirations, culinary tastes,
              and guest experience priorities to build a customized creative brief.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative border-t-2 border-gold pt-6">
            <span className="font-display text-3xl text-gold">02</span>
            <h3 className="font-display text-xl text-emerald mt-2">Budget & Vendor Team</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We architect a line-item budget allocation and match you with vetted Miami creative
              partners—from photographers to lighting technicians—who align with your style.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative border-t-2 border-gold pt-6">
            <span className="font-display text-3xl text-gold">03</span>
            <h3 className="font-display text-xl text-emerald mt-2">Design & Logistics</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every detail is solidified: 3D floor plans, spatial flow, rain contingency blueprints,
              custom rental mockups, and exhaustive minute-by-minute schedules.
            </p>
          </Reveal>

          <Reveal delay={200} className="relative border-t-2 border-gold pt-6">
            <span className="font-display text-3xl text-gold">04</span>
            <h3 className="font-display text-xl text-emerald mt-2">Flawless Wedding Day</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Our team directs the entire production from morning setup to post-reception strike,
              insulating you from all questions so you are 100% present.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <CtaButton to="/the-experience" variant="outline-emerald">
            Read The Full 6-Step Experience
          </CtaButton>
        </Reveal>
      </Section>

      {/* Section 6: Real Miami Wedding Reviews & GMB Social Proof */}
      <Section tone="soft">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Client Praise</Eyebrow>
            <h2 className="display-lg mt-4 text-balance text-emerald">
              What Real Couples Say About Working With Très CHIC in Miami
            </h2>
            <p className="lede mt-3 text-muted-foreground">
              Over 50+ five-star Google reviews from couples who trusted us with their most
              cherished celebration.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <a
              href="https://maps.google.com/?cid=109278798882227478119"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-emerald bg-emerald px-6 py-3 text-xs font-semibold tracking-wider text-ivory uppercase transition-colors hover:bg-gold hover:text-ink hover:border-gold"
            >
              <span>Read All Google Reviews</span>
              <ExternalLink className="size-3.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {featuredReviews.map((review, i) => (
            <Reveal
              key={review.id}
              delay={i * 100}
              className="flex flex-col justify-between border border-border/80 bg-card p-8 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-[#c59b4c]">
                    {[...Array(review.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="size-4 fill-[#c59b4c]" aria-hidden />
                    ))}
                  </div>
                  <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground">
                    {review.badge || "Google Verified"}
                  </span>
                </div>

                <p className="font-display text-lg text-emerald italic mt-5">
                  "{review.highlight}"
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                  {review.quote}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">
                    {review.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-[0.6875rem] font-medium text-emerald uppercase tracking-wider">
                  {review.platform} Review
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 7: Miami Wedding Planner FAQs */}
      <Section tone="ivory">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Answers & Clarity</Eyebrow>
          <h2 className="display-lg mt-4 text-balance text-emerald">
            Frequently Asked Questions: Hiring a Wedding Planner in Miami
          </h2>
          <p className="lede mt-5 text-muted-foreground">
            Essential insights on investments, vendor procurement, weather safeguards, and planning
            timelines in South Florida.
          </p>
        </Reveal>

        <div className="mt-14">
          <FaqAccordion items={miamiFaqs} />
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Have a question about your specific venue or date?{" "}
            <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="font-medium text-emerald underline hover:text-gold">
              Call us directly at {site.phone}
            </a>{" "}
            or{" "}
            <Link to="/start-planning" className="font-medium text-emerald underline hover:text-gold">
              send us a message
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      {/* Section 8: Hidden Semantic SEO Footprint (Exact-match H2s for crawler authority) */}
      <div className="sr-only" aria-hidden="false">
        <h2>Wedding Planner Miami</h2>
        <h2>Wedding Planner in Miami</h2>
        <h2>Best Wedding Planner Miami</h2>
        <h2>Best Wedding Planner in Miami</h2>
        <h2>Luxury Wedding Planner Miami</h2>
        <h2>Luxury Wedding Planner in Miami</h2>
        <h2>Wedding Planner Miami FL</h2>
        <h2>Miami Wedding Planner</h2>
        <h2>Wedding Coordinator Miami</h2>
        <h2>Miami Wedding Coordinator</h2>
        <h2>Wedding Designer Miami</h2>
        <h2>Miami Wedding Designer</h2>
        <h2>Day of Wedding Coordinator Miami</h2>
        <h2>Full Service Wedding Planner Miami</h2>
        <h2>Vizcaya Wedding Planner</h2>
        <h2>Biltmore Coral Gables Wedding Planner</h2>
        <h2>Faena Miami Beach Wedding Planner</h2>
        <h2>Wedding Planner Miami Beach</h2>
        <h2>Wedding Planner Coral Gables</h2>
        <h2>Wedding Planner Coconut Grove</h2>
        <h2>Wedding Planner Brickell</h2>
        <h2>Wedding Planner Key Biscayne</h2>
        <h2>Multicultural Wedding Planner Miami</h2>
        <h2>Destination Wedding Planner Miami</h2>
        <h2>South Florida Luxury Wedding Planner</h2>
        <p>
          Très CHIC Event Planning & Design is a premier luxury wedding planner in Miami, FL,
          orchestrating elevated celebrations at Vizcaya Museum & Gardens, The Biltmore Coral
          Gables, Faena Miami Beach, The Miami Beach EDITION, Four Seasons Hotel at The Surf Club,
          Fisher Island Club, Villa Woodbine, and private waterfront estates across South Florida.
          Services include bespoke full-service wedding planning, partial planning, month-of
          wedding coordination, event design, and multi-day multicultural wedding management.
        </p>
      </div>

      {/* Section 9: Closing Call To Action */}
      <ClosingCta
        headline="Your Miami Wedding Deserves Uncompromising Care."
        body="Let's talk about your celebration, your aesthetic, and how we can make the planning journey as extraordinary as the wedding day itself."
        tone="ivory"
      />
    </>
  );
}
