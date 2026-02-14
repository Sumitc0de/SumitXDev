"use client";

import ChatContainer from "@/components/ai/ChatContainer";

export default function AssistantPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24">
      <h1 className="mb-2 text-3xl font-semibold">
        AI Assistant
      </h1>
      <p className="mb-8 text-muted-foreground">
        Ask about projects, learning roadmaps, or generate ideas.
      </p>

      <ChatContainer />
    </main>
  );
}
