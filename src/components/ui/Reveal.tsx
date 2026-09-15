import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds. */
  delay?: number;
  as?: ElementType;
};

/**
 * Fade-and-lift on first entry into the viewport. Runs once, never repeats.
 * The visual values live in the `reveal` / `reveal-in` utilities in styles.css,
 * and the global reduced-motion block neutralises the transition.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div", ...props }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", visible && "reveal-in", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
