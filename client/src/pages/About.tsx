import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { NLogoBackground } from "@/components/NLogoBackground";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalParticles } from "@/components/GlobalParticles";
import { useLanguage } from "@/contexts/LanguageContext";
import pedroPic from "@assets/pedro_machado.jpg";
import { motion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  Hammer,
  Compass,
  ArrowRight,
  Linkedin,
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
  };

  const valueIcons = [Wrench, ShieldCheck, Hammer, Compass];
  const valueColors = [
    { icon: "text-primary", bg: "bg-primary/10" },
    { icon: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { icon: "text-accent", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { icon: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <GlobalParticles />
      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
        <NLogoBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{a.hero.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white pb-2">
              {a.hero.title[0]} <br />
              <span className="text-primary">{a.hero.title[1]}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
              "{a.hero.quote}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

            {/* Foto */}
            <motion.div {...fadeInUp} className="flex flex-col items-center lg:items-start gap-4">
              <div className="relative">
                <img
                  src={pedroPic}
                  alt="Pedro Machado — Founder AICRON"
                  className="w-72 h-80 object-cover object-top rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{a.story.name}</p>
                  <p className="text-xs text-muted-foreground">{a.story.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Texto */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[a.story.p1, a.story.p2, a.story.p3].map((p, i) => (
                <motion.p
                  key={i}
                  variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } }}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/60">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold">
              {a.timeline.title}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {a.timeline.items.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span className="text-4xl font-bold text-gray-100 dark:text-slate-700 select-none block mb-3">
                  {item.year}
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                {i < a.timeline.items.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300 dark:text-slate-600" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              {a.values.title[0]}{" "}
              <span className="text-primary">{a.values.title[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{a.values.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {a.values.items.map((val, i) => {
              const Icon = valueIcons[i];
              const { icon, bg } = valueColors[i];
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${icon}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{val.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">
              {a.philosophy.title}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-primary">
              {a.philosophy.subtitle}
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed">{a.philosophy.desc}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/60">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {a.cta.title[0]}{" "}
              <span className="text-primary">{a.cta.title[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">{a.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={scrollToForm}
                className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all"
              >
                {a.cta.button}
              </Button>
              <a
                href="https://linkedin.com/in/pedromachado-aicron"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="h-14 px-8 text-lg rounded-full hover:-translate-y-1 transition-all gap-2">
                  <Linkedin className="w-5 h-5" />
                  {a.cta.linkedin}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
