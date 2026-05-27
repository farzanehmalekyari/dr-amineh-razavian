import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "@/lib/contact";
import { CheckCircle2, MessageCircle, Home } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Dr. Amineh Razavian" },
      { name: "description", content: "Your consultation request has been received. Dr. Amineh Razavian's team will be in touch with you shortly." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const { t } = useLang();
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-beige/40 to-ivory">
      <div className="max-w-lg text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary"><CheckCircle2 className="h-8 w-8" /></span>
        <h1 className="mt-6 font-serif text-3xl sm:text-4xl text-balance">{t.thankyou.title}</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">{t.thankyou.body}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary-foreground"><MessageCircle className="h-4 w-4" />{t.thankyou.whatsapp}</a>
          <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary"><Home className="h-4 w-4" />{t.thankyou.home}</Link>
        </div>
      </div>
    </section>
  );
}
