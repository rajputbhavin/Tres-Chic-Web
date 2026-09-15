import { useEffect, useState } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { homeReviews } from "@/data/home";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

/** Section 8. Social proof, as quiet editorial pull-quotes. */
export function HomeReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % homeReviews.testimonials.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <Section tone="ivory">
      <div className="grid items-center gap-x-20 gap-y-10 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.8fr)]">
        <Reveal className="order-1 self-end">
          <Eyebrow>{homeReviews.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-5 text-balance text-emerald">{homeReviews.headline}</h2>
        </Reveal>

        <Reveal delay={200} className="order-2 mx-auto w-full max-w-md md:col-start-2 md:row-span-2 md:row-start-1 md:justify-self-end">
          <img
            src={homeReviews.image.src}
            alt={homeReviews.image.alt}
            className="aspect-[2/3] w-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal
          className="order-3 self-start"
          delay={100}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="mt-9 grid" aria-label="Client testimonials">
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
                <footer className="caption mt-7">{testimonial.attribution}</footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2" aria-label="Choose a testimonial">
            {homeReviews.testimonials.map((testimonial, index) => (
              <Button
                key={testimonial.attribution + index}
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 rounded-full p-0 hover:bg-neutral-soft"
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full transition-all duration-500",
                    index === activeIndex ? "w-6 bg-emerald" : "bg-taupe",
                  )}
                  aria-hidden
                />
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}