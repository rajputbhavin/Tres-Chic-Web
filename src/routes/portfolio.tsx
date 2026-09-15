import { createFileRoute, redirect } from "@tanstack/react-router";

/** The portfolio lives at /celebrations-we-love now. Keep the old URL working. */
export const Route = createFileRoute("/portfolio")({
  beforeLoad: () => {
    throw redirect({ to: "/celebrations-we-love", replace: true });
  },
});
