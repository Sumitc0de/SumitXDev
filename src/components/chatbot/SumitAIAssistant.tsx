"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa6";
import ChatWindow from "./ChatWindow";
import {
  getMemory,
  updateMemory,
  clearMemory,
  getChatHistory,
  saveChatHistory,
  clearChatHistory,
  type ChatMessage,
  type UserMemory,
} from "@/lib/chatMemory";

export default function SumitAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [memory, setMemory] = useState<UserMemory>({
    name: "",
    interests: [],
    lastVisit: Date.now(),
  });
  const [isMounted, setIsMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    setMemory(getMemory());
    setMessages(getChatHistory());
  }, []);

  // Persist messages to localStorage when they change
  useEffect(() => {
    if (isMounted && messages.length > 0) {
      saveChatHistory(messages);
    }
  }, [messages, isMounted]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (isLoading) return;

      const userMsg: ChatMessage = {
        role: "user",
        content,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: content,
            history: [...messages, userMsg].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            memory: {
              name: memory.name,
              interests: memory.interests,
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const data = await response.json();

        const assistantMsg: ChatMessage = {
          role: "assistant",
          content: data.reply,
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, assistantMsg]);

        // Update memory if AI detected user name or interests
        if (data.detectedName || data.detectedInterests?.length) {
          const newMemory = updateMemory({
            ...(data.detectedName ? { name: data.detectedName } : {}),
            ...(data.detectedInterests?.length
              ? { interests: data.detectedInterests }
              : {}),
          });
          setMemory(newMemory);
        }
      } catch {
        const errorMsg: ChatMessage = {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again in a moment, or reach out directly at **developwithsumit009@gmail.com**.",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages, memory]
  );

  const handleClear = useCallback(() => {
    setMessages([]);
    clearMemory();
    clearChatHistory();
    setMemory({ name: "", interests: [], lastVisit: Date.now() });
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* ─── FLOATING ACTION BUTTON ─────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="
              fixed bottom-6 right-6 z-50
              flex h-14 w-14 items-center justify-center
              rounded-full
              bg-linear-to-br from-cyan-500 to-purple-600
              text-white
              shadow-xl shadow-cyan-500/25
              transition-transform hover:scale-110 active:scale-95
            "
            aria-label="Open Sumit AI Assistant"
          >
            <FaRobot className="h-6 w-6" />

            {/* Notification dot */}
            {messages.length === 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-cyan-400" />
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── CHAT WINDOW ────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            onSend={sendMessage}
            onClear={handleClear}
            onClose={() => setIsOpen(false)}
            memory={memory}
          />
        )}
      </AnimatePresence>
    </>
  );
}
