import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2, MapPin } from "lucide-react";
import aboutTop from "@/assets/about-top.jpg";
import clinic from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Amineh Razavian | Orthodontist & Family-Focused Dentist Dubai" },
      { name: "description", content: "Meet Dr. Amineh Razavian, an orthodontist and family-focused dentist in Dubai providing evidence-based orthodontic, preventive, and family dental care for children, teens, and adults." },
      { property: "og:title", content: "About Dr. Amineh Razavian | Orthodontist & Family-Focused Dentist Dubai" },
      { property: "og:description", content: "Meet Dr. Amineh Razavian, an orthodontist and family-focused dentist in Dubai providing evidence-based orthodontic, preventive, and family dental care for children, teens, and adults." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <>
      <section className="bg-gradient-to-b from-beige/40 to-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow mb-3">{t.nav.about}</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">{t.about.hero}</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">{t.about.sub}</p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-elegant aspect-[4/5]">
            <img src={aboutTop} alt="Dr. Arefeh Lotfi" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="" title={t.about.bioTitle} subtitle={t.about.bio} />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="" title={t.about.credsTitle} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.creds.map((c) => (
              <div key={c} className="rounded-2xl border border-border bg-background px-5 py-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary"><CheckCircle2 className="h-4 w-4" /></span>
                <span className="text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">Philosophy</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-balance">"{t.about.philosophy}"</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 text-start">
            {t.about.philosophyPoints.map((p) => (
              <li key={p} className="rounded-2xl bg-card border border-border px-5 py-4 flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-3xl shadow-soft aspect-[4/3]">
            <img src={clinic} alt="Aesthetic clinic interior in Dubai" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <SectionHeading eyebrow="" title={t.about.locationsTitle} align="start" />
            <div className="mt-6 space-y-4">
              {t.about.locations.map((l) => (
                <div key={l.title} className="rounded-2xl border border-border bg-background px-5 py-4">
                  <p className="font-serif text-xl flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{l.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{l.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary-foreground">{t.about.cta}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
