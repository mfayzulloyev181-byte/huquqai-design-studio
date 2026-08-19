import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  const items = [
    { text: t.testimonials.t1, name: t.testimonials.n1, role: t.testimonials.r1 },
    { text: t.testimonials.t2, name: t.testimonials.n2, role: t.testimonials.r2 },
    { text: t.testimonials.t3, name: t.testimonials.n3, role: t.testimonials.r3 },
  ];

  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          {t.testimonials.title}
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t.testimonials.subtitle}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.name}
              className="flex min-w-0 flex-col rounded-lg border border-border bg-card p-6"
            >
              <Quote className="size-5 shrink-0 text-accent" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {item.text}
              </blockquote>
              <figcaption className="mt-6 flex min-w-0 items-center gap-3 border-t border-border pt-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-semibold text-primary">
                  {item.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
