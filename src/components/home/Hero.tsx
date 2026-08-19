import { Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent sm:text-sm">
            <ShieldCheck className="size-4 shrink-0" />
            <span>{t.hero.badge}</span>
          </span>

          <h1 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/chat">
                {t.hero.primary}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3">
          {[
            [t.hero.stat1, t.hero.stat1label],
            [t.hero.stat2, t.hero.stat2label],
            [t.hero.stat3, t.hero.stat3label],
          ].map(([value, label]) => (
            <div key={label} className="min-w-0">
              <dt className="text-2xl font-semibold text-foreground sm:text-3xl">{value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
