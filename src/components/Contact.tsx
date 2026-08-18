"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Smartphone } from "@/components/Icons";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const contactOptions = [
  {
    title: "Message on LinkedIn",
    description:
      "Reach out with a brief project summary, technology preference, or timeline.",
    href: "https://www.linkedin.com/in/zaryab-hayat-khan-0598b5220/",
    icon: Linkedin,
  },
  {
    title: "Review code on GitHub",
    description:
      "Explore repositories for modern web apps, Shopify stores, and full stack integrations.",
    href: "https://github.com/Zarrrii08",
    icon: Github,
  },
  {
    title: "Send an email",
    description:
      "Share your idea via email for a fast response and early project scoping.",
    href: "mailto:hello@zaryabhayatkhan.dev",
    icon: Mail,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !paraRef.current || !cardsRef.current || !bgGlowRef.current || !noteRef.current) return;

    const cards = cardsRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgGlowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 0.4, scale: 1.05, duration: 1.2, ease: "power2.out" }
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, rotateX: 12 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 40, rotateX: 8 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, delay: 0.1, ease: "power2.out" }
      );

      gsap.fromTo(
        cards.children,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.14,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        noteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.35, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="pb-24 sm:py-32 md:py-36 relative overflow-hidden"
    >
      <div
        ref={bgGlowRef}
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-80 w-[90%] rounded-[3rem] bg-primary/10 blur-3xl opacity-0"
        style={{ transform: "translateY(-20%)" }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            Contact
          </p>
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6"
          >
            Ready to launch your next web project?
          </h2>
          <p
            ref={paraRef}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            I partner with startups, agencies, and product teams to build high-impact websites,
            e-commerce platforms, and internal tools that scale.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 lg:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                <div>
                  <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary w-12 h-12 mb-6 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {option.description}
                  </p>
                </div>
                <Button
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Get in Touch
                </Button>
              </div>
            );
          })}
        </div>

        <div ref={noteRef} className="mt-12 text-center text-gray-400 max-w-2xl mx-auto">
          Prefer an email introduction? Use the button above or message me directly on LinkedIn.
        </div>
      </div>
    </section>
  );
}
