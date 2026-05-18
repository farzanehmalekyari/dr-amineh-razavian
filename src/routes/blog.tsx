import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import serviceFace from "@/assets/service-face.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceBody from "@/assets/service-body.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Aesthetic Journal | Botox, Fillers, PRP & Natural Beauty Tips" },
      { name: "description", content: "Doctor-guided articles about natural Botox, fillers, PRP, skin rejuvenation, aftercare and aesthetic treatments in Dubai." },
      { property: "og:title", content: "Aesthetic Journal | Dr. Zahra Salehi" },
      { property: "og:description", content: "Doctor-guided articles about Botox, fillers, PRP and skin rejuvenation." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const { t } = useLang();
  const covers = [blog1, blog2, blog3, serviceFace, serviceSkin, serviceBody, insta1, insta2, blog1, blog3];
  const [active, setActive] = useState(0);
  const articles = t.blog.articles;
  const filtered = active === 0 ? articles : articles.filter((a) => a.cat === t.blog.categories[active]);

  return (
    <>
      <section className="bg-gradient-to-b from-beige/40 to-cream py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">{t.nav.blog}</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">{t.blog.title}</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.blog.sub}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {t.blog.categories.map((c, i) => (
              <button key={c} onClick={() => setActive(i)} className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] border ${active === i ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:border-primary hover:text-primary"}`}>{c}</button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => {
              const origIdx = articles.indexOf(a);
              return (
                <article key={i} className="rounded-3xl bg-card border border-border overflow-hidden shadow-soft flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={covers[origIdx % covers.length]} alt={a.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="eyebrow text-[10px]">{a.cat}</p>
                    <h2 className="mt-2 font-serif text-xl leading-snug">{a.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{a.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="h-3.5 w-3.5" /> {a.time} {t.blog.readTime}</span>
                      <Link to="/contact" className="inline-flex items-center gap-1 text-primary font-medium">{t.blog.read} <ArrowRight className="h-3 w-3" /></Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            {t.blog.cta} <Link to="/contact" className="text-primary underline-offset-4 hover:underline ms-1">{t.nav.book}</Link>
          </p>
        </div>
      </section>
    </>
  );
}
