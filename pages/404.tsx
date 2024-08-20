import React from "react";

type Item = {
  title: string;
  href?: string;
};

type Section = {
  title: string;
  css: string;
  items: Item[];
  subItems?: Item[];
};

type Props = {};

const arweaveToolsBaseUrl = "https://arweave-tools.irys.xyz";

const NotFound = (props: Props) => {
  const devToolsForArweave: Section[] = [
    {
      title: "Overview",
      css: "row-span-6",
      items: [
        {
          title: "Tools For Arweave",
          href: `${arweaveToolsBaseUrl}/overview/about`,
        },
        { title: "Networks", href: `${arweaveToolsBaseUrl}/overview/networks` },
        {
          title: "Downloading Data",
          href: `${arweaveToolsBaseUrl}/overview/downloading`,
        },
        {
          title: "Cost To Upload",
          href: `${arweaveToolsBaseUrl}/overview/cost-to-upload`,
        },
        {
          title: "Supported Tokens",
          href: `${arweaveToolsBaseUrl}/overview/supported-tokens`,
        },
      ],
      subItems: [
        {
          title: "Basics",
          href: `${arweaveToolsBaseUrl}/tutorials/basics/react`,
        },
        {
          title: "NFTs",
          href: `${arweaveToolsBaseUrl}/tutorials/nfts/dynamic-nft`,
        },
        {
          title: "Encryption",
          href: `${arweaveToolsBaseUrl}/tutorials/encryption/encrypting-onchain-data`,
        },
      ],
    },
    {
      title: "SDK",
      css: "row-span-6",
      items: [
        {
          title: "Installing the SDK",
          href: `${arweaveToolsBaseUrl}/irys-sdk/installing-the-sdk`,
        },
        {
          title: "Troubleshooting",
          href: `${arweaveToolsBaseUrl}/irys-sdk/troubleshooting`,
        },
        {
          title: "Community SDKs",
          href: `${arweaveToolsBaseUrl}/irys-sdk/community-sdk`,
        },
        {
          title: "Irys In The Browser",
          href: `${arweaveToolsBaseUrl}/irys-sdk/irys-in-the-browser`,
        },
        {
          title: "API Docs",
          href: `${arweaveToolsBaseUrl}/irys-sdk/irys-sdk/api/upload`,
        },
        {
          title: "Chunked Uploader",
          href: `${arweaveToolsBaseUrl}/irys-sdk/chunked-uploader`,
        },
        {
          title: "Using IPFS CIDs",
          href: `${arweaveToolsBaseUrl}/irys-sdk/ipfs-cid`,
        },
        {
          title: "Manually Creating A Tx",
          href: `${arweaveToolsBaseUrl}/irys-sdk/manual-transaction`,
        },
        {
          title: "Balance Approvals",
          href: `${arweaveToolsBaseUrl}/irys-sdk/balance-approvals`,
        },
        {
          title: "Mutable References",
          href: `${arweaveToolsBaseUrl}/irys-sdk/mutable-references`,
        },
        {
          title: "Path Manifests",
          href: `${arweaveToolsBaseUrl}/irys-sdk/path-manifests`,
        },
        {
          title: "Tags",
          href: `${arweaveToolsBaseUrl}/irys-sdk/path-manifests`,
        },
        {
          title: "Using Devnet",
          href: `${arweaveToolsBaseUrl}/irys-sdk/using-devnet`,
        },
      ],
    },
    {
      title: "CLI",
      css: "row-span-6",
      items: [
        {
          title: "Installation",
          href: `${arweaveToolsBaseUrl}/cli/installation`,
        },
        { title: "Commands", href: `${arweaveToolsBaseUrl}/cli/commands/fund` },
      ],
    },
    {
      title: "QUERYING",
      css: "row-span-6",
      items: [
        {
          title: "Query Package",
          href: `${arweaveToolsBaseUrl}/cli/commands/fund`,
        },
        {
          title: "API Docs",
          href: `${arweaveToolsBaseUrl}/querying/api/token`,
        },
        { title: "GraphQL", href: `${arweaveToolsBaseUrl}/querying/graphql` },
      ],
    },
  ];

  const irysProtocol: Section[] = [
    {
      title: "LEARN ABOUT IRYS",
      css: "row-span-6",
      items: [
        { title: "What Is Irys?", href: "/learn-about-irys/what-is-irys" },
        {
          title: "What Is a Datachain",
          href: "/learn-about-irys/what-is-datachain",
        },
        { title: "Why Irys Exists", href: "/learn-about-irys/why-irys-exists" },
        {
          title: "How Irys Solves These Problems",
          href: "/learn-about-irys/problems-solved",
        },
      ],
    },
    {
      title: "WHY BUILD ON IRYS",
      css: "row-span-6",
      items: [
        {
          title: "Programmable Data",
          href: "/why-build-on-irys/programmable-data",
        },
        { title: "Verifiability", href: "/why-build-on-irys/verifiability" },
        { title: "IrysVM", href: "/why-build-on-irys/irysvm" },
      ],
    },
    {
      title: "MINING ON IRYS",
      css: "row-span-6",
      items: [
        { title: "Running a Node", href: "/mining-on-irys/running-a-node" },
        { title: "2D Packing", href: "/mining-on-irys/2d-packing" },
        {
          title: "Efficient Sampling",
          href: "/mining-on-irys/efficient-sampling",
        },
      ],
    },
    {
      title: "PROTOCOL",
      css: "row-span-6",
      items: [
        { title: "Protocol Overview", href: "/protocol/protocol-overview" },
        { title: "Partitions", href: "/protocol/partitions" },
        { title: "Ledgers", href: "/protocol/ledgers" },
        { title: "Transactions", href: "/protocol/transactions" },
        { title: "Proof of Work + Staking", href: "/protocol/pows" },
        { title: "Fast Finality", href: "/protocol/fast-finality" },
      ],
    },
  ];

  return (
    <div className="py-10 lg:py-26 bg-black">
      <div className="flex items-center justify-center text-center px-7 py-10">
        <h1 className="text-4xl lg:text-6xl text-white tracking-tight font-bold col-span-12">
          We recently re-organized things. <br />
          But don&apos;t worry, we got you.
        </h1>
      </div>

      <div className="relative flex md:flex-row flex-col gap-10 mx-auto container md:items-start items-center justify-center py-10 lg:py-26">
        <div className="hidden xl:block top-0 md:sticky ">
          <img src="https://i.imgur.com/j1pLgwx.png" alt="" className="" />
        </div>
        <div className="grid grid-cols-12 m-6 md:m-0 w-full px-7 md:px-0 md:w-auto">
          <h2 className="rounded-tl-lg rounded-tr-lg text-white col-span-12 py-3 px-4 font-bold text-lg tracking-tight bg-[#FF8451]">
            IRYS PROTOCOL
          </h2>
          <div className="grid grid-cols-12 col-span-12 border border-white/10 rounded-md">
            {irysProtocol.map((section) => (
              <div
                key={section.title}
                className={`w-full col-span-12 md:col-span-4 lg:col-span-3 text-base flex flex-col ${section.css}`}
              >
                <div className="font-bold text-white flex gap-2 items-center px-5 py-[13.4px] bg-[#0B0B0B] border-t border-white/10">
                  <div className="w-[2px] h-full bg-[#FF8451]"></div>
                  {section.title}
                </div>
                <div className="w-full h-[1px] bg-[#141414]"></div>
                <div className="flex flex-col divide-y divide-white/10 last:border-b border-white/10">
                  {section.items.map((item) => (
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
            DEVELOPER TOOLS FOR ARWEAVE
          </h2>
          <div className="grid grid-cols-12 col-span-12 border border-white/10 rounded-md">
            {devToolsForArweave.map((section) => (
              <div
                key={section.title}
                className={`w-full col-span-12 md:col-span-4 lg:col-span-3 text-base flex flex-col ${section.css}`}
              >
                <div className="font-bold text-white flex gap-2 items-center px-5 py-[13.4px] bg-[#0B0B0B] border-t border-white/10">
                  <div className="w-[2px] h-full bg-[#FF8451]"></div>
                  {section.title}
                </div>
                <div className="w-full h-[1px] bg-[#141414]"></div>
                <div className="flex flex-col divide-y divide-white/10 last:border-b border-white/10">
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="text-[#B7B7B7] hover:bg-[#171717] hover:text-white px-3 py-[14px] transition-all "
                    >
                      {item.title}
                    </a>
                  ))}
                  {section.subItems && (
                    <>
                      <div className="mt-4"></div>
                      <div className="font-bold text-white flex gap-2 items-center px-5 py-[13.4px] bg-[#0B0B0B] border-t border-white/10 md:mt-20">
                        <div className="w-[2px] h-full bg-[#FF8451]"></div>
                        Guides & Tutorials
                      </div>
                      <div className="w-full h-[1px] bg-[#141414]"></div>
                      <div className="flex flex-col divide-y divide-white/10 last:border-b border-white/10">
                        {section.subItems.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="text-[#B7B7B7] hover:bg-[#171717] hover:text-white px-3 py-[14px] transition-all "
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
