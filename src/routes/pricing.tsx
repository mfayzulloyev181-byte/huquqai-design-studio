import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Narxlar — HuquqAI" },
      { name: "description", content: "HuquqAI tariflari: Bepul, Pro va Biznes rejalari." },
      { property: "og:title", content: "Narxlar — HuquqAI" },
      { property: "og:description", content: "HuquqAI tariflari: Bepul, Pro va Biznes rejalari." },
    ],
  }),
  component: () => <PagePlaceholder title="Narxlar" />,
});
