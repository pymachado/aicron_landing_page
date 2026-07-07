import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingSectionProps {
  id?: string;
  showHeader?: boolean;
}

export function BookingSection({ id, showHeader = true }: BookingSectionProps) {
  const { t } = useLanguage();
  const a = t.agendarCita;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark:  { "cal-brand": "#3CB043" },
          light: { "cal-brand": "#3CB043" },
        },
      });
    })();
  }, []);

  return (
    <div
      id={id}
      className="py-24 bg-gradient-to-b from-white dark:from-slate-900 to-gray-50 dark:to-slate-900/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {showHeader && (
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              {a.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance dark:text-white">
              {a.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{a.subtitle}</p>
            <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
              {a.trust.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          className="rounded-2xl overflow-hidden border border-border/40 shadow-xl shadow-primary/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: showHeader ? 0.2 : 0 }}
          style={{ minHeight: "720px" }}
        >
          <Cal
            namespace="30min"
            calLink="aicron/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: "720px" }}
            config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
