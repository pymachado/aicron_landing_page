import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      aria-label="Cambiar idioma / Change language"
      className="text-xs font-bold px-2.5 py-1 rounded-full border border-foreground/25 hover:border-primary hover:text-primary transition-all duration-200"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
