import React from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleRiveViewer from "./SimpleRiveViewer";

interface ComponentBento {
	title: string;
	description: string;
	details: string[];
	image?: string;
	stateMachine?: string;
	href?: string;
}

const componentBentoData: ComponentBento[] = [
	{
		title: "Proof of Work + Staking",
		description:
			"Combines efficient sampling of PoW with economic deterrents inherent in staking and slashing, to ensure secure and scalable data storage and execution.",
		details: [],
		image: "/protocol-animations/pows.riv",
		stateMachine: "Proof-Of-Work",
		href: "/learn/protocol/pows",
	},
	{
		title: "Multiple Ledgers",
		description: "Allows the protocol to:",
		image: "/protocol-animations/multiple-ledgers.riv",
		stateMachine: "MultipleLedgers",
		details: [
			"Make commitments about published data",
			"Provide reliable access for the execution layer by managing data upload and storage proofs",
		],
		href: "/learn/protocol/ledgers",
	},
	{
		title: "IrysVM",
		description:
			"Irys’ VM enables Programmable Data where smart contracts can access the entirety of onchain data.",
		image: "/protocol-animations/irysvm.riv",
		stateMachine: "IrysVM",
		details: [],
		href: "/learn/why-build-on-irys/irysvm",
	},
	{
		title: "Protocol Treasury",
		description: "More than just an endowment, Irys's treasury:",
		details: ["Covers storage liabilities", "Participates in yield-bearing activities"],
		image: "/protocol-animations/treasury.riv",
		stateMachine: "Protocol-Treasury",
		href: "/learn/economics",
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
			{componentBentoData.map((bento) => (
				<div
					key={bento.title}
					className="border border-gray-700 cursor-pointer p-3 h-auto rounded-xl flex flex-col "
				>
					{bento.image && (
						<div className="relative w-full">
							{isImageFile(bento.image) ? (
								<Image src={bento.image} alt={bento.title} layout="fill" className="rounded-xl" />
							) : (
								<SimpleRiveViewer
									src={bento.image}
									width={1920}
									height={1080}
									stateMachine={bento.stateMachine}
								/>
							)}
						</div>
					)}
					{bento.href ? (
						<Link href={bento.href} className="underline text-lg font-bold tracking-tight  mt-4 z-20">
							{bento.title}
						</Link>
					) : (
						<span className="text-lg font-bold tracking-tight  mt-4">{bento.title}</span>
					)}
					<p className="text-base font-light">{bento.description}</p>
					{bento.details.length > 0 && (
						<ul className="list-disc text-base font-light mt-1 ml-5">
							{bento.details.map((detail, index) => (
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
