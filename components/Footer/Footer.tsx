import { DiscordIcon, GitIcon, MediumIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from "../svg";

import FooterDesktop from "../NewFooter/FooterDesktop";
import FooterMobile from "../NewFooter/FooterMobile";

const Footer = ({ noPadding }: { noPadding?: boolean }) => {
	const DEFINITIONS = [
		{
			title: "DEVELOPER 101",
			options: [
				{
					name: "About Irys",
					href: "/overview/about",
					newTab: false,
				},
				{
					name: "Permanent Data",
					href: "/overview/permanent-data",
					newTab: false,
				},
				{
					name: "Ordering",
					href: "/overview/ordering",
					newTab: false,
				},
				{
					name: "Tools",
					href: "/overview/tools",
					newTab: false,
				},
				{
					name: "Developer FAQs",
					href: "/faqs/dev-faq",
					newTab: false,
				},
			],
		},
		{
			title: "DEVELOPER DOCS",
			options: [
				{
					name: "SDK",
					href: "/developer-docs/irys-sdk",
					newTab: false,
				},
				{
					name: "Query package",
					href: "/developer-docs/querying/query-package",
					newTab: false,
				},
				{
					name: "Provenance Toolkit",
					href: "/developer-docs/provenance-toolkit",
					newTab: false,
				},
				{
					name: "CLI",
					href: "/developer-docs/cli",
					newTab: false,
				},
				{
					name: "Tutorials",
					href: "/hands-on/tutorials",
				},
			],
		},
		{
			title: "ABOUT IRYS",
			options: [
				{
					name: "What is Irys?",
					href: "https://irys.xyz/what-is-irys",
				},
				{
					name: "Blog",
					href: "https://irys.xyz/blog",
				},
				{
					name: "Careers",
					href: "https://irys-xyz.notion.site/Careers-4c9e42d84d7d4740a293c07c1f057ca4?pvs=4",
				},
				{
					name: "Media Kit",
					href: "https://irys.xyz/media-kit",
				},
			],
			footer: (
				<div className="mt-auto flex items-center gap-[21px] pb-[40px]">
					<a
						href="https://youtube.irys.xyz/"
						target="_blank"
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105"
						aria-label="Telegram"
					>
						<YoutubeIcon />
					</a>
					{/* <a
						href="https://medium.com/bundlr-network"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<MediumIcon />
					</a> */}
					{/* <a
						href="https://mirror.xyz/0x9AbB09BF9F58E72A532E859d798eB4E8e10A35e1"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<MirrorIcon className="w-6 h-6 text-black" />
					</a> */}
					<a
						href="https://twitter.irys.xyz"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<TwitterIcon />
					</a>
					<a
						href="https://discord.irys.xyz"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<DiscordIcon />
					</a>
					<a
						href="https://github.com/Irys-xyz/"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<GitIcon />
					</a>
					<a
						href="https://telegram.irys.xyz/"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<TelegramIcon />
					</a>
				</div>
			),
		},
	];

	return (
		<>
			<FooterMobile data={DEFINITIONS} />
			<FooterDesktop data={DEFINITIONS} noPadding={noPadding} />
		</>
	);
};

export default Footer;
