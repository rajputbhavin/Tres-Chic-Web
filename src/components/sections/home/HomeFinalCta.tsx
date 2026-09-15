import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeFinalCta } from "@/data/home";
import { site } from "@/data/site";

/** Section 11. The single, calm closing invitation. */
export function HomeFinalCta() {
  return (
    <Section className="py-24 text-center md:py-36">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="display-xl text-balance text-emerald">{homeFinalCta.headline}</h2>
        <p className="lede mt-7 text-muted-foreground">{homeFinalCta.body}</p>
        <div className="mt-11">
          <CtaButton to={homeFinalCta.cta.to}>{homeFinalCta.cta.label}</CtaButton>
        </div>
        <p className="mt-5 text-xs tracking-wide text-muted-foreground">{site.replyPromise}</p>
      </Reveal>
    </Section>
  );
}
