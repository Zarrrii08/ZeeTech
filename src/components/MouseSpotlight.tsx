"use client";

import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Write position as CSS custom properties instead of recomputing the full
    // radial-gradient string every frame. The browser composites this on the
    // GPU without triggering a JS paint callback on every frame.
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId.current !== null) return; // one pending rAF at most
      rafId.current = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
        rafId.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        // Static gradient referencing the CSS vars — no JS paint per frame
        background:
          "radial-gradient(600px circle at var(--mx, -9999px) var(--my, -9999px), rgba(var(--primary-rgb), 0.03), rgba(var(--primary-rgb), 0) 120px)",
        contain: "layout style paint",
      }}
    />
  );
}
