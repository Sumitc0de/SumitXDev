"use client";

import { motion } from "framer-motion";

export default function FloatingChatButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(0,255,255,0.4)",
          "0 0 20px rgba(0,255,255,0.6)",
          "0 0 0px rgba(0,255,255,0.4)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="
        fixed bottom-6 right-6 z-50
        h-14 w-14 rounded-full
        bg-gradient-to-br from-cyan-500 to-blue-600
        text-white text-xl
        flex items-center justify-center
      "
    >
      🤖
    </motion.button>
  );
}
