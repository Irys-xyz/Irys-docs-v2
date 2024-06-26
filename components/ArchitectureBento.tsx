import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Bento {
	title: string;
	description: string;
	image?: string;
	href?: string;
}

const bentoData: Bento[] = [
	{
		title: "Efficient Sampling",
		description: "Enables economical storage scaling with a 24-hour sampling window for 16TB HDDs.",
		image: "/diagrams/efficient-sampling.jpg",
		href: "/efficiency",
	},
	{
		title: "Fast 2D Packing",
		description:
			"Combined with staked mining addresses, enables incentive-compatible packing that scales horizontally, reduces packing costs, and increases the network's ability to ingest data.",
		image: "/diagrams/fast-2d-packing.jpg",
		href: "/protocol/packing",
	},
	{
		title: "Capacity Mining",
		description: "Allows pre-packing of empty capacity partitions for efficient data ingress.",
		image: "/diagrams/capacity-mining.jpg",
		href: "/overview/mining",
	},
	{
		title: "Verifiability",
		description:
			"End users can easily verify onchain which mining addresses are storing their data. 2D Unpacking is cross-platform and can be done on consumer hardware, even in a browser.",
		href: "/verifiability",
	},
];

const ArchitectureBento: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
			{bentoData.map((bento) => (
				<div
					key={bento.title}
					className="border border-gray-700 cursor-pointer p-4 h-auto rounded-xl flex flex-col bg-gradient-to-b from-[#171717]/50 to-[#171717]/20 relative"
				>
					{bento.image && (
						<div className="relative w-full h-60">
							{" "}
							{/* Adjust height as necessary */}
							<Image src={bento.image} alt={bento.title} layout="fill" className="rounded-t-lg p-2" />
						</div>
					)}
					<h3 className="text-lg font-bold tracking-tight text-white mt-4">
						{bento.href ? (
							<Link href={bento.href} className="underline">
								{bento.title}
							</Link>
						) : (
							bento.title // Render title without link if `href` is not provided
						)}
					</h3>
					<p className="text-base font-light text-[#B7B7B7]">{bento.description}</p>
				</div>
			))}
		</div>
	);
};

export default ArchitectureBento;
