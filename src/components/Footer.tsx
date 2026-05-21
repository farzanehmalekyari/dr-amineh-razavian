import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "@/i18n/LanguageContext";
import { EMAIL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.desc}</p>
            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.18em] text-foreground mb-4 font-sans font-medium">{t.footer.pages}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">{t.nav.home}</Link></li>
              <li><Link to="/about" className="hover:text-primary">{t.nav.about}</Link></li>
              <li><Link to="/services" className="hover:text-primary">{t.nav.services}</Link></li>
              <li><Link to="/blog" className="hover:text-primary">{t.nav.blog}</Link></li>
              <li><Link to="/contact" className="hover:text-primary">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.18em] text-foreground mb-4 font-sans font-medium">{t.footer.services}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Smile Makeover", "Veneers", "Hollywood Smile", "Digital Smile Design", "Laser Dentistry", "Full Smile Rehabilitation"].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-primary">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.18em] text-foreground mb-4 font-sans font-medium">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> {t.footer.dubai}</li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="hover:text-primary">WhatsApp</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="hover:text-primary">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-5 text-xs text-muted-foreground leading-relaxed">
          {t.footer.note}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-primary">{t.footer.privacy}</Link>
            <Link to="/medical-disclaimer" className="hover:text-primary">{t.footer.disclaimer}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
