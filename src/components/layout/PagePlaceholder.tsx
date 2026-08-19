import { Link } from "@tanstack/react-router";
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <span className="grid size-12 place-items-center rounded-lg bg-secondary text-muted-foreground">
          <Construction className="size-6" />
        </span>
        <h1 className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl">{title}</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Bu sahifa keyingi bosqichda tayyorlanadi.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/">Bosh sahifaga qaytish</Link>
        </Button>
      </main>
      <SiteFooter />
    </div>
  );
}
