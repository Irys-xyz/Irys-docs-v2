import React from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleRiveViewer from "./SimpleRiveViewer";

interface Bento {
	title: string;
	description: string;
	stateMachine?: string;
	image?: string;
	href?: string;
}

const bentoData: Bento[] = [
	{
		title: "Efficient Sampling",
		description: "Enables economical storage scaling with a 24-hour sampling window for 16TB HDDs.",
		image: "/protocol-animations/efficient-sampling.riv",
		stateMachine: "EfficientSampling",
		href: "/learn/mining-on-irys/efficient-sampling",
	},
	{
		title: "Fast Matrix Packing",
		description:
			"Combined with staked mining addresses, enables incentive-compatible packing that scales horizontally, reduces packing costs, and increases the network's ability to ingest data.",
		image: "/protocol-animations/matrix-packing.riv",
		stateMachine: "Matrix-Packing",
		href: "/learn/mining-on-irys/matrix-packing",
	},
	{
		title: "Capacity Mining",
		description: "Allows pre-packing of empty capacity partitions for efficient data ingress.",
		image: "/protocol-animations/capacity-mining.riv",
		stateMachine: "Capacity-Mining",
		href: "/learn/protocol/partitions#capacity-partitions",
	},
	{
		title: "Verifiability",
		description:
			"End users can easily verify onchain which mining addresses are storing their data. Matrix Unpacking is cross-platform and can be done on consumer hardware, even in a browser.",
		image: "/protocol-animations/verifiability.riv",
		stateMachine: "Verifiability",
		href: "/learn/why-build-on-irys/verifiability",
	},
];

const isImageFile = (fileName: string) => {
	const imageExtensions = ["jpg", "jpeg", "png", "gif"];
	const fileExtension = fileName.split(".").pop();
	return imageExtensions.includes(fileExtension!);
};

const ArchitectureBento: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
			{bentoData.map((bento) => (
				<div
					key={bento.title}
					className="border border-gray-700 cursor-pointer p-3 h-auto rounded-xl flex flex-col "
				>
					{bento.image && (
						<div className="relative w-full ">
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
						<Link href={bento.href} className="underline text-lg font-bold tracking-tight z-20 mt-5">
							{bento.title}
						</Link>
					) : (
						<span className="text-lg font-bold tracking-tight mt-4">bento.title</span>
					)}

					<p className="text-base font-light">{bento.description}</p>
				</div>
			))}
		</div>
	);
};

export default ArchitectureBento;
