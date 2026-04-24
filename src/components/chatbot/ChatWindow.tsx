"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaXmark, FaTrash } from "react-icons/fa6";
import ChatBubble from "./ChatBubble";
import QuickActions from "./QuickActions";
import TypingIndicator from "./TypingIndicator";
import VoiceInput from "./VoiceInput";
import type { ChatMessage, UserMemory } from "@/lib/chatMemory";

type ChatWindowProps = {
  messages: ChatMessage[];
  isLoading: boolean;
  onSend: (message: string) => void;
  onClear: () => void;
  onClose: () => void;
  memory: UserMemory;
};

export default function ChatWindow({
  messages,
  isLoading,
  onSend,
  onClear,
  onClose,
  memory,
}: ChatWindowProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Focus input on mount
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 300);
  }, []);

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      const trimmed = input.trim();
      if (!trimmed || isLoading) return;
      onSend(trimmed);
      setInput("");
    },
    [input, isLoading, onSend]
  );

  const handleQuickAction = useCallback(
    (prompt: string) => {
      if (isLoading) return;
      onSend(prompt);
    },
    [isLoading, onSend]
  );

  const handleVoiceTranscript = useCallback((text: string) => {
    setInput(text);
  }, []);

  const greeting = memory.name
    ? `Hey ${memory.name}! 👋`
    : "Hey there! 👋";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="
        fixed z-9999
        bottom-0 right-0
        h-dvh w-full
        sm:bottom-6 sm:right-6
        sm:h-auto sm:max-h-[min(600px,calc(100dvh-100px))] sm:w-[400px]
        sm:rounded-2xl
        flex flex-col overflow-hidden
        border border-white/10
        bg-[#0a0f1e]/95 backdrop-blur-xl
        shadow-2xl shadow-black/40
      "
    >
      {/* ─── HEADER ────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-purple-600 text-xs font-bold text-white shadow-lg shadow-cyan-500/20">
            AI
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">
              Sumit AI
            </h3>
            <p className="text-[11px] text-cyan-400">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
              Online — Ask me anything
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Clear */}
          <button
            onClick={onClear}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-white/10 hover:text-red-400"
            aria-label="Clear chat"
            title="Clear chat"
          >
            <FaTrash className="h-3 w-3" />
          </button>
          {/* Close */}
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-white/10 hover:text-white"
            aria-label="Close chat"
          >
            <FaXmark className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ─── MESSAGES ──────────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overscroll-contain py-4"
      >
        {/* Welcome message if empty */}
        {messages.length === 0 && (
          <div className="px-5 py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500/20 to-purple-600/20 border border-white/10">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="text-base font-semibold text-white">
              {greeting}
            </h4>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              I&apos;m Sumit&apos;s AI assistant. I can help you explore his
              projects, skills, and experience. What would you like to know?
            </p>
          </div>
        )}

        {/* Chat messages */}
        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} content={msg.content} />
        ))}

        {/* Typing indicator */}
        {isLoading && <TypingIndicator />}
      </div>

      {/* ─── QUICK ACTIONS ─────────────────────────────────────────── */}
      {messages.length <= 2 && (
        <div className="border-t border-white/5">
          <QuickActions
            onAction={handleQuickAction}
            disabled={isLoading}
          />
        </div>
      )}

      {/* ─── INPUT ─────────────────────────────────────────────────── */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
      >
        <VoiceInput
          onTranscript={handleVoiceTranscript}
          disabled={isLoading}
        />

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Sumit's work..."
          disabled={isLoading}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105 active:scale-95 disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100"
          aria-label="Send message"
        >
          <FaPaperPlane className="h-3.5 w-3.5" />
        </button>
      </form>
    </motion.div>
  );
}
