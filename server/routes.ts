import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // No API routes - frontend only application with hardcoded data
  // All data is served directly from the client-side productData.ts
  
  const httpServer = createServer(app);

  return httpServer;
}
