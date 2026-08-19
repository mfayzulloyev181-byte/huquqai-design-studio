import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/chat", label: t.nav.chat },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
            <Scale className="size-5" />
          </span>
          <span className="truncate text-lg font-semibold tracking-tight text-foreground">
            Huquq<span className="text-accent">AI</span>
          </span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" className="hidden lg:inline-flex" asChild>
            <Link to="/account">{t.nav.login}</Link>
          </Button>
          <Button className="hidden lg:inline-flex" asChild>
            <Link to="/chat">{t.nav.cta}</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label={t.nav.menu}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm p-6">
              <SheetTitle className="text-left text-base">{t.nav.menu}</SheetTitle>
              <nav className="mt-6 grid gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="flex h-12 items-center rounded-md px-3 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 grid gap-3">
                <Button variant="outline" asChild onClick={() => setOpen(false)}>
                  <Link to="/account">{t.nav.login}</Link>
                </Button>
                <Button asChild onClick={() => setOpen(false)}>
                  <Link to="/chat">{t.nav.cta}</Link>
                </Button>
              </div>
              <div className="mt-8">
                <LanguageSwitcher full />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
