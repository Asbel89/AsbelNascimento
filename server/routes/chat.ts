import { Request, Response } from "express";
import { generateResponse } from "../chatEngine.js";
import type { ChatSession, ChatMessage, AdminStats } from "@shared/api";
import { writeFileSync, appendFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const sessions = new Map<string, ChatSession>();
const visitorSessions = new Map<string, string>();
const questionCounts = new Map<string, number>();
const qaLogPath = join(process.cwd(), "server", "qa-log.jsonl");

// Ensure log directory exists
if (!existsSync(join(process.cwd(), "server"))) {
  mkdirSync(join(process.cwd(), "server"), { recursive: true });
}

function logQA(visitorId: string, question: string, answer: string, sessionId: string) {
  const entry = JSON.stringify({
    timestamp: new Date().toISOString(),
    sessionId,
    visitorId,
    question,
    answer: answer.substring(0, 200),
  });
  try {
    appendFileSync(qaLogPath, entry + "\n");
  } catch (err) {
    console.error("Failed to write QA log:", err);
  }
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function getOrCreateSession(visitorId: string, sessionId?: string): ChatSession {
  if (sessionId && sessions.has(sessionId)) {
    return sessions.get(sessionId)!;
  }

  const existingVisitorSession = visitorSessions.get(visitorId);
  if (existingVisitorSession && sessions.has(existingVisitorSession)) {
    return sessions.get(existingVisitorSession)!;
  }

  const id = generateId();
  const session: ChatSession = {
    id,
    visitorId,
    messages: [],
    startedAt: Date.now(),
    lastActivity: Date.now(),
  };

  sessions.set(id, session);
  visitorSessions.set(visitorId, id);
  return session;
}

function trackQuestion(message: string) {
  const normalized = message.toLowerCase().trim().substring(0, 80);
  questionCounts.set(normalized, (questionCounts.get(normalized) || 0) + 1);
}

export function handleChat(req: Request, res: Response) {
  const { message, visitorId, sessionId } = req.body;

  const session = getOrCreateSession(visitorId, sessionId);
  session.lastActivity = Date.now();

  const userMsg: ChatMessage = {
    id: generateId(),
    role: "user",
    content: message,
    timestamp: Date.now(),
  };
  session.messages.push(userMsg);

  trackQuestion(message);

  const lowerMsg = message.toLowerCase();
  if (!session.recruiterName) {
    const nameMatch = lowerMsg.match(/(?:i am|i'm|my name is|this is|speaking with)\s+([a-z]+(?:\s+[a-z]+)?)/i);
    if (nameMatch) {
      session.recruiterName = nameMatch[1].replace(/\b\w/g, (c: string) => c.toUpperCase());
    }
  }
  if (!session.company) {
    const companyMatch = lowerMsg.match(/(?:from|at|working at|with)\s+([A-Z][a-zA-Z\s&]+)/);
    if (companyMatch) {
      session.company = companyMatch[1].trim();
    }
  }

  const reply = generateResponse(message, session.messages);

  const assistantMsg: ChatMessage = {
    id: generateId(),
    role: "assistant",
    content: reply,
    timestamp: Date.now(),
  };
  session.messages.push(assistantMsg);

  logQA(visitorId, message, reply, session.id);

  res.json({
    reply,
    sessionId: session.id,
  });
}

export function handleChatStream(req: Request, res: Response) {
  const { message, visitorId, sessionId } = req.body;

  const session = getOrCreateSession(visitorId, sessionId);
  session.lastActivity = Date.now();

  const userMsg: ChatMessage = {
    id: generateId(),
    role: "user",
    content: message,
    timestamp: Date.now(),
  };
  session.messages.push(userMsg);

  trackQuestion(message);

  const lowerMsg = message.toLowerCase();
  if (!session.recruiterName) {
    const nameMatch = lowerMsg.match(/(?:i am|i'm|my name is|this is|speaking with)\s+([a-z]+(?:\s+[a-z]+)?)/i);
    if (nameMatch) {
      session.recruiterName = nameMatch[1].replace(/\b\w/g, (c: string) => c.toUpperCase());
    }
  }
  if (!session.company) {
    const companyMatch = lowerMsg.match(/(?:from|at|working at|with)\s+([A-Z][a-zA-Z\s&]+)/);
    if (companyMatch) {
      session.company = companyMatch[1].trim();
    }
  }

  const reply = generateResponse(message, session.messages);

  const assistantMsg: ChatMessage = {
    id: generateId(),
    role: "assistant",
    content: reply,
    timestamp: Date.now(),
  };
  session.messages.push(assistantMsg);

  logQA(visitorId, message, reply, session.id);

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const words = reply.split(" ");
  let index = 0;

  const interval = setInterval(() => {
    if (index < words.length) {
      const chunk = (index === 0 ? "" : " ") + words[index];
      res.write("data: " + JSON.stringify({ content: chunk, done: false }) + "\n\n");
      index++;
    } else {
      res.write("data: " + JSON.stringify({ content: "", done: true, sessionId: session.id }) + "\n\n");
      res.end();
      clearInterval(interval);
    }
  }, 30);

  req.on("close", () => {
    clearInterval(interval);
  });
}

export function handleGetStats(_req: Request, res: Response) {
  const allSessions = Array.from(sessions.values());

  const totalVisitors = new Set(allSessions.map((s) => s.visitorId)).size;
  const totalConversations = allSessions.length;

  const durations = allSessions.map((s) => s.lastActivity - s.startedAt);
  const avgDuration = durations.length > 0 ? durations.reduce((a, b) => a + b, 0) / durations.length : 0;

  const interviewRequests = allSessions.filter((s) =>
    s.messages.some(
      (m) =>
        m.role === "user" &&
        /interview|schedule|meeting|hire|opportunity/i.test(m.content),
    ),
  ).length;

  const sortedQuestions = Array.from(questionCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([question, count]) => ({ question, count }));

  const recentSessions = allSessions
    .sort((a, b) => b.lastActivity - a.lastActivity)
    .slice(0, 20)
    .map((s) => ({
      id: s.id,
      recruiterName: s.recruiterName,
      company: s.company,
      messageCount: s.messages.length,
      startedAt: s.startedAt,
      lastActivity: s.lastActivity,
    }));

  const stats: AdminStats = {
    totalVisitors,
    totalConversations,
    avgDuration: Math.round(avgDuration / 1000),
    interviewRequests,
    popularQuestions: sortedQuestions,
    recentSessions,
    visitorsByCountry: [{ country: "Unknown (IP-based tracking not implemented)", count: totalVisitors }],
  };

  res.json(stats);
}

export function handleGetSessions(_req: Request, res: Response) {
  const allSessions = Array.from(sessions.values())
    .sort((a, b) => b.lastActivity - a.lastActivity)
    .slice(0, 50);

  res.json(allSessions);
}
