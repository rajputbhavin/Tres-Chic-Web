import { PortfolioStoryCard } from "@/components/portfolio/PortfolioStoryCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { homePortfolioPreview } from "@/data/home";
import { portfolioStories } from "@/data/portfolio";

/** Section 6. Three celebrations, each linking into its own story page. */
export function HomePortfolioPreview() {
  return (
    <Section tone="soft">
      <Reveal className="max-w-2xl">
        <Eyebrow>{homePortfolioPreview.eyebrow}</Eyebrow>
        <h2 className="display-lg mt-5 text-balance text-emerald">
          {homePortfolioPreview.headline}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-12">
        {portfolioStories.map((story, i) => (
          <Reveal key={story.slug} delay={i * 100} className={story.gridSpan}>
            <PortfolioStoryCard story={story} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 text-center">
        <TextLink to={homePortfolioPreview.link.to}>{homePortfolioPreview.link.label}</TextLink>
      </div>
    </Section>
  );
}
