import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleChat, handleChatStream, handleGetStats, handleGetSessions } from "./routes/chat";
import { rateLimiter, validateChatInput } from "./middleware";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // AI Career Assistant routes
  app.post("/api/chat", rateLimiter, validateChatInput, handleChat);
  app.post("/api/chat/stream", rateLimiter, validateChatInput, handleChatStream);
  app.get("/api/admin/stats", handleGetStats);
  app.get("/api/admin/sessions", handleGetSessions);

  return app;
}
