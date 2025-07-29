import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static portfolio website - no API routes needed
  // All content is served statically from the frontend

  const httpServer = createServer(app);

  return httpServer;
}
