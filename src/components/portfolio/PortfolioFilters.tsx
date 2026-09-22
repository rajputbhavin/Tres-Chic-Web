import { portfolioFilters } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Underlined text filters, no pill buttons. */
export function PortfolioFilters({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-7">
      {portfolioFilters.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onChange(filter.id)}
            aria-pressed={isActive}
            className={cn(
              "group inline-flex items-center gap-2 pb-1.5 text-[0.6875rem] tracking-[0.16em] uppercase transition-all duration-300 whitespace-nowrap",
              isActive
                ? "border-b border-gold text-emerald font-semibold"
                : "border-b border-transparent text-muted-foreground hover:text-emerald",
            )}
          >
            <span
              className={cn(
                "size-1.5 shrink-0 rounded-full transition-all duration-300",
                isActive
                  ? "bg-gold scale-125 shadow-[0_0_6px_rgba(191,161,95,0.6)]"
                  : "bg-gold/45 group-hover:bg-gold/80",
              )}
              aria-hidden="true"
            />
            <span>{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}
