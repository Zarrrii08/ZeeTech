"use client";

import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

// terminale's brand palette — pixel-art rainbow (Tokyo Night accents)
const RAINBOW = ["#ff5555", "#ffb86c", "#f1fa8c", "#50fa7b", "#8be9fd", "#bd93f9"];

type Screenshot = {
  src: string;
  width: number;
  height: number;
  caption: string;
};

const screenshots: Screenshot[] = [
  {
    src: "/terminale/screenshots/settings.png",
    width: 900,
    height: 620,
    caption: "Native settings — no dead settings",
  },
  {
    src: "/terminale/screenshots/split-view.png",
    width: 1024,
    height: 600,
    caption: "Split panes, nestable",
  },
  {
    src: "/terminale/screenshots/tabgroups.png",
    width: 1024,
    height: 600,
    caption: "Chrome-style tab groups",
  },
  {
    src: "/terminale/screenshots/suggestion-bar.png",
    width: 1024,
    height: 600,
    caption: "Proactive AI suggestion bar",
  },
];

const COUNT = screenshots.length;

export default function TerminaleGallery() {
  const rootRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRef = useRef<HTMLDivElement>(null);
  const dirRef = useRef(1);
  const prevRef = useRef(0);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    const n = ((i % COUNT) + COUNT) % COUNT;
    setActive((curr) => {
      if (n === curr) return curr;
      let dir = n > curr ? 1 : -1;
      if (curr === COUNT - 1 && n === 0) dir = 1;
      else if (curr === 0 && n === COUNT - 1) dir = -1;
      dirRef.current = dir;
      return n;
    });
  }, []);

  const next = useCallback(() => goTo(prevRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(prevRef.current - 1), [goTo]);

  // ── slide transition (also runs on mount for the first slide) ──
  useEffect(() => {
    const dir = dirRef.current;
    const ctx = gsap.context(() => {
      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        if (i === active) {
          gsap.set(el, { zIndex: 2, pointerEvents: "auto" });
          gsap.fromTo(
            el,
            {
              opacity: 0,
              scale: 0.9,
              xPercent: 14 * dir,
              rotateY: 9 * dir,
              transformPerspective: 1100,
            },
            {
              opacity: 1,
              scale: 1,
              xPercent: 0,
              rotateY: 0,
              duration: 0.75,
              ease: "power3.out",
              overwrite: "auto",
            }
          );
        } else {
          gsap.set(el, { zIndex: 0, pointerEvents: "none" });
          gsap.to(el, {
            opacity: 0,
            scale: 0.9,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
      if (captionRef.current) {
        gsap.fromTo(
          captionRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }
    });
    prevRef.current = active;
    return () => ctx.revert();
  }, [active]);

  // ── autoplay (pauses on hover) ──
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo(prevRef.current + 1), 5000);
    return () => window.clearInterval(id);
  }, [paused, active, goTo]);

  // ── entrance reveal on scroll ──
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
      if (stageRef.current) {
        gsap.fromTo(
          stageRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stageRef.current,
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
    <section id="gallery" ref={rootRef} className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
            See it
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
            <span className="text-white">A terminal from a game&nbsp;</span>
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="gradient-rainbow-text">that should exist.</span>
              <span
                ref={glowRef}
                className="absolute inset-0 gradient-rainbow-text blur-xl opacity-60"
                aria-hidden="true"
              >
                that should exist.
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every screen you see is the real app — no mockups, no marketing
            theatre.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={stageRef}
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* pixel-art rainbow glow behind the stage */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 sm:-inset-10 blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(139,233,253,0.5), rgba(189,147,249,0.35) 45%, transparent 75%)",
            }}
          />

          {/* stage */}
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-white/10"
            style={{ perspective: 1100 }}
          >
            {screenshots.map((shot, i) => (
              <div
                key={shot.src}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="absolute inset-0"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-contain"
                  quality={90}
                  priority={i === 0}
                />
              </div>
            ))}

            {/* arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full border border-white/10 bg-background/70 backdrop-blur-md text-gray-300 hover:text-foreground hover:border-white/25 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full border border-white/10 bg-background/70 backdrop-blur-md text-gray-300 hover:text-foreground hover:border-white/25 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* caption + counter */}
          <div
            ref={captionRef}
            className="mt-6 flex items-center justify-center gap-3 text-center"
          >
            <p className="text-sm sm:text-base text-gray-300 font-medium">
              {screenshots[active].caption}
            </p>
            <span className="text-xs font-mono text-gray-500 tabular-nums">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(COUNT).padStart(2, "0")}
            </span>
          </div>

          {/* dots */}
          <div className="mt-5 flex items-center justify-center gap-2.5">
            {screenshots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${shot.caption}`}
                aria-current={i === active}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  i === active ? "w-8" : "w-1.5 bg-white/20 hover:bg-white/40"
                )}
                style={
                  i === active
                    ? { backgroundColor: RAINBOW[i % RAINBOW.length] }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
