import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "terminale — the cross-platform terminal that doesn't suck",
  description:
    "A native, GPU-accelerated, cross-platform terminal written in Rust. Multi-tab, split panes, inline AI, command palette, Quake mode — no Electron, no webview, no telemetry. Open source, 100% prompt-engineered on Claude Code.",
  alternates: { canonical: "https://stackbyte.dev/terminale" },
  openGraph: {
    type: "website",
    url: "https://stackbyte.dev/terminale",
    title: "terminale — the cross-platform terminal that doesn't suck",
    description:
      "Native, GPU-accelerated, cross-platform terminal in Rust. Multi-tab, split panes, inline AI, Quake mode. No Electron. No telemetry. Open source.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "terminale" }],
  },
};

const Navbar = dynamic(() => import("@/components/Navbar"), { loading: () => null });
const NoiseOverlay = dynamic(() => import("@/components/NoiseOverlay"), { loading: () => null });
const MouseSpotlight = dynamic(() => import("@/components/MouseSpotlight"), { loading: () => null });
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => null });

const TerminaleHero = dynamic(() => import("@/components/terminale/TerminaleHero"), { loading: () => null });
const TerminaleFeatures = dynamic(() => import("@/components/terminale/TerminaleFeatures"), { loading: () => null });
const TerminaleGallery = dynamic(() => import("@/components/terminale/TerminaleGallery"), { loading: () => null });
const TerminaleStats = dynamic(() => import("@/components/terminale/TerminaleStats"), { loading: () => null });
const TerminaleInstall = dynamic(() => import("@/components/terminale/TerminaleInstall"), { loading: () => null });
const TerminaleCTA = dynamic(() => import("@/components/terminale/TerminaleCTA"), { loading: () => null });

export default function TerminalePage() {
  return (
    <>
      <NoiseOverlay />
      <MouseSpotlight />
      <Navbar />

      <main className="text-foreground selection:bg-primary/30 relative">
        <TerminaleHero />
        <TerminaleFeatures />
        <TerminaleGallery />
        <TerminaleStats />
        <TerminaleInstall />
        <TerminaleCTA />
        <Footer />
      </main>
    </>
  );
}
