import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { homeHero } from "@/data/home";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Section 1. [HERO — REAL WEDDING COUPLE / PURE DESIRE / 16:9] */
export function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Preload relevant carousel images into browser cache on mount for instant 4G loading
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
    const listToPreload = isMobile && homeHero.mobileImages?.length ? homeHero.mobileImages : homeHero.images;
    if (!listToPreload) return;
    listToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Advance image every 3 seconds
  useEffect(() => {
    if (prefersReducedMotion || !homeHero.images || homeHero.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homeHero.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className="relative isolate flex min-h-screen min-h-[100svh] min-h-[100dvh] items-end overflow-hidden bg-emerald-deep">
      {/* Background Image Carousel / Slideshow with Responsive Mobile WebP Support */}
      <div className="pointer-events-none absolute inset-0 size-full overflow-hidden" aria-hidden="true">
        {homeHero.images.map((src, index) => {
          const isActive = index === currentIndex;
          const mobileSrc = homeHero.mobileImages?.[index];
          return (
            <picture
              key={src}
              className={`hero-video pointer-events-none absolute inset-0 size-full transition-opacity duration-500 ease-in-out will-change-[opacity] ${
                isActive ? "z-[2] opacity-100" : "z-[1] opacity-0"
              }`}
            >
              {mobileSrc ? (
                <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />
              ) : null}
              <img
                className="size-full object-cover object-center"
                src={src}
                alt={index === 0 ? homeHero.imageAlt : ""}
                fetchPriority={index === 0 ? "high" : "low"}
                loading="eager"
                decoding="async"
              />
            </picture>
          );
        })}
      </div>

      <div className="hero-scrim pointer-events-none absolute inset-0 z-10" aria-hidden />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-36 pb-20 text-center md:px-10 md:pb-28">
        <Reveal className="mx-auto w-full">
          <h1 className="display-2xl mx-auto max-w-5xl text-ivory drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            {homeHero.headline}
            <br />
            {homeHero.headlineSecond}
          </h1>
          <p className="hero-body-delay lede mx-auto mt-7 max-w-xl text-ivory drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">{homeHero.body}</p>
        </Reveal>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden
      >
        <span className="scroll-pulse h-10 w-px bg-ivory/50" />
        <ChevronDown className="scroll-pulse size-4 text-ivory/60" />
      </div>
    </section>
  );
}
