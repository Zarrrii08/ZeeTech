"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bot,
  ChevronDown,
  Columns2,
  Command,
  Link,
  Palette,
  Puzzle,
  Search,
  ShieldCheck,
  Sparkles,
  SplitSquareHorizontal,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  keybind?: string;
};

const features: Feature[] = [
  {
    icon: Columns2,
    title: "Multi-tab",
    description: "New, close, restart tabs and jump to any with a keystroke.",
    keybind: "Ctrl+1..8",
  },
  {
    icon: SplitSquareHorizontal,
    title: "Split panes",
    description: "Horizontal and vertical splits, infinitely nestable.",
  },
  {
    icon: Sparkles,
    title: "Inline AI suggestions",
    description: "Proactive bar, [INJECT] to insert — never auto-run.",
  },
  {
    icon: Bot,
    title: "AI assistant",
    description: "Claude, OpenAI or Ollama. Streaming. Explain selection.",
    keybind: "Ctrl+Shift+I",
  },
  {
    icon: Command,
    title: "Command palette",
    description: "Fuzzy-search every action in the app.",
    keybind: "Ctrl+Shift+P",
  },
  {
    icon: Zap,
    title: "GPU rendering",
    description: "wgpu backend — Vulkan, Metal, DX12 or GL. Full ligature support.",
  },
  {
    icon: Palette,
    title: "12 built-in themes",
    description: "Dracula, Matrix, Tokyo Night, Catppuccin… live switch.",
  },
  {
    icon: ChevronDown,
    title: "Quake mode",
    description: "Drop-down panel bound to a global system hotkey.",
  },
  {
    icon: Puzzle,
    title: "Lua plugins",
    description: "Sandboxed Lua 5.4 host. Ship your own extensions.",
  },
  {
    icon: Search,
    title: "Full-scrollback search",
    description: "Search across the entire terminal history buffer.",
    keybind: "Ctrl+Shift+F",
  },
  {
    icon: Link,
    title: "Clickable links",
    description: "OSC 8 hyperlinks and file:line:col Ctrl-click navigation.",
  },
  {
    icon: ShieldCheck,
    title: "Crash-resistant",
    description: "Panicked tabs are isolated and restartable without data loss.",
  },
];

function FeatureCard({
  feature,
  index,
  isMobile,
}: {
  feature: Feature;
  index: number;
  isMobile: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 95%",
        onEnter: () => {
          gsap.to(cardRef.current, {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.4 : 0.5,
            // No stagger delay on mobile (single column): a delay during a fast
            // scroll pushes the reveal up near the top of the screen.
            delay: isMobile ? 0 : (index % 3) * 0.1,
            ease: isMobile ? "power2.out" : "back.out(1.7)",
          });
        },
      });

      if (isMobile) return;

      const card = cardRef.current;
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, { scale: 1.03, duration: 0.3, ease: "power2.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (rafId.current) cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(() => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(card, {
            rotateX: y * -12,
            rotateY: x * 12,
            duration: 0.3,
            ease: "power2.out",
            transformPerspective: 800,
          });
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
      card.addEventListener("mousemove", handleMouseMove, { passive: true });
    }, cardRef);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      ctx.revert();
    };
  }, [index, isMobile]);

  return (
    <div
      ref={cardRef}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5",
        "hover:bg-white/10 transition-colors backdrop-blur-sm p-6",
        "flex flex-col gap-3"
      )}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
        <feature.icon className="w-5 h-5" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-lg md:text-xl font-black text-white">
            {feature.title}
          </h3>
          {feature.keybind && (
            <span className="font-mono text-xs px-2 py-0.5 rounded border border-white/10 bg-white/5 text-gray-400">
              {feature.keybind}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function TerminaleFeatures() {
  const rootRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { opacity: 0.4 },
          {
            opacity: 0.7,
            duration: 1.8,
            delay: 0.3,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          }
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={rootRef}
      className="pt-6 sm:pt-10 pb-24 sm:pb-32 relative"
    >
      {/* Orb decor */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl hidden md:block"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
            Features
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative inline-block">
            <span className="text-white">Everything you want.&nbsp;</span>
            <span className="relative inline-block">
              <span className="gradient-rainbow-text">Nothing</span>
              <span
                ref={glowRef}
                className="absolute inset-0 gradient-rainbow-text blur-xl opacity-60"
                aria-hidden="true"
              >
                Nothing
              </span>
            </span>
            <span className="text-white"> you don&apos;t.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Twelve features built for the way developers actually work — fast,
            focused, and frustration-free.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
