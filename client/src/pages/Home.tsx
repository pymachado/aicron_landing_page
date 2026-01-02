import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { NLogoBackground } from "@/components/NLogoBackground";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalParticles } from "@/components/GlobalParticles";
import logoImg from "@assets/logo_280_9x95_1_1766715570899.png";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Zap,
  Users,
  Target,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <GlobalParticles />
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
        <NLogoBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600">
                Intelligent Automation for Businesses
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pb-2">
              Optimize your business with <br />
              <span className="text-primary">Artificial Intelligence</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              Every manual process costs you time, errors, and money. AICRON’s
              Diagnosis identifies exactly where AI can generate real and
              profitable impact in your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                onClick={scrollToForm}
                className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Hire a Personalized Diagnosis
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              {[
                {
                  icon: Zap,
                  title: "Detect inefficiencies",
                  text: "Hidden inefficiencies that are costing you money today.",
                },
                {
                  icon: Target,
                  title: "Real opportunities",
                  text: "Identify real AI automation opportunities.",
                },
                {
                  icon: BarChart3,
                  title: "Full clarity",
                  text: "Total clarity before investing in implementation.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-transparent hover:border-gray-200 hover:bg-white transition-all hover:shadow-md"
                >
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTERING SECTION */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                If your business still depends on manual processes, this is for
                you
              </h2>
              <p className="text-lg text-muted-foreground">
                We work with companies that want to improve efficiency, reduce
                costs, and scale without adding technical complexity.
              </p>

              <ul className="space-y-4 mt-6">
                {[
                  "Your team repeats operational tasks every day",
                  "You use multiple tools that are not properly connected",
                  "You know AI can help, but don’t know where to start",
                  "You want clarity before investing in automation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-l-primary relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10" />
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-primary" />
                Who AICRON is NOT for
              </h3>
              <p className="text-gray-600 mb-6">
                We specialize in companies looking for real results. We are not
                an academy.
              </p>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2">
                  Important Note:
                </h4>
                <p className="text-orange-700/90 text-sm">
                  If you are looking for courses, generic prompts, or “experimenting
                  with AI”,{" "}
                  <span className="font-bold">AICRON is not for you</span>. We are
                  solution engineers implementing robust systems in real
                  businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="py-24" id="process">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We don’t sell software. We design systems that{" "}
              <span className="text-accent">work for you</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our methodology is based on understanding your business first, and
              applying technology second.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Strategic Diagnosis",
                desc: "We analyze real processes, tools, and workflows to identify high-impact bottlenecks.",
                color: "bg-primary",
              },
              {
                title: "AI Solution Design",
                desc: "We turn opportunities into clear, viable, and actionable systems, connecting your existing tools.",
                color: "bg-secondary",
              },
              {
                title: "AI Automation Implementation (Upsell)",
                desc: "We execute only what the Diagnosis proves is worth automating to maximize ROI.",
                color: "bg-accent",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 50 },
                  },
                }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${card.color} mb-6 flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                >
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section
        id="values"
        className="py-24 bg-white border-y border-gray-100 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                First clarity. <br />
                <span className="text-orange-500">Then execution.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We don’t implement anything without prior analysis. Diagnosis
                removes guesswork and reduces risk before automating.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={scrollToForm}
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-8 h-12"
                >
                  Hire a Personalized Diagnosis
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Clarity",
                  desc: " Personalized visual and technical roadmap before writing a single line of code.",
                  iconColor: "text-[#3CB043]",
                },
                {
                  title: "Real Impact",
                  desc: "We focus on solutions that work today and generate measurable returns.",
                  iconColor: "text-[#FFA500]",
                },
                {
                  title: "Data-Driven Decisions",
                  desc: "Diagnosis is a strategic asset for making informed decisions.",
                  iconColor: "text-[#1679bd]",
                },
              ].map((val, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 hover:shadow-sm"
                >
                  <div className="mt-1">
                    <CheckCircle2 className={`w-8 h-8 ${val.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {val.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What do you get with the Diagnosis?
            </h2>
            <p className="text-lg text-muted-foreground">
              Diagnosis is independent from implementation. If there are no
              clear opportunities, we do not recommend moving forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Audit of key processes and current tools",
              "Analysis of real opportunities to integrate AI",
              "Personalized visual and technical roadmap",
              "Detailed technical report with next steps",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="font-semibold text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER CONDITIONS */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl font-bold mb-6">
                  Diagnosis Conditions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Duration</h4>
                    <p className="text-muted-foreground">
                      10–15 days (depending on complexity and scope)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Investment</h4>
                    <p className="text-2xl font-bold text-primary">
                      Starting at $2,499 USD
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      *(final price depends on scope and analysis complexity)*
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="bg-primary/5 p-8 rounded-3xl border border-primary/10 relative overflow-hidden"
              >
                <h3 className="text-2xl font-bold mb-4">Full Guarantee</h3>
                <p className="text-lg text-gray-700 mb-6">
                  <span className="font-bold text-primary">
                    100% of the Diagnosis cost
                  </span>{" "}
                  is credited if you decide to move forward with the full{" "}
                  <span className="font-bold">AI Automation Implementation</span> project within the
                  next 30 days.
                </p>
                <div className="flex items-center gap-2 text-orange-600 font-bold">
                  <span className="text-xl">⚠️</span>
                  <span>Limited to 3 companies per month</span>
                </div>
                <p className="text-xs text-orange-600/80 mt-2">
                  To ensure technical quality, focus, and real results.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              AI is not improvised. <br />
              <span className="text-primary">It is designed with intent.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Start with clarity. Implement only what generates returns.
            </p>
            <Button
              onClick={scrollToForm}
              className="h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              Hire your Diagnosis now
            </Button>
            <p className="mt-6 text-gray-500 font-medium">
              Zero risk · Clarity before implementation · Focused on real ROI
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <ContactForm />
      <ScrollToTop />
    </div>
  );
}
