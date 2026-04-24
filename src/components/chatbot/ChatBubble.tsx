"use client";

import { motion } from "framer-motion";

type ChatBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

/** Simple markdown-like renderer for bold, links, and line breaks */
function renderContent(text: string) {
  // Split by newlines first
  const lines = text.split("\n");

  return lines.map((line, lineIdx) => {
    // Process inline markdown
    const parts: React.ReactNode[] = [];
    let remaining = line;
    let partIdx = 0;

    // Process **bold** and [links](url)
    while (remaining.length > 0) {
      // Check for bold
      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
      // Check for links
      const linkMatch = remaining.match(/\[(.*?)\]\((.*?)\)/);

      // Find the earliest match
      const boldPos = boldMatch ? remaining.indexOf(boldMatch[0]) : Infinity;
      const linkPos = linkMatch ? remaining.indexOf(linkMatch[0]) : Infinity;

      if (boldPos === Infinity && linkPos === Infinity) {
        // No more matches
        if (remaining) parts.push(<span key={partIdx++}>{remaining}</span>);
        break;
      }

      if (boldPos <= linkPos && boldMatch) {
        // Bold comes first
        if (boldPos > 0) {
          parts.push(
            <span key={partIdx++}>{remaining.slice(0, boldPos)}</span>
          );
        }
        parts.push(
          <strong key={partIdx++} className="font-semibold text-white">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.slice(boldPos + boldMatch[0].length);
      } else if (linkMatch) {
        // Link comes first
        if (linkPos > 0) {
          parts.push(
            <span key={partIdx++}>{remaining.slice(0, linkPos)}</span>
          );
        }
        parts.push(
          <a
            key={partIdx++}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline underline-offset-2 transition hover:text-cyan-300"
          >
            {linkMatch[1]}
          </a>
        );
        remaining = remaining.slice(linkPos + linkMatch[0].length);
      }
    }

    return (
      <span key={lineIdx}>
        {parts}
        {lineIdx < lines.length - 1 && <br />}
      </span>
    );
  });
}

export default function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-start gap-3 px-4 py-1.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-purple-600 text-[10px] font-bold text-white">
          AI
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-tr-sm bg-linear-to-r from-cyan-500 to-blue-600 text-white"
            : "rounded-tl-sm border border-white/10 bg-white/5 text-gray-200 backdrop-blur"
        }`}
      >
        {isUser ? content : renderContent(content)}
      </div>
    </motion.div>
  );
}
