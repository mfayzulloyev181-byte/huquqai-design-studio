import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { mockSavedAnswers } from "@/lib/mock-data";

export const Route = createFileRoute("/app/saved")({
  component: SavedPage,
});

function SavedPage() {
  const [items, setItems] = useState(mockSavedAnswers);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Saqlangan javoblar</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Keyinroq qaytib ko'rish uchun saqlab qo'ygan javoblaringiz.
        </p>

        {items.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            Hozircha saqlangan javob yo'q.
          </div>
        ) : (
          <div className="mt-6 grid gap-3">
            {items.map((s) => (
              <article key={s.id} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-semibold">{s.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.answer}</p>
                <div className="mt-3 flex items-start gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2">
                  <BookOpen className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{s.source.title}</p>
                    <p className="text-xs text-muted-foreground">{s.source.article}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-xs text-muted-foreground">Saqlangan: {s.savedAt}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-11 gap-2 text-muted-foreground hover:text-destructive"
                    onClick={() => setItems((list) => list.filter((i) => i.id !== s.id))}
                  >
                    <Trash2 className="size-4" />
                    O'chirish
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
