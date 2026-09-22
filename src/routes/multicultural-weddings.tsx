import { createFileRoute } from "@tanstack/react-router";

import { TraditionsGrid } from "@/components/sections/multicultural/TraditionsGrid";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";

export const Route = createFileRoute("/multicultural-weddings")({
  head: () => ({
    meta: [
      { title: "Multicultural & Fusion Wedding Planner | Miami | Très CHIC" },
      {
        name: "description",
        content:
          "South Asian, Jewish, Middle Eastern, interfaith and fusion weddings in South Florida, multi-day, multi-family celebrations planned as one connected story.",
      },
      {
        property: "og:title",
        content: "Multicultural & Fusion Wedding Planner | Miami | Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Your families don't need to choose. Neither does your wedding. Multicultural and fusion wedding planning from Très CHIC.",
      },
      { property: "og:url", content: "/multicultural-weddings" },
    ],
    links: [{ rel: "canonical", href: "/multicultural-weddings" }],
  }),
  component: MulticulturalPage,
});

function MulticulturalPage() {
  return (
    <>
      <PageHero
        eyebrow="Multicultural & Fusion Weddings"
        headline="Your families don't need to choose. Neither does your wedding."
        body="I have a particular passion for South Asian, Middle Eastern, Jewish, interfaith and fusion celebrations, weddings where multiple cultures, families and traditions come together in one story."
        image={media.zaffaProcession}
        imageAlt="A zaffa procession with drummers leading a bride and groom into their celebration"
      />

      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>Philosophy</Eyebrow>
          <div className="mt-7 space-y-6 text-muted-foreground">
            <p className="font-display text-2xl leading-snug text-emerald md:text-[1.75rem]">
              I don't assume every South Asian wedding should look the same, or that every Jewish
              wedding, or every Middle Eastern wedding, follows one formula.
            </p>
            <p>
              I ask which traditions are meaningful to <em>you</em>. What matters to your parents.
              What feels authentic to you as a couple, today.
            </p>
            <p>
              For multicultural and fusion couples especially, that distinction matters. You
              shouldn't have to choose between the families and cultures that made you who you are.
              My job is to help both belong, honestly, respectfully and beautifully, in one
              celebration.
            </p>
          </div>
        </Reveal>
      </Section>

      <TraditionsGrid />

      <Section tone="emerald">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="ivory">Proof</Eyebrow>
          <p className="mt-7 font-display text-2xl leading-snug text-ivory md:text-[2rem]">
            One couple described their wedding weekend to me as “a big fat Indian-Italian wedding”, a
            Hindu ceremony, a separate Catholic ceremony, a reception and an after-party, for guests
            flying in from everywhere.
          </p>
          <p className="mt-6 text-ivory/80">
            It's exactly the kind of celebration I love building.
          </p>
        </Reveal>
      </Section>

      <ClosingCta
        headline="Tell me about your families, your traditions and your day."
        tone="ivory"
      />
    </>
  );
}
