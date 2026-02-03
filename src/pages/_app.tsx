import { useEffect, useRef } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "focus-visible";
import type { AppProps } from "next/dist/shared/lib/router/router";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

function usePrevious(value: string) {
  let ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function MyApp({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <ThemeProvider attribute="class">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
