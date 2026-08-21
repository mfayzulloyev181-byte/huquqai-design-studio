import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { mockConversations } from "@/lib/mock-data";

export const Route = createFileRoute("/app/history")({
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Suhbatlar tarixi</h1>
        <p className="mt-2 text-sm text-muted-foreground">Barcha oldingi huquqiy savol-javoblaringiz.</p>

        <div className="mt-6 grid gap-3">
          {mockConversations.map((c) => (
            <Link
              key={c.id}
              to="/app"
              search={{ n: 0 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <MessageSquare className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{c.title}</p>
                <p className="mt-1 truncate text-sm text-muted-foreground">{c.preview}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.updatedAt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
