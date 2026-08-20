import GoogleAnalytics from "@/components/GoogleAnalytics";
import IubendaScript from "@/components/IubendaScript";
import PersonSchema from "@/components/PersonSchema";
import ResourceHints from "@/components/ResourceHints";
import RobotChat from "@/components/RobotChat";
import SmoothScroll from "@/components/SmoothScroll";
import { BackgroundProvider } from "@/context/BackgroundContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zaryabhayatkhan.dev"),
  verification: {
    google: "QzCT0BAc-ESchQPam1TN49TgoRe-_V8zOLsitc9aLBQ",
  },
  title: {
    default: "Zaryab Hayat Khan | Software Engineer",
    template: "%s | Zaryab Hayat Khan",
  },
  description:
    "Software engineer specializing in modern web applications, e-commerce platforms, and full stack development.",
  alternates: {
    canonical: "https://zaryabhayatkhan.dev",
  },
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Shopify",
    "WordPress",
    "E-commerce",
  ],
  authors: [{ name: "Zaryab Hayat Khan", url: "https://zaryabhayatkhan.dev" }],
  creator: "Zaryab Hayat Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zaryabhayatkhan.dev",
    title: "Zaryab Hayat Khan | Software Engineer",
    description:
      "Showcasing modern web applications, e-commerce development, and software engineering projects.",
    siteName: "Zaryab Hayat Khan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zaryab Hayat Khan - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaryab Hayat Khan | Software Engineer",
    description:
      "Showcasing modern web experiences, e-commerce development, and software engineering work.",
    creator: "Zaryab Hayat Khan",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ResourceHints />
        <PersonSchema />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden w-full`}
      >
        <BackgroundProvider>
          <IubendaScript />
          <GoogleAnalytics />
          <SmoothScroll>{children}</SmoothScroll>
          <RobotChat />
          <Analytics />
          <SpeedInsights />
        </BackgroundProvider>
      </body>
    </html>
  );
}
