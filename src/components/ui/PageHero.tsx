import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Editorial page hero used by every inner page. */
export function PageHero({
  eyebrow,
  headline,
  body,
  image,
  imageAlt,
  overlay = true,
  fullScreen = false,
  className,
  imageClassName,
}: {
  eyebrow: string;
  headline: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  /** Slight dark scrim over the image to keep ivory text readable. */
  overlay?: boolean;
  fullScreen?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <header
      className={cn(
        "relative isolate flex flex-col justify-end overflow-hidden bg-emerald text-ivory",
        fullScreen
          ? "min-h-screen min-h-[100svh] min-h-[100dvh]"
          : "min-h-[68vh] md:min-h-[78vh]",
        className
      )}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className={cn(
            "absolute inset-0 size-full object-cover object-center",
            imageClassName
          )}
        />
      ) : null}
      {overlay ? (
        <>
          {/* Top gradient for header contrast */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
            aria-hidden
          />
          {/* Subtle image depth tint */}
          <div
            className="pointer-events-none absolute inset-0 bg-black/25 mix-blend-multiply"
            aria-hidden
          />
          {/* Bottom rich gradient for headline readability */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10"
            aria-hidden
          />
        </>
      ) : null}
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-36 pb-16 md:px-10 md:pt-48 md:pb-24">
        <Reveal>
          {/* Golden square box with white bold font */}
          <div className="inline-flex items-center justify-center border border-[#e5c06e]/60 bg-gradient-to-r from-[#b38838] via-[#c59b4c] to-[#a87a2c] px-4 py-1.5 shadow-lg">
            <span className="font-sans text-[0.6875rem] md:text-xs font-bold uppercase tracking-[0.24em] text-white drop-shadow-xs">
              {eyebrow}
            </span>
          </div>

          <h1 className="display-xl mt-6 max-w-3xl text-balance text-white drop-shadow-sm font-normal">
            {headline}
          </h1>
          {body ? (
            <p className="lede mt-6 max-w-2xl text-ivory/90 font-light drop-shadow-xs">
              {body}
            </p>
          ) : null}
        </Reveal>
      </div>

      {fullScreen ? (
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          aria-hidden
        >
          <span className="scroll-pulse h-10 w-px bg-ivory/50" />
          <ChevronDown className="scroll-pulse size-4 text-ivory/60" />
        </div>
      ) : null}
    </header>
  );
}
