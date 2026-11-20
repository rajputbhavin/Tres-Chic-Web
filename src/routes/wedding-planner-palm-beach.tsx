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

const palmBeachFaqs = [
  {
    question: "How much does a luxury wedding planner in Palm Beach cost?",
    answer:
      "In Palm Beach, luxury wedding planning investments reflect the exceptional caliber, high-production standards, and vendor exclusivity of the island. At Très CHIC, our Month-of & Wedding Week Coordination starts at $3,250 to $5,500+, Partial Planning ranges from $7,500 to $9,500+, and Full-Service Planning & Bespoke Production starts at $12,500. Multi-day estate celebrations and marquee tented events along Ocean Boulevard receive tailored proposals matching their scale and staffing requirements.",
  },
  {
    question: "Why hire a private wedding planner for The Breakers, Flagler Museum, or Palm Beach estates?",
    answer:
      "Venues like The Breakers and Flagler Museum operate under rigorous preservation guidelines, tight vendor load-in windows, and exacting production standards. A venue manager represents the venue; your private wedding planner represents you. Très CHIC manages your entire design vision, negotiates outside vendor contracts, drafts 3D spatial floor plans, coordinates complex audio-visual and generator needs, oversees guest transportation, and runs minute-by-minute rehearsals and wedding-day logistics.",
  },
  {
    question: "When should couples book a wedding planner for a Palm Beach wedding?",
    answer:
      "The Palm Beach high season spans from November through May, when premier venues and elite vendor teams book 12 to 18 months in advance. We strongly recommend engaging your wedding planner before signing a venue contract. Mariane assesses venue agreements, hidden infrastructure fees (permit curfews, power distribution, tent ballasting), and vendor exclusivity clauses to protect your budget from day one.",
  },
  {
    question: "Can Très CHIC manage multi-day weekend wedding itineraries in Palm Beach?",
    answer:
      "Yes. Most Palm Beach weddings are destination weekends for out-of-town guests. We design and execute seamless multi-day itineraries: Thursday welcome cocktails on Worth Avenue, Friday rehearsal dinners and beach club soirees, Saturday ceremonial and grand ballroom receptions, and Sunday farewell seaside brunches.",
  },
  {
    question: "How do you navigate outdoor oceanfront weather and tenting on Palm Beach island?",
    answer:
      "Island and oceanfront celebrations demand seasoned contingency logistics. We formulate comprehensive Weather Action Plans weeks prior—including engineered clear-span tenting, high-capacity commercial climate control, structural subflooring over sandy turf, whisper-quiet generator banks, and humidity-resilient floral selections that stay immaculate all evening.",
  },
  {
    question: "Do you plan multicultural, fusion, and high-production weddings in Palm Beach?",
    answer:
      "Yes, Mariane Fahmy and the Très CHIC team are renowned throughout South Florida for authentic multicultural execution. From opulent South Asian Baraats on coastal boulevards to Middle Eastern Zaffa drummers and Jewish Chuppah ceremonies under the palms, we honor family traditions with exquisite taste and logistical mastery.",
  },
];

const palmBeachVenues = [
  {
    name: "The Breakers Palm Beach",
    location: "Palm Beach, FL",
    description:
      "An iconic 140-acre Italian Renaissance resort overlooking the Atlantic. We coordinate majestic ballroom galas in the Circle and Mediterranean Ballrooms, oceanfront lawn ceremonies, and elite vendor teams.",
    image: media.ballroomSuspendedFlorals,
    highlight: "Gilded Age Oceanfront Splendor",
  },
  {
    name: "Henry Morrison Flagler Museum (Whitehall)",
    location: "Coconut Row, Palm Beach",
    description:
      "Grand Gilded Age estate featuring Beaux-Arts architecture and the marble-clad Grand Hall. We navigate historical preservation protocols, custom marquee tenting, and regal courtyard cocktail hours.",
    image: media.vizcayaVillaEvening,
    highlight: "Historic Marble Pavilion & Estate",
  },
  {
    name: "The Colony Hotel Palm Beach",
    location: "Worth Avenue District, Palm Beach",
    description:
      "The epitome of vibrant Palm Beach chic. Ideal for stylish, bespoke couples seeking whimsical pink-and-green elegance, intimate garden ceremonies, and stylish poolside soirees.",
    image: media.gardenReceptionTallFlorals,
    highlight: "Whimsical Worth Avenue Glamour",
  },
  {
    name: "Four Seasons Resort Palm Beach",
    location: "Ocean Boulevard, Palm Beach",
    description:
      "Pristine coastal luxury where ocean breezes meet Michelin-caliber culinary artistry. Perfect for private beachfront ceremonies and elevated ocean-view ballroom receptions.",
    image: media.tentedWaterfrontReception,
    highlight: "Contemporary Oceanfront Luxury",
  },
];

const planningTiers = [
  {
    slug: "full-service-palm-beach",
    title: "Full-Service Palm Beach Wedding Planning & Design",
    investment: "Starting at $12,500",
    badge: "Most Requested · Complete White-Glove Curation",
    body: "Designed for couples, multi-day celebrations, and destination clients who desire an uncompromised luxury experience. We handle venue acquisition, bespoke aesthetic fabrication, budget architecture, master timeline direction, vendor contract negotiations, and full weekend production.",
    features: [
      "Venue procurement & rigorous contract evaluation across Palm Beach",
      "Full bespoke design deck: custom color theory, linens, lighting & 3D floorplans",
      "Curated introduction to elite South Florida floral, culinary & entertainment partners",
      "Comprehensive multi-day weekend scheduling: welcome party, wedding & brunch",
      "Lead planner with multi-assistant executive team on-site for 16+ hours",
    ],
  },
  {
    slug: "partial-planning-palm-beach",
    title: "Partial Wedding Planning & Design Direction",
    investment: "$7,500 to $9,500+",
    badge: "Design Direction & Logistics Mastery",
    body: "For couples who have confirmed their Palm Beach venue and seek an experienced luxury designer to elevate their visual aesthetic, contract the remaining elite creative partners, and engineer a flawless execution plan.",
    features: [
      "In-depth review of existing venue contracts & confirmed vendors",
      "Elevated styling direction: tablescape curation, custom paper suites & lighting design",
      "Targeted recommendations for Palm Beach's premier remaining creative partners",
      "Master production schedule creation beginning 90 days prior",
      "Rehearsal direction and full wedding day coordination through final strike",
    ],
  },
  {
    slug: "month-of-coordination-palm-beach",
    title: "Month-Of & Wedding Week Coordination",
    investment: "$3,250 to $5,500+",
    badge: "Flawless Execution & Vendor Takeover",
    body: "You have planned the vision; now hand the reins to a seasoned Palm Beach wedding coordinator. Beginning 6 to 8 weeks out, we take over vendor communications, verify certificates of insurance, refine the master timeline, and direct the wedding day flawlessly.",
    features: [
      "Complete vendor contract audit and insurance verification",
      "Creation of an exhaustive minute-by-minute master production timeline",
      "Direct coordination with Palm Beach venue directors, banquet managers, and sound engineers",
      "Ceremony rehearsal direction the day prior",
      "Full-day on-site coordination from morning bridal prep through midnight exit",
    ],
  },
];

export const Route = createFileRoute("/wedding-planner-palm-beach")({
  head: () => ({
    meta: [
      {
        title: "Luxury Wedding Planner Palm Beach | Best Palm Beach Wedding Designer · Très CHIC",
      },
      {
        name: "description",
        content:
          "Premier luxury wedding planner in Palm Beach, FL. Très CHIC orchestrates bespoke full-service planning, artistic design & day-of coordination for The Breakers, Flagler Museum, and private coastal estates.",
      },
      {
        name: "keywords",
        content:
          "wedding planner palm beach, luxury wedding planner palm beach, best wedding planner in palm beach, palm beach wedding planner, wedding planner palm beach fl, the breakers wedding planner, flagler museum wedding planner, wedding coordinator palm beach, wedding designer palm beach florida, south florida luxury wedding planner",
      },
      {
        property: "og:title",
        content: "Luxury Wedding Planner Palm Beach | Best Palm Beach Wedding Designer · Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Bespoke wedding planning and design for iconic Palm Beach celebrations. Full-service curation, exquisite design, and seamless day-of execution by Mariane Fahmy.",
      },
      {
        property: "og:url",
        content: "https://treschiceventplanning.com/wedding-planner-palm-beach",
      },
      {
        property: "og:image",
        content: media.ballroomSuspendedFlorals,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Luxury Wedding Planner Palm Beach | Best Palm Beach Wedding Designer · Très CHIC",
      },
      {
        name: "twitter:description",
        content:
          "Bespoke luxury wedding planning in Palm Beach. Specializing in The Breakers, Flagler Museum, oceanfront tents, and private estates.",
      },
      {
        name: "twitter:image",
        content: media.ballroomSuspendedFlorals,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://treschiceventplanning.com/wedding-planner-palm-beach",
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
              "@id": "https://treschiceventplanning.com/wedding-planner-palm-beach#business",
              name: "Très CHIC Event Planning & Design - Luxury Wedding Planner Palm Beach",
              alternateName: [
                "Wedding Planner Palm Beach",
                "Best Wedding Planner in Palm Beach",
                "Luxury Wedding Planner Palm Beach",
                "Palm Beach Wedding Coordinator",
                "The Breakers Wedding Planner",
              ],
              serviceType: "Luxury Wedding Planner in Palm Beach",
              description:
                "Premier luxury wedding planner in Palm Beach, FL. Bespoke full-service planning, artistic styling, and day-of coordination for The Breakers, Flagler Museum, and private oceanfront estates.",
              url: "https://treschiceventplanning.com/wedding-planner-palm-beach",
              telephone: site.phone,
              email: site.email,
              priceRange: "$$$$",
              image: media.ballroomSuspendedFlorals,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Palm Beach",
                addressRegion: "FL",
                postalCode: "33480",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.7056,
                longitude: -80.0364,
              },
              areaServed: [
                { "@type": "City", name: "Palm Beach" },
                { "@type": "City", name: "West Palm Beach" },
                { "@type": "City", name: "Manalapan" },
                { "@type": "City", name: "Jupiter" },
                { "@type": "City", name: "Boca Raton" },
                { "@type": "AdministrativeArea", name: "Palm Beach County" },
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
                name: "Palm Beach Wedding Planning Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full-Service Wedding Planning Palm Beach",
                      description:
                        "Comprehensive white-glove planning, design, and production for Palm Beach weddings.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Partial Wedding Planning Palm Beach",
                      description:
                        "Design elevation and logistics takeover for couples with a confirmed Palm Beach venue.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Month-Of Wedding Coordination Palm Beach",
                      description:
                        "Logistical takeover, timeline design, and full-day execution in Palm Beach.",
                    },
                  },
                ],
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://treschiceventplanning.com/wedding-planner-palm-beach#faq",
              mainEntity: palmBeachFaqs.map((faq) => ({
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
              "@id": "https://treschiceventplanning.com/wedding-planner-palm-beach#breadcrumb",
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
                  name: "Wedding Planner Palm Beach",
                  item: "https://treschiceventplanning.com/wedding-planner-palm-beach",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: WeddingPlannerPalmBeachPage,
});

function WeddingPlannerPalmBeachPage() {
  const featuredReviews = reviews
    .filter((r) => r.category === "Weddings" || r.category === "Multicultural & Fusion")
    .slice(0, 4);

  return (
    <>
      {/* Editorial Inner Page Hero */}
      <PageHero
        eyebrow="PALM BEACH WEDDING PLANNER & DESIGNER"
        seoH1="Luxury Wedding Planner Palm Beach · Best Palm Beach Wedding Designer"
        headline="Gilded Age Grandeur. Oceanfront Grace. Flawlessly Planned."
        body="From black-tie celebrations at The Breakers to private oceanfront marquee tents along South Ocean Boulevard, Très CHIC delivers bespoke luxury wedding planning, visionary design, and unflappable coordination across Palm Beach, Florida. Led by Mariane Fahmy, we manage every high-stakes logistical nuance so you can be fully present."
        image={media.ballroomSuspendedFlorals}
        imageAlt="Luxury wedding in Palm Beach with hanging florals and grand chandeliers planned by Très CHIC"
        fullScreen
      />

      {/* Floating Immediate Action Bar — Built for Instant Conversions */}
      <div className="bg-emerald-deep text-ivory py-4 px-6 border-y border-gold/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping hidden sm:block" />
            <p className="text-xs sm:text-sm tracking-wide text-ivory/90 font-serif">
              <span className="text-gold font-semibold">Palm Beach Season Dates Open:</span> Limited dates available for 2026/2027 celebrations.
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
            <p className="text-xs tracking-wider uppercase text-ivory/70">Permits, Tenting & Audio Mastery</p>
          </div>
        </div>
      </section>

      {/* Section 1: Editorial Introduction & The Palm Beach Distinction */}
      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow>Bespoke Palm Beach Wedding Planning</Eyebrow>
            <h2 className="display-lg rule-gold mt-4 text-emerald font-serif text-balance">
              Where Palm Beach heritage meets meticulous operational mastery.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Palm Beach weddings hold a distinguished place in the world of luxury celebrations. Between the storied architecture of Whitehall, the oceanfront grandeur of The Breakers, and private manicured estates along the Atlantic, celebrations here demand an extraordinary balance of effortless coastal glamour and bulletproof logistical discipline.
              </p>
              <p>
                Founded by former Fortune 500 operations leader <strong>Mariane Fahmy</strong>, Très CHIC approaches every Palm Beach wedding with two distinct lenses: the eye of an artist that perceives every floral, textile, and lighting nuance, and the strategic mind of an executive director who anticipates structural permits, sound ordinances, and weather shifts hours before they arise.
              </p>
              <p>
                Whether you envision a black-tie gala under crystalline chandeliers or a multi-day weekend itinerary complete with Worth Avenue welcoming cocktails and private beach club soirees, we carry every high-stakes responsibility so you remain effortlessly present.
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
                  src={media.tentedLongTable}
                  alt="Palm Beach clear-top tented wedding reception with candles and floral centerpieces"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-deep text-ivory p-6 rounded-sm shadow-xl max-w-xs border border-gold/30 hidden sm:block">
                <p className="font-serif text-lg text-gold italic">“Mariane made our wedding weekend feel like royalty.”</p>
                <p className="text-xs uppercase tracking-wider text-ivory/80 mt-2">— Verified Palm Beach Couple</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Section 2: Palm Beach Iconic Venues Expertise */}
      <Section tone="ivory">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Venue Mastery</Eyebrow>
          <h2 className="display-lg rule-gold mt-3 text-emerald font-serif">
            Iconic Palm Beach Wedding Venues
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            From historic Gilded Age landmarks to world-renowned oceanfront resorts, we maintain seasoned relationships with venue directors, banquet captains, and municipal preservation officials across Palm Beach.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {palmBeachVenues.map((venue, idx) => (
            <Reveal key={venue.name} delay={idx * 100}>
              <div className="group bg-white rounded-sm border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={venue.image}
                    alt={`${venue.name} in Palm Beach`}
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
            Palm Beach Wedding Planning Services
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

      {/* Section 5: Palm Beach FAQs */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow>Expert Guidance</Eyebrow>
            <h2 className="display-lg rule-gold mt-3 text-emerald font-serif">
              Palm Beach Wedding Planning FAQs
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base">
              Answers to the most common questions couples ask when planning a high-end celebration on Palm Beach island.
            </p>
          </div>

          <FaqAccordion items={palmBeachFaqs} />
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
            <Link to="/wedding-planner-coral-gables" className="text-ivory/80 hover:text-gold transition-colors underline underline-offset-4">
              Wedding Planner Coral Gables
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
        headline="Let's bring your Palm Beach celebration to life."
        body="Limited weekend dates accepted per season. Contact Mariane Fahmy directly to reserve your date and schedule a private design consultation."
        tone="ivory"
      />
    </>
  );
}
