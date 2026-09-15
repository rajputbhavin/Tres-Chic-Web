import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { marianeOffDuty } from "@/data/mariane";

/** Personality beat: what Mariane loves when she isn't planning. */
export function MarianeOffDuty() {
  return (
    <Section>
      <div className="grid items-center gap-x-16 gap-y-10 md:grid-cols-2">
        <Reveal className="order-1 self-end">
          <Eyebrow>{marianeOffDuty.eyebrow}</Eyebrow>
          <h2 className="display-lg rule-gold mt-5 text-balance text-emerald">
            {marianeOffDuty.headline}
          </h2>
        </Reveal>
        <Reveal className="order-2 md:col-start-2 md:row-span-2 md:row-start-1" delay={150}>
          <img
            src={marianeOffDuty.image.src}
            alt={marianeOffDuty.image.alt}
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal className="order-3 self-start" delay={200}>
          <p className="mt-8 text-muted-foreground">{marianeOffDuty.body}</p>
        </Reveal>
      </div>
    </Section>
  );
}
