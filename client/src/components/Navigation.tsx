import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackEvent } from "@/hooks/use-analytics";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/logo_280_9x95_1_1766715570899a.png";
import logoDarkImg from "@assets/logo_dark.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const goToSection = (sectionId: string) => {
    trackEvent("nav_click", { section: sectionId });
    setIsMobileMenuOpen(false);
    if (location === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToForm = () => {
    trackEvent("cta_click", { section: "nav" });
    setIsMobileMenuOpen(false);
    if (location === "/") {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact-form";
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logoImg} alt="AICRON Logo" className="h-10 w-auto dark:hidden" />
            <img src={logoDarkImg} alt="AICRON Logo" className="h-10 w-auto hidden dark:block" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {t.nav.home}
            </button>
          </Link>
          <button
            onClick={() => goToSection("servicios")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            {t.nav.whatWeDo}
          </button>
          <button
            onClick={() => goToSection("como-trabajamos")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            {t.nav.philosophy}
          </button>
          <Link href="/services">
            <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {t.nav.services}
            </button>
          </Link>
          <Link href="/about">
            <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {t.nav.about}
            </button>
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <Button
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-6"
          >
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-b dark:border-slate-700"
        >
          <div className="flex flex-col p-4 gap-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="text-left w-full font-medium p-2 hover:bg-muted rounded-lg">
                {t.nav.home}
              </button>
            </Link>
            <button
              onClick={() => goToSection("servicios")}
              className="text-left font-medium p-2 hover:bg-muted rounded-lg"
            >
              {t.nav.whatWeDo}
            </button>
            <button
              onClick={() => goToSection("como-trabajamos")}
              className="text-left font-medium p-2 hover:bg-muted rounded-lg"
            >
              {t.nav.philosophy}
            </button>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="text-left w-full font-medium p-2 hover:bg-muted rounded-lg">
                {t.nav.services}
              </button>
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="text-left w-full font-medium p-2 hover:bg-muted rounded-lg">
                {t.nav.about}
              </button>
            </Link>
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-medium text-foreground/60">{t.nav.darkMode}</span>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
            <Button onClick={scrollToForm} className="w-full">
              {t.nav.cta}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
