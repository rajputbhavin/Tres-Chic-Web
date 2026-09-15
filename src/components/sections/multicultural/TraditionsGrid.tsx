import { AssetGap } from "@/components/ui/AssetGap";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { traditionArt, traditions } from "@/data/traditions";

/** Two-column grid of named cultural expertise with supporting imagery. */
export function TraditionsGrid() {
  return (
    <Section tone="soft">
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {traditions.map((tradition, i) => {
          const art = traditionArt[tradition.slug];
          return (
            <Reveal key={tradition.slug} delay={(i % 2) * 120} className="flex flex-col">
              <h2 className="order-1 display-md text-emerald md:order-2 md:mt-6">{tradition.short}</h2>
              <div className="order-2 mt-6 md:order-1 md:mt-0">
              {art?.src ? (
                <img
                  src={art.src}
                  alt={art.alt ?? tradition.short}
                  className="aspect-[16/10] w-full object-cover"
                />
              ) : (
                <AssetGap label={art?.assetGap ?? ""} ratio="16 / 10" />
              )}
              </div>
              <p className="order-3 mt-4 text-muted-foreground">{tradition.body}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
