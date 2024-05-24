"use client";

import React from "react";
import { useRouter } from "next/navigation";

const WhatWeBuilding: React.FC = () => {
	const router = useRouter();
	const VALUES = [
		{
			title: "Irys L1",
			description: "We’re launching fastest PoW chain in existence enabling both performant onchain storage and DeFi",
			video: "/assets/docs-landing-page/pos.mp4",
			destinationUrl: "/overview",
		},
		{
			title: "IrysVM",
			description: "The Irys VM unlocks programmable data.",
			video: "/assets/docs-landing-page/Miden.mp4",
			destinationUrl: "/overview/programmable-data",
		},
		{
			title: "IrysPOT",
			description:
				"The Irys Protocol Owned Treasure generates extra yield for miners on the network while decreasing circulating supply over time.",
			video: "/assets/docs-landing-page/zkevm720p.mp4",
			destinationUrl: "/overview/treasury",
		},
	];

	const handleButtonClick = (url: string) => {
		console.log({ url });
		router.push(url);
	};

	return (
		<>
			{VALUES.map((value, index) => (
				<section
					id={`section-${index + 2}`}
					key={index}
					className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-8"
				>
					{index % 2 === 0 ? (
						<div className="flex flex-col md:flex-row items-center w-full">
							<div className="w-full md:w-1/2 p-4">
								<h2 className="text-4xl font-bold mb-4">{value.title}</h2>
								<p className="text-xl mb-4">{value.description}</p>
								<button
									className="text-base text-white font-bold py-5 px-14 border-red-200 bg-black border-[.8px] rounded-md"
									onClick={() => handleButtonClick(value.destinationUrl)}
								>
									LEARN MORE
								</button>
							</div>
							<div className="w-full md:w-1/2 p-4">
								<video src={value.video} autoPlay loop muted className="w-full rounded-md" />
							</div>
						</div>
					) : (
						<div className="flex flex-col md:flex-row items-center w-full">
							<div className="w-full md:w-1/2 p-4">
								<video src={value.video} autoPlay loop muted className="w-full rounded-md" />
							</div>
							<div className="w-full md:w-1/2 p-4">
								<h2 className="text-4xl font-bold mb-4">{value.title}</h2>
								<p className="text-xl mb-4">{value.description}</p>
								<button
									className="text-base text-white font-bold py-5 px-14 border-red-200 bg-black border-[.8px] rounded-md"
									onClick={() => handleButtonClick(value.destinationUrl)}
								>
									LEARN MORE
								</button>
							</div>
						</div>
					)}
				</section>
			))}
		</>
	);
};

export default WhatWeBuilding;
