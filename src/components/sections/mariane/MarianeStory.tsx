import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { marianePortrait, marianeStory } from "@/data/mariane";
import { cn } from "@/lib/utils";

const emphasisClass = {
  "display-emerald": "font-display text-2xl text-emerald md:text-[1.75rem]",
  "display-gold": "font-display text-2xl text-gold md:text-[1.75rem]",
  foreground: "text-foreground",
} as const;

/** Founder narrative, portrait column plus the long-form story. */
export function MarianeStory() {
  return (
    <Section>
      <div className="grid gap-x-20 gap-y-10 md:grid-cols-[1fr_1.35fr]">
        <Reveal className="order-2 md:sticky md:top-32 md:order-1 md:row-span-2 md:self-start">
          <img
            src={marianePortrait.src}
            alt={marianePortrait.alt}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
          <p className="caption mt-4 normal-case tracking-normal">{marianePortrait.caption}</p>
        </Reveal>

        <Reveal className="order-1 self-end md:order-2" delay={100}>
          <Eyebrow>The Story</Eyebrow>
        </Reveal>
        <Reveal className="order-3 self-start" delay={150}>
          <div className="mt-7 space-y-6 text-muted-foreground">
            {marianeStory.map((paragraph) => (
              <p
                key={paragraph.text}
                className={cn(paragraph.emphasis && emphasisClass[paragraph.emphasis])}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
