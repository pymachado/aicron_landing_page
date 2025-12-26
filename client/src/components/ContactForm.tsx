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
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const submitMutation = useSubmitContact();
  
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
                        <Input placeholder="Juan Pérez" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
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
                        <Input placeholder="juan@empresa.com" type="email" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
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
                        <Input placeholder="+34 600 000 000" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
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
                        <Input placeholder="Mi Empresa S.L." className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
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
                        <Input placeholder="CEO, Director de Operaciones..." className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
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
                      <FormLabel>Facturación Anual Aproximada</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors">
                            <SelectValue placeholder="Selecciona un rango" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<100k">Menos de 100k€</SelectItem>
                          <SelectItem value="100k-500k">100k€ - 500k€</SelectItem>
                          <SelectItem value="500k-1M">500k€ - 1M€</SelectItem>
                          <SelectItem value="1M-5M">1M€ - 5M€</SelectItem>
                          <SelectItem value=">5M">Más de 5M€</SelectItem>
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors">
                            <SelectValue placeholder="Selecciona el tipo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="B2B">B2B (Servicios a empresas)</SelectItem>
                          <SelectItem value="B2C">B2C (Venta a consumidor final)</SelectItem>
                          <SelectItem value="Ecommerce">Ecommerce</SelectItem>
                          <SelectItem value="SaaS">SaaS / Software</SelectItem>
                          <SelectItem value="Agency">Agencia / Consultoría</SelectItem>
                          <SelectItem value="Other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
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
                        <Input placeholder="www.miempresa.com" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
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
                        className="min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none"
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
        </motion.div>
      </div>
    </div>
  );
}
