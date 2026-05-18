import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";
import { useLang } from "@/i18n/LanguageContext";
import { MessageCircle, Send } from "lucide-react";

export function BookingForm() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Client-only stub: simulate processing then redirect.
    await new Promise((r) => setTimeout(r, 500));
    navigate({ to: "/thank-you" });
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition";
  const labelCls = "block text-xs uppercase tracking-[0.16em] text-muted-foreground mb-1.5 font-medium";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-card p-6 sm:p-8 shadow-elegant border border-border">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">{t.booking.fields.name}</label>
          <input id="name" name="name" required maxLength={120} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="wa">{t.booking.fields.whatsapp}</label>
          <input id="wa" name="whatsapp" required maxLength={40} className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="email">{t.booking.fields.email}</label>
        <input id="email" name="email" type="email" maxLength={160} className={inputCls} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="loc">{t.booking.fields.location}</label>
          <select id="loc" name="location" className={inputCls} defaultValue="">
            <option value="" disabled>—</option>
            {t.booking.locations.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="lang">{t.booking.fields.language}</label>
          <select id="lang" name="language" className={inputCls} defaultValue="">
            <option value="" disabled>—</option>
            {t.booking.languages.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="concern">{t.booking.fields.concern}</label>
          <select id="concern" name="concern" className={inputCls} defaultValue="">
            <option value="" disabled>—</option>
            {t.booking.concerns.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="treatment">{t.booking.fields.treatment}</label>
          <select id="treatment" name="treatment" className={inputCls} defaultValue="">
            <option value="" disabled>—</option>
            {t.booking.treatments.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="msg">{t.booking.fields.message}</label>
        <textarea id="msg" name="message" rows={4} maxLength={1000} className={inputCls} />
      </div>

      <div>
        <label className={labelCls} htmlFor="photo">{t.booking.fields.photo}</label>
        <input id="photo" name="photo" type="file" accept="image/*" className={inputCls + " file:mr-3 file:rounded-full file:border-0 file:bg-primary/15 file:px-3 file:py-1 file:text-primary"} />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground shadow-soft hover:bg-rose-deep transition disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {t.booking.submit}
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-primary hover:bg-primary hover:text-primary-foreground transition"
        >
          <MessageCircle className="h-4 w-4" />
          {t.booking.whatsapp}
        </a>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed pt-2">{t.booking.note}</p>
    </form>
  );
}
