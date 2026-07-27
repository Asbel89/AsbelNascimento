import { Request, Response, NextFunction } from "express";

interface RateLimitStore {
  [ip: string]: { count: number; resetAt: number };
}

const store: RateLimitStore = {};
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 20;

export function rateLimiter(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();

  if (!store[ip] || now > store[ip].resetAt) {
    store[ip] = { count: 1, resetAt: now + WINDOW_MS };
    return next();
  }

  store[ip].count++;

  if (store[ip].count > MAX_REQUESTS) {
    res.status(429).json({ error: "Too many requests. Please try again later." });
    return;
  }

  next();
}

export function validateChatInput(req: Request, res: Response, next: NextFunction) {
  const { message, visitorId } = req.body;

  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "Message is required." });
    return;
  }

  if (message.length > 500) {
    res.status(400).json({ error: "Message too long. Maximum 500 characters." });
    return;
  }

  if (message.trim().length === 0) {
    res.status(400).json({ error: "Message cannot be empty." });
    return;
  }

  if (!visitorId || typeof visitorId !== "string") {
    res.status(400).json({ error: "Visitor ID is required." });
    return;
  }

  // Sanitize: remove potential script tags
  req.body.message = message.replace(/<[^>]*>/g, "").trim();

  next();
}
