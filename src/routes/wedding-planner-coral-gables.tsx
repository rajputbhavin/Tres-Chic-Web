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

const coralGablesFaqs = [
  {
    question: "How much does a luxury wedding planner in Coral Gables cost?",
    answer:
      "In Coral Gables, luxury wedding planning investments depend on your venue's architectural logistics, guest count, and service scope. At Très CHIC, our Month-of & Wedding Week Coordination begins at $3,250 to $5,500+, Partial Planning ranges from $7,500 to $9,500+, and Full-Service Planning & Bespoke Production starts at $12,500. Multi-day celebrations, historic estate transformations, and high-complexity ballroom productions receive customized proposals reflecting their staffing and production demands.",
  },
  {
    question: "Why should we hire a private wedding planner for The Biltmore Hotel or Coral Gables Country Club?",
    answer:
      "Venues like The Biltmore Hotel and Coral Gables Country Club are historic landmarks with strict municipal and preservation operating rules. An in-house venue manager oversees venue catering and property facilities; they do not manage your outside creative partners, custom lighting plots, stationery design, hair/makeup timelines, or personal bridal party needs. A private wedding planner like Très CHIC is your personal advocate from contract negotiation to midnight send-off.",
  },
  {
    question: "How do you handle Coral Gables outdoor sound and permit ordinances?",
    answer:
      "Coral Gables maintains strict residential noise ordinances and municipal event permitting requirements, particularly for outdoor courtyard receptions, private estates, and tented celebrations. We secure all required city permits, coordinate with sound engineers for directional speaker positioning, and design timelines that seamlessly transition guests indoors before municipal decibel curfews.",
  },
  {
    question: "Can Très CHIC coordinate ceremonies at Coral Gables churches followed by reception transitions?",
    answer:
      "Yes. Coral Gables is home to some of Florida's most magnificent historic churches, including Church of the Little Flower, Coral Gables Congregational United Church of Christ, and St. Jude. We manage tight church time restrictions, altar floral logistics, ceremonial guest transportation, and graceful cocktail hour arrivals at your reception venue.",
  },
  {
    question: "Do you specialize in multicultural, fusion, and multi-day weddings in Coral Gables?",
    answer:
      "Yes, Mariane Fahmy and the Très CHIC team have extensive experience orchestrating multicultural celebrations in Coral Gables. We routinely coordinate South Asian Baraats through lush estate motor courts, authentic Middle Eastern Zaffa drummers down grand Biltmore staircases, Jewish Chuppah ceremonies under historic banyan canopies, and vibrant multi-day fusion celebrations.",
  },
  {
    question: "When should we hire our Coral Gables wedding planner?",
    answer:
      "Historic venues in Coral Gables regularly book out 12 to 18 months in advance, especially during the prime South Florida wedding months of October through May. We encourage couples to engage Très CHIC before finalizing a venue contract so we can review hidden logistical expenses, load-in restrictions, and vendor exclusivity terms.",
  },
];

const coralGablesVenues = [
  {
    name: "The Biltmore Hotel Coral Gables",
    location: "Anastasia Avenue, Coral Gables",
    description:
      "A National Historic Landmark renowned for Mediterranean Revival architecture, hand-painted vaulted ceilings, majestic colonnade courtyards, and iconic ballrooms.",
    image: media.ballroomBlushFlorals,
    highlight: "Mediterranean Architectural Majesty",
  },
  {
    name: "Coral Gables Country Club",
    location: "Granada Boulevard, Coral Gables",
    description:
      "Historic 1920s elegance featuring traditional coral stone walls, crystal chandeliers, manicured gardens, and grand ballrooms designed for lavish wedding celebrations.",
    image: media.candlelitHeadTable,
    highlight: "Historic Coral Stone & Crystal Elegance",
  },
  {
    name: "Fairchild Tropical Botanic Garden",
    location: "Old Cutler Road, Coral Gables",
    description:
      "An 83-acre subtropical paradise. Ideal for couples seeking romantic garden ceremonies beneath towering banyan trees, lakeside marquee tenting, and verdant botanical backdrops.",
    image: media.gardenReceptionTallFlorals,
    highlight: "Botanical Canopy & Lakeside Marquee",
  },
  {
    name: "Hotel Colonnade Coral Gables",
    location: "Miracle Mile, Coral Gables",
    description:
      "Neoclassical architecture meets modern chic along Coral Gables' famed Miracle Mile. Features a dramatic marble staircase, vaulted rotunda, and illuminated ballroom.",
    image: media.ballroomDanceFloor,
    highlight: "Grand Rotunda & Marble Staircase",
  },
];

const planningTiers = [
  {
    slug: "full-service-coral-gables",
    title: "Full-Service Coral Gables Wedding Planning & Design",
    investment: "Starting at $12,500",
    badge: "Most Requested · Complete White-Glove Curation",
    body: "For couples desiring comprehensive, stress-free curation. We oversee venue negotiations, custom spatial and floral design, budget architecture, vendor black-book curation, and total wedding weekend management across Coral Gables.",
    features: [
      "Coral Gables venue scouting & rigorous contract negotiation",
      "Full bespoke design deck: color palettes, linens, floral art & 3D floor plans",
      "Curated recommendations for elite South Florida creative teams",
      "Management of municipal noise permits & historical preservation rules",
      "Executive on-site coordination with lead planner and assistants for 14+ hours",
    ],
  },
  {
    slug: "partial-planning-coral-gables",
    title: "Partial Wedding Planning & Design Direction",
    investment: "$7,500 to $9,500+",
    badge: "Design Direction & Logistics Mastery",
    body: "For couples who have reserved their Coral Gables venue and want a seasoned luxury planner to elevate their aesthetic concept, assemble the perfect vendor team, and streamline logistics into a seamless execution.",
    features: [
      "Review of existing venue contracts and confirmed vendor agreements",
      "Cohesive styling direction: tablescapes, lighting schemes, and paper suites",
      "Targeted introductions to remaining top-tier Coral Gables creative partners",
      "Master production schedule creation beginning 3 to 4 months prior",
      "Rehearsal direction and complete wedding day execution through teardown",
    ],
  },
  {
    slug: "month-of-coordination-coral-gables",
    title: "Month-Of & Wedding Week Coordination",
    investment: "$3,250 to $5,500+",
    badge: "Flawless Execution & Logistics Takeover",
    body: "You have designed the vision; now let an experienced Coral Gables coordinator take the wheel. Beginning 6 to 8 weeks out, we step in to audit vendor contracts, coordinate load-in schedules, run your rehearsal, and ensure your wedding day is utterly flawless.",
    features: [
      "Complete vendor contract review and insurance verification",
      "Creation of an exhaustive minute-by-minute master production timeline",
      "Direct coordination with Coral Gables venue managers and audio engineers",
      "Ceremony rehearsal direction the day prior",
      "Full-day on-site management from morning prep to final send-off",
    ],
  },
];

export const Route = createFileRoute("/wedding-planner-coral-gables")({
  head: () => ({
    meta: [
      {
        title: "Wedding Planner Coral Gables | Luxury Wedding Planning & Design · Très CHIC",
      },
      {
        name: "description",
        content:
          "Top luxury wedding planner in Coral Gables, FL. Très CHIC orchestrates bespoke full-service planning, artistic design & day-of coordination for The Biltmore Hotel, Coral Gables Country Club, and historic estates.",
      },
      {
        name: "keywords",
        content:
          "wedding planner coral gables, luxury wedding planner coral gables, best wedding planner in coral gables, coral gables wedding planner, the biltmore wedding planner, coral gables country club wedding planner, wedding coordinator coral gables, wedding designer coral gables florida, south florida luxury wedding planner",
      },
      {
        property: "og:title",
        content: "Wedding Planner Coral Gables | Luxury Wedding Planning & Design · Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Bespoke wedding planning and design for iconic Coral Gables celebrations. Full-service curation, exquisite design, and seamless day-of execution by Mariane Fahmy.",
      },
      {
        property: "og:url",
        content: "https://treschiceventplanning.com/wedding-planner-coral-gables",
      },
      {
        property: "og:image",
        content: media.ballroomBlushFlorals,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Wedding Planner Coral Gables | Luxury Wedding Planning & Design · Très CHIC",
      },
      {
        name: "twitter:description",
        content:
          "Bespoke luxury wedding planning in Coral Gables. Specializing in The Biltmore Hotel, Coral Gables Country Club, Fairchild Gardens, and historic estates.",
      },
      {
        name: "twitter:image",
        content: media.ballroomBlushFlorals,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://treschiceventplanning.com/wedding-planner-coral-gables",
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
              "@id": "https://treschiceventplanning.com/wedding-planner-coral-gables#business",
              name: "Très CHIC Event Planning & Design - Wedding Planner Coral Gables",
              alternateName: [
                "Wedding Planner Coral Gables",
                "Best Wedding Planner in Coral Gables",
                "Luxury Wedding Planner Coral Gables",
                "The Biltmore Wedding Planner",
                "Coral Gables Wedding Coordinator",
              ],
              serviceType: "Wedding Planner in Coral Gables",
              description:
                "Top luxury wedding planner in Coral Gables, FL. Bespoke full-service planning, artistic styling, and day-of coordination for The Biltmore Hotel, Coral Gables Country Club, and historic estates.",
              url: "https://treschiceventplanning.com/wedding-planner-coral-gables",
              telephone: site.phone,
              email: site.email,
              priceRange: "$$$$",
              image: media.ballroomBlushFlorals,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Coral Gables",
                addressRegion: "FL",
                postalCode: "33134",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.7215,
                longitude: -80.2684,
              },
              areaServed: [
                { "@type": "City", name: "Coral Gables" },
                { "@type": "City", name: "Coconut Grove" },
                { "@type": "City", name: "South Miami" },
                { "@type": "City", name: "Pinecrest" },
                { "@type": "AdministrativeArea", name: "Miami-Dade County" },
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
                name: "Coral Gables Wedding Planning Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full-Service Wedding Planning Coral Gables",
                      description:
                        "Comprehensive white-glove planning, design, and production for Coral Gables celebrations.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Partial Wedding Planning Coral Gables",
                      description:
                        "Design elevation and logistics takeover for couples with a confirmed Coral Gables venue.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Month-Of Wedding Coordination Coral Gables",
                      description:
                        "Logistical takeover, timeline design, and full-day execution in Coral Gables.",
                    },
                  },
                ],
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/wedding-planner-coral-gables#faq",
              mainEntity: coralGablesFaqs.map((faq) => ({
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
              "@id": "https://treschiceventplanning.com/wedding-planner-coral-gables#breadcrumb",
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
                  name: "Wedding Planner Coral Gables",
                  item: "https://treschiceventplanning.com/wedding-planner-coral-gables",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: WeddingPlannerCoralGablesPage,
});

function WeddingPlannerCoralGablesPage() {
  const featuredReviews = reviews
    .filter((r) => r.category === "Weddings" || r.category === "Multicultural & Fusion")
    .slice(0, 4);

  return (
    <>
      {/* Editorial Inner Page Hero */}
      <PageHero
        eyebrow="CORAL GABLES WEDDING PLANNER & DESIGNER"
        seoH1="Wedding Planner Coral Gables · Best Luxury Wedding Planning & Design"
        headline="Mediterranean Romance. Historic Grandeur. Masterfully Planned."
        body="From grand ballroom galas at The Biltmore to romantic courtyard receptions framed by coral stone and royal palms, Très CHIC delivers bespoke luxury wedding planning, visionary design, and unflappable coordination across Coral Gables, Florida. Led by Mariane Fahmy, we carry every logistical detail so you can simply live your celebration."
        image={media.ballroomBlushFlorals}
        imageAlt="Luxury wedding reception in Coral Gables with blush florals and grand ballroom chandelier by Très CHIC"
        fullScreen
      />

      {/* Floating Immediate Action Bar — Built for Instant Conversions */}
      <div className="bg-emerald-deep text-ivory py-4 px-6 border-y border-gold/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping hidden sm:block" />
            <p className="text-xs sm:text-sm tracking-wide text-ivory/90 font-serif">
              <span className="text-gold font-semibold">Coral Gables Dates Open:</span> Limited dates available for 2026/2027 celebrations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-white transition-colors bg-white/5 py-1.5 px-3.5 rounded border border-gold/40"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Mariane: {site.phone}</span>
            </a>
            <CtaButton to="/start-planning" size="sm" variant="gold">
              Check Date
            </CtaButton>
          </div>
        </div>
      </div>

      <PressStrip />

      {/* Luxury Credentials & Trust Signals Bar */}
      <section className="bg-stone-900 text-ivory py-10 border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-serif text-gold">20+ Years</p>
            <p className="text-xs tracking-wider uppercase text-ivory/70">Executive Logistics Experience</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-serif text-gold">5.0 ★★★★★</p>
            <p className="text-xs tracking-wider uppercase text-ivory/70">Google Verified Client Reviews</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-serif text-gold">White-Glove</p>
            <p className="text-xs tracking-wider uppercase text-ivory/70">Single-Weekend Exclusivity</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-serif text-gold">Zero Surprises</p>
            <p className="text-xs tracking-wider uppercase text-ivory/70">Permits, Noise & Church Curfews</p>
          </div>
        </div>
      </section>

      {/* Section 1: Editorial Introduction & The Coral Gables Distinction */}
      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow>Bespoke Coral Gables Wedding Planning</Eyebrow>
            <h2 className="display-lg rule-gold mt-4 text-emerald font-serif text-balance">
              Timeless Mediterranean architecture elevated by high-stakes operational discipline.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Known as “The City Beautiful,” Coral Gables represents the pinnacle of romantic Old Florida luxury. With its winding tree-lined avenues, limestone fountains, and landmark Mediterranean Revival estates, celebrating here feels transportive—yet executing here requires deep local knowledge of municipal sound limits, historical load-in protocols, and strict church timelines.
              </p>
              <p>
                Founded by former corporate operations director <strong>Mariane Fahmy</strong>, Très CHIC is celebrated across South Florida for mastering the intricate logistics behind high-production Coral Gables celebrations. We navigate the venue constraints, coordinate with specialized vendor teams, and craft custom production timelines that keep your day running effortlessly.
              </p>
              <p>
                Whether you are hosting an intimate courtyard dinner at Coral Gables Country Club or a regal 300-guest ballroom reception at The Biltmore, Très CHIC manages every detail behind the scenes so you and your loved ones remain fully immersed in every unforgettable moment.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <CtaButton to="/start-planning" variant="primary">
                Schedule a Consultation
              </CtaButton>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-emerald/80 transition-colors font-serif"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Direct Line: {site.phone}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={media.candlelitHeadTable}
                  alt="Coral Gables wedding head table with floral arches, crystal glassware, and candlelight"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-deep text-ivory p-6 rounded-sm shadow-xl max-w-xs border border-gold/30 hidden sm:block">
                <p className="font-serif text-lg text-gold italic">“Mariane was the best investment we made for our Biltmore wedding.”</p>
                <p className="text-xs uppercase tracking-wider text-ivory/80 mt-2">— Verified Coral Gables Couple</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Section 2: Coral Gables Iconic Venues Expertise */}
      <Section tone="ivory">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Venue Mastery</Eyebrow>
          <h2 className="display-lg rule-gold mt-3 text-emerald font-serif">
            Iconic Coral Gables Wedding Venues
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            From historic Gilded Age landmarks to lush botanical gardens, we maintain deep operational relationships with venue teams and private clubs across Coral Gables.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {coralGablesVenues.map((venue, idx) => (
            <Reveal key={venue.name} delay={idx * 100}>
              <div className="group bg-white rounded-sm border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={venue.image}
                    alt={`${venue.name} in Coral Gables`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-deep/90 backdrop-blur-sm text-gold text-xs font-serif px-3 py-1 rounded border border-gold/30">
                    {venue.highlight}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>{venue.location}</span>
                    </div>
                    <h3 className="font-serif text-xl text-emerald mb-3">{venue.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{venue.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-serif italic">Curated by Très CHIC</span>
                    <Link
                      to="/start-planning"
                      className="text-xs uppercase tracking-wider font-semibold text-emerald hover:text-gold flex items-center gap-1 transition-colors"
                    >
                      Inquire About Venue <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 3: High-Converting Investment Packages */}
      <Section tone="soft">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>Transparent Investment & Scope</Eyebrow>
          <h2 className="display-lg rule-gold mt-3 text-emerald font-serif">
            Coral Gables Wedding Planning Services
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Every celebration receives a bespoke proposal tailored to your guest count, architectural venue complexity, and multi-day production needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {planningTiers.map((tier, idx) => (
            <Reveal key={tier.slug} delay={idx * 150}>
              <div
                className={`h-full rounded-sm border p-8 flex flex-col justify-between transition-all duration-300 ${
                  idx === 0
                    ? "bg-emerald-deep text-ivory border-gold/40 shadow-2xl relative"
                    : "bg-white text-foreground border-stone-200 shadow-sm hover:shadow-md"
                }`}
              >
                {idx === 0 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-emerald-deep text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 rounded shadow">
                    Most Popular Choice
                  </div>
                )}
                <div>
                  <span
                    className={`text-xs uppercase tracking-widest font-semibold ${
                      idx === 0 ? "text-gold" : "text-emerald"
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <h3 className={`font-serif text-2xl mt-2 ${idx === 0 ? "text-ivory" : "text-emerald"}`}>
                    {tier.title}
                  </h3>
                  <div className="mt-4 pb-4 border-b border-border/30">
                    <span className={`text-xl font-serif font-bold ${idx === 0 ? "text-gold" : "text-emerald"}`}>
                      {tier.investment}
                    </span>
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${idx === 0 ? "text-ivory/80" : "text-muted-foreground"}`}>
                    {tier.body}
                  </p>

                  <ul className="mt-6 space-y-3 text-xs leading-normal">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${idx === 0 ? "text-gold" : "text-emerald"}`} />
                        <span className={idx === 0 ? "text-ivory/90" : "text-foreground/90"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border/20">
                  <CtaButton
                    to="/start-planning"
                    variant={idx === 0 ? "gold" : "primary"}
                    className="w-full text-center"
                  >
                    Select This Experience
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 4: Verified Client Reviews */}
      <Section tone="ivory">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Client Acclaim</Eyebrow>
          <h2 className="display-lg rule-gold mt-3 text-emerald font-serif">
            Words from Très CHIC Couples
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Verified 5.0-star reviews from couples whose celebrations were planned and executed by Mariane Fahmy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredReviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 100}>
              <div className="bg-white p-7 rounded-sm border border-stone-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 text-gold mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="font-serif text-stone-800 text-sm sm:text-base leading-relaxed italic">
                    "{r.quote}"
                  </blockquote>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-muted-foreground">
                  <div>
                    <span className="font-semibold text-emerald block">{r.author}</span>
                    <span>{r.location}</span>
                  </div>
                  <span className="text-stone-400">{r.source}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 5: Coral Gables FAQs */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow>Expert Guidance</Eyebrow>
            <h2 className="display-lg rule-gold mt-3 text-emerald font-serif">
              Coral Gables Wedding Planning FAQs
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base">
              Answers to the most common questions couples ask when planning a high-end celebration in historic Coral Gables.
            </p>
          </div>

          <FaqAccordion items={coralGablesFaqs} />
        </div>
      </Section>

      {/* Cross-linking to Other Luxury Areas */}
      <section className="bg-emerald-deep text-ivory py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-serif uppercase tracking-widest text-gold mb-2">Explore Surrounding South Florida Destinations</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs tracking-wider">
            <Link to="/wedding-planner-miami" className="text-ivory/80 hover:text-gold transition-colors underline underline-offset-4">
              Wedding Planner Miami
            </Link>
            <span className="text-gold/40">·</span>
            <Link to="/wedding-planner-palm-beach" className="text-ivory/80 hover:text-gold transition-colors underline underline-offset-4">
              Wedding Planner Palm Beach
            </Link>
            <span className="text-gold/40">·</span>
            <Link to="/multicultural-weddings" className="text-ivory/80 hover:text-gold transition-colors underline underline-offset-4">
              Multicultural & Fusion Weddings
            </Link>
            <span className="text-gold/40">·</span>
            <Link to="/destination-weddings" className="text-ivory/80 hover:text-gold transition-colors underline underline-offset-4">
              Destination Wedding Services
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <ClosingCta
        headline="Let's design your Coral Gables celebration."
        body="Limited weekend dates accepted per season. Contact Mariane Fahmy directly to reserve your date and schedule a private design consultation."
        tone="ivory"
      />
    </>
  );
}
