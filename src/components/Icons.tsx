import type { ReactElement, SVGProps } from "react";

export type LucideIcon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 5.43 3.4 7 1.47 7 0.66 7 0 6.34 0 5.53 0 4.72 0.66 4.06 1.47 4.06 3.4 4.06 4.98 5.63 4.98 7.56zM.24 8.5H2.7V24H.24V8.5zm6.74 0H9.2V11.2c.36-.63 1.6-1.57 3.3-1.57 3.53 0 4.18 2.32 4.18 5.35V24h-2.46v-7.52c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.94-2.88 3.97V24H7V8.5z" />
    </svg>
  );
}

export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 5.5h16c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5v-10C2.5 6.17 3.17 5.5 4 5.5z" />
      <path d="M22 7.5l-10 6-10-6" />
    </svg>
  );
}

export function ExternalLink(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  );
}

export function Loader2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" className="animate-spin" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="25" cy="25" r="20" strokeOpacity="0.2" />
      <path d="M45 25a20 20 0 0 1-20 20" />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M3 11h18" />
    </svg>
  );
}

export function TrendingUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

export function Code2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 9l-4 3 4 3" />
      <path d="M16 9l4 3-4 3" />
      <path d="M12 3v18" />
    </svg>
  );
}

export function MessageSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function PenTool(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 20l4-4 3 3-4 4-3-3z" />
      <path d="M18 6l-6 6" />
      <path d="M8 8l6-6 6 6-6 6" />
      <path d="M5 19l-2 2" />
    </svg>
  );
}

export function Rocket(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 21s1.5-3 3-4 4-3 4-3l5-5s-5-3-8 0-4 4-4 4-1 2-1 4 1 4 1 4z" />
      <path d="M14 5l5 5" />
      <path d="M9 15l-2 5" />
    </svg>
  );
}

export function ShoppingCart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61H19a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export function Mic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 19v4" />
      <path d="M8 23h8" />
    </svg>
  );
}

export function ServerCog(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 8h.01" />
      <path d="M7 17h.01" />
      <path d="M15 8h.01" />
      <path d="M15 17h.01" />
      <circle cx="18" cy="10.5" r="1" />
    </svg>
  );
}

export function LayoutDashboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M12 21V9" />
      <path d="M9 9v12" />
    </svg>
  );
}

export function Bot(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="4" y="3" width="16" height="14" rx="3" />
      <path d="M8 6h8" />
      <path d="M9 14h.01" />
      <path d="M15 14h.01" />
      <path d="M12 18.5v2" />
    </svg>
  );
}

export function CloudCog(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M17 18h2a3 3 0 0 0 0-6 5 5 0 0 0-9.9-1A4 4 0 0 0 6 15h1" />
      <circle cx="12" cy="16" r="3" />
      <path d="M12 13v1" />
      <path d="M12 18v1" />
      <path d="M15 16h1" />
      <path d="M10 16h1" />
      <path d="M13.5 13.5l.7.7" />
      <path d="M10.8 18.2l.7.7" />
      <path d="M13.5 18.5l.7-.7" />
      <path d="M10.8 13.8l.7-.7" />
    </svg>
  );
}

export function Coins(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <ellipse cx="12" cy="12" rx="8" ry="5" />
      <path d="M4 12v3c0 2.76 3.58 5 8 5s8-2.24 8-5v-3" />
      <path d="M4 9c0 2.76 3.58 5 8 5s8-2.24 8-5" />
    </svg>
  );
}

export function Globe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M2.05 12h19.9" />
      <path d="M12 2.05v19.9" />
      <path d="M5.6 5.6c2.4 2.4 3.2 6 3.2 10.4s-.8 8-3.2 10.4" />
      <path d="M18.4 5.6c-2.4 2.4-3.2 6-3.2 10.4s.8 8 3.2 10.4" />
    </svg>
  );
}

export function Server(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M8 7h.01" />
      <path d="M8 17h.01" />
      <path d="M16 7h.01" />
      <path d="M16 17h.01" />
    </svg>
  );
}

export function Briefcase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M16 7V4H8v3" />
      <path d="M3 11h18" />
    </svg>
  );
}

export function GraduationCap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2 7l10 5 10-5-10-5-10 5z" />
      <path d="M12 12v7" />
      <path d="M7 19l5-3 5 3" />
    </svg>
  );
}

export function Trophy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 3h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V3z" />
      <path d="M4 7h16" />
      <path d="M8 21h8" />
      <path d="M12 13v8" />
    </svg>
  );
}

export function Smartphone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
