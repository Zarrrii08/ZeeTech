"use client";

import Button from "@/components/Button";
import StunningLoader from "@/components/StunningLoader";
import { ExternalLink, Github, Linkedin, Mail } from "@/components/Icons";
import { useEffect } from "react";

function DevToIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-book-open"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const errorContent = (
    <>
      <div className="flex gap-4 justify-center">
        <Button
          onClick={reset}
          variant="primary"
          size="lg"
          className="bg-red-500 hover:bg-red-600 text-white border-red-500/30"
        >
          Retry
        </Button>
        <Button
          href="/"
          variant="outline"
          size="lg"
          className="border-red-500/30 text-red-500 hover:bg-red-500/10 hover:border-red-500/50"
        >
          Back to home
        </Button>
      </div>
      <div className="flex gap-6 mt-4">
        <a
          href="https://github.com/Zarrrii08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 cursor-pointer transition-colors transform hover:scale-110"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/zaryab-hayat-khan-0598b5220/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 cursor-pointer transition-colors transform hover:scale-110"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://stackoverflow.com/users/18258721/zaryab-hayat-khan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 cursor-pointer transition-colors transform hover:scale-110"
        >
          <ExternalLink className="w-6 h-6" />
        </a>
        <a
          href="#contact"
          className="text-red-500 hover:text-red-400 cursor-pointer transition-colors transform hover:scale-110"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </>
  );

  return (
    <StunningLoader
      finalMessage="INTERNAL SERVER ERROR 500"
      showContent={true}
      errorContent={errorContent}
      isError={true}
    />
  );
}
