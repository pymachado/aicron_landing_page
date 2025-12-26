import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Validate data before sending using the shared Zod schema
      const validated = api.contact.submit.input.parse(data);
      
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Try to parse error message from backend
        let errorMessage = "Failed to submit form";
        try {
          const errorData = await res.json();
          // Check if it matches our validation error schema
          const parsedError = api.contact.submit.responses[400].safeParse(errorData);
          if (parsedError.success) {
            errorMessage = parsedError.data.message;
          } else {
             // Fallback for 500 or other errors
             const internalError = api.contact.submit.responses[500].safeParse(errorData);
             if (internalError.success) errorMessage = internalError.data.message;
          }
        } catch (e) {
          // JSON parse failed, stick to default
        }
        throw new Error(errorMessage);
      }

      // Parse success response
      const successData = await res.json();
      return api.contact.submit.responses[201].parse(successData);
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud recibida!",
        description: "Nos pondremos en contacto contigo pronto para agendar tu diagnóstico.",
        variant: "default",
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Error al enviar",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
