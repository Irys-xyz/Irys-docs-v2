import Link from "next/link";
import MainCategories from "../../pages/_meta.json";
import React from 'react'

type Props = {}

const Sitemap = (props: Props) => {

    const metaData = {
        "developer-docs": {
            sdk: "SDK",
            cli: "CLI",
            "using-devnet": "Using Devnet",
            tags: "Tags",
            "querying-data": "Querying Data",
            recipes: "Cut & Paste Code Recipes",
        },
        faqs: {
            "general-faq": "General FAQ",
            "dev-faq": "Developer FAQ",
            "testnet-faq": "Testnet FAQ",
        },
        "hands-on": { tutorials: "Tutorials", quests: "Quests" },
        learn: {
            bundler: "Bundlers",
            bundles: "Bundles",
            "bundlr-arweave": "Bundlr And Arweave",
            gateways: "Gateways",
            receipts: "Receipts",
            "transaction-lifecycle": "Transaction Lifecycle",
            scaling: "Scaling",
            "optimistic-caching": "Optimistic Caching",
            "funding-withdrawing": "Funding And Withdrawing",
        },
        overview: {
            "about-bundlr": "About Bundlr",
            network: "Network",
            solutions: "Solutions",
            services: "Services",
            quickstart: "Quickstart",
            fees: "Fees",
            "supported-tokens": "Supported Tokens",
        },
        "use-cases": { nft: "NFT", deso: "DeSo", depin: "DePin" },
    };

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
            {Object.keys(MainCategories).map((category) => {
                // @ts-ignore
                if (typeof MainCategories[category] !== "string") return;
                return (
                    <div>
                        {/* @ts-ignore */}
                        <div className="font-bold">{MainCategories[category]}</div>
                        {/* @ts-ignore */}
                        {metaData[category] && Object.keys(metaData[category]).map((subCategory) => {
                            return (
                                <Link href={`/${category}/${subCategory}`}>
                                    {/* @ts-ignore */}
                                    <p className="underline text-white/90">{metaData[category][subCategory]}</p>
                                </Link>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}

export default Sitemap