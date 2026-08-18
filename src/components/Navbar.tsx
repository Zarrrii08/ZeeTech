"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type SVGProps } from "react";
import { useBackground } from "@/context/BackgroundContext";
import Button from "./Button";
import Logo from "./Logo";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 5.43 3.4 7 1.47 7 0.66 7 0 6.34 0 5.53 0 4.72 0.66 4.06 1.47 4.06 3.4 4.06 4.98 5.63 4.98 7.56zM.24 8.5H2.7V24H.24V8.5zm6.74 0H9.2V11.2c.36-.63 1.6-1.57 3.3-1.57 3.53 0 4.18 2.32 4.18 5.35V24h-2.46v-7.52c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.94-2.88 3.97V24H7V8.5z" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 5.5h16c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5v-10C2.5 6.17 3.17 5.5 4 5.5z" />
      <path d="M22 7.5l-10 6-10-6" />
    </svg>
  );
}

function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  );
}

const navLinks = [
  { name: "My Story", href: "#about" },
  { name: "How I Work", href: "#process" },
  { name: "Skills", href: "#services" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cycleTheme } = useBackground();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const hamburgerLine1Ref = useRef<HTMLSpanElement>(null);
  const hamburgerLine2Ref = useRef<HTMLSpanElement>(null);
  const hamburgerLine3Ref = useRef<HTMLSpanElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuContentRef = useRef<HTMLDivElement>(null);
  const mobileMenuLinksRef = useRef<(HTMLDivElement | null)[]>([]);

  const resolveHash = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2,
    });
  }, []);

  useEffect(() => {
    if (
      !hamburgerLine1Ref.current ||
      !hamburgerLine2Ref.current ||
      !hamburgerLine3Ref.current
    )
      return;

    if (mobileMenuOpen) {
      gsap.to(hamburgerLine1Ref.current, { rotate: 45, y: 6, duration: 0.3 });
      gsap.to(hamburgerLine2Ref.current, { opacity: 0, duration: 0.3 });
      gsap.to(hamburgerLine3Ref.current, { rotate: -45, y: -10, duration: 0.3 });
    } else {
      gsap.to(hamburgerLine1Ref.current, { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(hamburgerLine2Ref.current, { opacity: 1, duration: 0.3 });
      gsap.to(hamburgerLine3Ref.current, { rotate: 0, y: 0, duration: 0.3 });
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuRef.current || !mobileMenuContentRef.current) return;

    const links = mobileMenuLinksRef.current.filter(Boolean);

    if (mobileMenuOpen) {
      gsap.set(mobileMenuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        opacity: 0,
      });
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.set(links, {
        y: 20,
        opacity: 0,
      });
      gsap.to(links, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.2,
        ease: "power2.out",
      });
    } else {
      gsap.to(links, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.5,
        delay: 0.2,
        ease: "power2.in",
      });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        style={{ transform: "translateY(-150px)" }}
        className={`fixed top-0 left-0 right-0 z-9999 transition-all duration-500 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md h-20 sm:h-16 shadow-lg"
            : "bg-black/0 backdrop-blur-sm h-20 sm:h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link
            href="/"
            className="block w-30 sm:w-40 transition-opacity relative z-50 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Home"
          >
            <Logo
              className="w-full h-auto"
              delay={1.2}
              onIconClick={cycleTheme}
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item) => {
              const isActive = item.href.startsWith("/") && pathname === item.href;
              const crossRoute = item.href.startsWith("#") && pathname !== "/";
              const href = crossRoute ? `/${item.href}` : item.href;
              const className = `text-sm font-medium transition-colors relative group cursor-pointer ${
                isActive
                  ? "text-white"
                  : isScrolled
                  ? "text-gray-300 hover:text-white"
                  : "text-white/90 hover:text-white"
              }`;
              const underline = (
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              );

              return crossRoute ? (
                <a key={item.name} href={href} className={className}>
                  {item.name}
                  {underline}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={className}
                >
                  {item.name}
                  {underline}
                </Link>
              );
            })}

            <div className="w-px h-6 bg-white/10 mx-2" />
            <Button href={resolveHash("#contact")} variant="gradient" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              className="text-white relative z-50 p-2 cursor-pointer focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span
                  ref={hamburgerLine1Ref}
                  className="w-full h-0.5 bg-white block origin-center"
                />
                <span
                  ref={hamburgerLine2Ref}
                  className="w-full h-0.5 bg-white block"
                />
                <span
                  ref={hamburgerLine3Ref}
                  className="w-full h-0.5 bg-white block origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-[#0D1117]/95 backdrop-blur-xl flex items-center justify-center"
        style={{ display: mobileMenuOpen ? "flex" : "none" }}
      >
        <div
          ref={mobileMenuContentRef}
          className="flex flex-col items-center gap-8 text-center"
        >
          {navLinks.map((item, i) => {
            const isActive = item.href.startsWith("/") && pathname === item.href;
            const crossRoute = item.href.startsWith("#") && pathname !== "/";
            const href = crossRoute ? `/${item.href}` : item.href;
            const className = `text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r transition-all cursor-pointer tracking-tight ${
              isActive
                ? "from-primary to-secondary"
                : "from-white to-gray-400 hover:to-primary"
            }`;
            return (
              <div
                key={item.name}
                ref={(el) => {
                  mobileMenuLinksRef.current[i] = el;
                }}
              >
                {crossRoute ? (
                  <a
                    href={href}
                    className={className}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={className}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="flex gap-8 mt-8">
            <a
              href="https://github.com/Zarrrii08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white cursor-pointer transition-colors transform hover:scale-110"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/zaryab-hayat-khan-0598b5220/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white cursor-pointer transition-colors transform hover:scale-110"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://stackoverflow.com/users/18258721/zaryab-hayat-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white cursor-pointer transition-colors transform hover:scale-110"
            >
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
            <a
              href={resolveHash("#contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors transform hover:scale-110"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
