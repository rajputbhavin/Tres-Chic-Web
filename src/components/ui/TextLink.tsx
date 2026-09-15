import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Text-link CTA, the site's secondary action. */
export function TextLink({
  to,
  children,
  className,
  tone = "default",
}: {
  to: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "ivory";
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 text-[0.8125rem] font-medium tracking-[0.14em] uppercase transition-colors",
        tone === "ivory" ? "text-ivory hover:text-gold" : "text-emerald hover:text-gold",
        className,
      )}
    >
      <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-gold">
        {children}
      </span>
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}
