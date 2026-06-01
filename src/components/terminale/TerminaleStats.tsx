"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type StatItem = {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
};

const STATS: StatItem[] = [
  { value: "~84K", numericValue: 84000, suffix: "", label: "lines of Rust" },
  { value: "9", numericValue: 9, suffix: "", label: "crate workspace" },
  { value: "3", numericValue: 3, suffix: "", label: "OS / 1 codebase" },
  { value: "12", numericValue: 12, suffix: "", label: "themes built-in" },
  { value: "0", numericValue: 0, suffix: "", label: "telemetry" },
  { value: "0", numericValue: 0, suffix: "", label: "Electron" },
  { value: "75%+", numericValue: 75, suffix: "%+", label: "test coverage" },
];

const TECH_CHIPS = [
  "Rust",
  "wgpu",
  "winit",
  "alacritty core",
  "cosmic-text",
  "egui",
  "mlua (Lua 5.4)",
  "reqwest",
];

export default function TerminaleStats() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(".stats-header", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".stats-header",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // Stat cards stagger
      gsap.from(".stat-card", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stat-card",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // Count-up tweens for numeric stats
      STATS.forEach((stat, i) => {
        const el = rootRef.current?.querySelectorAll<HTMLElement>(".stat-number")[i];
        if (!el || stat.numericValue === 0) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.numericValue,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.1 * i,
          onUpdate() {
            const rounded = Math.round(obj.val);
            if (stat.value.startsWith("~")) {
              el.textContent = `~${rounded < 1000 ? rounded : Math.round(rounded / 1000) + "K"}`;
            } else {
              el.textContent = `${rounded}${stat.suffix}`;
            }
          },
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      });

      // Tech chips stagger
      gsap.from(".tech-chip", {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: 0.07,
        scrollTrigger: {
          trigger: ".tech-chips-row",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // Spotlight card
      gsap.from(".spotlight-card", {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".spotlight-card",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="tech"
      className="py-24 sm:py-32 relative"
    >
      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="stats-header mb-16 sm:mb-20 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
            BY THE NUMBERS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-foreground">Serious engineering</span>
            <br />
            <span className="relative inline-block">
              <span className="gradient-rainbow-text">under the pixels.</span>
              <span className="absolute inset-0 gradient-rainbow-text blur-[20px] opacity-60 pointer-events-none">
                under the pixels.
              </span>
            </span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "stat-card rounded-2xl border border-white/5 bg-white/5 hover:border-white/10 transition-colors p-6 flex flex-col gap-2 optimize-gpu",
                i === 0 && "col-span-2 sm:col-span-1"
              )}
            >
              <span
                className="stat-number text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none"
              >
                {stat.value}
              </span>
              <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Built-with chips */}
        <div className="tech-chips-row mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-wrap">
          <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 shrink-0">
            Built with
          </span>
          <div className="flex flex-wrap gap-2">
            {TECH_CHIPS.map((chip) => (
              <span
                key={chip}
                className="tech-chip inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-gray-300 hover:border-primary/40 hover:text-primary transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Spotlight card */}
        <div className="spotlight-card relative rounded-2xl border border-[#D97757]/30 bg-[#D97757]/[0.06] backdrop-blur-xl p-8 sm:p-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D97757]/15 via-transparent to-[#D97757]/[0.06] pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-[#D97757]/10 border border-[#D97757]/30 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7"
                fill="#D97757"
                role="img"
                aria-label="Claude"
              >
                <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-1">
                100% prompt-engineered on{" "}
                <span className="text-[#D97757]">Claude Code</span>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Every line written on Claude Code, not typed by hand. The entire
                codebase — from GPU renderer to Lua VM — emerged from conversations
                with an AI that knows Rust better than most humans do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
