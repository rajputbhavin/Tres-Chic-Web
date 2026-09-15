import { createFileRoute } from "@tanstack/react-router";

import { NotFoundScreen } from "@/components/layout/NotFoundScreen";

/** Catch-all 404 for any URL that doesn't match a real page. */
export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page not found | Très CHIC Event Planning & Design" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundRoute,
});

function NotFoundRoute() {
  return <NotFoundScreen />;
}
