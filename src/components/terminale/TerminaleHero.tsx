"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Button from "@/components/Button";
import TerminalChrome from "@/components/terminale/TerminalChrome";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// ---------- typing-effect data ----------

const INSTALL_CMD =
  "curl --proto '=https' --tlsv1.2 -LsSf https://github.com/fbrzlarosa/terminale/releases/latest/download/terminale-installer.sh | sh";

type OutputLine = {
  text: string;
  color: "primary" | "secondary" | "foreground" | "gray";
};

const OUTPUT_LINES: OutputLine[] = [
  { text: "  downloading terminale…", color: "gray" },
  { text: "  ✓ downloaded", color: "primary" },
  { text: "  ✓ installed terminale", color: "primary" },
  { text: "  → run 'terminale' to start", color: "secondary" },
];

const OUTPUT_COLOR_MAP: Record<OutputLine["color"], string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  foreground: "text-foreground",
  gray: "text-gray-400",
};

const FEATURE_CHIPS = [
  "Multi-tab",
  "Split panes",
  "Inline AI",
  "Quake mode",
  "Command palette",
  "Plugins",
];

// ---------- component ----------

export default function TerminaleHero() {
  const rootRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const cmdLineRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const outputContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // --- entrance stagger ---
      gsap.set(
        [
          eyebrowRef.current,
          logoRef.current,
          taglineRef.current,
          sublineRef.current,
          ctaRef.current,
          terminalRef.current,
        ],
        { opacity: 0, y: 40 }
      );

      const entranceTl = gsap.timeline({ delay: 0.3 });

      entranceTl
        .to(eyebrowRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        })
        .to(
          logoRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .to(
          sublineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .to(
          terminalRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      // --- typing effect (pure GSAP, no setInterval/setState) ---
      if (!cmdLineRef.current || !outputContainerRef.current) return;

      const cmdEl = cmdLineRef.current;
      const outputEl = outputContainerRef.current;

      // We store the displayed text in a plain object so GSAP onUpdate can
      // read/write it without triggering React re-renders.
      const state = { chars: 0 };

      const runTypingLoop = () => {
        // clear previous output lines
        outputEl.innerHTML = "";
        cmdEl.textContent = "";
        state.chars = 0;

        const typingTl = gsap.timeline({
          onComplete: () => {
            // brief pause then loop
            gsap.delayedCall(isMobile ? 3 : 4, runTypingLoop);
          },
        });

        // 1. type the command char by char via onUpdate
        typingTl.to(state, {
          chars: INSTALL_CMD.length,
          duration: isMobile ? 2.5 : 4,
          ease: "none",
          onUpdate() {
            cmdEl.textContent = INSTALL_CMD.slice(
              0,
              Math.round(state.chars)
            );
          },
        });

        // 2. reveal each output line with a fade in
        OUTPUT_LINES.forEach((line, i) => {
          const lineEl = document.createElement("div");
          lineEl.textContent = line.text;
          lineEl.className = cn("font-mono text-sm", OUTPUT_COLOR_MAP[line.color]);
          lineEl.style.opacity = "0";
          lineEl.style.transform = "translateY(6px)";
          outputEl.appendChild(lineEl);

          typingTl.to(
            lineEl,
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            `>+${i === 0 ? 0.1 : 0.3}`
          );
        });

        // 3. pause, then clear everything before re-loop (handled by onComplete)
        typingTl.to({}, { duration: 1.5 }); // extra hold at the end
      };

      // cursor blink (independent of typing loop)
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "steps(1)",
          yoyo: true,
          repeat: -1,
        });
      }

      // kick off after entrance animation
      gsap.delayedCall(
        0.3 + entranceTl.duration() - 0.2,
        runTypingLoop
      );

      // --- subtle parallax on scroll (skip on mobile for perf) ---
      if (!isMobile && terminalRef.current) {
        ScrollTrigger.create({
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          onUpdate: (self) => {
            const p = self.progress;
            if (terminalRef.current) {
              gsap.set(terminalRef.current, { y: p * 60 });
            }
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen flex items-center"
    >
      {/* decorative orbs */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] hidden md:block pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] hidden md:block pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 sm:pt-32 md:pt-36 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── left column: copy ── */}
          <div className="flex flex-col gap-6">
            {/* eyebrow */}
            <p
              ref={eyebrowRef}
              className="text-xs uppercase tracking-wider font-semibold text-gray-400"
            >
              Open Source&nbsp;&middot;&nbsp;Rust&nbsp;&middot;&nbsp;GPU-Accelerated
            </p>

            {/* logo / wordmark */}
            <div ref={logoRef} className="flex items-center gap-4">
              <Image
                src="/terminale/logo.svg"
                alt="terminale"
                width={560}
                height={121}
                className="w-auto h-20 md:h-28"
                priority
                onError={() => {
                  /* logo.svg might not exist yet — the <h1> fallback renders anyway */
                }}
              />
            </div>

            {/* tagline */}
            <h1
              ref={taglineRef}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]"
            >
              the cross-platform terminal{" "}
              <span className="relative inline-block">
                <span className="gradient-rainbow-text">
                  that doesn&apos;t suck
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 gradient-rainbow-text blur-xl opacity-60"
                >
                  that doesn&apos;t suck
                </span>
              </span>
            </h1>

            {/* subline + platform pills */}
            <div ref={sublineRef} className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {FEATURE_CHIPS.map((pill) => (
                  <span
                    key={pill}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                Windows&nbsp;&middot;&nbsp;macOS&nbsp;&middot;&nbsp;Linux — no
                Electron, no webview, no telemetry.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                href="#install"
                variant="gradient"
                size="lg"
                rightIcon={<ArrowDown className="w-5 h-5" />}
              >
                Install
              </Button>
              <Button
                href="https://github.com/fbrzlarosa/terminale"
                target="_blank"
                variant="outline"
                size="lg"
                rightIcon={<Github className="w-5 h-5" />}
              >
                View on GitHub
              </Button>
            </div>
          </div>

          {/* ── right column: fake terminal window ── */}
          <div
            ref={terminalRef}
            className="optimize-gpu rounded-xl border border-white/10 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {/* title bar */}
            <TerminalChrome path="~" />

            {/* terminal body */}
            <div className="p-5 sm:p-6 min-h-[220px] sm:min-h-[260px]">
              {/* prompt + typing line */}
              <div className="flex items-start gap-2 font-mono text-sm">
                <span className="text-primary select-none shrink-0 mt-px">
                  $
                </span>
                <span className="flex-1 break-all text-foreground">
                  <span ref={cmdLineRef} />
                  <span
                    ref={cursorRef}
                    aria-hidden="true"
                    className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-px"
                  />
                </span>
              </div>

              {/* output lines (injected by GSAP) */}
              <div
                ref={outputContainerRef}
                className="mt-3 flex flex-col gap-1"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
