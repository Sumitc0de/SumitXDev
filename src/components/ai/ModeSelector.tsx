"use client";

import { Mode } from "./ChatContainer";

export default function ModeSelector({
  mode,
  setMode,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
}) {
  return (
    <div className="flex gap-2 border-b p-2">
      <button onClick={() => setMode("ASK")}>Ask</button>
      <button onClick={() => setMode("ROADMAP")}>Roadmap</button>
      <button onClick={() => setMode("PROJECT")}>Project</button>
      <button onClick={() => setMode("SAAS")}>Quick SaaS</button>
    </div>
  );
}
