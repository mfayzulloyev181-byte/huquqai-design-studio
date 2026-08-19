import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Hisob va sozlamalar — HuquqAI" },
      { name: "description", content: "Profil, obuna rejasi va til sozlamalari." },
      { property: "og:title", content: "Hisob va sozlamalar — HuquqAI" },
      { property: "og:description", content: "Profil, obuna rejasi va til sozlamalari." },
    ],
  }),
  component: () => <PagePlaceholder title="Hisob" />,
});
