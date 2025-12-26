import { db } from "./db";
import {
  contactSubmissions,
  type InsertContactSubmission,
  type ContactSubmission
} from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [created] = await db.insert(contactSubmissions).values(submission).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
