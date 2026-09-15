import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

/** Shared error boundary screen for the root route. */
export function ErrorScreen({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error("[App Error]:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow text-taupe">Something went wrong</p>
        <h1 className="display-lg mt-5 text-emerald">This page didn't load.</h1>
        <p className="mt-5 text-sm text-muted-foreground">
          Try again, or head back home and we'll pick it up from there.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-emerald px-8 py-4 text-[0.8125rem] font-semibold tracking-[0.16em] text-ivory uppercase transition-colors hover:bg-emerald-light"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-emerald px-8 py-4 text-[0.8125rem] font-semibold tracking-[0.16em] text-emerald uppercase transition-colors hover:bg-emerald hover:text-ivory"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
