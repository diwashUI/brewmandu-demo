"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Floating AI-receptionist widget. It talks to the Sahayak Studio backend
 * (one shared brain) — the same endpoint the studio demo page uses.
 * Drop <AgentChat /> in the site layout and every page gets the assistant.
 */
const API = "https://reply-agent-indol.vercel.app/api/chat";

interface Msg {
  role: "user" | "agent";
  text: string;
}

const STARTERS = ["What are your hours?", "How much is a latte?", "Do you have wifi?"];

function ChatIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-5 4V6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10" r="1.2" fill="currentColor" />
      <circle cx="12.5" cy="10" r="1.2" fill="currentColor" />
      <circle cx="16" cy="10" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function AgentChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "agent",
      text: "Namaste! Welcome to Brewmandu ☕ Ask me about the menu, prices, hours, or how to find us!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing, open]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMsgs((m) => [
        ...m,
        { role: "agent", text: data.text ?? "Hmm, that glitched — mind asking again?" },
      ]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: "agent",
          text: "I'm taking a quick break — tap “Order on WhatsApp” above and we'll reply right away!",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[520px] max-h-[70vh] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-espresso/10 bg-cream shadow-2xl">
          <div className="flex items-center gap-3 bg-espresso px-5 py-4 text-cream">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/15">
              <ChatIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold">Brewmandu Assistant</p>
              <p className="flex items-center gap-1.5 text-[11px] text-cream/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Online · replies instantly
              </p>
            </div>
          </div>

          <div ref={boxRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-md bg-espresso px-3.5 py-2.5 text-sm text-cream">
                    {m.text}
                  </p>
                </div>
              ) : (
                <div key={i} className="flex justify-start">
                  <p className="max-w-[85%] rounded-2xl rounded-bl-md border border-espresso/10 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-espresso shadow-sm">
                    {m.text}
                  </p>
                </div>
              )
            )}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-md border border-espresso/10 bg-white px-4 py-3 shadow-sm">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-espresso/10 px-4 py-3">
            <div className="mb-2.5 flex flex-wrap gap-1.5">
              {STARTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  disabled={typing}
                  className="rounded-full border border-espresso/15 bg-white px-2.5 py-1 text-[11px] text-espresso/70 transition hover:border-caramel hover:text-caramel disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="flex-1 rounded-full border border-espresso/15 bg-white px-4 py-2 text-sm outline-none transition placeholder:text-muted focus:border-caramel"
              />
              <button
                type="submit"
                disabled={typing || !input.trim()}
                className="rounded-full bg-espresso px-4 py-2 text-sm font-semibold text-cream transition hover:bg-caramel-dark disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Chat with our assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-cream shadow-xl transition hover:scale-105 hover:bg-caramel-dark"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <ChatIcon />
        )}
      </button>
    </div>
  );
}
