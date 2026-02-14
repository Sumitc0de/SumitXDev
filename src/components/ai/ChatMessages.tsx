"use client";

export default function ChatMessages({
  messages,
  loading,
}: {
  messages: any[];
  loading: boolean;
}) {
  return (
    <div className="h-full overflow-y-auto space-y-4 px-4 py-4">
      {messages.map((msg, i) => (
        <div key={i}>{msg.content}</div>
      ))}

      {loading && <div>AI is thinking…</div>}
    </div>
  );
}
