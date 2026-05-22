import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/blog", label: t.nav.blog },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header
  className={cn(
    "sticky top-0 z-40 w-full",
    open
      ? "bg-card border-b border-border"
      : scrolled
      ? "bg-background/85 backdrop-blur-md border-b border-border"
      : "bg-background/60 backdrop-blur"
  )}
>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium text-primary-foreground shadow-soft hover:bg-rose-deep transition-colors"
          >
            {t.nav.book}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/45" onClick={() => setOpen(false)} />
          {/* Full-screen menu panel */}
          <div className="absolute inset-0 bg-card flex flex-col" style={{ backgroundColor: 'var(--color-card)' }}>
            {/* Header row */}
            <div className="flex items-center justify-between border-b border-border/60 px-5 h-16 shrink-0">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links — vertically centered in remaining space */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-4 text-xl font-serif text-foreground/80 hover:text-primary border-b border-border/40 last:border-0 transition-colors"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Footer actions */}
            <div className="shrink-0 px-6 pb-10 pt-4 space-y-3">
              <LanguageSwitcher className="w-full justify-center" />
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground hover:bg-rose-deep transition-colors"
              >
                {t.nav.book}
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center rounded-full border border-primary px-5 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t.nav.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
