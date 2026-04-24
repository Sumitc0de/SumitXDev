"use client";

import { QUICK_ACTIONS } from "@/data/sumitContext";

type QuickActionsProps = {
  onAction: (prompt: string) => void;
  disabled?: boolean;
};

export default function QuickActions({ onAction, disabled }: QuickActionsProps) {
  return (
    <div className="px-4 py-3">
      <p className="mb-2.5 text-xs font-medium text-gray-500">
        Quick actions
      </p>
      <div className="flex flex-wrap gap-2">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action.label}
            onClick={() => onAction(action.prompt)}
            disabled={disabled}
            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-300 backdrop-blur transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-95 disabled:pointer-events-none disabled:opacity-40"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
