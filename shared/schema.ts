import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  countryCode: text("country_code").notNull().default("+1"),
  phone: text("phone").notNull(),
  businessType: text("business_type").notNull(),
  language: text("contact_language").notNull().default("es"),
  mainChallenge: text("main_challenge").notNull(),
  webSocials: text("web_socials"),
  source: text("source"),
});


export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions, {
  name: z.string().min(1, "Full name is required"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address").min(1, "Email address is required"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().min(1, "Phone number is required"),
  businessType: z.string().min(1, "Business type is required"),
  language: z.string().min(1, "Preferred contact language is required"),
  mainChallenge: z.string().min(10, "Please describe your main challenge (min. 10 characters)"),
  webSocials: z.string().optional(),
  source: z.string().optional(),
}).omit({ id: true });


export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
