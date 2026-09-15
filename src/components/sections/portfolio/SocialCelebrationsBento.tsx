import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

// Import all webp images in src/assets/social-celebrations/*.webp
const rawSocialImages = import.meta.glob<string>("../../../assets/social-celebrations/*.webp", {
  eager: true,
  import: "default",
});

const sortedSocialImages: string[] = Object.entries(rawSocialImages)
  .sort(([pathA], [pathB]) => {
    const matchA = pathA.match(/(\d+)\.webp$/);
    const matchB = pathB.match(/(\d+)\.webp$/);
    const numA = matchA && matchA[1] ? parseInt(matchA[1], 10) : 0;
    const numB = matchB && matchB[1] ? parseInt(matchB[1], 10) : 0;
    return numA - numB;
  })
  .map(([, src]) => src);

const INITIAL_BATCH = 12;
const BATCH_SIZE = 10;

export function SocialCelebrationsBento() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const totalImages = sortedSocialImages.length;
  const currentImages = sortedSocialImages.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, totalImages));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_BATCH);
  };

  const openLightbox = (idx: number) => {
    setActiveImageIndex(idx);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextLightbox = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % totalImages);
    }
  };

  const prevLightbox = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + totalImages) % totalImages);
    }
  };

  useEffect(() => {
    if (activeImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  return (
    <Section tone="soft">
      {/* Header */}
      <Reveal className="max-w-2xl">
        <Eyebrow>Social Celebrations</Eyebrow>
        <h2 className="display-lg mt-4 text-emerald font-display text-balance">
          Moments We Love
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          A curated visual collection of intimate gatherings, festive birthdays, and milestone celebrations styled by Tres Chic.
        </p>
      </Reveal>

      {/* Natural Aspect Editorial Gallery: Zero cropping, full image visible in its original proportions */}
      <div className="mt-12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
        {currentImages.map((src, index) => (
          <Reveal
            key={src}
            delay={Math.min(index % 8, 8) * 45}
            className="break-inside-avoid"
          >
            <div
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xs border border-border/70 bg-neutral-soft/40 shadow-xs cursor-pointer transition-all duration-500 hover:shadow-lg hover:border-gold/60"
            >
              {/* Natural aspect ratio: no crop, full height and width displayed clearly */}
              <img
                src={src}
                alt={`Social celebration moment ${index + 1}`}
                loading={index < 8 ? "eager" : "lazy"}
                className="w-full h-auto block object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              {/* Hover Overlay with Gold Diamond Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-4 sm:p-5">
                <span className="text-xs uppercase tracking-[0.16em] text-ivory font-medium flex items-center gap-2">
                  <span className="size-1.5 rotate-45 bg-gold" aria-hidden="true" />
                  View Photo
                </span>
                <span className="rounded-full bg-black/50 p-2 text-gold backdrop-blur-xs">
                  <Maximize2 className="size-3.5" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Action Controls: Show More / Show Less */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        {visibleCount < totalImages ? (
          <button
            type="button"
            onClick={handleShowMore}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-emerald px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ivory shadow-sm transition-all duration-300 hover:bg-emerald/90 hover:shadow-md hover:scale-[1.02] focus:outline-hidden"
          >
            <span>Show More Moments</span>
            <ChevronDown className="size-4 text-gold transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs uppercase tracking-[0.16em] text-taupe font-medium">
              Showing all {totalImages} celebration moments
            </span>
            <button
              type="button"
              onClick={handleShowLess}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-emerald hover:border-gold"
            >
              <span>Show Less</span>
              <ChevronUp className="size-3.5 text-gold" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus:outline-hidden"
            aria-label="Close fullscreen preview"
          >
            <X className="size-6" />
          </button>

          {/* Previous image */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-hidden"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Next image */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-hidden"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Current Lightbox Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={sortedSocialImages[activeImageIndex]}
              alt={`Social celebration photograph ${activeImageIndex + 1}`}
              className="max-h-[80vh] w-auto max-w-[90vw] object-contain shadow-2xl transition-transform duration-300"
            />
            <p className="mt-3 text-xs tracking-[0.18em] uppercase text-white/70">
              Celebration Detail · Photo {activeImageIndex + 1} of {totalImages}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
}
