/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

export interface DemoResponse {
  message: string;
}

// --- AI Career Assistant Types ---

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
}

export interface ChatSession {
  id: string;
  visitorId: string;
  recruiterName?: string;
  company?: string;
  role?: string;
  messages: ChatMessage[];
  startedAt: number;
  lastActivity: number;
}

export interface ChatRequest {
  message: string;
  sessionId?: string;
  visitorId: string;
}

export interface ChatResponse {
  reply: string;
  sessionId: string;
}

export interface AdminStats {
  totalVisitors: number;
  totalConversations: number;
  avgDuration: number;
  interviewRequests: number;
  popularQuestions: { question: string; count: number }[];
  recentSessions: {
    id: string;
    recruiterName?: string;
    company?: string;
    messageCount: number;
    startedAt: number;
    lastActivity: number;
  }[];
  visitorsByCountry: { country: string; count: number }[];
}

export interface RateLimitEntry {
  count: number;
  resetAt: number;
}
