import { AssetGap } from "@/components/ui/AssetGap";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { homeCulturalExpertise, traditionArt } from "@/data/home";
import { traditions } from "@/data/traditions";
import { cn } from "@/lib/utils";

/** Section 4. Named cultural expertise, no generic "we do all cultures" line. */
export function HomeCulturalExpertise() {
  return (
    <Section>
      <Reveal className="max-w-3xl">
        <Eyebrow>{homeCulturalExpertise.eyebrow}</Eyebrow>
        <h2 className="display-lg mt-5 text-balance text-emerald">
          {homeCulturalExpertise.headline}
        </h2>
      </Reveal>

      {/* Desktop: irregular editorial band. Mobile: swipeable with a peek of the next card. */}
      <div className="mt-14 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
        {traditions.map((tradition, i) => {
          const art = traditionArt[tradition.slug];
          const tall = i === 1 || i === 4;
          return (
            <Reveal
              key={tradition.slug}
              delay={i * 80}
              className="group w-[76vw] shrink-0 snap-start sm:w-[52vw] md:w-auto"
            >
              <div className="overflow-hidden">
                {art?.src ? (
                  <img
                    src={art.src}
                    alt={art.alt ?? tradition.label}
                    className={cn(
                      "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                      tall ? "aspect-[3/4]" : "aspect-[4/5]",
                    )}
                  />
                ) : (
                  <AssetGap label={art?.gap ?? ""} ratio={tall ? "3 / 4" : "4 / 5"} />
                )}
              </div>
              <p className="mt-4 text-sm leading-snug text-foreground">
                <span className="inline-block border-b border-transparent pb-1 transition-colors duration-500 group-hover:border-emerald">
                  {tradition.label}
                </span>
              </p>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-8 max-w-3xl">
        <p className="lede text-muted-foreground">{homeCulturalExpertise.body}</p>
      </Reveal>

      <div className="mt-12">
        <TextLink to={homeCulturalExpertise.link.to}>{homeCulturalExpertise.link.label}</TextLink>
      </div>
    </Section>
  );
}
