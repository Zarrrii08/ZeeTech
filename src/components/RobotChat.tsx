"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, MessageSquare } from "./Icons";

type ChatMessage = {
  id: number;
  text: string;
  from: "bot" | "user";
};

const whatsappNumber = "923249161002";
const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    from: "bot",
    text: "Hi, I am Byte. I can help you scope a web project or connect you with Zaryab directly.",
  },
];

function getBotReply(message: string) {
  const normalized = message.toLowerCase();

  if (/price|cost|budget|quote/.test(normalized)) {
    return "Every project is scoped around its goals, features, and timeline. Send the details on WhatsApp and Zaryab can give you a clear estimate.";
  }

  if (/shopify|wordpress|ecommerce|e-commerce|store/.test(normalized)) {
    return "Zaryab builds custom Shopify and WordPress stores, including themes, integrations, performance work, and conversion-focused flows.";
  }

  if (/custom|website design|web design|product|landing page|branding/.test(normalized)) {
    return "Zaryab can design and build a fully custom website around your product, audience, and goals, from the first concept through launch.";
  }

  if (/react|next|frontend|front-end|website|web app|app/.test(normalized)) {
    return "The sweet spot is polished React and Next.js experiences backed by practical APIs, responsive systems, and a strong performance baseline.";
  }

  if (/hello|hi|hey|help/.test(normalized)) {
    return "Tell me what you are building, your target launch date, or the kind of help you need. I will point you in the right direction.";
  }

  return "That sounds worth exploring. Share a short project brief and preferred timeline on WhatsApp so Zaryab can take it from there.";
}

export default function RobotChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messageId = useRef(2);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    setMessages((current) => [
      ...current,
      { id: messageId.current++, from: "user", text },
    ]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: messageId.current++, from: "bot", text: getBotReply(text) },
      ]);
      setIsTyping(false);
    }, 650);
  }

  function openWhatsApp(message: string) {
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[10000] flex flex-col items-end gap-3">
      {isOpen && (
        <section
          aria-label="Byte project assistant"
          className="robot-chat-panel w-[calc(100vw-2rem)] max-w-[380px] overflow-hidden rounded-[1.25rem] border border-white/15 bg-[#101820]/95 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <MessageSquare className="h-4 w-4" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Byte assistant</p>
                <p className="text-[11px] text-gray-400">Usually replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close Byte assistant"
            >
              <span aria-hidden="true" className="text-lg leading-none">x</span>
            </button>
          </header>

          <div className="robot-chat-messages flex max-h-[290px] flex-col gap-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.from === "user"
                    ? "self-end rounded-br-md bg-primary text-[#061318]"
                    : "rounded-bl-md border border-white/10 bg-white/7 text-gray-200"
                }`}
              >
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/7 px-3 py-3" aria-label="Byte is typing">
                <span className="robot-typing-dot" />
                <span className="robot-typing-dot [animation-delay:120ms]" />
                <span className="robot-typing-dot [animation-delay:240ms]" />
              </div>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-3 no-scrollbar">
            <button
              type="button"
              onClick={() => setInput("I need a fully custom website design")}
              className="shrink-0 cursor-pointer rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              Custom website
            </button>
            <button
              type="button"
              onClick={() => setInput("I need a Shopify or WordPress store")}
              className="shrink-0 cursor-pointer rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              Online store
            </button>
            <button
              type="button"
              onClick={() => openWhatsApp("Hi Zaryab, I would like to discuss a project.")}
              className="shrink-0 cursor-pointer rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-colors hover:bg-emerald-400/20"
            >
              WhatsApp
            </button>
          </div>

          <form onSubmit={sendMessage} className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about a project..."
              aria-label="Ask Byte a question"
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-primary/60"
            />
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary text-[#061318] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`robot-launcher group relative h-[72px] w-[72px] cursor-pointer rounded-[1.5rem] border border-primary/50 bg-[#101820] shadow-[0_12px_40px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-105 hover:border-primary ${isOpen ? "rotate-3" : ""}`}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close Byte assistant" : "Open Byte assistant"}
      >
        <span className="robot-orbit absolute inset-[-8px] rounded-[1.9rem] border border-primary/20" />
        <span className="robot-glow absolute inset-2 rounded-2xl bg-primary/10" />
        <span className="robot-3d relative mx-auto block h-12 w-12" aria-hidden="true">
          <span className="robot-antenna absolute left-1/2 top-[-7px] h-3 w-px -translate-x-1/2 bg-primary" />
          <span className="robot-antenna-dot absolute left-1/2 top-[-10px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary" />
          <span className="robot-head absolute inset-x-0 top-1 h-9 rounded-[11px] border border-primary/70 bg-gradient-to-br from-[#253642] via-[#16242d] to-[#0a1116] shadow-[inset_-5px_-5px_10px_rgba(0,0,0,0.45),inset_4px_4px_8px_rgba(255,255,255,0.08)]" />
          <span className="robot-face absolute left-2 top-3 h-5 w-8 rounded-md border border-primary/30 bg-[#061318] shadow-[0_0_12px_rgba(6,182,212,0.35)]">
            <span className="robot-eye absolute left-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="robot-eye absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="absolute bottom-1 left-1/2 h-px w-3 -translate-x-1/2 bg-primary/70" />
          </span>
          <span className="robot-neck absolute bottom-0 left-1/2 h-2 w-5 -translate-x-1/2 rounded-b-md bg-[#253642]" />
        </span>
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#101820] bg-emerald-400 text-[10px] font-black text-[#061318]">1</span>
      </button>
    </div>
  );
}
