import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
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
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600">Automatización Inteligente para Negocios</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pb-2">
              Optimiza tu negocio con <br/>
              <span className="text-primary">Inteligencia Artificial</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              Cada proceso manual es una fuga de rentabilidad. Transformamos tus operaciones para que escales sin aumentar estructura.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                onClick={scrollToForm}
                className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Agendar Diagnóstico Gratuito
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
                className="h-14 px-8 text-lg rounded-full border-2 hover:bg-gray-50"
              >
                Ver cómo funciona
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              {[
                { icon: Zap, title: "Velocidad", text: "Procesos que tomaban días, ahora en segundos." },
                { icon: Target, title: "Precisión", text: "Elimina el error humano de tus operaciones." },
                { icon: BarChart3, title: "Rentabilidad", text: "Reduce costes operativos hasta un 40%." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-transparent hover:border-gray-200 hover:bg-white transition-all hover:shadow-md"
                >
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{item.text}</p>
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
            <motion.div 
              {...fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Si tu negocio sigue funcionando a base de hojas de cálculo y tareas repetitivas...</h2>
              <p className="text-lg text-muted-foreground">Estás perdiendo ventaja competitiva cada día. La IA no es una moda, es el nuevo estándar de eficiencia operativa.</p>
              
              <ul className="space-y-4 mt-6">
                {[
                  "Tu equipo pasa horas copiando datos de un sitio a otro",
                  "La atención al cliente depende 100% de humanos y tiene demoras",
                  "No tienes visibilidad en tiempo real de tus métricas clave",
                  "Sientes que el crecimiento implica contratar más personal linealmente"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
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
                Para quién es AICRON
              </h3>
              <p className="text-gray-600 mb-6">
                Nos especializamos en empresas establecidas que buscan eficiencia real. No somos una academia.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2">Nota Importante:</h4>
                <p className="text-orange-700/90 text-sm">
                  Si buscas cursos de "Cómo usar ChatGPT" o promesas de hacerse rico rápido, <span className="font-bold">AICRON no es para ti</span>. 
                  Somos ingenieros de soluciones implementando sistemas robustos en negocios reales.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">No vendemos software, vendemos <span className="text-accent">resultados</span></h2>
            <p className="text-xl text-muted-foreground">
              Nuestra metodología se basa en entender tu negocio primero, y aplicar tecnología después.
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
                title: "1. Diagnóstico Estratégico",
                desc: "Analizamos tus flujos de trabajo actuales para identificar cuellos de botella y oportunidades de automatización de alto impacto.",
                color: "bg-primary"
              },
              {
                title: "2. Implementación A Medida",
                desc: "Desarrollamos e integramos las soluciones de IA sin interrumpir tu operativa diaria. Conectamos tus herramientas actuales.",
                color: "bg-secondary"
              },
              {
                title: "3. Optimización Continua",
                desc: "No te dejamos solo. Monitoreamos el rendimiento de las automatizaciones y ajustamos para maximizar el ROI constantemente.",
                color: "bg-accent"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg ${card.color} mb-6 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title.split('. ')[1]}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section id="values" className="py-24 bg-foreground text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Más partner que proveedor
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                No somos una agencia que desaparece tras la entrega. Nos integramos como tu departamento de innovación externa.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={scrollToForm}
                  className="bg-white text-foreground hover:bg-gray-200"
                >
                  Trabajemos juntos
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
                { title: "Transparencia Radical", desc: "Si no podemos ayudarte, te lo diremos. Si la IA no es la solución, también." },
                { title: "Pragmatismo", desc: "Odiamos el 'hype'. Nos centramos en soluciones que funcionan hoy y traen dinero hoy." },
                { title: "Excelencia Técnica", desc: "Combinamos ingeniería de software robusta con los últimos modelos de LLMs." }
              ].map((val, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    show: { opacity: 1, x: 0 }
                  }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                    <p className="text-gray-400">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS PROCESS TEASER */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Qué ocurre cuando agendas</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />
              
              {[
                { step: "1", text: "Breve formulario inicial", bgColor: "bg-[#3CB043]", textColor: "text-white" },
                { step: "2", text: "Llamada de exploración (20 min)", bgColor: "bg-[#FFFFFF]", textColor: "text-gray-800" },
                { step: "3", text: "Propuesta de valor personalizada", bgColor: "bg-[#FFA500]", textColor: "text-white" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 px-4">
                  <div className={`w-14 h-14 rounded-full ${item.bgColor} border-4 border-[#1679bd] ${item.textColor} font-bold flex items-center justify-center text-xl mx-auto mb-4 shadow-md relative z-10 transition-transform hover:scale-110 duration-300`}>
                    {item.step}
                  </div>
                  <p className="font-bold text-gray-900 max-w-[150px] mx-auto leading-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <ContactForm />
    </div>
  );
}
