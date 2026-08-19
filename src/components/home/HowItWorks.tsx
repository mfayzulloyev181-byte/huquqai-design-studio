import { MessageSquare, Search, FileCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { icon: MessageSquare, title: t.how.s1t, desc: t.how.s1d },
    { icon: Search, title: t.how.s2t, desc: t.how.s2d },
    { icon: FileCheck, title: t.how.s3t, desc: t.how.s3d },
  ];

  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{t.how.title}</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t.how.subtitle}
        </p>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="min-w-0 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                  <step.icon className="size-5" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
