"use client";

import { useBackground } from "@/context/BackgroundContext";
import { ExternalLink, Github, Linkedin, Mail } from "@/components/Icons";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const { cycleTheme } = useBackground();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-20 sm:py-16 md:py-[22px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-2 md:col-span-2">
            <Link
              href="/"
              aria-label="Go to home"
              className="mb-4 sm:mb-6 block w-32 sm:w-44 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Logo className="w-full h-auto" onIconClick={cycleTheme} />
            </Link>
            <p className="text-sm sm:text-base text-gray-400 max-w-sm mb-4 sm:mb-6">
              Crafting efficient, scalable, and elegant solutions in software & web.
              Based in Lucca, IT.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Zarrrii08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary cursor-pointer transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/zaryab-hayat-khan-0598b5220/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary cursor-pointer transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://stackoverflow.com/users/18258721/zaryab-hayat-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary cursor-pointer transition-colors transform hover:scale-110"
                aria-label="Stack Overflow"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-primary cursor-pointer transition-colors transform hover:scale-110"
                aria-label="Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-black mb-4 sm:mb-6 text-white text-sm sm:text-base">
              Explore
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
              <li>
                <Link
                  href="#about"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  My Story
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  How I Work
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  Expertise
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  Projects
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <a
                  href={`https://www.iubenda.com/privacy-policy/${process.env.NEXT_PUBLIC_IUBENDA_POLICY_ID || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  Privacy Policy
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-black mb-4 sm:mb-6 text-white text-sm sm:text-base">
              Connect
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
              <li>
                <Link
                  href="#contact"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  Contact
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Zarrrii08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  GitHub
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zaryab-hayat-khan-0598b5220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  LinkedIn
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://upwork.com/freelancers/zaryabhayatkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  Upwork
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/18258721/zaryab-hayat-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:text-primary transition-colors cursor-pointer inline-block"
                >
                  Stack Overflow
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-white/10 text-xs sm:text-sm text-gray-300 gap-6">
          <p className="text-center md:text-left w-full">
            © {currentYear} Zaryab Hayat Khan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
