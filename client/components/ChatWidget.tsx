import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@shared/api";
import { quickResponses } from "./quickResponses";

function generateVisitorId(): string {
  let id = localStorage.getItem("visitor_id");
  if (!id) {
    id = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    localStorage.setItem("visitor_id", id);
  }
  return id;
}

function parseMarkdown(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={j} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={j}>{part}</span>;
      })}
      {i < text.split("\n").length - 1 && <br />}
    </span>
  ));
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm Asbel's AI career assistant. I can answer questions about his experience, skills, certifications, and projects. How can I help you today?",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | undefined>();
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const visitorId = useRef(generateVisitorId());

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const simulateTyping = (fullReply: string, assistantId: string) => {
    setIsTyping(true);
    const words = fullReply.split(" ");
    let currentText = "";
    let wordIndex = 0;

    const typeInterval = setInterval(() => {
      if (wordIndex < words.length) {
        currentText += (wordIndex === 0 ? "" : " ") + words[wordIndex];
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: currentText } : m,
          ),
        );
        wordIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 25);
  };

  const sendMessage = async (text?: string) => {
    const msgText = text || input.trim();
    if (!msgText || isLoading) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(36).substring(2, 15),
      role: "user",
      content: msgText,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const assistantId = Math.random().toString(36).substring(2, 15);

    // Add placeholder message
    setMessages((prev) => [
      ...prev,
      {
        id: assistantId,
        role: "assistant",
        content: "",
        timestamp: Date.now(),
      },
    ]);

    // Check if this is a quick response (exact match or close match)
    const quickKey = Object.keys(quickResponses).find(
      (key) => msgText.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(msgText.toLowerCase().replace(/[?!]/g, "")),
    );

    if (quickKey) {
      // Use local pre-defined answer with typing animation
      simulateTyping(quickResponses[quickKey], assistantId);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msgText,
          visitorId: visitorId.current,
          sessionId,
        }),
      });

      if (!res.ok) {
        throw new Error("HTTP " + res.status);
      }

      const data = await res.json();

      if (data.sessionId) {
        setSessionId(data.sessionId);
      }

      simulateTyping(data.reply, assistantId);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  "I'm sorry, something went wrong. Please try again or reach out via LinkedIn: linkedin.com/in/asbelnascimento",
              }
            : m,
        ),
      );
      setIsTyping(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about Asbel",
    "What skills does he have?",
    "What certifications?",
    "Why should we hire him?",
  ];

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-[1.03] border",
          isOpen
            ? "bg-white border-slate-200 text-slate-700 rotate-90 shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
            : "bg-blue-600 text-white border-blue-600 shadow-[0_8px_24px_rgba(37,99,235,0.28)] animate-pulse-ring",
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={22} strokeWidth={1.7} /> : <MessageCircle size={22} strokeWidth={1.7} />}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.08)] border bg-white overflow-hidden transition-all duration-300 origin-bottom-right",
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none",
        )}
        style={{ borderColor: "#E2E8F0" }}
      >
        {/* Header */}
        <div className="bg-slate-50 px-5 py-4 flex items-center gap-3 border-b border-slate-200">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
            <Bot size={18} className="text-white" strokeWidth={1.7} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              Asbel's Assistant
            </p>
            <p className="text-xs text-slate-500">
              AI Career Representative
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-700">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[380px] overflow-y-auto px-4 py-4 space-y-4 scroll-smooth bg-white">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-2.5",
                msg.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={13} className="text-blue-600" strokeWidth={1.7} />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13.5px] leading-relaxed",
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-md shadow-sm"
                    : "bg-slate-50 text-slate-700 border border-slate-100 rounded-bl-md",
                )}
              >
                {msg.content ? (
                  parseMarkdown(msg.content)
                ) : (
                  <div className="flex gap-1 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                )}
              </div>
              {msg.role === "user" && (
                <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-1">
                  <User size={13} className="text-white" strokeWidth={1.7} />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick actions - only show when conversation just started */}
        {messages.length <= 2 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5 bg-white border-t border-slate-100 pt-3">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                disabled={isLoading}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-40"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-3 py-3 border-t border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-2 py-1.5 shadow-sm focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Asbel's experience..."
              className="flex-1 bg-transparent px-2 py-1.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              disabled={isLoading}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              <Send size={15} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
