import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  revenue: text("revenue").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  processesToAutomate: text("processes_to_automate").notNull(),
  businessType: text("business_type").notNull(),
  webSocials: text("web_socials"),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions, {
  name: z.string().min(1, "El nombre es obligatorio"),
  company: z.string().min(1, "La empresa es obligatoria"),
  position: z.string().min(1, "El cargo es obligatorio"),
  revenue: z.string().min(1, "La facturación es obligatoria"),
  email: z.string().email("Correo electrónico inválido").min(1, "El correo es obligatorio"),
  phone: z.string().min(1, "El teléfono es obligatorio"),
  processesToAutomate: z.string().min(1, "Describe al menos un proceso"),
  businessType: z.string().min(1, "El tipo de negocio es obligatorio"),
  webSocials: z.string().optional(),
}).omit({ id: true });

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
