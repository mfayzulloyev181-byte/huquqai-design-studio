import { useState } from "react";
import { BookOpen, Bookmark, BookmarkCheck, Check, Copy, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/lib/mock-data";

export function AnswerCard({ message }: { message: ChatMessage }) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [vote, setVote] = useState<"up" | "down" | null>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
    } catch {
      /* mock: clipboard may be unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <article className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <p className="whitespace-pre-line text-sm leading-relaxed text-card-foreground sm:text-[15px]">
        {message.text}
      </p>

      {message.sources?.length ? (
        <div className="mt-4 grid gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Manbalar
          </p>
          {message.sources.map((s) => (
            <div
              key={`${s.title}-${s.article}`}
              className="flex items-start gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2"
            >
              <BookOpen className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.article}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-3">
        <Button variant="outline" size="sm" className="h-11 gap-2" onClick={copy}>
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Nusxalandi" : "Nusxalash"}
        </Button>
        <Button
          variant={saved ? "default" : "outline"}
          size="sm"
          className="h-11 gap-2"
          onClick={() => setSaved((v) => !v)}
        >
          {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
          {saved ? "Saqlandi" : "Saqlash"}
        </Button>
        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Foydali"
            className={cn("size-11", vote === "up" && "text-primary")}
            onClick={() => setVote(vote === "up" ? null : "up")}
          >
            <ThumbsUp className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Foydasiz"
            className={cn("size-11", vote === "down" && "text-destructive")}
            onClick={() => setVote(vote === "down" ? null : "down")}
          >
            <ThumbsDown className="size-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
