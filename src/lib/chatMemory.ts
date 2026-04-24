// ─── localStorage-based memory system for the AI chatbot ────────────────────

const STORAGE_KEY = "sxd-ai-chat-memory";
const HISTORY_KEY = "sxd-ai-chat-history";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
};

export type UserMemory = {
  name: string;
  interests: string[];
  lastVisit: number;
};

// ─── Memory (name + interests) ──────────────────────────────────────────────

export function getMemory(): UserMemory {
  if (typeof window === "undefined") {
    return { name: "", interests: [], lastVisit: Date.now() };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as UserMemory;
  } catch {
    // corrupted data, reset
  }
  return { name: "", interests: [], lastVisit: Date.now() };
}

export function updateMemory(updates: Partial<UserMemory>): UserMemory {
  const current = getMemory();
  const merged: UserMemory = {
    ...current,
    ...updates,
    interests: Array.from(
      new Set([...(current.interests ?? []), ...(updates.interests ?? [])])
    ),
    lastVisit: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

export function clearMemory(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// ─── Chat History ───────────────────────────────────────────────────────────

export function getChatHistory(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (raw) return JSON.parse(raw) as ChatMessage[];
  } catch {
    // corrupted data, reset
  }
  return [];
}

export function saveChatHistory(messages: ChatMessage[]): void {
  // Keep last 50 messages to prevent localStorage bloat
  const trimmed = messages.slice(-50);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
}

export function clearChatHistory(): void {
  localStorage.removeItem(HISTORY_KEY);
}
