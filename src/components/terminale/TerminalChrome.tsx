import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

type TerminalChromeProps = {
  /** Label shown in the active tab. Defaults to the project name. */
  label?: string;
  /** Optional secondary segment (e.g. cwd, OS, or screenshot name). */
  path?: string;
  className?: string;
};

/**
 * OS-neutral terminal window header for the /terminale showcase.
 * Mirrors terminale's own borderless title bar: a rainbow accent hairline
 * (the project's identity) plus a tab — no macOS traffic-light dots, since
 * terminale is cross-platform (Windows · macOS · Linux).
 */
export default function TerminalChrome({
  label = "terminale",
  path,
  className,
}: TerminalChromeProps) {
  return (
    <div className={cn("select-none", className)}>
      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-[linear-gradient(90deg,#ff5555,#ffb86c,#f1fa8c,#50fa7b,#8be9fd,#bd93f9)]"
      />
      <div className="flex items-stretch border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2 px-4 py-2.5 border-r border-white/10 bg-white/[0.07]">
          <Terminal className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
          <span className="text-xs font-mono font-semibold text-gray-200">
            {label}
          </span>
        </div>
        {path ? (
          <div className="flex items-center px-4 text-xs font-mono text-gray-500">
            {path}
          </div>
        ) : null}
      </div>
    </div>
  );
}
