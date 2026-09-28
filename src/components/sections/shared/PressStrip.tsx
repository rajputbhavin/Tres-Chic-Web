import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { pressMarks, pressStripCopy } from "@/data/press";

/** Restrained press & recognition row. Typographic, no logo boxes. */
export function PressStrip() {
  const heading = pressStripCopy?.heading || "As featured in & recognized by";
  const footnote = pressStripCopy?.footnote || "";

  return (
    <Section tone="soft" className="py-16 md:py-20">
      <Reveal>
        <p className="eyebrow text-center text-taupe">{heading}</p>
        <ul className="mt-10 flex flex-wrap items-start justify-center gap-x-12 gap-y-8">
          {pressMarks.map((mark) => (
            <li key={mark.name} className="group text-center">
              <p className="font-display text-lg text-emerald/70 transition-colors duration-500 group-hover:text-emerald">
                {mark.name}
              </p>
              <p className="mt-1 text-[0.625rem] tracking-[0.18em] text-muted-foreground uppercase">
                {mark.note}
              </p>
            </li>
          ))}
        </ul>
        {footnote ? (
          <p className="mt-10 text-center text-[0.6875rem] tracking-wide text-muted-foreground">
            {footnote}
          </p>
        ) : null}
      </Reveal>
    </Section>
  );
}
