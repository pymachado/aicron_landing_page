import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalParticles } from "@/components/GlobalParticles";
import { NLogoBackground } from "@/components/NLogoBackground";
import { BookingSection } from "@/components/BookingSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AgendarCita() {
  const { t } = useLanguage();
  const a = t.agendarCita;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GlobalParticles />
      <NLogoBackground />
      <ScrollToTop />

      <main className="pt-28">
        {/* h1 para SEO — visible sobre el embed */}
        <section className="container mx-auto px-4 md:px-6 text-center pb-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-semibold mb-6 tracking-wide">
              {a.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
              {a.title}
            </h1>
            <p className="text-foreground/55 text-lg leading-relaxed">{a.subtitle}</p>
            <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
              {a.trust.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground/45">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <BookingSection showHeader={false} />
      </main>

      <Footer />
    </div>
  );
}
