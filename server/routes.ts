import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import 'dotenv/config';

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const submission = await storage.createContactSubmission(input);
      
      // 🚀Send message to n8n workflow
      const N8N_WEBHOOK_URL = process.env.WEBHOOK_URL;
      if (N8N_WEBHOOK_URL) {
        try {
          const response = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              message: submission,
            }),
          });
          // Note: We don't await response.json() if we don't need to block the user response,
          // but the user's snippet included it, so we'll log it for debugging.
          const data = await response.json();
          console.log('n8n response:', data);
        } catch (err) {
          console.error('n8n Webhook error:', err);
        }
      }

      res.status(201).json(submission);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.contact.list.path, async (_req, res) => {
    try {
      
      console.log('Datos recibidos:', _req.body);
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (err) {
      console.error('Error al guardar contacto:', err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
