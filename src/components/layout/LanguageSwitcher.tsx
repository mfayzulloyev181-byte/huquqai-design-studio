import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGS } from "@/i18n/translations";

export function LanguageSwitcher({ full = false }: { full?: boolean }) {
  const { lang, setLang, t } = useLanguage();
  const current = LANGS.find((l) => l.code === lang)!;

  if (full) {
    return (
      <div className="grid gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {t.nav.language}
        </span>
        <div className="grid grid-cols-3 gap-2">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`h-11 rounded-md border text-sm font-medium transition-colors ${
                l.code === lang
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="default" aria-label={t.nav.language} className="gap-2">
          <Globe />
          <span className="hidden text-sm sm:inline">{current.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className="flex h-10 items-center justify-between text-sm"
          >
            {l.label}
            {l.code === lang && <Check className="size-4 text-accent" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
