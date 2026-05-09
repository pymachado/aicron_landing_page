import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { NLogoBackground } from "@/components/NLogoBackground";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalParticles } from "@/components/GlobalParticles";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Zap,
  TrendingUp,
  Building2,
  ArrowRight,
  MessageCircle,
  Clock,
  Star,
  Search,
  Lightbulb,
  Rocket,
  Shield,
  Globe,
  Lock,
  Hexagon,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

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

  const packageIcons = [Zap, TrendingUp, Building2];
  const packageIconColors = ["text-muted-foreground", "text-primary", "text-accent"];
  const packageBorders = ["border-gray-200", "border-primary ring-2 ring-primary/20", "border-accent/40"];
  const packagePriceColors = ["text-foreground", "text-secondary", "text-accent"];
  const packageFeatured = [false, true, false];
  const packageCtaVariants = ["outline", "default", "outline"] as const;

  const howItWorksIcons = [Search, Lightbulb, Rocket];
  const web3Icons = [Shield, Globe, Lock];
  const web3BadgeColors = [
    "bg-slate-700 text-gray-300",
    "bg-primary/20 text-primary",
    "bg-accent/20 text-accent",
  ];

  const scenarioBadgeColors = [
    "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-gray-300",
    "bg-primary/10 text-primary",
    "bg-accent/10 text-accent",
  ];
  const scenarioBorders = ["border-gray-200", "border-primary/30", "border-accent/30"];

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
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{s.hero.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white pb-2">
              {s.hero.title[0]} <br />
              <span className="text-primary">{s.hero.title[1]}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              {s.hero.subtitle}
            </p>

            <Button
              onClick={scrollToForm}
              className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {s.hero.cta}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* EXPLORACIÓN GRATUITA */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900 border-y border-gray-100 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-l-4 border-l-primary p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    {s.exploration.badge}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{s.exploration.step}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{s.exploration.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{s.exploration.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {s.exploration.chips.map((chip, i) => (
                    <div key={i} className={`px-4 py-3 rounded-xl border text-sm font-medium text-center ${chip.color}`}>
                      {chip.label}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToForm}
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-8 h-12"
                >
                  {s.exploration.cta}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <div className="flex items-center gap-2 mt-5">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
                  <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                    {s.exploration.availability}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {s.exploration.availabilityNote}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LOS TRES PAQUETES */}
      <section className="py-24" id="paquetes">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {s.packages.title[0]}{" "}
              <span className="text-accent">{s.packages.title[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{s.packages.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {s.packages.items.map((pkg, i) => {
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
                        {s.packages.recommended}
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-slate-700 border dark:border-slate-600 flex items-center justify-center mb-6 ${packageFeatured[i] ? "border-primary/20 bg-primary/5" : ""}`}>
                    <Icon className={`w-6 h-6 ${packageIconColors[i]}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-1 dark:text-white">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm font-medium mb-6 italic">{pkg.tagline}</p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pkg.painPoints.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <MessageCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 dark:text-gray-300 italic">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`rounded-xl p-4 mb-6 ${packageFeatured[i] ? "bg-primary/5 border border-primary/10" : "bg-gray-50 dark:bg-slate-700 border border-gray-100 dark:border-slate-600"}`}>
                    <p className={`text-xl font-bold ${packagePriceColors[i]}`}>Setup: {pkg.setupPrice}</p>
                    <p className={`text-base font-semibold ${packagePriceColors[i]} opacity-80`}>{pkg.monthlyPrice}</p>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{pkg.pitch}</p>

                  <Button
                    variant={packageCtaVariants[i]}
                    onClick={scrollToForm}
                    className={`w-full rounded-full h-11 ${packageFeatured[i] ? "bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/25" : ""}`}
                  >
                    {s.packages.cta} {pkg.name}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-10 flex justify-center">
            <div className="inline-flex items-start gap-3 px-5 py-3.5 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/30 max-w-xl text-center">
              <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed">{s.packages.deliveryNote}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-700" id="como-funciona">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {s.howItWorks.title[0]}{" "}
              <span className="text-primary">{s.howItWorks.title[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{s.howItWorks.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {s.howItWorks.steps.map((step, i) => {
              const Icon = howItWorksIcons[i];
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="relative group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-gray-100 dark:text-slate-700 group-hover:text-primary/20 transition-colors select-none">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ESCENARIOS REALES */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/60">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {s.scenarios.title[0]}{" "}
              <span className="text-orange-500">{s.scenarios.title[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{s.scenarios.subtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            {s.scenarios.items.map((sc, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`bg-white dark:bg-slate-800 rounded-2xl border shadow-md overflow-hidden ${scenarioBorders[i]}`}
              >
                <div className="p-2 pl-6 border-b border-gray-100 dark:border-slate-700 flex items-center gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${scenarioBadgeColors[i]}`}>
                    {sc.pkg}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-slate-700">
                  <div className="p-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{s.scenarios.before}</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">"{sc.before}"</p>
                  </div>
                  <div className="p-6 bg-primary/[0.02]">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{s.scenarios.withAicron}</p>
                    <p className="text-gray-800 dark:text-gray-100 leading-relaxed font-medium">{sc.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WEB3 VERTICAL */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="web3">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />
        <div className="container mx-auto px-4 relative z-10">

          {/* Header */}
          <motion.div className="text-center max-w-3xl mx-auto mb-10" {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Hexagon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-300">{s.web3.sectionBadge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {s.web3.title[0]}{" "}
              <span className="text-primary">{s.web3.title[1]}</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">{s.web3.subtitle}</p>
          </motion.div>

          {/* Sectors */}
          <motion.div {...fadeInUp} className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              {s.web3.sectorsTitle}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {s.web3.sectors.map((sector, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300"
                >
                  {sector}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {s.web3.items.map((pkg, i) => {
              const Icon = web3Icons[i];
              const featured = i === 1;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className={`relative flex flex-col rounded-2xl bg-slate-800 border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 ${
                    featured
                      ? "border-primary ring-2 ring-primary/30 scale-[1.02] shadow-xl"
                      : "border-slate-700"
                  }`}
                >
                  {featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30">
                        <Star className="w-3.5 h-3.5 fill-white" />
                        {s.web3.recommended}
                      </span>
                    </div>
                  )}

                  <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full mb-5 ${web3BadgeColors[i]}`}>
                    {pkg.badge}
                  </span>

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${featured ? "bg-primary/20" : "bg-slate-700"}`}>
                    <Icon className={`w-6 h-6 ${featured ? "text-primary" : "text-gray-400"}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-1 text-white">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm font-medium mb-5 italic">{pkg.tagline}</p>

                  <div className="border-l-2 border-slate-600 pl-3 mb-6">
                    <p className="text-sm text-gray-400 italic">"{pkg.painQuote}"</p>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`rounded-xl p-4 mb-5 ${featured ? "bg-primary/10 border border-primary/20" : "bg-slate-700 border border-slate-600"}`}>
                    <p className={`text-xl font-bold ${featured ? "text-primary" : "text-white"}`}>
                      {pkg.setupPrice}
                    </p>
                    {pkg.monthlyPrice && (
                      <p className="text-sm text-gray-400 mt-1">{pkg.monthlyPrice}</p>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{pkg.pitch}</p>

                  <Button
                    onClick={scrollToForm}
                    variant={featured ? "default" : "outline"}
                    className={`w-full rounded-full h-11 ${
                      featured
                        ? "bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/25"
                        : "border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {s.web3.cta} {pkg.name}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA CIERRE */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {s.closing.title[0]} <br />
              <span className="text-primary">{s.closing.title[1]}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">{s.closing.subtitle}</p>
            <Button
              onClick={scrollToForm}
              className="h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              {s.closing.cta}
            </Button>
            <p className="mt-6 text-gray-500 font-medium">{s.closing.note}</p>
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
