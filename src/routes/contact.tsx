import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { BookingForm } from "@/components/BookingForm";
import { Instagram, MessageCircle, Mail, MapPin, Calendar, Shield } from "lucide-react";
import { EMAIL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contact";
import clinic from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | Dr. Amineh Razavian — Orthodontist & Family Dentist Dubai" },
      { name: "description", content: "Contact Dr. Amineh Razavian to book an orthodontic evaluation, preventive dental consultation, or family dental care appointment in Dubai." },
      { property: "og:title", content: "Book a Consultation | Dr. Amineh Razavian Dubai" },
      { property: "og:description", content: "Orthodontic evaluations, preventive care, and family-focused dental consultations in Dubai — for children, teens, and adults." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const ICONS = { WhatsApp: MessageCircle, Instagram: Instagram, Email: Mail, "Dubai Clinic": MapPin, "Iran Availability": Calendar };

function Contact() {
  const { t } = useLang();
  return (
    <>
      <section className="bg-gradient-to-b from-beige/40 to-cream py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">{t.nav.contact}</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">{t.contact.hero}</h1>
          <p className="mt-4 text-muted-foreground">{t.contact.sub}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <BookingForm />
          <div className="space-y-6">
            <div>
              <p className="eyebrow mb-3">{t.contact.directTitle}</p>
              <h2 className="font-serif text-3xl">{t.contact.mapTitle}</h2>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft aspect-[4/3]">
              <img src={clinic} alt="Dubai clinic location" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <ul className="space-y-3">
              {t.contact.direct.map((d) => {
                const Icon = ICONS[d.label as keyof typeof ICONS] ?? MapPin;
                const href = d.label === "Email" || d.label.includes("البريد") ? `mailto:${EMAIL}` : d.label === "WhatsApp" || d.label.includes("واتساب") ? WHATSAPP_URL : d.label === "Instagram" || d.label.includes("إنستغرام") ? INSTAGRAM_URL : undefined;
                const Item = (
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary"><Icon className="h-4 w-4" /></span>
                    <div className="leading-tight">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{d.label}</p>
                      <p className="text-sm">{d.value}</p>
                    </div>
                  </div>
                );
                return <li key={d.label}>{href ? <a href={href} target="_blank" rel="noreferrer noopener">{Item}</a> : Item}</li>;
              })}
            </ul>
            <p className="text-sm text-muted-foreground inline-flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />{t.contact.trust}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.contact.disclaimer}</p>
          </div>
        </div>
      </section>
    </>
  );
}
