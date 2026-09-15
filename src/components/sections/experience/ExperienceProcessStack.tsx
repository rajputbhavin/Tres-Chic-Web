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

      <div className="space-y-16 md:space-y-24">
        {processSteps.map((step) => (
          <article key={step.n} className="overflow-hidden border-t border-border bg-background">
            <div className="grid md:min-h-[34rem] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="contents md:flex md:flex-col md:justify-between md:gap-10 md:px-12 md:py-14 lg:px-16">
                <p className="px-6 pt-9 font-display text-3xl text-gold sm:px-10 md:px-0 md:pt-0">{step.n}</p>
                <div className="contents md:block md:max-w-xl">
                  <h2 className="px-6 pt-3 display-lg text-emerald sm:px-10 md:px-0 md:pt-0">{step.title}</h2>
                  <div className="order-4 mx-6 my-6 h-px w-12 bg-gold sm:mx-10 md:mx-0" aria-hidden />
                  <p className="order-5 px-6 pb-10 lede text-muted-foreground sm:px-10 md:px-0 md:pb-0">{step.body}</p>
                </div>
              </div>

              <div className="relative order-3 min-h-72 overflow-hidden md:order-none md:row-span-2 md:min-h-full">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
