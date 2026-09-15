import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { homeTwoSides } from "@/data/home";

/** Section 3. Operations plus an eye for beauty, the Très CHIC difference. */
export function HomeTwoSides() {
  return (
    <Section tone="soft">
      <div className="grid items-center gap-x-16 gap-y-10 md:grid-cols-2 md:gap-y-8">
        <Reveal className="order-2 md:order-1 md:row-span-2">
          <img
            src={homeTwoSides.portrait.src}
            alt={homeTwoSides.portrait.alt}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal className="order-1 self-end md:order-2" delay={150}>
          <Eyebrow>{homeTwoSides.eyebrow}</Eyebrow>
          <h2 className="display-lg rule-gold mt-5 text-balance text-emerald">
            {homeTwoSides.headline}
          </h2>
        </Reveal>
        <Reveal className="order-3 self-start" delay={250}>
          <div className="mt-8 space-y-5 text-muted-foreground">
            {homeTwoSides.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-9">
            <TextLink to={homeTwoSides.link.to}>{homeTwoSides.link.label}</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
