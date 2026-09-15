import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { homeHero } from "@/data/home";

/** Section 1. [HERO — REAL WEDDING COUPLE / PURE DESIRE / 16:9] */
export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-screen min-h-[100svh] min-h-[100dvh] items-end overflow-hidden bg-emerald-deep">
      <img
        className="hero-video pointer-events-none absolute inset-0 size-full object-cover object-center"
        src={homeHero.image}
        alt={homeHero.imageAlt}
        fetchPriority="high"
      />

      <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden />

<div className="relative mx-auto w-full max-w-6xl px-6 pt-40 pb-24 text-center md:px-10 md:pb-32">
        <Reveal className="mx-auto w-full">
          <h1 className="display-2xl mx-auto max-w-5xl text-ivory">
            {homeHero.headline}
            <br />
            {homeHero.headlineSecond}
          </h1>
          <p className="hero-body-delay lede mx-auto mt-7 max-w-xl text-ivory/90">{homeHero.body}</p>
        </Reveal>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden
      >
        <span className="scroll-pulse h-10 w-px bg-ivory/50" />
        <ChevronDown className="scroll-pulse size-4 text-ivory/60" />
      </div>
    </section>
  );
}
