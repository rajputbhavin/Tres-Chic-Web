import { createFileRoute, redirect } from "@tanstack/react-router";

/** Meet Mariane lives at /about now. Keep the old /mariane URL working with a redirect. */
export const Route = createFileRoute("/mariane")({
  beforeLoad: () => {
    throw redirect({ to: "/about", replace: true });
  },
});
