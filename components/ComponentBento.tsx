import React from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleRiveViewer from "./SimpleRiveViewer";

interface ComponentBento {
	title: string;
	description: string;
	details: string[];
	image?: string;
	href?: string;
}

const componentBentoData: ComponentBento[] = [
	{
		title: "Proof of Work + Staking",
		description:
			"Combines efficient sampling of PoW with economic deterrents inherent in staking and slashing, to ensure secure and scalable data storage and execution.",
		details: [],
	},
	{
		title: "Submit + Publish Ledgers",
		description: "Allows the protocol to:",
		image: "/diagrams/submit-publish-ledgers.jpg",
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
		image: "/diagrams/components/irys_docs_protocol_treasury.riv",
		details: [],
	},
	{
		title: "Protocol Treasury",
		description: "More than just an endowment, Irys's treasury:",
		details: ["Covers storage liabilities", "Participates in yield-bearing activities"],
		href: "/overview/treasury",
	},
];

const isImageFile = (fileName: string) => {
	const imageExtensions = ["jpg", "jpeg", "png", "gif"];
	const fileExtension = fileName.split(".").pop();
	return imageExtensions.includes(fileExtension!);
};

const ComponentBento: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
			{componentBentoData.map((component) => (
				<div
					key={component.title}
					className="border border-gray-700 cursor-pointer p-3 h-auto rounded-xl flex flex-col bg-gradient-to-b from-[#171717]/50 to-[#171717]/20"
				>
					{component.image && (
						<div className="relative w-full h-60">
							{isImageFile(component.image) ? (
								<Image src={component.image} alt={component.title} layout="fill" className="rounded-xl" />
							) : (
								<SimpleRiveViewer src={component.image} width={1920} height={1080} />
							)}
						</div>
					)}
					<h3 className="text-lg font-bold tracking-tight text-white mt-4">
						<Link className="underline" href={component.href || "#"}>
							{component.title}
						</Link>
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
	);
};

export default ComponentBento;
