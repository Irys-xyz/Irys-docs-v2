import Image from "next/image";
import Link from "next/link";
import HeaderFog from "@/public/assets/use-cases/header-fog.webp";
import { FaLocationArrow } from "react-icons/fa6";

const bentoData: {
	title: string;
	description: string;
	image?: string;
	href?: string;
	properties: {
		className: string;
	};
}[] = [
	{
		title: "Efficient Sampling",
		description: "Enables economical storage scaling with a 24-hour sampling window for 16TB HDDs.",
		image: "/diagrams/sampling.png",
		properties: {
			className: "col-span-12 md:col-span-8",
		},
	},
	{
		title: "Fast 2D Packing",
		href: "/protocol/packing",
		description:
			"Combined with staked mining addresses, enables incentive-compatible packing that scales horizontally, reduces packing costs, and increases the network's ability to ingest data.",
		properties: {
			className: "col-span-12 md:col-span-4",
		},
	},
	{
		title: "Capacity Mining",
		href: "/overview/mining",
		description: "Allows pre-packing of empty capacity partitions for efficient data ingress.",
		properties: {
			className: "col-span-12 md:col-span-4",
		},
	},
	{
		title: "Verifiability",
		description:
			"End users can easily verify onchain which mining addresses are storing their data. 2D Unpacking is cross-platform and can be done on consumer hardware, even in a browser.",
		href: "/verifiability",
		properties: {
			className: "col-span-12 md:col-span-8",
		},
	},
];

const ArchitectureBento: React.FC = () => {
	return (
		<div className="overflow-clip mt-5">
			<div className="absolute inset-0">
				<Image src={HeaderFog} alt="header fog" layout="fill" />
			</div>
			<section className="container px-5 md:px-0 mx-auto">
				<div className="grid grid-cols-12 gap-x-4 gap-y-4">
					{bentoData.map((bento) => (
						<div
							key={bento.title}
							className={`animated-border cursor-pointer ${bento.properties.className} p-4 h-auto rounded-xl flex items-start justify-end flex-col bg-gradient-to-b from-[#171717]/50 to-[#171717]/20`}
						>
							{bento.image && (
								<img src={bento.image} alt={bento.title} className="w-full h-full object-cover rounded-t-lg mb-4" />
							)}
							<h3 className="text-lg flex flex-row font-bold tracking-tight text-white">
								{bento.title}
								{bento.href && (
									<Link className="underline ml-5 mt-1" href={bento.href}>
										<FaLocationArrow />
									</Link>
								)}
							</h3>
							<p className="text-base font-light text-[#B7B7B7]">{bento.description}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default ArchitectureBento;
