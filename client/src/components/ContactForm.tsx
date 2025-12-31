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
      countryCode: "+1",
      language: "es",
      processesToAutomate: "",
      businessType: "",
      webSocials: "",
    },
  });

  const selectGreenItem =
  "data-[highlighted]:bg-[#3CB043] data-[highlighted]:text-white " +
  "data-[state=checked]:bg-[#3CB043] data-[state=checked]:text-white " +
  "focus:bg-[#3CB043] focus:text-white";

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
            Get Started
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Schedule Your Diagnosis and Discover Your Business Potential
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below. We will analyze your case and contact you if we see a clear opportunity for impact.
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
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for providing your information. We will contact you within the next 48 hours.
                </p>
                <Button
                  onClick={() => setShowSuccess(false)}
                  variant="outline"
                  className="rounded-xl h-12"
                >
                  Submit Another Response
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
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" type="email" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-2">
                      <FormLabel>Phone / WhatsApp</FormLabel>
                      <div className="flex gap-2">
                        <FormField
                          control={form.control}
                          name="countryCode"
                          render={({ field }) => (
                            <FormItem className="flex-shrink-0 w-[120px]">
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all">
                                    <SelectValue placeholder="Code" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="max-h-[300px]">
                                  <SelectItem value="+1" className={selectGreenItem}>🇺🇸 +1</SelectItem>
                                  <SelectItem value="+34" className={selectGreenItem}>🇪🇸 +34</SelectItem>
                                  <SelectItem value="+52" className={selectGreenItem}>🇲🇽 +52</SelectItem>
                                  <SelectItem value="+54" className={selectGreenItem}>🇦🇷 +54</SelectItem>
                                  <SelectItem value="+57" className={selectGreenItem}>🇨🇴 +57</SelectItem>
                                  <SelectItem value="+56" className={selectGreenItem}>🇨🇱 +56</SelectItem>
                                  <SelectItem value="+51" className={selectGreenItem}>🇵🇪 +51</SelectItem>
                                  <SelectItem value="+58" className={selectGreenItem}>🇻🇪 +58</SelectItem>
                                  <SelectItem value="+593" className={selectGreenItem}>🇪🇨 +593</SelectItem>
                                  <SelectItem value="+502" className={selectGreenItem}>🇬🇹 +502</SelectItem>
                                  <SelectItem value="+506" className={selectGreenItem}>🇨🇷 +506</SelectItem>
                                  <SelectItem value="+507" className={selectGreenItem}>🇵🇦 +507</SelectItem>
                                  <SelectItem value="+503" className={selectGreenItem}>🇸🇻 +503</SelectItem>
                                  <SelectItem value="+504" className={selectGreenItem}>🇭🇳 +504</SelectItem>
                                  <SelectItem value="+505" className={selectGreenItem}>🇳🇮 +505</SelectItem>
                                  <SelectItem value="+595" className={selectGreenItem}>🇵🇾 +595</SelectItem>
                                  <SelectItem value="+598" className={selectGreenItem}>🇺🇾 +598</SelectItem>
                                  <SelectItem value="+591" className={selectGreenItem}>🇧🇴 +591</SelectItem>
                                  <SelectItem value="+1-809" className={selectGreenItem}>🇩🇴 +1</SelectItem>
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
                                <Input placeholder="832 000 000" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
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
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="My Company LLC" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
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
                          <FormLabel>Position</FormLabel>
                          <FormControl>
                            <Input placeholder="CEO, Operations Director..." className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
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
                          <FormLabel>Approximate Annual Revenue (USD)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all">
                                <SelectValue placeholder="Select a range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="<=150k" className="data-[highlighted]:bg-[#3CB043] data-[highlighted]:text-white data-[state=checked]:bg-[#3CB043] data-[state=checked]:text-white focus:bg-[#3CB043] focus:text-white">≤ 150K USD</SelectItem>
                              <SelectItem value="500k" className="data-[highlighted]:bg-[#3CB043] data-[highlighted]:text-white data-[state=checked]:bg-[#3CB043] data-[state=checked]:text-white focus:bg-[#3CB043] focus:text-white">500K USD</SelectItem>
                              <SelectItem value="10M" className="data-[highlighted]:bg-[#3CB043] data-[highlighted]:text-white data-[state=checked]:bg-[#3CB043] data-[state=checked]:text-white focus:bg-[#3CB043] focus:text-white">10M USD</SelectItem>
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
                          <FormLabel>Business Type</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g., Marketing Agency, Fashion Ecommerce..." className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
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
                          <FormLabel>Website or LinkedIn (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="www.mycompany.com" className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Language</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-white border-gray-200 focus:ring-2 focus:ring-[#3CB043] focus:border-[#3CB043] transition-all">
                                <SelectValue placeholder="Select a language" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="en" className={selectGreenItem}>
                                English
                              </SelectItem>
                              <SelectItem value="es" className={selectGreenItem}>
                                Español
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />


                  <FormField
                    control={form.control}
                    name="processesToAutomate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Which processes would you like to automate?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe the manual processes that consume the most time for your team..."
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
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Request Free Diagnosis <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      By submitting this form, you accept our privacy policy. Your data is safe with us.
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
