import React from "react";
import Link from "next/link";

interface Step {
	title: string;
	description: string;
	href: string;
}

const steps: Step[] = [
	{
		title: "Architecture",
		description:
			"Irys combines Proof of Work with staking and slashing mechanisms to achieve high performance and robust verification.",
		href: "./overview/irys-architecture",
	},
	{
		title: "Programmable Data",
		description:
			"Programmable Data allows smart contracts to access all onchain data. This enables a wide range of decentralized applications including onchain incentive protocols, decentralized incentives for Physical Infrastructure (DePINs), crowdsourced datasets, growth/engagement campaigns, data availability sampling rewards, bridging to legacy systems, real-time multiplayer gaming, and more.",
		href: "./overview/programmable-data",
	},
	{
		title: "Verifiability",
		description:
			"Verifiability ensures data integrity and security on Irys. Irys uses optimized 2D Packing to make data verification fast and efficient. This approach allows verification using standard devices, ensuring accessibility for all users and enabling secure programmable data functionality.",
		href: "./overview/verifiability",
	},
	{
		title: "Pricing",
		description:
			"Irys has an upfront one-time fee model for data storage, using an annualized cost of storage, a 1% annual decay rate, and a 200-year minimum storage duration. This model ensures consistent costs, with price adjustments based on an Exponential Moving Average (EMA) to handle token price fluctuations.",
		href: "./overview/pricing/pricing-model",
	},
	{
		title: "Treasury",
		description:
			"The Irys protocol treasury covers future storage costs through upfront payments and an inflationary token emission schedule. Anti-dilution measures maintain the treasury's value, ensuring long-term data storage sustainability and economic stability for the network.",
		href: "./overview/treasury",
	},
	{
		title: "Mining",
		description:
			"Irys' mining is a combination of useful Proof of Work, where every computed hash is actually proving storage of a random part of Irys’ overall storage, staking a mining address, and pledging individual partitions.",
		href: "/overview/mining",
	},
];

const OverviewSteps: React.FC = () => {
	return (
		<div className="flex flex-col items-center my-8 md:pt-5">
			{steps.map((step, index) => (
				<div key={index} className="flex items-start mb-8 relative">
					<div className="flex flex-col items-center mr-4">
						<div className="w-10 h-10 flex items-center justify-center bg-[#ff8451] font-bold rounded-full">
							{index + 1}
						</div>
						{index < steps.length - 1 && (
							<div className="h-full w-px bg-[#ff8451] border-[#ff8451] border-2 absolute top-10"></div>
						)}
					</div>
					<div className="flex flex-col">
						<Link className="text-xl font-bold mb-2 block underline" href={step.href}>
							{step.title}
						</Link>
						<p className="">{step.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default OverviewSteps;
