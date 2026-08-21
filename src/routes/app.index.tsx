import { createFileRoute } from "@tanstack/react-router";
import { ChatPanel } from "@/components/app/ChatPanel";
import { RightRail } from "@/components/app/RightRail";

export const Route = createFileRoute("/app/")({
  validateSearch: (search: Record<string, unknown>) => ({
    n: typeof search.n === "number" ? search.n : Number(search.n) || 0,
  }),
  component: ChatPage,
});

function ChatPage() {
  const { n } = Route.useSearch();
  return (
    <>
      <ChatPanel resetKey={n} />
      <RightRail />
    </>
  );
}
