import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/data/process";

/**
 * The six planning steps in a calm editorial flow. Each step fully clears the
 * previous one so the content remains readable at every scroll speed.
 */
export function ExperienceProcessStack() {
  return (
    <Section>
      <div className="mb-14 border-b border-border pb-10 md:mb-20 md:pb-12">
        <ProcessTimeline />
      </div>

      <div className="space-y-12 md:space-y-16">
        {processSteps.map((step) => (
          <article
            key={step.n}
            className="overflow-hidden rounded-xs border border-gold/35 bg-gradient-to-br from-neutral-soft/50 via-background to-neutral-soft/30 shadow-sm transition-all duration-500 hover:border-gold/60 hover:shadow-md"
          >
            <div className="grid gap-8 p-6 sm:p-8 md:min-h-[26rem] md:grid-cols-12 md:items-center md:gap-10 lg:gap-14 lg:p-12">
              {/* Left Column: Details */}
              <div className="flex flex-col justify-center md:col-span-6 lg:col-span-7">
                {/* Clean Gold Numeral */}
                <p className="font-display text-4xl sm:text-5xl font-normal text-gold leading-none">
                  {step.n}
                </p>

                {/* Main Title */}
                <h2 className="display-lg mt-4 text-emerald font-display text-balance">
                  {step.title}
                </h2>

                {/* Gold Accent Divider */}
                <div className="my-6 flex items-center gap-2.5" aria-hidden="true">
                  <div className="h-px w-14 bg-gold" />
                  <span className="size-1.5 rotate-45 bg-gold" />
                </div>

                {/* Description Body */}
                <p className="text-base sm:text-lg leading-relaxed text-foreground/85 font-normal">
                  {step.body}
                </p>
              </div>

              {/* Right Column: Clean Framed Image (Zero text overlay) */}
              <div className="md:col-span-6 lg:col-span-5">
                <div className="group relative h-72 sm:h-96 md:h-[24rem] lg:h-[26rem] overflow-hidden rounded-xs border border-border/80 bg-black/5 shadow-md">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
