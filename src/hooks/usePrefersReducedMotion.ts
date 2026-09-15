import { useEffect, useState } from "react";

/**
 * True when the visitor asked the OS to reduce motion. Used to skip
 * auto-advancing carousels and looping animations; CSS handles the rest
 * through the global `prefers-reduced-motion` block in styles.css.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
