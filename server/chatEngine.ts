import { readFileSync } from "fs";
import { join } from "path";
import { knowledgeBase } from "./knowledge.js";

interface KnowledgeEntry {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
}

interface KnowledgeData {
  version: string;
  lastUpdated: string;
  entries: KnowledgeEntry[];
}

type MatchResult = { answer: string; confidence: number; entryId: string };

function joinLines(...lines: string[]): string {
  return lines.join("\n");
}

// Load knowledge base from JSON
let knowledgeData: KnowledgeData;
try {
  const raw = readFileSync(join(__dirname, "knowledge.json"), "utf-8");
  knowledgeData = JSON.parse(raw);
} catch {
  knowledgeData = { version: "0", lastUpdated: "", entries: [] };
}

// Synonym expansion map for better matching
const synonyms: Record<string, string[]> = {
  work: ["job", "role", "position", "employment", "career"],
  job: ["work", "role", "position", "employment"],
  role: ["work", "job", "position", "employment"],
  skill: ["ability", "capability", "competence", "proficiency"],
  ability: ["skill", "capability", "competence"],
  experience: ["background", "history", "work history"],
  strength: ["good at", "excellent", "strong"],
  weakness: ["improve", "growth area", "develop"],
  salary: ["pay", "compensation", "wage", "remuneration"],
  project: ["portfolio", "built", "created", "developed"],
  certification: ["certificate", "credential", "qualification"],
  language: ["speak", "fluent", "bilingual", "multilingual"],
  available: ["start", "begin", "immediately", "when"],
  relocate: ["move", "location", "based", "dublin", "ireland"],
  sponsor: ["visa", "work permit", "legal"],
  team: ["teamwork", "collaborate", "collaboration"],
  security: ["cyber", "cybersecurity", "protection"],
  cloud: ["aws", "amazon", "hosting"],
  database: ["sql", "data", "storage"],
  frontend: ["front-end", "html", "css", "ui"],
  backend: ["back-end", "server", "api"],
  design: ["ux", "ui", "figma", "prototype"],
};

// Tokenize user message into meaningful words
function tokenize(text: string): string[] {
  const stopWords = new Set([
    "i", "me", "my", "myself", "we", "our", "ours", "ourselves",
    "you", "your", "yours", "yourself", "yourselves",
    "he", "him", "his", "himself", "she", "her", "hers", "herself",
    "it", "its", "itself", "they", "them", "their", "theirs", "themselves",
    "what", "which", "who", "whom", "this", "that", "these", "those",
    "am", "is", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "having", "do", "does", "did", "doing",
    "a", "an", "the", "and", "but", "if", "or", "because", "as",
    "until", "while", "of", "at", "by", "for", "with", "about",
    "against", "between", "through", "during", "before", "after",
    "above", "below", "to", "from", "up", "down", "in", "out",
    "on", "off", "over", "under", "again", "further", "then", "once",
    "here", "there", "when", "where", "why", "how", "all", "both",
    "each", "few", "more", "most", "other", "some", "such", "no",
    "nor", "not", "only", "own", "same", "so", "than", "too",
    "very", "s", "t", "can", "will", "just", "don", "should", "now",
    "tell", "know", "like", "would", "could", "might",
  ]);

  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !stopWords.has(w));
}

// Expand tokens with synonyms
function expandTokens(tokens: string[]): string[] {
  const expanded = new Set(tokens);
  for (const token of tokens) {
    for (const [key, syns] of Object.entries(synonyms)) {
      if (token === key || syns.includes(token)) {
        expanded.add(key);
        syns.forEach((s) => expanded.add(s));
      }
    }
  }
  return Array.from(expanded);
}

// Calculate match score between user tokens and entry keywords
function calculateScore(userTokens: string[], entry: KnowledgeEntry): number {
  const expanded = expandTokens(userTokens);
  const entryKeywords = entry.keywords.map((k) => k.toLowerCase());
  const entryWords = new Set<string>();

  // Extract words from keywords
  for (const kw of entryKeywords) {
    kw.split(/\s+/).forEach((w) => entryWords.add(w));
  }

  let matches = 0;
  let totalWeight = 0;

  for (const token of expanded) {
    // Exact keyword match (high weight)
    for (const kw of entryKeywords) {
      if (kw === token || kw.includes(token)) {
        matches += 3;
        break;
      }
    }

    // Word-level match
    if (entryWords.has(token)) {
      matches += 2;
    }

    // Partial match (substring)
    for (const word of entryWords) {
      if (word.includes(token) || token.includes(word)) {
        matches += 1;
        break;
      }
    }
  }

  totalWeight = expanded.length * 3;

  // Boost score for entries with more keyword matches
  const keywordBoost = Math.min(matches / 2, 2);

  return totalWeight > 0 ? (matches / totalWeight) + (keywordBoost * 0.1) : 0;
}

// Try regex pattern matching (legacy support)
function tryRegexMatch(
  msg: string,
  entry: KnowledgeEntry
): { matched: boolean; confidence: number } {
  try {
    const regex = new RegExp(entry.question, "i");
    const match = msg.match(regex);
    if (match) {
      const confidence = match[0].length / msg.length;
      return { matched: true, confidence };
    }
  } catch {
    // Invalid regex, skip
  }
  return { matched: false, confidence: 0 };
}

const SOCIAL_MEDIA_FALLBACK = joinLines(
  "I don't have a specific answer for that question in my knowledge base.",
  "",
  "If you'd like to discuss this further, I'd recommend reaching out to Asbel directly:",
  "- Email: " + knowledgeBase.personalInfo.email,
  "- LinkedIn: " + knowledgeBase.personalInfo.linkedin,
  "- Website: " + knowledgeBase.personalInfo.website,
  "",
  "He'd be happy to answer any specific questions you may have."
);

export function generateResponse(
  userMessage: string,
  _history: { role: string; content: string }[]
): string {
  const msg = userMessage.toLowerCase().trim();
  const tokens = tokenize(msg);

  // Phase 1: Try regex pattern matching (fast, exact)
  let bestRegexMatch: MatchResult = { answer: "", confidence: 0, entryId: "" };
  for (const entry of knowledgeData.entries) {
    const { matched, confidence } = tryRegexMatch(msg, entry);
    if (matched && confidence > bestRegexMatch.confidence) {
      bestRegexMatch = { answer: entry.answer, confidence, entryId: entry.id };
    }
  }

  if (bestRegexMatch.confidence > 0.15) {
    return bestRegexMatch.answer;
  }

  // Phase 2: Semantic keyword matching (RAG-style)
  let bestSemanticMatch: MatchResult = { answer: "", confidence: 0, entryId: "" };
  for (const entry of knowledgeData.entries) {
    const score = calculateScore(tokens, entry);
    if (score > bestSemanticMatch.confidence) {
      bestSemanticMatch = { answer: entry.answer, confidence: score, entryId: entry.id };
    }
  }

  if (bestSemanticMatch.confidence > 0.2) {
    return bestSemanticMatch.answer;
  }

  // Phase 3: Broad category fallbacks
  if (/experience|work|job|role/i.test(msg)) {
    const exp = knowledgeBase.experience;
    let resp = "Asbel has diverse professional experience:\n\n";
    exp.forEach((e) => {
      resp += e.title + " at " + e.company + " (" + e.period + ")\n";
      e.highlights.forEach((h) => {
        resp += "- " + h + "\n";
      });
      resp += "\n";
    });
    return resp;
  }

  if (/skill|technolog|tool|software/i.test(msg)) {
    const s = knowledgeBase.skills;
    return (
      "Asbel's key skills include:\n\n" +
      s.map((sk) => "- " + sk).join("\n") +
      "\n\nHe is continuously expanding his skill set through certifications and personal projects."
    );
  }

  // Phase 4: Social media fallback
  return SOCIAL_MEDIA_FALLBACK;
}
