import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { NLogoBackground } from "@/components/NLogoBackground";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalParticles } from "@/components/GlobalParticles";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@assets/logo_280_9x95_1_1766715570899a.png";
import logoDarkImg from "@assets/logo_dark.png";
import { Link } from "wouter";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  Users,
  ShieldCheck,
  Bot,
  Cpu,
  Link2,
  TrendingUp,
  Building2,
  Star,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
  };

  const problemIcons = [AlertTriangle, Users, TrendingUp, Cpu];
  const problemColors = [
    { color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { color: "text-accent",     bg: "bg-blue-50 dark:bg-blue-900/20" },
    { color: "text-primary",    bg: "bg-green-50 dark:bg-green-900/20" },
    { color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
  ];

  const pillarIcons = [Bot, Cpu, Link2];
  const pillarColors = ["bg-primary", "bg-secondary", "bg-accent"];

  const packageIcons = [Zap, TrendingUp, Building2];
  const packageNames = ["Starter", "Growth", "Enterprise"];
  const packageIconColors = ["text-muted-foreground", "text-primary", "text-accent"];
  const packageBorders = [
    "border-gray-200",
    "border-primary ring-2 ring-primary/20",
    "border-accent/40",
  ];
  const packagePriceColors = ["text-foreground", "text-secondary", "text-accent"];
  const packageFeatured = [false, true, false];
  const packageCtaVariants = ["outline", "default", "outline"] as const;

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
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {h.hero.badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white pb-2">
              {h.hero.title[0]} <br />
              <span className="text-primary">{h.hero.title[1]}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              {h.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                onClick={scrollToForm}
                className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {h.hero.ctaPrimary}
              </Button>
              <Link href="/services">
                <Button variant="outline" className="h-14 px-8 text-lg rounded-full hover:-translate-y-1 transition-all">
                  {h.hero.ctaSecondary}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-3 max-w-2xl mx-auto"
            >
              <img src={logoImg} alt="AICRON" className="h-8 w-auto opacity-60 block dark:hidden" />
              <img src={logoDarkImg} alt="AICRON" className="h-8 w-auto opacity-60 hidden dark:block" />
              <p className="text-sm text-muted-foreground text-left leading-snug">
                <span className="font-semibold text-foreground">"N"</span>{" "}
                {h.hero.logoNote}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900 border-y border-gray-100 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-14" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              {h.problem.title[0]}{" "}
              <span className="text-orange-500">{h.problem.title[1]}</span>
            </h2>
            <p className="text-lg text-muted-foreground">{h.problem.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {h.problem.cards.map((card, i) => {
              const Icon = problemIcons[i];
              const { color, bg } = problemColors[i];
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* LO QUE HACEMOS — 3 PILARES */}
      <section className="py-24" id="servicios">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {h.pillars.title[0]}{" "}
              <span className="text-accent">{h.pillars.title[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{h.pillars.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {h.pillars.items.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${pillarColors[i]} mb-6 flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">{pillar.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{pillar.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section id="como-trabajamos" className="py-24 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-700 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {h.howWeWork.title[0]} <br />
                <span className="text-orange-500">{h.howWeWork.title[1]}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {h.howWeWork.subtitle}
              </p>
              <Button
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-8 h-12"
              >
                {h.howWeWork.cta}
              </Button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {h.howWeWork.values.map((val, i) => {
                const colors = ["text-[#3CB043]", "text-[#FFA500]", "text-[#1679bd]"];
                return (
                  <motion.div
                    key={i}
                    variants={{ hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } }}
                    className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-gray-100 dark:hover:border-slate-700 hover:shadow-sm"
                  >
                    <div className="mt-1">
                      <CheckCircle2 className={`w-8 h-8 ${colors[i]}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white">{val.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PREVIEW DE PAQUETES */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/60">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {h.packages.title[0]}{" "}
              <span className="text-primary">{h.packages.title[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{h.packages.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {h.packages.items.map((pkg, i) => {
              const Icon = packageIcons[i];
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className={`relative flex flex-col rounded-2xl bg-white dark:bg-slate-800 border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 ${packageBorders[i]} ${packageFeatured[i] ? "scale-[1.02] shadow-xl" : ""}`}
                >
                  {packageFeatured[i] && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30">
                        <Star className="w-3.5 h-3.5 fill-white" />
                        {h.packages.recommended}
                      </span>
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-slate-700 border flex items-center justify-center mb-5 ${packageFeatured[i] ? "border-primary/20 bg-primary/5" : "dark:border-slate-600"}`}>
                    <Icon className={`w-6 h-6 ${packageIconColors[i]}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 dark:text-white">{packageNames[i]}</h3>
                  <p className="text-muted-foreground text-sm font-medium mb-4 italic">{pkg.tagline}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">{pkg.desc}</p>
                  <p className={`text-lg font-bold mb-6 ${packagePriceColors[i]}`}>{pkg.price}</p>
                  <Link href="/services">
                    <Button
                      variant={packageCtaVariants[i]}
                      className={`w-full rounded-full h-11 ${packageFeatured[i] ? "bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/25" : ""}`}
                    >
                      {h.packages.viewDetails}
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 h-12 text-base">
                {h.packages.viewAll}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FILTRO */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{h.filter.title}</h2>
              <p className="text-lg text-muted-foreground">{h.filter.subtitle}</p>
              <ul className="space-y-4 mt-6">
                {h.filter.checks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-l-4 border-l-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 dark:bg-slate-700 rounded-bl-full -z-10" />
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                <ShieldCheck className="w-8 h-8 text-primary" />
                {h.filter.notForTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{h.filter.notForSubtitle}</p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800/30">
                <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2">{h.filter.notForBox.title}</h4>
                <p className="text-orange-700/90 dark:text-orange-300/80 text-sm">
                  {h.filter.notForBox.text.split(h.filter.notForBox.boldPart).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>{part}<span className="font-bold">{h.filter.notForBox.boldPart}</span></span>
                    ) : <span key={i}>{part}</span>
                  )}
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {h.filter.notForItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WEB3 TEASER */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-8" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-gray-300">{h.web3Teaser.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
                {h.web3Teaser.title[0]}{" "}
                <span className="text-primary">{h.web3Teaser.title[1]}</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {h.web3Teaser.subtitle}
              </p>
            </motion.div>

            <motion.div className="text-center mb-8" {...fadeInUp}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {h.web3Teaser.sectorsLabel}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {h.web3Teaser.sectors.map((sector, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="text-center" {...fadeInUp}>
              <Link href="/services#web3">
                <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all">
                  {h.web3Teaser.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPLORACIÓN GRATUITA */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/60" id="diagnostico">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {h.exploration.title[0]}{" "}
              <span className="text-primary">{h.exploration.title[1]}</span>
            </h2>
            <p className="text-lg text-muted-foreground">{h.exploration.subtitle}</p>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {h.exploration.badge}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{h.exploration.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {[
                  { label: h.exploration.chips[0].label, color: "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-slate-600" },
                  { label: h.exploration.chips[1].label, color: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/30" },
                  { label: h.exploration.chips[2].label, color: "bg-green-50 dark:bg-green-900/20 text-primary border-green-200 dark:border-green-800/30" },
                ].map((chip, i) => (
                  <div key={i} className={`px-3 py-2.5 rounded-xl border text-sm font-medium text-center ${chip.color}`}>
                    {chip.label}
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToForm}
                className="w-full h-14 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all"
              >
                {h.exploration.cta}
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  {h.exploration.availability}
                </p>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-1.5 mb-4">
                {h.exploration.availabilityNote}
              </p>

              <p className="text-center text-sm text-muted-foreground border-t border-gray-100 dark:border-slate-700 pt-4">
                {h.exploration.link}{" "}
                <Link href="/services" className="text-primary font-semibold hover:underline">
                  {h.exploration.linkAnchor}
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {h.closing.title[0]} <br />
              <span className="text-primary">{h.closing.title[1]}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">{h.closing.subtitle}</p>
            <Button
              onClick={scrollToForm}
              className="h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              {h.closing.cta}
            </Button>
            <p className="mt-6 text-gray-500 font-medium">{h.closing.note}</p>
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
