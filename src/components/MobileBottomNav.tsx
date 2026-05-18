import { Link } from "@tanstack/react-router";
import { Home, Sparkles, BookOpen, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "@/lib/contact";

export function MobileBottomNav() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <nav className="mx-3 mb-3 rounded-2xl border border-border bg-background/95 backdrop-blur shadow-elegant">
        <ul className="grid grid-cols-5">
          <NavItem to="/" icon={<Home className="h-5 w-5" />} label={t.nav.home} />
          <NavItem to="/services" icon={<Sparkles className="h-5 w-5" />} label={t.nav.services} />
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span className="uppercase tracking-wider">{t.nav.whatsapp}</span>
            </a>
          </li>
          <NavItem to="/blog" icon={<BookOpen className="h-5 w-5" />} label={t.nav.blog} />
          <NavItem to="/contact" icon={<Phone className="h-5 w-5" />} label={t.nav.contact} />
          
        </ul>
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: "/" | "/services" | "/blog" | "/contact"; icon: React.ReactNode; label: string }) {
  return (
    <li>
      <Link
        to={to}
        className="flex flex-col items-center gap-0.5 py-3 text-[10px] uppercase tracking-wider text-muted-foreground"
        activeProps={{ className: "text-primary" }}
        activeOptions={{ exact: to === "/" }}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}
