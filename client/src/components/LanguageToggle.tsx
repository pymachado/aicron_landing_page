import { useLanguage } from "@/contexts/LanguageContext";
import { trackEvent } from "@/hooks/use-analytics";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => {
        const next = language === "es" ? "en" : "es";
        trackEvent("language_toggle", { from: language, to: next });
        setLanguage(next);
      }}
      aria-label="Cambiar idioma / Change language"
      className="text-xs font-bold px-2.5 py-1 rounded-full border border-foreground/25 hover:border-primary hover:text-primary transition-all duration-200"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
