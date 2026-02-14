"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
  disabled,
}: {
  onSend: (msg: string) => void;
  disabled: boolean;
}) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onSend(value)} disabled={disabled}>
        Send
      </button>
    </div>
  );
}
