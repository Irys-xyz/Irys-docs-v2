import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const componentBentoData: {
	title: string;
	description: string;
	details: string[];
	image?: string;
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
		image: "/diagrams/ledgers.png",
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
						{component.image && (
							<img
								src={component.image}
								alt={component.title}
								className="w-full h-full object-cover rounded-t-lg mb-4"
							/>
						)}
						<h3 className="text-lg flex flex-row font-bold tracking-tight text-white">
							{component.title}

							{component.href && (
								<Link className="underline ml-5 mt-1" href={component.href}>
									<FaLocationArrow className="transform transition-transform duration-300 ease-out hover:scale-105 hover:text-[#FF8451]" />
								</Link>
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
