import { BiCodeCurly } from "react-icons/bi";
import { BsCode } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { MdTimeline } from "react-icons/md";
import React from "react";
// import SDKIcon from "../asset/img/sdk.png";

/**
 * A square item component.
 * @typedef {Object} SquareItemProps
 * @property {string} title - The title of the item.
 * @property {string} description - The description of the item.
 * @property {string} link - The link to navigate to when the item is clicked.
 */

/**
 * Renders a square item component.
 * @param {SquareItemProps} item - The data for the item.
 * @returns {JSX.Element} The rendered square item component.
 */
const SquareItem = (item) => {
	return (
		<a
			href={item.link}
			className="w-full flex flex-col items-center justify-center gap-4 rounded-3xl py-11 text-2xl font-light text-white communityShadow hover:no-underline hover:text-white"
		>
			<div className="font-bold text-center">{item.title}</div>
			<p className="text-base text-center max-w-sm">{item.description}</p>
		</a>
	);
};

const DocsMenu = () => {
	const LEARN_ITEMS = [
		{
			icon: <BiCodeCurly size={35} />,
			title: "What Is Irys",
			description: "Learn the problems we solve, where we came from, and where we're going.",
			link: "/overview/about",
		},
		{
			icon: <GrCycle size={35} />,
			title: "Transaction Lifecycle",
			description: "Take a deep-dive into an Irys transaction.",
			link: "/learn/transaction-lifecycle",
		},
		{
			icon: <MdTimeline size={35} />,
			title: "Strong Provenance",
			description: "Data with strong provenance is permanent, unconstrained, and precise",
			link: "/learn/strong-provenance",
		},
		{
			icon: <FaQuestion size={35} />,
			title: "FAQs",
			description: "Get all your questions answered with our FAQs.",
			link: "/faqs/general-faq",
		},
	];

	const START_CODING_ITEMS = [
		{
			icon: <BsCode size={35} />,
			title: "SDK",
			description: "Start storing data permanently on Arweave with our SDK for JavaScript and TypeScript.",
			link: "/developer-docs/irys-sdk",
		},
		{
			icon: <BsCode size={35} />,
			title: "WebIrys",
			description: "Build web-based dApps that store data on Arweave using our WebIrys object.",
			link: "/developer-docs/irys-sdk/irys-in-the-browser",
		},
		{
			icon: <HiOutlineCommandLine size={35} />,
			title: "CLI",
			description: "Start uploading data permanently directly from your CLI.",
			link: "/developer-docs/cli/installation",
		},
	];

	const DIVE_DEEP_ITEMS = [
		{
			title: "Recipes",
			description: "Learn how to quickly integrate Irys with your favorite tools and platforms.",
			link: "/hands-on/tutorials",
		},
		{
			title: "Tutorials",
			description: "Build fun projects as you learn how to use Irys on the server and in the browser.",
			link: "/hands-on/tutorials",
		},
	];

	const SECTIONS = [
		{
			title: "LEARN",
			items: LEARN_ITEMS,
		},
		{
			title: "START CODING",
			items: START_CODING_ITEMS,
		},
		{
			title: "DIVE DEEP",
			items: DIVE_DEEP_ITEMS,
		},
	];

	return (
		<div className="mb-20">
			{SECTIONS.map((section, index) => {
				return (
					<div className="flex flex-col gap-4" key={"section-" + index + "-" + section.title}>
						<div className="pt-10 text-white lg:pt-[117px]">
							<div className="flex items-center gap-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="34"
									height="28"
									fill="none"
									viewBox="0 0 34 28"
								>
									<path
										fill="currentColor"
										stroke="currentColor"
										stroke-width="0.264"
										d="M.95 15.04l-.082.035V18.113l.185-.081 16.594-7.293.08-.035V8.774l-.074-.036L1.06.458.868.363V3.408l.075.036 13.015 6.18L.949 15.04zM33 27.557h.132v-2.52H17.084v2.52H33z"
									></path>
								</svg>
								<h4 className="text-2xl lg:text-4xl pt-4">{section.title}</h4>
							</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-4 gap-y-4">
							{section.items.map((item) => (
								<SquareItem
									{...item}
									key={"section-" + index + "-" + section.title + "-" + item.title}
								/>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DocsMenu;
