import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SmileDesignSection } from "@/components/SmileDesignSection";
import { BookingForm } from "@/components/BookingForm";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";
import { ArrowRight, Calendar, CheckCircle2, Leaf, MessageCircle, Shield, Sparkles, Instagram, MoreHorizontal, ChevronDown } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.jpg";
import doctorHeroMobile from "@/assets/doctor-hero-mobile.jpg";
import serviceFace from "@/assets/service-face.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceBody from "@/assets/service-body.jpg";
import baLipsBefore from "@/assets/ba-lips-before.jpg";
import baLipsAfter from "@/assets/ba-lips-after.jpg";
import baBotoxBefore from "@/assets/ba-botox-before.jpg";
import baBotoxAfter from "@/assets/ba-botox-after.jpg";
import baChinBefore from "@/assets/ba-chin-before.jpg";
import baChinAfter from "@/assets/ba-chin-after.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Arefeh Lotfi | Smile Transformation Specialist Dubai" },
      { name: "description", content: "Premium smile transformations in Dubai by Dr. Arefeh Lotfi — veneers, Hollywood Smile, Digital Smile Design and natural-looking cosmetic dentistry." },
      { property: "og:title", content: "Dr. Arefeh Lotfi | Smile Transformation Specialist Dubai" },
      { property: "og:description", content: "Natural-looking smile transformations in Dubai. Veneers, Hollywood Smile and Digital Smile Design by Dr. Arefeh Lotfi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: "Dr. Arefeh Lotfi",
        medicalSpecialty: "Cosmetic Dentistry",
        areaServed: "Dubai, United Arab Emirates",
        description: "Premium cosmetic dentist in Dubai specializing in smile transformations, veneers, Hollywood Smile and Digital Smile Design.",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <SmileDesignSection />
      <Results />
      <Faq />
      <Insta />
      <Booking />
    </>
  );
}

function Hero() {
  const { t, lang } = useLang();
  return (
    <section className="relative min-h-[90vh] flex flex-col">
      {/* Mobile background image (hidden on lg+) */}
      <div
  className={`absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden ${
    lang === "ar" ? "scale-x-[-1]" : ""
  }`}
  style={{ backgroundImage: `url(${doctorHeroMobile})` }}
/>
      {/* Desktop background image (hidden below lg) */}
      <div
  className={`absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block ${
    lang === "ar" ? "scale-x-[-1]" : ""
  }`}
  style={{ backgroundImage: `url(${doctorHero})` }}
/>
      {/* Dark gradient overlay — stronger on left for mobile left-aligned content */}
      {/* Softer premium overlay */}
<div
  className={`absolute inset-0 ${
    lang === "ar"
      ? "bg-gradient-to-l from-[#0F172A]/20 via-transparent to-transparent"
      : "bg-gradient-to-r from-[#0F172A]/20 via-transparent to-transparent"
  }`}
/>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div
  className={`max-w-2xl space-y-6 lg:mx-0 ${
    lang === "ar" ? "text-right ml-auto" : "text-left"
  }`}
>
            <p className="eyebrow text-white/70">{t.hero.eyebrow}</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-white">
              {t.hero.title.split(",")[0]},
              <span className="block italic text-white/85">{t.hero.title.split(",").slice(1).join(",").trim()}</span>
            </h1>
            <div className="h-px w-20 bg-primary" />
            <p className="text-lg text-white/80 max-w-[240px] sm:max-w-xl whitespace-pre-line">{t.hero.subtitle}</p>
            

            <div className="flex flex-col sm:flex-row gap-3 pt-8 justify-start">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-soft hover:bg-rose-deep transition">
                <Calendar className="h-4 w-4" />{t.hero.ctaPrimary}
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3.5 text-sm uppercase tracking-[0.18em] text-white hover:bg-white/10 transition">
                <MessageCircle className="h-4 w-4" />{t.hero.ctaSecondary}
              </a>
            </div>

            
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex gap-4 overflow-x-auto scrollbar-hide">
          {t.hero.trust.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60 whitespace-nowrap">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLang();
  const images = [serviceFace, serviceSkin, serviceBody];
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        <div className="mt-12 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
          {t.services.cards.map((c, i) => (
            <article key={i} className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto rounded-3xl bg-background border border-border overflow-hidden shadow-soft flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={images[i]} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="h-px w-12 bg-primary/40 my-4" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 text-sm text-foreground/85">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />{it}</li>
                  ))}
                </ul>
                <div className="mt-auto space-y-2">
                  <Link to="/services" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs uppercase tracking-[0.16em] text-primary-foreground hover:bg-rose-deep transition">
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="flex items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2.5 text-[11px] uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"><MessageCircle className="h-3.5 w-3.5" />{t.services.askWhatsapp}</a>
                    <Link to="/contact" className="flex items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2.5 text-[11px] uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"><Calendar className="h-3.5 w-3.5" />{t.services.book}</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-background border border-border px-5 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.services.trust.map((s, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/85">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                {i === 0 ? <Shield className="h-4 w-4" /> : i === 1 ? <Sparkles className="h-4 w-4" /> : i === 2 ? <CheckCircle2 className="h-4 w-4" /> : <Leaf className="h-4 w-4" />}
              </span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const { t } = useLang();
  const cards = [
    { ...t.results.cards[0], before: baLipsBefore, after: baLipsAfter },
    { ...t.results.cards[1], before: baBotoxBefore, after: baBotoxAfter },
    { ...t.results.cards[2], before: baChinBefore, after: baChinAfter },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.results.eyebrow} title={t.results.title} subtitle={t.results.subtitle} />

        <div className="mt-10 flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:justify-center sm:mx-0 sm:px-0">
          {t.results.tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActive(i)} className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] border transition ${active === i ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:border-primary hover:text-primary"}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
          {cards.map((c, i) => (
            <article key={i} className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto rounded-3xl bg-card border border-border overflow-hidden shadow-soft">
              <BeforeAfterSlider before={c.before} after={c.after} alt={c.title} />
              <div className="p-5">
                <h3 className="font-serif text-xl">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground max-w-2xl mx-auto">{t.results.disclaimer}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary-foreground hover:bg-rose-deep transition">{t.results.cta}</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary hover:bg-primary hover:text-primary-foreground transition">{t.results.ctaSecondary}</a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="mt-10 space-y-3">
          {t.faq.items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-border bg-background overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 text-start px-5 py-4">
                <span className="font-serif text-base sm:text-lg">{item.q}</span>
                <ChevronDown className={`h-4 w-4 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {t.faq.cta} <Link to="/contact" className="text-primary underline-offset-4 hover:underline">{t.nav.book}</Link>
        </p>
      </div>
    </section>
  );
}

function Insta() {
  const { t } = useLang();
  const imgs = [insta1, insta2, insta3];
  const links = ['https://www.instagram.com/reel/DYeQn8vM3hb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', 'https://www.instagram.com/reel/DWoys62jHLK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', 'https://www.instagram.com/reel/DV6XpiFDFsz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==']
  return (
    <section className="py-20 lg:py-28 bg-beige/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.insta.eyebrow} title={t.insta.title} subtitle={t.insta.subtitle} />
        <div className="mt-12 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
          {t.insta.cards.map((c, i) => (
            <article key={i} className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto rounded-3xl bg-card border border-border overflow-hidden shadow-soft">
              <header className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary"><Instagram className="h-4 w-4" /></span>
                  <div className="leading-tight">
                    <p className="text-sm font-medium">{t.insta.handle.replace("@", "")}</p>
                    <p className="text-[11px] text-muted-foreground">{t.insta.cardSubtitle}</p>
                  </div>
                </div>
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </header>
              <Link to={links[i]} target="_blank" rel="noopener noreferrer">
                <img src={imgs[i]} alt={c.cat} className="aspect-square w-full object-cover" loading="lazy" />
              </Link>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="eyebrow text-[10px]">{c.cat}</p>
                  {/* <Bookmark className="h-4 w-4 text-muted-foreground" /> */}
                </div>
                <p className="mt-2 text-sm text-foreground/85">{c.caption}</p>
              </div>
              <div className="border-t border-border p-3 flex items-center justify-between bg-muted/30">
                <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" /> {t.insta.cardFooter}</span>
                {/* <Link to="/contact" className="text-xs font-medium text-primary inline-flex items-center gap-1">Book <ArrowRight className="h-3 w-3" /></Link> */}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary-foreground hover:bg-rose-deep transition"><Instagram className="h-4 w-4" />{t.insta.viewInsta}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary hover:bg-primary hover:text-primary-foreground transition"><MessageCircle className="h-4 w-4" />{t.insta.ask}</a>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground inline-flex w-full items-center justify-center gap-2"><Shield className="h-3.5 w-3.5 text-primary" /> {t.insta.trust}</p>
      </div>
    </section>
  );
}

function Booking() {
  const { t } = useLang();
  return (
    <section id="booking" className="py-20 lg:py-28 bg-gradient-to-b from-ivory to-beige/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <p className="eyebrow mb-3">{t.booking.eyebrow}</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-balance">{t.booking.title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.booking.subtitle}</p>
          <ul className="mt-8 space-y-3">
            {t.booking.trustPoints.map((p, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/90">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary"><CheckCircle2 className="h-4 w-4" /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
