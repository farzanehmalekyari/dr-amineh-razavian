import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2, ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import serviceFace from "@/assets/service-face.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceBody from "@/assets/service-body.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Orthodontics & Preventive Dental Care Dubai | Dr. Amineh Razavian" },
      { name: "description", content: "Explore orthodontic evaluations, braces, clear aligners, and preventive family dentistry for children, teens, and adults in Dubai — by Dr. Amineh Razavian." },
      { property: "og:title", content: "Orthodontics & Preventive Dental Care Dubai | Dr. Amineh Razavian" },
      { property: "og:description", content: "Kids orthodontic evaluation, braces, clear aligners, and preventive family dental care in Dubai. Evidence-based, child-friendly, family-focused." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();
  const groups = [
    { img: serviceFace, ...t.services.cards[0] },
    { img: serviceSkin, ...t.services.cards[1] },
    { img: serviceBody, ...t.services.cards[2] },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-beige/40 to-cream py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">{t.nav.services}</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-balance">{t.servicesPage.hero}</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.servicesPage.sub}</p>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={gi} className={`py-16 lg:py-24 ${gi % 2 === 0 ? "bg-ivory" : "bg-cream"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
            <div className={gi % 2 === 1 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-3xl shadow-soft aspect-[4/3]">
                <img src={g.img} alt={g.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">{g.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{g.desc}</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{it}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.16em] text-primary-foreground hover:bg-rose-deep">{g.cta} <ArrowRight className="h-4 w-4" /></Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-xs uppercase tracking-[0.16em] text-primary hover:bg-primary hover:text-primary-foreground"><MessageCircle className="h-4 w-4" />{t.services.askWhatsapp}</a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 lg:py-24 bg-beige/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="" title={t.servicesPage.notSureTitle} subtitle={t.servicesPage.notSureBody} />
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary-foreground"><Calendar className="h-4 w-4" />{t.servicesPage.bookCta}</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
