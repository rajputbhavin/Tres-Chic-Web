import { Link } from "@tanstack/react-router";

/** Shared 404 screen: used by the root notFoundComponent and the splat route. */
export function NotFoundScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow text-taupe">404</p>
        <h1 className="display-lg mt-5 text-emerald">This page hasn't been planned yet.</h1>
        <p className="mt-5 text-sm text-muted-foreground">
          Even the best-laid plans need a small adjustment sometimes. Let's get you back on track.
        </p>
        <div className="mt-9">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-emerald px-8 py-4 text-[0.8125rem] font-semibold tracking-[0.16em] text-ivory uppercase transition-colors hover:bg-emerald-light"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
