import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

/** Closing CTA band, repeated at the foot of every page. */
export function ClosingCta({
  headline,
  body,
  tone = "soft",
}: {
  headline: string;
  body?: string;
  tone?: "soft" | "ivory" | "white";
}) {
  if (tone === "white") {
    return (
      <section className="bg-white px-6 py-20 md:px-10 md:py-28 border-t border-border/60 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="display-lg text-balance text-emerald">{headline}</h2>
          {body ? <p className="lede mt-6 text-muted-foreground">{body}</p> : null}
          <div className="mt-10">
            <CtaButton to="/start-planning">Start Planning</CtaButton>
          </div>
          <p className="caption mt-5 normal-case tracking-normal text-muted-foreground">
            {site.replyPromise}
          </p>
        </Reveal>
      </section>
    );
  }

  return (
    <Section tone={tone === "soft" ? "soft" : "ivory"} className="text-center">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="display-lg text-balance text-emerald">{headline}</h2>
        {body ? <p className="lede mt-6 text-muted-foreground">{body}</p> : null}
        <div className="mt-10">
          <CtaButton to="/start-planning">Start Planning</CtaButton>
        </div>
        <p className="caption mt-5 normal-case tracking-normal text-muted-foreground">
          {site.replyPromise}
        </p>
      </Reveal>
    </Section>
  );
}
