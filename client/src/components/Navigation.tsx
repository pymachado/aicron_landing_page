import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/logo_280_9x95_1_1766715570899.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logoImg} alt="AICRON Logo" className="h-10 w-auto" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Process
          </button>
          <button 
            onClick={() => document.getElementById("values")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Philosophy
          </button>
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-6"
          >
            Hire a Personalized Diagnosis

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
          className="md:hidden bg-white border-b"
        >
          <div className="flex flex-col p-4 gap-4">
            <button 
              onClick={() => {
                document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-medium p-2 hover:bg-muted rounded-lg"
            >
              Process
            </button>
            <button 
              onClick={() => {
                document.getElementById("values")?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-medium p-2 hover:bg-muted rounded-lg"
            >
              Philosophy
            </button>
            <Button onClick={scrollToForm} className="w-full">
              Hire a Diagnosis
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
