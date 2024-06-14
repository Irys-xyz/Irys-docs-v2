import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-tooltip/dist/react-tooltip.css";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
