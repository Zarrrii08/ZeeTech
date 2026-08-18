"use client";

import { BackgroundProvider } from "@/context/BackgroundContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { ReactNode } from "react";

const chakraTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "var(--background)",
        color: "var(--foreground)",
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={chakraTheme} resetCSS={false}>
      <BackgroundProvider>{children}</BackgroundProvider>
    </ChakraProvider>
  );
}
