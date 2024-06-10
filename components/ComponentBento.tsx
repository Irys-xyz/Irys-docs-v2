import React from "react";
import Link from "next/link";

const componentBentoData: {
	title: string;
	description: string;
	details: string[];
	href?: string;
}[] = [
	{
		title: "Proof of Work + Staking",
		description:
			"Combines efficient sampling of PoW with economic deterrents inherent in staking and slashing, to ensure secure and scalable data storage and execution.",
		details: [],
	},
	{
		title: "Submit + Publish Ledgers",
		description: "Allows the protocol to:",
		details: [
			"Make commitments about published data",
			"Provide reliable access for the execution layer by managing data upload and storage proofs",
		],
		href: "/protocol/ledgers",
	},
	{
		title: "IrysVM",
		description:
			"The virtual machine enabling Programmable Data — the execution of onchain programs with full access to the data layer.",
		details: [],
	},
	{
		title: "Protocol Treasury",
		description: "More than just an endowment, Irys's treasury:",
		details: ["Covers storage liabilities", "Participates in yield-bearing activities"],
		href: "/overview/treasury",
	},
];

const ComponentBento: React.FC = () => {
	return (
		<section className="container px-5 md:px-0 mx-auto mt-5">
			<div className="grid grid-cols-12 gap-x-4 gap-y-4">
				{componentBentoData.map((component) => (
					<div
						key={component.title}
						className="col-span-12 md:col-span-6 animated-border cursor-pointer p-5 h-auto rounded-xl flex items-start justify-end flex-col bg-gradient-to-b from-[#171717]/50 to-[#171717]/20"
					>
						<h3 className="text-lg font-bold tracking-tight text-white">
							{component.href ? (
								<Link className="underline" href={component.href}>
									{component.title}
								</Link>
							) : (
								component.title
							)}
						</h3>
						<p className="text-base font-light text-[#B7B7B7]">{component.description}</p>
						{component.details.length > 0 && (
							<ul className="list-disc list-inside text-base font-light text-[#B7B7B7] mt-2">
								{component.details.map((detail, index) => (
									<li key={index}>{detail}</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default ComponentBento;
