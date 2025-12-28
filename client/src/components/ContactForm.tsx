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

export function ContactForm() {
  const submitMutation = useSubmitContact();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      company: "",
      position: "",
      revenue: "",
      email: "",
      phone: "",
      processesToAutomate: "",
      businessType: "",
      webSocials: "",
    },
  });

  const onSubmit = (data: any) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        setShowSuccess(true);
      }
    });
  };

  return (
    <div id="contact-form" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Comienza Ahora
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Agenda tu Diagnóstico y Descubre el Potencial de tu Negocio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario a continuación. Analizaremos tu caso y te contactaremos si vemos una oportunidad clara de impacto.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10"
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
                <h3 className="text-2xl font-bold mb-4">¡Gracias!</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Ya hemos recibido y guardado tus datos. En las próximas 48 horas nos pondremos en contacto contigo.
                </p>
                <Button 
                  onClick={() => setShowSuccess(false)}
                  variant="outline"
                  className="rounded-xl h-12"
                >
                  Enviar otra respuesta
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Pérez" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
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
                          <FormLabel>Correo electrónico</FormLabel>
                          <FormControl>
                            <Input placeholder="juan@empresa.com" type="email" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono / WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="+34 600 000 000" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de la Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Mi Empresa S.L." className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cargo</FormLabel>
                          <FormControl>
                            <Input placeholder="CEO, Director de Operaciones..." className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="revenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Facturación Anual Aproximada (USD)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all">
                                <SelectValue placeholder="Selecciona un rango" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="<=150k">≤ 150K USD</SelectItem>
                              <SelectItem value="500k">500K USD</SelectItem>
                              <SelectItem value="10M">10M USD</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Negocio</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Agencia de marketing, Ecommerce de moda..." className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="webSocials"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Web o LinkedIn (Opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="www.miempresa.com" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="processesToAutomate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>¿Qué procesos te gustaría automatizar?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe brevemente los procesos manuales que más tiempo consumen en tu equipo..." 
                            className="min-h-[120px] bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={submitMutation.isPending}
                      className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
                        </>
                      ) : (
                        <>
                          Solicitar Diagnóstico Gratuito <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      Al enviar este formulario aceptas nuestra política de privacidad. Tus datos están seguros con nosotros.
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
