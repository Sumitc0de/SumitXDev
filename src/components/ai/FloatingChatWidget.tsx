"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingChatButton from "./FloatingChatButton";
import FloatingChatDialog from "./FloatingChatDialog";

export default function FloatingChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FloatingChatButton onClick={() => setOpen(true)} />

      <AnimatePresence>
        {open && (
          <FloatingChatDialog onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
