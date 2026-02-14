"use client";

import { motion } from "framer-motion";
import ChatContainer from "./ChatContainer";

export default function FloatingChatDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 40 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        fixed bottom-24 right-6 z-50
        w-[380px] h-[520px]
        rounded-2xl
        bg-black/60 backdrop-blur-xl
        border border-white/10
        shadow-[0_0_40px_rgba(0,255,255,0.08)]
        flex flex-col
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <h3 className="text-sm font-semibold tracking-wide">
          AI Assistant
        </h3>
        <button
          onClick={onClose}
          className="rounded-full p-1 hover:bg-white/10 transition"
        >
          ✕
        </button>
      </div>

      {/* Chat body must flex */}
      <div className="flex-1 min-h-0">
        <ChatContainer />
      </div>
    </motion.div>
  );
}
