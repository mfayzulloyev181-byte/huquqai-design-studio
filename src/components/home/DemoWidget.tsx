import { useState } from "react";
import { BookOpen, Sparkles, User } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function DemoWidget() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const items = [
    { q: t.demo.q1, a: t.demo.a1, s: t.demo.s1 },
    { q: t.demo.q2, a: t.demo.a2, s: t.demo.s2 },
    { q: t.demo.q3, a: t.demo.a3, s: t.demo.s3 },
  ];
  const current = items[active] ?? items[0]!;

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{t.demo.title}</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t.demo.subtitle}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_1.3fr]">
          <div className="min-w-0">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t.demo.hintLabel}
            </span>
            <div className="mt-3 grid gap-2">
              {items.map((item, i) => (
                <button
                  key={item.q}
                  onClick={() => setActive(i)}
                  className={`min-h-11 rounded-md border px-4 py-3 text-left text-sm leading-relaxed transition-colors ${
                    i === active
                      ? "border-primary bg-card text-foreground shadow-sm"
                      : "border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-border bg-card p-4 sm:p-6">
            <div className="flex justify-end">
              <div className="flex max-w-[85%] items-start gap-3 rounded-lg rounded-tr-none bg-primary px-4 py-3 text-sm leading-relaxed text-primary-foreground">
                <span className="min-w-0">{current.q}</span>
                <User className="mt-0.5 size-4 shrink-0 opacity-70" />
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                <Sparkles className="size-4" />
              </span>
              <div className="min-w-0 flex-1 rounded-lg rounded-tl-none border border-border bg-secondary/60 p-4">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {t.demo.answerLabel}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{current.a}</p>

                <div className="mt-4 rounded-md border border-accent/25 bg-accent/5 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-accent">
                    <BookOpen className="size-4 shrink-0" />
                    {t.demo.sourceLabel}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">{current.s}</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.demo.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
