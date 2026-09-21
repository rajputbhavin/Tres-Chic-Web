import { createFileRoute, redirect } from "@tanstack/react-router";

/** Individual story pages redirect directly to /celebrations-we-love */
export const Route = createFileRoute("/celebrations-we-love/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/celebrations-we-love", replace: true });
  },
});
