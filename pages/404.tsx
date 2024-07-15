import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  const first_section_items = [
    {
      title: "Overview",
      css: "row-span-6",
      items: [
        { title: "Networks", href: "#" },
        { title: "Downloading data", href: "#" },
        { title: "Cost to upload", href: "#" },
        { title: "Supported tokens", href: "#" },
      ],
    },
    {
      title: "SDK",
      css: "row-span-6",
      items: [
        { title: "Installing", href: "#" },
        { title: "Commands", href: "#" },
      ],
    },
    {
      title: "CLI",
      css: "row-span-12",
      items: [
        { title: "Installing", href: "#" },
        { title: "Troubleshooting", href: "#" },
        { title: "Browser-based dev", href: "#" },
        { title: "API docs", href: "#" },
        { title: "Chunked uploader", href: "#" },
        { title: "IPFS CIDs", href: "#" },
        { title: "Balance approvals", href: "#" },
        { title: "Mutable references", href: "#" },
        { title: "Path manifests", href: "#" },
        { title: "Tags", href: "#" },
        { title: "Devnet", href: "#" },
      ],
    },
    {
      title: "Querying",
      css: "row-span-6",
      items: [
        { title: "Query package", href: "#" },
        { title: "API docs", href: "#" },
        { title: "Graph QL", href: "#" },
      ],
    },
    {
      title: "Guides and tutorial",
      css: "row-span-6",
      items: [
        { title: "Basics", href: "#" },
        { title: "NFTs", href: "#" },
        { title: "Lens Dev", href: "#" },
        { title: "Encryption", href: "#" },
      ],
    },
    {
      title: "Repositories",
      css: "row-span-6",
      items: [
        { title: "Gasless uploader", href: "#" },
        { title: "Mobile PWA with Privy", href: "#" },
        { title: "Encryption", href: "#" },
        { title: "Solana NFT marketplace", href: "#" },
      ],
    },
  ];

  const second_section_items = [
    {
      title: "Overview",
      css: "row-span-6",
      items: [
        { title: "Architecture", href: "#" },
        { title: "Programable data", href: "#" },
        { title: "Onchain data", href: "#" },
        { title: "Treasury", href: "#" },
        { title: "Scaling", href: "#" },
        { title: "Mining", href: "#" },
      ],
    },
    {
      title: "Protocol",
      css: "row-span-6",
      items: [
        { title: "Provable storage", href: "#" },
        { title: "Partitions", href: "#" },
        { title: "Transactions", href: "#" },
        { title: "Packing", href: "#" },
        { title: "Publish & submit ledgers", href: "#" },
      ],
    },
    {
      title: "Services",
      css: "row-span-6",
      items: [
        { title: "Bundlers", href: "#" },
        { title: "Gateway", href: "#" },
      ],
    },
  ];

  return (
    <>
      <div className="py-44">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-6xl text-white tracking-tight font-bold col-span-12">
            We recently re-organized things. <br />
            But don&apos;t worry, we got you.
          </h1>
        </div>
        <div className="relative flex md:flex-row flex-col gap-10 mx-auto container md:items-start items-center justify-center py-36">
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

            <h2 className="rounded-tl-lg rounded-tr-lg text-white col-span-12 py-3 px-4 font-bold text-lg tracking-tight bg-[#FF8451] mt-4">
              Irys Developer Tools For Arweave Docs
            </h2>
            <div className="grid grid-cols-12 col-span-12 grid-rows-12 border border-white/10 rounded-md">
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
