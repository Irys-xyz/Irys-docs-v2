import React from "react";

type Props = {};

const NotFound = (props: Props) => {
	const first_section_items = [
		{
			title: "Overview",
			css: "row-span-6",
			items: [
				{
					title: "About Irys",
					href: "https://docs.irys.xyz/overview/about",
				},
				{ title: "Tools", href: "https://docs.irys.xyz/overview/tools" },
				{ title: "Networks", href: "https://docs.irys.xyz/overview/networks" },
				{ title: "Gateways", href: "https://docs.irys.xyz/overview/gateways" },
				{
					title: "Permanent data",
					href: "https://docs.irys.xyz/overview/permanent-data",
				},
				{ title: "Ordering", href: "https://docs.irys.xyz/overview/ordering" },
				{
					title: "Querying & tagging",
					href: "https://docs.irys.xyz/overview/querying-tagging",
				},
				{
					title: "Cost to upload",
					href: "https://docs.irys.xyz/overview/cost-to-upload",
				},
				{
					title: "Supported tokens",
					href: "https://docs.irys.xyz/overview/supported-tokens",
				},
			],
		},
		{
			title: "Developer Docs",
			css: "row-span-6",
			items: [
				{
					title: "Irys SDK",
					href: "https://docs.irys.xyz/developer-docs/irys-sdk",
				},
				{
					title: "Querying",
					href: "https://docs.irys.xyz/developer-docs/querying",
				},
				{ title: "CLI", href: "https://docs.irys.xyz/developer-docs/cli" },
				{
					title: "Provenance Toolkit",
					href: "https://docs.irys.xyz/developer-docs/provenance-toolkit",
				},
				{
					title: "Using Devnet",
					href: "https://docs.irys.xyz/developer-docs/using-devnet",
				},
				{
					title: "Path manifests",
					href: "https://docs.irys.xyz/developer-docs/path-manifests",
				},
				{ title: "Tags", href: "https://docs.irys.xyz/developer-docs/tags" },
				{
					title: "Mutable references",
					href: "https://docs.irys.xyz/developer-docs/mutable-references",
				},
				{
					title: "Network merge guide",
					href: "https://docs.irys.xyz/developer-docs/network-merge-guide",
				},
				{
					title: "Downloading",
					href: "https://docs.irys.xyz/developer-docs/downloading",
				},
			],
		},
		{
			title: "Hands-on",
			css: "row-span-12",
			items: [
				{
					title: "Tutorials",
					href: "https://docs.irys.xyz/hands-on/tutorials",
				},
				{
					title: "Repositories",
					href: "https://docs.irys.xyz/hands-on/repositories",
				},
			],
		},
		{
			title: "Irys 101",
			css: "row-span-6",
			items: [
				{
					title: "Strong provenance",
					href: "https://docs.irys.xyz/learn/strong-provenance",
				},
				{ title: "Bundles", href: "https://docs.irys.xyz/learn/bundles" },
				{ title: "Bundling", href: "https://docs.irys.xyz/learn/bundling" },
				{ title: "Receipts", href: "https://docs.irys.xyz/learn/receipts" },
				{
					title: "Optimistic cache",
					href: "https://docs.irys.xyz/learn/optimistic-cache",
				},
				{
					title: "Funding & withdrawing",
					href: "https://docs.irys.xyz/learn/funding-withdrawing",
				},
				{
					title: "Transaction lifecycle",
					href: "https://docs.irys.xyz/learn/transaction-lifecycle",
				},
				{
					title: "Irys & Arweave",
					href: "https://docs.irys.xyz/learn/irys-arweave",
				},
				{
					title: "Volumetric scaling",
					href: "https://docs.irys.xyz/learn/volumetric-scaling",
				},
				{ title: "UDL and builders", href: "https://docs.irys.xyz/learn/udl" },
			],
		},
	];

	const second_section_items = [
		{
			title: "Overview",
			css: "row-span-6",
			items: [
				{ title: "Architecture", href: "/overview/irys-architecture" },
				{ title: "Programmable data", href: "/overview/programmable-data" },
				{ title: "Pricing Model", href: "/overview/pricing-model" },
				{
					title: "Storage Pricing Model",
					href: "/overview/storage-pricing-model",
				},
				{ title: "Storage Incentives", href: "/overview/storage-incentives" },
				{ title: "Treasury", href: "/overview/treasury" },
				{ title: "Mining", href: "/overview/mining" },
			],
		},
		{
			title: "Protocol",
			css: "row-span-6",
			items: [
				{ title: "Provable storage", href: "/protocol/provable-storage" },
				{ title: "Partitions", href: "/protocol/partitions" },
				{ title: "Transactions", href: "/protocol/transactions" },
				{ title: "Packing", href: "/protocol/2d-packing" },
				{ title: "Ledgers", href: "/protocol/ledgers" },
			],
		},
	];

	return (
		<>
			<div className="py-20 lg:py-36">
				<div className="flex items-center justify-center text-center px-7">
					<h1 className="text-4xl lg:text-6xl text-white tracking-tight font-bold col-span-12">
						We recently re-organized things. <br />
						But don&apos;t worry, we got you.
					</h1>
				</div>
				<div className="relative flex md:flex-row flex-col gap-10 mx-auto container md:items-start items-center justify-center py-20 lg:py-36">
					<div className="hidden xl:block top-0 md:sticky ">
						<img src="https://i.imgur.com/j1pLgwx.png" alt="" className="" />
					</div>
					<div className="grid grid-cols-12 m-6 md:m-0 w-full px-7 md:px-0 md:w-auto">
						<h2 className="rounded-tl-lg rounded-tr-lg text-white col-span-12 py-3 px-4 font-bold text-lg tracking-tight bg-[#FF8451]">
							Irys protocol
						</h2>
						<div className="grid grid-cols-12 col-span-12 grid-rows-6 border border-white/10 rounded-md">
							{second_section_items.map((option, i) => (
								<div
									key={option.title}
									className={`w-full col-span-12 md:col-span-4 lg:col-span-3 text-base flex flex-col ${
										option.css
									} ${i === 1 ? "border-x border-white/10" : ""}
                  `}
								>
									<div className="font-bold text-white flex gap-2 items-center px-5 py-[13.4px] bg-[#0B0B0B] border-t border-white/10">
										<div className="w-[2px] h-full bg-[#FF8451]"></div>
										{option.title}
									</div>
									<div className="w-full h-[1px] bg-[#141414]"></div>
									<div className="flex flex-col divide-y divide-white/10 last:border-b border-white/10">
										{option.items.map((item) => (
											<a
												key={item.title}
												href={item.href}
												className="text-[#B7B7B7] hover:bg-[#171717] hover:text-white px-3 py-[14px] transition-all "
											>
												{item.title}
											</a>
										))}
									</div>
								</div>
							))}
						</div>

						<h2 className="rounded-tl-lg rounded-tr-lg text-white col-span-12 py-3 px-4 font-bold text-lg tracking-tight bg-[#FF8451] mt-10">
							Irys Developer Tools For Arweave Docs
						</h2>
						<div className="grid grid-cols-12 col-span-12 border border-white/10 rounded-md">
							{first_section_items.map((option, i) => (
								<div
									key={option.title}
									className={`w-full col-span-12 md:col-span-4 lg:col-span-3 text-base flex flex-col ${
										option.css
									} ${i === 2 ? "border-x border-white/10" : ""}
      ${i === 1 ? "border-l border-white/10" : ""}
      ${i === 5 ? "border-x border-white/10" : ""}
            
                  `}
								>
									<div className="font-bold text-white flex gap-2 items-center px-5 py-[13.4px] bg-[#0B0B0B] border-t border-white/10">
										<div className="w-[2px] h-full bg-[#FF8451]"></div>
										{option.title}
									</div>
									<div className="w-full h-[1px] bg-[#141414]"></div>
									<div className="flex flex-col divide-y divide-white/10 last:border-b border-white/10">
										{option.items.map((item) => (
											<a
												key={item.title}
												href={item.href}
												className="text-[#B7B7B7] hover:bg-[#171717] hover:text-white px-3 py-[14px] transition-all "
											>
												{item.title}
											</a>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
