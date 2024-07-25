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
			"Irys seamlessly integrates high-performance storage and verifiable onchain execution in a single protocol.",
		href: "./basics/irys-architecture",
	},
	{
		title: "Pricing",
		description:
			"Irys has an upfront one-time fee model for data storage, using an annualized cost of storage, a 1% annual decay rate, and a 200-year minimum storage duration. This model ensures consistent costs, with price adjustments based on an Exponential Moving Average (EMA) to handle token price fluctuations.",
		href: "./basics/pricing/pricing-model",
	},
	{
		title: "Treasury",
		description:
			"The Irys protocol treasury covers future storage costs through upfront payments and an inflationary token emission schedule. Anti-dilution measures maintain the treasury's value, ensuring long-term data storage sustainability and economic stability for the network.",
		href: "./basics/treasury",
	},
	{
		title: "Mining",
		description:
			"Irys' mining is a combination of useful Proof of Work, staking a mining address, and pledging individual partitions.",
		href: "/basics/mining",
	},
];

const BasicsSteps: React.FC = () => {
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

export default BasicsSteps;
