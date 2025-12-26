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

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({ id: true });

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
