import { Link } from "@tanstack/react-router";
import { Scale, Mail, Phone, Send, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary-foreground/10">
                <Scale className="size-5" />
              </span>
              <span className="text-lg font-semibold">
                Huquq<span className="text-accent">AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">{t.footer.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Telegram"
                className="grid size-11 place-items-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Send className="size-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid size-11 place-items-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{t.footer.product}</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/chat" className="hover:text-primary-foreground">
                  {t.nav.chat}
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-primary-foreground">
                  {t.nav.login}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{t.footer.company}</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/about" className="hover:text-primary-foreground">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a href="mailto:info@huquqai.uz" className="truncate hover:text-primary-foreground">
                  info@huquqai.uz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <a href="tel:+998710000000" className="hover:text-primary-foreground">
                  +998 71 000 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-xs leading-relaxed text-primary-foreground/70">
          {t.footer.disclaimer}
        </div>

        <p className="mt-8 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} HuquqAI. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
