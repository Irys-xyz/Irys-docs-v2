import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import "./style.css";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="main"></div>

			<main className="flex flex-1 flex-col items-center justify-center p-24">
				<div className="flex flex-col w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
					<Hero />
					<Info />
				</div>
			</main>
			<Footer />
		</div>
	);
}
