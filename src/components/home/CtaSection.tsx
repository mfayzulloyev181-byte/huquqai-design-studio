import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 rounded-lg border border-border bg-card p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{t.cta.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.cta.subtitle}</p>
          </div>
          <Button size="lg" asChild>
            <Link to="/chat">
              {t.cta.button}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
