import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeReviews } from "@/data/home";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

/** Section 8. Social proof, as quiet editorial pull-quotes with auto-rotation & controls. */
export function HomeReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = homeReviews.testimonials.length;
  const reducedMotion = usePrefersReducedMotion();

  // Auto-play: cycles automatically every 5.5 seconds ("khud ghumte rahe")
  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [activeIndex, reducedMotion, total]);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <Section tone="ivory">
      <div className="grid items-center gap-x-20 gap-y-10 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.8fr)]">
        <Reveal className="order-1 self-end">
          <Eyebrow>{homeReviews.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-5 text-balance text-emerald">{homeReviews.headline}</h2>
        </Reveal>

        <Reveal
          delay={200}
          className="order-2 mx-auto w-full max-w-md md:col-start-2 md:row-span-2 md:row-start-1 md:justify-self-end"
        >
          <img
            src={homeReviews.image.src}
            alt={homeReviews.image.alt}
            className="aspect-[2/3] w-full object-cover rounded-xs border border-border/60 shadow-md"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="order-3 self-start" delay={100}>
          <div className="mt-9 grid min-h-[14rem] sm:min-h-[12rem]" aria-label="Client testimonials">
            {homeReviews.testimonials.map((testimonial, index) => (
              <blockquote
                key={testimonial.quote}
                aria-hidden={index !== activeIndex}
                className={cn(
                  "col-start-1 row-start-1 transition-all duration-700 ease-out motion-reduce:transition-none",
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0",
                )}
              >
                <p className="font-display text-[1.25rem] leading-[1.5] text-emerald md:text-[1.5rem]">
                  {testimonial.quote}
                </p>
                <footer className="caption mt-7 text-xs uppercase tracking-[0.16em] text-taupe font-semibold">
                  {testimonial.attribution}
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Controls: Left/Right Arrow Buttons + Indicator Dots */}
          <div className="mt-8 flex items-center gap-4" aria-label="Testimonials navigation">
            {/* Left Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex size-9 items-center justify-center rounded-full border border-border bg-background text-emerald shadow-xs transition-all duration-300 hover:border-gold hover:bg-emerald hover:text-ivory focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
            >
              <ChevronLeft className="size-4.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {homeReviews.testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.attribution + index}
                  type="button"
                  className="flex h-7 items-center justify-center p-1 cursor-pointer"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  <span
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      index === activeIndex ? "w-6 bg-emerald" : "w-1.5 bg-taupe/50 hover:bg-taupe",
                    )}
                    aria-hidden
                  />
                </button>
              ))}
            </div>

            {/* Right Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex size-9 items-center justify-center rounded-full border border-border bg-background text-emerald shadow-xs transition-all duration-300 hover:border-gold hover:bg-emerald hover:text-ivory focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
            >
              <ChevronRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}