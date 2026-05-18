import { useLang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card p-1 text-xs font-medium",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "ar" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={lang === "ar"}
      >
        AR
      </button>
    </div>
  );
}
