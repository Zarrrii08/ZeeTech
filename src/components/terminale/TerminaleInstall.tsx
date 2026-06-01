"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import TerminalChrome from "@/components/terminale/TerminalChrome";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type OsKey = "macOS / Linux" | "Windows" | "Homebrew" | "From source";

const COMMANDS: Record<OsKey, string> = {
  "macOS / Linux":
    "curl --proto '=https' --tlsv1.2 -LsSf https://github.com/fbrzlarosa/terminale/releases/latest/download/terminale-installer.sh | sh",
  Windows:
    "irm https://github.com/fbrzlarosa/terminale/releases/latest/download/terminale-installer.ps1 | iex",
  Homebrew: "brew install fbrzlarosa/terminale/terminale",
  "From source":
    "git clone https://github.com/fbrzlarosa/terminale && cd terminale && cargo build --release && ./target/release/terminale",
};

const OS_TABS: OsKey[] = ["macOS / Linux", "Windows", "Homebrew", "From source"];

export default function TerminaleInstall() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeOs, setActiveOs] = useState<OsKey>("macOS / Linux");
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup copy timer on unmount
  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".install-header", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".install-header",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".install-panel", {
        opacity: 0,
        y: 50,
        scale: 0.98,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".install-panel",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(COMMANDS[activeOs]).then(() => {
      setCopied(true);
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = setTimeout(() => {
        setCopied(false);
        copyTimerRef.current = null;
      }, 1500);
    });
  };

  const handleTabClick = (os: OsKey, el: HTMLElement) => {
    setActiveOs(os);
    setCopied(false);
    gsap.fromTo(
      el,
      { scale: 0.95 },
      { scale: 1, duration: 0.3, ease: "back.out(1.7)" }
    );
  };

  return (
    <section
      ref={rootRef}
      id="install"
      className="py-24 sm:py-32 relative"
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="install-header mb-14 sm:mb-18">
          <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
            INSTALL
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
            <span className="text-foreground">One line.</span>{" "}
            <span className="relative inline-block">
              <span className="gradient-rainbow-text">Then it&apos;s yours.</span>
              <span className="absolute inset-0 gradient-rainbow-text blur-[20px] opacity-60 pointer-events-none">
                Then it&apos;s yours.
              </span>
            </span>
          </h2>
          <p className="text-sm font-mono text-gray-500 tracking-wide">
            Early but real.
          </p>
        </div>

        {/* Install panel */}
        <div className="install-panel rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden mb-12">
          {/* OS tab bar */}
          <div className="flex items-center gap-1 px-4 pt-4 pb-0 border-b border-white/10 overflow-x-auto no-scrollbar">
            {OS_TABS.map((os) => (
              <button
                key={os}
                onClick={(e) => handleTabClick(os, e.currentTarget)}
                className={cn(
                  "shrink-0 px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors cursor-pointer",
                  activeOs === os
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-gray-400 hover:text-foreground"
                )}
              >
                {os}
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="relative p-4 sm:p-6">
            <div className="rounded-xl border border-white/10 bg-background/80 backdrop-blur-xl overflow-hidden relative">
              <TerminalChrome path={activeOs} />

              <div className="relative p-4">
                <pre className="font-mono text-sm text-primary-light leading-relaxed whitespace-pre-wrap break-all pr-12">
                  <span className="text-gray-500 select-none mr-2">$</span>
                  {COMMANDS[activeOs]}
                </pre>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  aria-label="Copy command"
                  className={cn(
                    "absolute top-3 right-3 p-2 rounded-lg border transition-colors cursor-pointer",
                    copied
                      ? "border-green-500/40 bg-green-500/10 text-green-400"
                      : "border-white/10 bg-white/5 text-gray-400 hover:text-foreground hover:border-white/20"
                  )}
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {copied && (
              <p className="mt-2 text-xs text-green-400 font-medium">Copied!</p>
            )}
          </div>
        </div>

        {/* All releases link */}
        <div className="flex justify-start">
          <Button
            href="https://github.com/fbrzlarosa/terminale/releases"
            target="_blank"
            variant="outline"
          >
            All releases
          </Button>
        </div>
      </div>
    </section>
  );
}
