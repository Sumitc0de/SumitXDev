"use client";

import { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ModeSelector from "./ModeSelector";


export type Mode = "ASK" | "ROADMAP" | "PROJECT" | "SAAS";

export default function ChatContainer() {
  const [messages, setMessages] = useState<
    {
      role: "user" | "assistant";
      content: string;
      mode?: Mode;
    }[]
  >([]);

  const [mode, setMode] = useState<Mode>("ASK");
  const [loading, setLoading] = useState(false);

  async function sendMessage(message: string) {
    setLoading(true);

    const newMessages = [
      ...messages,
      { role: "user", content: message },
    ];
    setMessages(newMessages);

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode,
        message,
      }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      {
        role: "assistant",
        content: data.response,
        mode,
      },
    ]);

    setLoading(false);
  }

  return (
    // 🔑 IMPORTANT: full height + flex column
    <div className="flex h-full flex-col bg-background">
      {/* Mode selector (fixed) */}
      <ModeSelector mode={mode} setMode={setMode} />

      {/* Messages (scrollable area) */}
      <div className="flex-1 min-h-0">
        <ChatMessages messages={messages} loading={loading} />
      </div>

      {/* Input (fixed) */}
      <ChatInput onSend={sendMessage} disabled={loading} />
    </div>
  );
}
