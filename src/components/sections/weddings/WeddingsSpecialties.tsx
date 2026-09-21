import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { weddingsDestination, weddingsMulticultural } from "@/data/weddings";

const bands = [weddingsMulticultural, weddingsDestination];

/**
 * The two specialties that used to sit in the navigation: multicultural and
 * fusion weddings, and destination weddings. They open the Weddings page
 * together, above the service tiers.
 */
export function WeddingsSpecialties() {
  return (
    <Section tone="soft" className="border-t border-border/80">
      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        {bands.map((band, i) => (
          <Reveal key={band.eyebrow} delay={i * 120} className="flex flex-col">
            <div className="order-1 md:order-2 md:mt-7">
              <Eyebrow>{band.eyebrow}</Eyebrow>
              <h2 className="display-md mt-4 text-balance text-emerald">{band.headline}</h2>
            </div>
            <img
              src={band.image}
              alt={band.imageAlt}
              loading="lazy"
              className="order-2 mt-7 aspect-[4/3] w-full object-cover md:order-1 md:mt-0"
            />
            <div className="order-3">
              <p className="mt-5 text-muted-foreground">{band.body}</p>
              <div className="mt-7">
                <TextLink to={band.link.to}>{band.link.label}</TextLink>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
