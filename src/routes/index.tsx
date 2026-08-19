import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { DemoWidget } from "@/components/home/DemoWidget";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HuquqAI — Huquq, soliq va notarial AI yordamchi" },
      {
        name: "description",
        content:
          "O'zbekiston qonunlariga asoslangan AI yordamchi: soliq, biznes, notarial va mehnat huquqi savollariga manba havolasi bilan javob.",
      },
      { property: "og:title", content: "HuquqAI — Huquqiy savollarga aniq javob" },
      {
        property: "og:description",
        content:
          "Jismoniy shaxslar va kichik biznes uchun sun'iy intellekt asosidagi huquqiy yordamchi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <DemoWidget />
        <Testimonials />
        <PricingPreview />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
