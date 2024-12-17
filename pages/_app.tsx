import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/dracula.css";
import { ThemeProvider } from "next-themes";
// import "@fontsource/roboto-mono";
// import "@fontsource/roboto-mono/600.css";
// import "@fontsource/roboto-mono/700.css";

import Analytics from "../components/Analytics";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import useGoogleTagManager from "../hooks/useGoogleTagManager";
import AskCookbook from "../components/AskCookbook";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, []);

  useGoogleTagManager();

  
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} key={1} />
        <Analytics key={2} />
      </ThemeProvider>
      <AskCookbook />
    </>
  );
}
