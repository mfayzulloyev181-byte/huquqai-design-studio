import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Savol berish — HuquqAI" },
      { name: "description", content: "HuquqAI bilan huquqiy savol-javob interfeysi." },
      { property: "og:title", content: "Savol berish — HuquqAI" },
      { property: "og:description", content: "HuquqAI bilan huquqiy savol-javob interfeysi." },
    ],
  }),
  component: () => <PagePlaceholder title="Savol-javob" />,
});
