import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { buildSystemPrompt } from "@/data/sumitContext";

// ─── POST /api/chat — Groq AI (OpenAI-compatible) ──────────────────────────

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

type ChatRequestBody = {
  message: string;
  history: { role: "user" | "assistant"; content: string }[];
  memory?: { name?: string; interests?: string[] };
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatRequestBody;
    const { message, history = [], memory } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key not configured" },
        { status: 500 }
      );
    }

    // Build system prompt with user memory context
    const systemPrompt = buildSystemPrompt(
      memory?.name || undefined,
      memory?.interests || undefined
    );

    // Build conversation messages for Groq
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: "system" as const, content: systemPrompt },
      // Include last 10 messages of history for context
      ...history.slice(-10).map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      { role: "user" as const, content: message },
    ];

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const rawReply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Could you try again?";

    // Extract metadata from response
    let reply = rawReply;
    let detectedName = "";
    let detectedInterests: string[] = [];

    const metadataMatch = rawReply.match(
      /<!--METADATA:([\s\S]*?)-->/
    );

    if (metadataMatch) {
      // Remove metadata block from visible reply
      reply = rawReply.replace(/<!--METADATA:[\s\S]*?-->/, "").trim();

      try {
        const metadata = JSON.parse(metadataMatch[1]);
        detectedName = metadata.detectedName || "";
        detectedInterests = metadata.detectedInterests || [];
      } catch {
        // Failed to parse metadata, ignore
      }
    }

    return NextResponse.json({
      reply,
      detectedName,
      detectedInterests,
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
