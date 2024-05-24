import { Navbar } from "@/components/navbar";

import { Metadata } from "next";
import { ReactLenis } from "@/libs/react-lenis";

import ScrollSpyWrapper from "@/components/scroll-spy/scroll-spy";
import SplineHeader from "@/components/spline-header";
import BuildTheDataverse from "@/components/BuildTheDataverse";
import Link from "next/link";
import WhatWeBuilding from "@/components/WhatWeBuilding";
export const metadata: Metadata = {
	title: "Irys | Home",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function Home() {
	return (
		<>
			<ReactLenis root>
				<div className="relative overflow-clip">
					{/* absolute center top img */}
					<div
						className="
            absolute top-0 left-1/2 transform -translate-x-1/2 -z-10
          "
					>
						<img src="https://i.imgur.com/0cZqggL.png" alt="Cool light" />
					</div>
					<Navbar />
					<ScrollSpyWrapper>
						<section id="section-0" className=" border-yellow-500 relative flex flex-col min-h-[calc(100vh-96px)]">
							<div className="-z-20 border-red-500 -translate-y-[20%] h-screen w-full">
								<SplineHeader />
							</div>
							<div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<BuildTheDataverse />
							</div>
						</section>
						<section
							id="section-1"
							className="flex flex-col items-center justify-center min-h-screen border border-red-200"
						>
							<h2 className="text-4xl font-bold mb-4">The Irys L1 is launching soon.</h2>
							<p className="text-xl mb-4">To find out how you can build on it:</p>
							<p className="text-xl mb-4">Join our developer mailing list.</p>
							<form className="w-full max-w-md flex flex-row items-start">
								<input type="email" placeholder="Enter your email" className="w-full p-4 mb-4 text-black rounded" />
								<button
									type="submit"
									className="text-base text-white font-bold py-4 px-14 border-red-200 bg-black border-[.8px] rounded-md ml-5"
								>
									Subscribe
								</button>
							</form>
							<p className="text-xl mt-8">
								And our builders only{" "}
								<Link href="https://t.me/+XBHwxDZzApRhOGM9" className="text-xl text-blue-400 underline mt-2">
									Telegram group.
								</Link>
							</p>
						</section>

						{/* fixed current section dot */}

						<WhatWeBuilding />
					</ScrollSpyWrapper>
				</div>
			</ReactLenis>
		</>
	);
}
