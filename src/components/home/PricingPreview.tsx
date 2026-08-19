import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PricingPreview() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.free,
      price: "0",
      desc: t.pricing.freeDesc,
      features: [t.pricing.freeF1, t.pricing.freeF2, t.pricing.freeF3],
      cta: t.pricing.startFree,
      featured: false,
    },
    {
      name: t.pricing.pro,
      price: "79 000",
      desc: t.pricing.proDesc,
      features: [t.pricing.proF1, t.pricing.proF2, t.pricing.proF3, t.pricing.proF4],
      cta: t.pricing.choose,
      featured: true,
    },
    {
      name: t.pricing.business,
      price: "249 000",
      desc: t.pricing.businessDesc,
      features: [
        t.pricing.businessF1,
        t.pricing.businessF2,
        t.pricing.businessF3,
        t.pricing.businessF4,
      ],
      cta: t.pricing.choose,
      featured: false,
    },
  ];

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{t.pricing.title}</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t.pricing.subtitle}
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex min-w-0 flex-col rounded-lg border bg-card p-6 ${
                plan.featured ? "border-primary shadow-sm ring-1 ring-primary/10" : "border-border"
              }`}
            >
              <div className="flex min-w-0 items-center justify-between gap-3">
                <h3 className="truncate text-lg font-semibold text-foreground">{plan.name}</h3>
                {plan.featured && (
                  <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {t.pricing.popular}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">so'm / {t.pricing.monthly}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="min-w-0">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                variant={plan.featured ? "default" : "outline"}
                asChild
              >
                <Link to="/pricing">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="ghost" asChild>
            <Link to="/pricing">{t.pricing.all}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
