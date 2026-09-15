import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { celebrationShowcases } from "@/data/celebrations";
import { cn } from "@/lib/utils";

const fiveImageLayout = [
  "col-start-1 col-span-7 row-start-1 row-span-8",
  "col-start-8 col-span-5 row-start-1 row-span-5",
  "col-start-8 col-span-5 row-start-6 row-span-3",
  "col-start-1 col-span-5 row-start-9 row-span-4",
  "col-start-6 col-span-7 row-start-9 row-span-4",
];

const fourImageLayout = [
  "col-start-1 col-span-7 row-start-1 row-span-7",
  "col-start-8 col-span-5 row-start-1 row-span-7",
  "col-start-1 col-span-5 row-start-8 row-span-5",
  "col-start-6 col-span-7 row-start-8 row-span-5",
];

const revealDelays = ["delay-0", "delay-75", "delay-100", "delay-150", "delay-200"];

/** Event index paired with a bounded, responsive editorial image mosaic. */
export function CelebrationShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = celebrationShowcases[activeIndex] ?? celebrationShowcases[0];

  if (!active) return null;

  const layout = active.images.length === 4 ? fourImageLayout : fiveImageLayout;

  return (
    <Section>
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <Reveal className="flex flex-col">
          <Eyebrow className="mb-7">What we plan</Eyebrow>
          <div
            className="flex flex-1 flex-col border-y border-border"
            role="tablist"
            aria-label="Celebration types"
          >
            {celebrationShowcases.map((showcase, index) => {
              const selected = index === activeIndex;

              return (
                <Button
                  key={showcase.title}
                  type="button"
                  role="tab"
                  variant="ghost"
                  aria-selected={selected}
                  aria-controls="celebration-gallery"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group h-auto min-h-16 w-full justify-between rounded-none border-b border-border px-4 py-4 text-left shadow-none last:border-b-0 sm:min-h-[4.35rem] sm:px-5",
                    "focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset",
                    selected
                      ? "bg-emerald text-ivory hover:bg-emerald hover:text-ivory"
                      : "bg-transparent text-emerald hover:bg-neutral-soft hover:text-emerald",
                  )}
                >
                  <span className="min-w-0 whitespace-normal font-display text-xl font-normal leading-tight sm:text-2xl">
                    {showcase.title}
                  </span>
                  <span className="ml-4 flex h-7 w-12 shrink-0 items-center overflow-hidden" aria-hidden>
                    <ArrowRight
                      strokeWidth={1.25}
                      className={cn(
                        "size-8 transition-all duration-500 ease-out",
                        selected
                          ? "event-arrow-flight translate-x-0 opacity-100"
                          : "-translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                      )}
                    />
                  </span>
                </Button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="min-h-0 lg:relative">
          <div
            id="celebration-gallery"
            role="tabpanel"
            aria-label={`${active.title} gallery`}
            className="h-[32rem] overflow-hidden bg-neutral-soft sm:h-[38rem] lg:absolute lg:inset-0 lg:h-auto"
          >
            <div key={active.title} className="grid h-full grid-cols-12 grid-rows-12 gap-2 sm:gap-3">
              {active.images.map((image, index) => (
                <figure
                  key={image.src}
                  className={cn(
                    "celebration-image-reveal min-h-0 overflow-hidden",
                    layout[index],
                    revealDelays[index],
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.025] motion-reduce:transition-none"
                  />
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}