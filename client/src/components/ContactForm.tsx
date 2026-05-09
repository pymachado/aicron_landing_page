import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PrivacyPolicyDialog } from "./PrivacyPolicyDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const inputCls = "h-12 bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all dark:text-white dark:placeholder:text-slate-400";
const selectGreenItem =
  "data-[highlighted]:bg-[#3CB043] data-[highlighted]:text-white " +
  "data-[state=checked]:bg-[#3CB043] data-[state=checked]:text-white " +
  "focus:bg-[#3CB043] focus:text-white";

export function ContactForm() {
  const submitMutation = useSubmitContact();
  const [showSuccess, setShowSuccess] = useState(false);
  const [availability, setAvailability] = useState("");
  const [availabilityTime, setAvailabilityTime] = useState("");
  const { t, language } = useLanguage();
  const f = t.form;

  const form = useForm({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      countryCode: "+1",
      language: language,
      mainChallenge: "",
      businessType: "",
      webSocials: "",
    },
  });

  const onSubmit = (data: any) => {
    const availabilityNote = [
      availability && `${f.fields.availability}: ${availability}`,
      availabilityTime && `${f.fields.availabilityTime}: ${availabilityTime}`,
    ]
      .filter(Boolean)
      .join(" | ");

    const fullChallenge = availabilityNote
      ? `${data.mainChallenge}\n\n— ${availabilityNote}`
      : data.mainChallenge;

    submitMutation.mutate(
      { ...data, mainChallenge: fullChallenge },
      {
        onSuccess: () => {
          form.reset();
          setAvailability("");
          setAvailabilityTime("");
          setShowSuccess(true);
        },
      }
    );
  };

  return (
    <div
      id="contact-form"
      className="py-24 bg-gradient-to-b from-white dark:from-slate-900 to-gray-50 dark:to-slate-900/80 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-3xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            {f.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance dark:text-white">
            {f.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">{f.subtitle}</p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
            <span>📍</span>
            <span>{f.location}</span>
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {showSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{f.success.title}</h3>
                <p className="text-lg text-muted-foreground mb-8">{f.success.message}</p>
                <Button onClick={() => setShowSuccess(false)} variant="outline" className="rounded-xl h-12">
                  {f.success.reset}
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                  {/* Fila 1: Nombre + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.fields.name}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.fields.namePlaceholder} className={inputCls} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.fields.email}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.fields.emailPlaceholder} type="email" className={inputCls} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Fila 2: Teléfono + Empresa */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <FormLabel>{f.fields.phone}</FormLabel>
                      <div className="flex gap-2">
                        <FormField
                          control={form.control}
                          name="countryCode"
                          render={({ field }) => (
                            <FormItem className="flex-shrink-0 w-[110px]">
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className={inputCls}>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="max-h-[280px]">
                                  {[
                                    ["+1","🇺🇸"],["+34","🇪🇸"],["+52","🇲🇽"],["+54","🇦🇷"],
                                    ["+57","🇨🇴"],["+56","🇨🇱"],["+51","🇵🇪"],["+58","🇻🇪"],
                                    ["+593","🇪🇨"],["+502","🇬🇹"],["+506","🇨🇷"],["+507","🇵🇦"],
                                    ["+503","🇸🇻"],["+504","🇭🇳"],["+505","🇳🇮"],["+595","🇵🇾"],
                                    ["+598","🇺🇾"],["+591","🇧🇴"],["+1-809","🇩🇴"],
                                  ].map(([code, flag]) => (
                                    <SelectItem key={code} value={code} className={selectGreenItem}>
                                      {flag} {code}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem className="flex-grow">
                              <FormControl>
                                <Input placeholder="832 000 0000" className={inputCls} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.fields.company}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.fields.companyPlaceholder} className={inputCls} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Fila 3: Tipo de negocio + Idioma */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.fields.businessType}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.fields.businessTypePlaceholder} className={inputCls} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.fields.language}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className={inputCls}>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="en" className={selectGreenItem}>English</SelectItem>
                              <SelectItem value="es" className={selectGreenItem}>Español</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Sitio web (opcional) */}
                  <FormField
                    control={form.control}
                    name="webSocials"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{f.fields.webSocials}</FormLabel>
                        <FormControl>
                          <Input placeholder={f.fields.webSocialsPlaceholder} className={inputCls} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Desafío principal */}
                  <FormField
                    control={form.control}
                    name="mainChallenge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{f.fields.mainChallenge}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={f.fields.mainChallengePlaceholder}
                            className="min-h-[110px] bg-white dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 border-gray-200 dark:border-slate-600 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Disponibilidad */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <FormLabel>{f.fields.availability}</FormLabel>
                      <Select onValueChange={setAvailability} value={availability}>
                        <SelectTrigger className={inputCls}>
                          <SelectValue placeholder={f.fields.availabilityPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {f.fields.availabilityOptions.map((opt) => (
                            <SelectItem key={opt} value={opt} className={selectGreenItem}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <FormLabel>{f.fields.availabilityTime}</FormLabel>
                      <Select onValueChange={setAvailabilityTime} value={availabilityTime}>
                        <SelectTrigger className={inputCls}>
                          <SelectValue placeholder={f.fields.availabilityTimePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {f.fields.availabilityTimeOptions.map((opt) => (
                            <SelectItem key={opt} value={opt} className={selectGreenItem}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                    >
                      {submitMutation.isPending ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" />{f.submitting}</>
                      ) : (
                        <>{f.submit} <Send className="ml-2 h-5 w-5" /></>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      {f.privacy}{" "}
                      <PrivacyPolicyDialog
                        trigger={
                          <button type="button" className="underline hover:text-primary transition-colors">
                            {f.privacyLink}
                          </button>
                        }
                      />
                      {f.privacySuffix}
                    </p>
                  </div>
                </form>
              </Form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
