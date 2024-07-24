import React from "react";
import Link from "next/link";

interface Step {
	title: string;
	description: string;
	href: string;
}

const steps: Step[] = [
	{
		title: "Programmable Data",
		description:
			"Programmable Data allows smart contracts to access all onchain data. This allows developers to break free from the limitations of traditional EVM environments, where state storage is expensive and execution models are rigid.",
		href: "./programmable-data/pd-overview",
	},
	{
		title: "Use Cases",
		description:
			"Programmable Data enables a wide range of decentralized applications including onchain incentive protocols, decentralized incentives for DePINs, crowdsourced datasets, data availability sampling rewards, bridging to legacy systems, real-time multiplayer gaming, and more.",
		href: "./programmable-data/use-cases",
	},
	{
		title: "Verifiability",
		description:
			"Verifiability ensures data integrity and security on Irys. Irys uses optimized 2D Packing to make data verification fast and efficient. This approach allows verification using standard devices, ensuring accessibility for all users and enabling secure programmable data functionality.",
		href: "./programmable-data/verifiability",
	},
];

const PDSteps: React.FC = () => {
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

export default PDSteps;
