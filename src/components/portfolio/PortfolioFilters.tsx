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
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
      {portfolioFilters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          onClick={() => onChange(filter.id)}
          aria-pressed={active === filter.id}
          className={cn(
            "pb-1 text-[0.6875rem] tracking-[0.18em] uppercase transition-colors duration-300",
            active === filter.id
              ? "border-b border-gold text-emerald"
              : "border-b border-transparent text-muted-foreground hover:text-emerald",
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
