import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeCrisisStory } from "@/data/home";

/** Section 5. Proof of judgment under pressure, the venue-cancellation story. */
export function HomeCrisisStory() {
  return (
    <Section tone="emerald" className="py-24 md:py-36">
      <div className="grid items-center gap-x-20 gap-y-10 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.8fr)]">
        <Reveal className="order-1 self-end">
          <Eyebrow tone="ivory">{homeCrisisStory.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-6 text-balance text-ivory">{homeCrisisStory.headline}</h2>
        </Reveal>

        <Reveal delay={200} className="order-2 mx-auto w-full max-w-md md:col-start-2 md:row-span-3 md:row-start-1 md:justify-self-end">
          <img
            src={homeCrisisStory.image.src}
            alt={homeCrisisStory.image.alt}
            className="aspect-[2/3] w-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="order-3 self-start" delay={100}>
          <div className="mt-9 space-y-5 text-ivory/80">
            {homeCrisisStory.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="text-ivory">{homeCrisisStory.emphasis}</p>
          </div>
        </Reveal>

        <Reveal className="order-4 self-start" delay={150}>
          <div className="mt-11">
            <CtaButton to={homeCrisisStory.cta.to} variant="outline-ivory">
              {homeCrisisStory.cta.label}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
