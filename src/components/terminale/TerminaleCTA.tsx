"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

export default function TerminaleCTA() {
  const rootRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Orb idle animations
      gsap.to(orb1Ref.current, {
        keyframes: [
          { x: 0, y: 0, scale: 1, opacity: 0.15 },
          { x: 80, y: -50, scale: 1.2, opacity: 0.35 },
          { x: 0, y: 0, scale: 1, opacity: 0.15 },
        ],
        duration: 14,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        keyframes: [
          { x: 0, y: 0, scale: 1, opacity: 0.15 },
          { x: -60, y: 40, scale: 1.25, opacity: 0.35 },
          { x: 0, y: 0, scale: 1, opacity: 0.15 },
        ],
        duration: 18,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // Glow pulse on heading
      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { opacity: 0.4 },
          {
            opacity: 0.8,
            duration: 1.8,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          }
        );
      }

      // Entrance animations (scroll-triggered)
      gsap.from(".cta-tagline", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".cta-tagline",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-headline", {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".cta-headline",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-sub", {
        opacity: 0,
        y: 25,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".cta-sub",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-buttons", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.15,
        scrollTrigger: {
          trigger: ".cta-buttons",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-footer", {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".cta-footer",
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
      id="cta-terminale"
      className="py-24 sm:py-32 relative"
    >
      {/* Background orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none hidden md:block"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none hidden md:block"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Tagline above */}
        <p className="cta-tagline text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mb-6">
          Make your shell less terrible.
        </p>

        {/* Display headline */}
        <h2 className="cta-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8 sm:mb-10">
          <span className="relative inline-block">
            <span className="relative z-10 gradient-rainbow-text">
              Star it on GitHub.
            </span>
            <span
              ref={glowRef}
              className="absolute inset-0 gradient-rainbow-text blur-[20px] opacity-60 z-0 pointer-events-none"
            >
              Star it on GitHub.
            </span>
          </span>
        </h2>

        {/* Tagline below */}
        <p className="cta-sub text-base sm:text-lg text-gray-500 mb-10 sm:mb-14">
          Open source. No BS. Just a fast terminal emulator.
        </p>

        {/* CTA buttons */}
        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            href="https://github.com/fbrzlarosa/terminale"
            target="_blank"
            variant="gradient"
            size="xl"
            rightIcon={<Star className="w-5 h-5" />}
          >
            Star on GitHub
          </Button>
          <Button
            href="https://github.com/fbrzlarosa/terminale/releases"
            target="_blank"
            variant="outline"
            size="lg"
            rightIcon={<Download className="w-4 h-4" />}
          >
            Download
          </Button>
        </div>

        {/* Footer line */}
        <p className="cta-footer text-xs text-gray-600 font-mono tracking-wide">
          MIT OR Apache-2.0 &middot; made with rust + a genuine love of pixels
        </p>
      </div>
    </section>
  );
}
