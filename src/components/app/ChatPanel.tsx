import { useEffect, useRef, useState } from "react";
import { Loader2, MessagesSquare, Paperclip, SendHorizonal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AnswerCard } from "./AnswerCard";
import { buildMockAnswer, suggestedQuestions, type ChatMessage } from "@/lib/mock-data";

export function ChatPanel({ resetKey }: { resetKey?: number }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([]);
    setInput("");
    setFile(null);
    setLoading(false);
  }, [resetKey]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = (raw?: string) => {
    const question = (raw ?? input).trim();
    if (!question || loading) return;
    const now = new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });
    setMessages((m) => [...m, { id: `q-${Date.now()}`, role: "user", text: question, createdAt: now }]);
    setInput("");
    setFile(null);
    setLoading(true);
    setTimeout(() => {
      setMessages((m) => [...m, buildMockAnswer(question)]);
      setLoading(false);
    }, 1400);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Huquqiy savolingizni yozing
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Javoblar O'zbekiston qonunchiligi manbalariga havola bilan beriladi.
          </p>

          {messages.length === 0 && !loading ? (
            <div className="mt-10 rounded-xl border border-dashed border-border p-6 text-center sm:p-10">
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-secondary text-muted-foreground">
                <MessagesSquare className="size-6" />
              </span>
              <p className="mt-4 text-sm font-medium">Suhbat hali boshlanmagan</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Quyidagi namunalardan birini tanlang yoki o'z savolingizni yozing.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="min-h-11 rounded-lg border border-border bg-card px-4 py-3 text-left text-sm transition-colors hover:border-primary hover:bg-secondary"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-4">
              {messages.map((m) =>
                m.role === "user" ? (
                  <div key={m.id} className="flex justify-end">
                    <div className="max-w-[85%] rounded-xl rounded-br-sm bg-primary px-4 py-3 text-sm leading-relaxed text-primary-foreground">
                      {m.text}
                      <span className="mt-1 block text-[11px] opacity-70">{m.createdAt}</span>
                    </div>
                  </div>
                ) : (
                  <AnswerCard key={m.id} message={m} />
                ),
              )}
              {loading ? (
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 text-sm text-muted-foreground">
                  <Loader2 className="size-4 animate-spin text-primary" />
                  Qonun hujjatlari tahlil qilinmoqda...
                </div>
              ) : null}
            </div>
          )}
          <div ref={endRef} />
        </div>
      </div>

      <div className="border-t border-border bg-navy px-4 py-4 sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          {file ? (
            <div className="mb-2 flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs">
              <Paperclip className="size-3.5 text-primary" />
              <span className="truncate">{file}</span>
              <button
                aria-label="Faylni olib tashlash"
                className="ml-auto text-muted-foreground hover:text-foreground"
                onClick={() => setFile(null)}
              >
                <X className="size-4" />
              </button>
            </div>
          ) : null}

          <div className="rounded-xl border border-border bg-card p-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Masalan: Mehnat shartnomasi qanday bekor qilinadi?"
              className="min-h-[64px] resize-none border-0 bg-transparent text-sm shadow-none focus-visible:ring-0"
            />
            <div className="mt-1 flex items-center gap-2">
              <input
                ref={fileRef}
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="size-11"
                aria-label="Fayl biriktirish"
                onClick={() => fileRef.current?.click()}
              >
                <Paperclip className="size-4" />
              </Button>
              <span className="hidden text-xs text-muted-foreground sm:inline">
                PDF yoki rasm biriktirishingiz mumkin
              </span>
              <Button
                className="ml-auto h-11 gap-2"
                disabled={!input.trim() || loading}
                onClick={() => send()}
              >
                {loading ? <Loader2 className="size-4 animate-spin" /> : <SendHorizonal className="size-4" />}
                Savol berish
              </Button>
            </div>
          </div>
          <p className="mt-2 text-center text-[11px] leading-relaxed text-muted-foreground">
            HuquqAI javoblari axborot xarakteriga ega va yuridik maslahat o'rnini bosmaydi.
          </p>
        </div>
      </div>
    </div>
  );
}
