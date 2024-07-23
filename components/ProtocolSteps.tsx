import React from "react";
import Link from "next/link";

interface Step {
	title: string;
	description: string;
	href: string;
}

const steps: Step[] = [
	{
		title: "Provable Storage",
		description:
			"Scaling onchain data storage requires separating transaction data from block headers while maintaining strong incentives for data storage. As users might post transaction headers without uploading the associated data, compromising the network's integrity and reliability, Irys introduces provable storage to ensure all data is verifiably onchain.",
		href: "./protocol/provable-storage",
	},
	{
		title: "Ledgers",
		description:
			"Irys manages multiple ledgers on a single blockchain, with separate blocklanes for execution and storage transactions. This system ensures reliable data retrieval and verifiable onchain data for smart contract execution.",
		href: "./protocol/ledgers",
	},
	{
		title: "Partitions",
		description:
			"Data on Irys is stored by miners in verifiably unique partitions. To ensure a constant supply of available storage for users, Irys employs a strategic partition lifecycle. Miners pledge and prepare Capacity Partitions, which are ready to be filled with data as needed. This ensures storage capacity is always available, and incentivizes miners by rewarding the packing and mining of these partitions.",
		href: "./protocol/partitions",
	},
	{
		title: "Transactions",
		description:
			"Irys supports three transaction types: value transfers, data transactions, and execution transactions. This structure allows for token transfers, onchain data storage, and secure smart contract interactions.",
		href: "./protocol/transactions",
	},
	{
		title: "Packing",
		description:
			"Irys uses 2D Packing to enhance storage verification, ensuring security and efficiency. Packing involves adding a unique cryptographic fingerprint to stored data, proving that miners provide unique resources to the network. This is essential to prevent adversarial participants from claiming to store multiple copies of data or offering large storage capacities while only providing a fraction of the claimed resources.",
		href: "./protocol/2d-packing",
	},
];

const ProtocolSteps: React.FC = () => {
	return (
		<div className="flex flex-col items-center my-8 md:pt-5">
			{steps.map((step, index) => (
				<div key={index} className="flex items-start mb-8 relative">
					<div className="flex flex-col items-center mr-4">
						<div className="w-10 h-10 flex items-center justify-center bg-[#ff8451] font-bold rounded-full">
							{index + 1}
						</div>
						{index < steps.length - 1 && (
							<div className="h-full w-px bg-[#ff8451] border-2 border-[#ff8451] absolute top-10"></div>
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

export default ProtocolSteps;
