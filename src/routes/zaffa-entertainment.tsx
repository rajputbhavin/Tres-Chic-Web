import { createFileRoute } from "@tanstack/react-router";
import { Disc, Drum, Music } from "lucide-react";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

import zaffaBandImg from "@/assets/gallery/Zaffa/1.jpg";
import cocktailHourImg from "@/assets/gallery/Zaffa/2.jpg";
import receptionImg from "@/assets/gallery/Zaffa/3.jpg";

export const Route = createFileRoute("/zaffa-entertainment")({
  head: () => ({
    meta: [
      {
        title: "Zaffa & Middle Eastern Entertainment | Très CHIC Event Planning & Design",
      },
      {
        name: "description",
        content:
          "Miami-based live entertainment offering authentic grand entrance Zaffa bands, takht ensembles, Arabic and fusion DJs, and full reception entertainment.",
      },
      {
        property: "og:title",
        content: "Zaffa & Middle Eastern Entertainment | Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Electrifying grand entrances, live takht ensembles, and authentic celebratory rhythms that elevate luxury weddings across South Florida.",
      },
      { property: "og:url", content: "/zaffa-entertainment" },
    ],
    links: [{ rel: "canonical", href: "/zaffa-entertainment" }],
  }),
  component: ZaffaEntertainmentPage,
});

const offerings = [
  {
    step: "01",
    icon: Drum,
    title: "ZAFFA BAND",
    tagline: "Miami Based Zaffa Group Providing Middle Eastern Zaffa",
    image: zaffaBandImg,
    imageAlt: "Live Zaffa Band performance with traditional drums and attire",
    items: [
      "Grand entrance zaffa",
      "Toboul and zamer zaffa (drummers and mizmar)",
      "Traditional zaffa",
      "High tech Modern zaffa (all LED’s instruments)",
      "Fusion zaffa (includes saxophone)",
    ],
  },
  {
    step: "02",
    icon: Music,
    title: "COCKTAIL HOUR ENTERTAINMENT",
    tagline:
      "Looking for a way to entertain your guests during cocktail hour, look no further!",
    image: cocktailHourImg,
    imageAlt: "Cocktail hour live instrumental and Arabic fusion musicians",
    items: [
      "Takht band (traditional Middle Eastern instrumental)",
      "Arabic fusion (keyboard, violin, nay, kanun, saxophone)",
      "Live instruments (violin, nay, saxophone or kanun)",
      "Jazz trio",
      "Customized entertainment",
    ],
  },
  {
    step: "03",
    icon: Disc,
    title: "RECEPTION ENTERTAINMENT",
    tagline:
      "Liven up the party at your wedding with any or a combination of our reception offerings!",
    image: receptionImg,
    imageAlt: "Vibrant wedding reception entertainment with live band and dancers",
    items: [
      "Live Entertainment — Full band with singers from anywhere in the states and Canada",
      "DJ (Arabic & English)",
      "Modern Fusion DJ (DJ & Jazz trio)",
      "Traditional Fusion DJ (DJ & keyboard, violin, nay, kanun)",
      "Oriental dancers",
      "Tabel players",
      "Zaffa group entertainment show",
    ],
  },
];

function ZaffaEntertainmentPage() {
  return (
    <>
      {/* Editorial Hero with Cinematic YouTube Player */}
      <header className="relative isolate overflow-hidden bg-background text-foreground pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Subtle warm ambient background glow */}
        <div
          className="pointer-events-none absolute -top-40 right-1/2 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 text-center">
          <Reveal>
            <p className="eyebrow text-gold uppercase tracking-[0.24em]">
              In-House Cultural Entertainment
            </p>
            <h1 className="display-xl mt-4 text-balance text-emerald">
              Zaffa & Middle Eastern Entertainment
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              The thunderous beats of the drum, the soul of authentic melodies, and the
              unbridled joy of a grand entrance. We bring Miami&apos;s premier Zaffa ensemble
              seamlessly into your wedding itinerary.
            </p>
          </Reveal>

          {/* Featured YouTube Video Embed */}
          <Reveal delay={150} className="mt-12 md:mt-16">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-xs border border-gold/40 bg-black shadow-xl shadow-taupe/20">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/B0IQ3tVP8so?rel=0&modestbranding=1"
                  title="Zaffa Entertainment Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 size-full border-0"
                />
              </div>
            </div>
            <p className="mt-4 text-xs tracking-wider uppercase text-muted-foreground">
              Live performance showcase &bull; Zaffa Entertainment
            </p>
          </Reveal>
        </div>
      </header>

      {/* Narrative Context Banner */}
      <section className="border-y border-gold/30 bg-neutral-soft/60 py-10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-serif italic text-lg md:text-xl text-emerald/90 leading-relaxed">
            &ldquo;From historical estates like Vizcaya to oceanfront ballrooms, coordinating a
            live 14-piece Zaffa orchestra requires strict timing and deep cultural respect. We
            ensure every rhythm is planned to perfection.&rdquo;
          </p>
        </div>
      </section>

      {/* Step-by-Step Offerings with Zigzag Layout */}
      <Section className="py-20 md:py-32">
        <div className="space-y-24 md:space-y-36">
          {offerings.map((offering, idx) => {
            const isReversed = idx % 2 === 1;
            const Icon = offering.icon;

            return (
              <div
                key={offering.step}
                className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <Reveal
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-xs border border-gold/30 bg-neutral-soft shadow-lg">
                    <img
                      src={offering.image}
                      alt={offering.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 bg-emerald/90 backdrop-blur-xs border border-gold/50 px-3 py-1 text-xs tracking-widest text-gold uppercase font-medium">
                      Step {offering.step}
                    </div>
                  </div>
                </Reveal>

                {/* Content Column */}
                <Reveal
                  delay={120}
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="border-l-2 border-gold pl-6 py-2">
                    <div className="flex items-center gap-2 text-gold">
                      <Icon className="size-4" />
                      <span className="eyebrow tracking-[0.2em]">Service Tier {offering.step}</span>
                    </div>
                    <h2 className="display-md mt-2 text-emerald">
                      {offering.title}
                    </h2>
                    <p className="mt-3 text-sm md:text-base font-medium text-foreground/80 leading-relaxed">
                      {offering.tagline}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-border/60 pt-6">
                    <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-taupe font-semibold mb-4">
                      Featured Offerings & Ensembles
                    </p>
                    <ul className="space-y-3">
                      {offering.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-3.5 text-sm md:text-[0.9375rem] text-foreground/90 leading-snug"
                        >
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-gold"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Closing Call to Action */}
      <ClosingCta
        headline="Ready for an unforgettable celebration?"
        body="Let's craft the grand entrance, cocktail hour, and reception music your guests will talk about for years."
      />
    </>
  );
}
