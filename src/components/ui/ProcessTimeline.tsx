import { timelineMilestones } from "@/data/process";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

/**
 * Thin emerald line with small markers. When `activeIndex` is supplied the line
 * fills like a playhead and the reached markers turn solid, tracking scroll.
 */
export function ProcessTimeline({
  className,
  activeIndex,
}: {
  className?: string;
  activeIndex?: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3, rootMargin: "0px" });
  const tracked = typeof activeIndex === "number";
  const count = timelineMilestones.length;
  const progress = tracked
    ? Math.min(100, Math.max(0, (activeIndex! / (count - 1)) * 100))
    : visible
      ? 100
      : 0;

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Desktop: horizontal track */}
      <div className="relative hidden md:block">
        <span className="absolute top-[7px] left-0 h-px w-full bg-border" aria-hidden />
        <span
          className="absolute top-[7px] left-0 h-px bg-emerald transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
        <ol className="relative grid grid-cols-5 gap-4">
          {timelineMilestones.map((label, i) => {
            const reached = tracked ? i <= activeIndex! : visible;
            return (
              <li key={label} className="flex flex-col items-start">
                <span
                  className={cn(
                    "size-[15px] rounded-full border border-emerald transition-all duration-500",
                    reached ? "bg-emerald opacity-100" : "bg-background",
                    !tracked && !visible && "opacity-0",
                  )}
                  style={tracked ? undefined : { transitionDelay: `${300 + i * 180}ms` }}
                  aria-hidden
                />
                <span
                  className={cn(
                    "mt-5 text-[0.8125rem] leading-snug tracking-[0.1em] uppercase transition-colors duration-500",
                    reached ? "text-emerald" : "text-muted-foreground",
                  )}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: vertical list */}
      <ol className="relative space-y-6 border-l border-border pl-6 md:hidden">
        {timelineMilestones.map((label, i) => {
          const reached = tracked ? i <= activeIndex! : true;
          return (
            <li key={label} className="relative">
              <span
                className={cn(
                  "absolute top-[7px] -left-[26px] size-[11px] rounded-full border border-emerald transition-colors duration-500",
                  reached ? "bg-emerald" : "bg-background",
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "text-[0.8125rem] tracking-[0.1em] uppercase transition-colors duration-500",
                  reached ? "text-emerald" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
