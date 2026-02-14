"use client";

export default function SaaSResponseCard({
  content,
}: {
  content: string;
}) {
  function copyPrompt() {
    navigator.clipboard.writeText(content);
  }

  return (
    <div className="space-y-4 rounded-lg border bg-muted p-4 text-sm">
      <h3 className="text-base font-semibold">
        Quick SaaS Blueprint
      </h3>

      <pre className="whitespace-pre-wrap text-xs leading-relaxed">
        {content}
      </pre>

      <div className="flex gap-2 pt-2">
        <button
          onClick={copyPrompt}
          className="rounded-md bg-primary px-3 py-1.5 text-white"
        >
          Copy Prompt
        </button>

        <a
          href="https://aistudio.google.com/"
          target="_blank"
          className="rounded-md border px-3 py-1.5"
        >
          Open Google AI Studio
        </a>
      </div>
    </div>
  );
}
