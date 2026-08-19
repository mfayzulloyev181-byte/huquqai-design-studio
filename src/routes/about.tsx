import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Biz haqimizda — HuquqAI" },
      { name: "description", content: "HuquqAI missiyasi va AI qanday ishlashi haqida." },
      { property: "og:title", content: "Biz haqimizda — HuquqAI" },
      { property: "og:description", content: "HuquqAI missiyasi va AI qanday ishlashi haqida." },
    ],
  }),
  component: () => <PagePlaceholder title="Biz haqimizda" />,
});
