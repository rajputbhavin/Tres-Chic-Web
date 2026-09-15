import { createFileRoute, notFound } from "@tanstack/react-router";

import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { gallery } from "@/data/media";
import { getPortfolioStory } from "@/data/portfolio";

export const Route = createFileRoute("/celebrations-we-love/$slug")({
  loader: ({ params }) => {
    const story = getPortfolioStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | Très CHIC" }, { name: "robots", content: "noindex" }],
      };
    }
    const { story } = loaderData;
    const title = `${story.title} | Celebrations We Love | Très CHIC`;
    return {
      meta: [
        { title },
        { name: "description", content: `${story.hook} ${story.location}.` },
        { property: "og:title", content: title },
        { property: "og:description", content: `${story.hook} ${story.location}.` },
        { property: "og:url", content: `/celebrations-we-love/${story.slug}` },
      ],
      links: [{ rel: "canonical", href: `/celebrations-we-love/${story.slug}` }],
    };
  },
  component: CelebrationStoryPage,
});

function CelebrationStoryPage() {
  const { story } = Route.useLoaderData();
  const related = story.galleryCategory
    ? gallery.filter((item) => item.category === story.galleryCategory).slice(0, 6)
    : [];

  return (
    <>
      <PageHero
        eyebrow={story.location}
        headline={story.title}
        body={story.hook}
        image={story.image.src}
        imageAlt={story.image.alt}
      />

      <Section>
        {story.placeholder ? (
          <Reveal>
            <p className="border border-dashed border-taupe bg-neutral-soft p-6 text-sm leading-relaxed text-muted-foreground">
              [STORY — PLACEHOLDER] This celebration's account is written with Mariane from the real
              wedding. Nothing below has been invented, and it must be replaced with her approved
              copy before launch.
            </p>
          </Reveal>
        ) : null}

        <div className="mt-14 space-y-0 border-t border-border">
          {story.sections.map((section, i) => (
            <Reveal
              key={section.heading}
              delay={i * 60}
              className="grid gap-4 border-b border-border py-10 md:grid-cols-[1fr_1.6fr] md:gap-12 md:py-14"
            >
              <h2 className="display-md text-emerald">{section.heading}</h2>
              <p className="text-muted-foreground">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="soft">
          <Reveal>
            <Eyebrow>From this kind of celebration</Eyebrow>
          </Reveal>
          <PortfolioGallery items={related} />
        </Section>
      ) : null}

      <ClosingCta headline="Let's plan yours next." tone="ivory" />
    </>
  );
}
