import {
	DiscordIcon,
	FooterLogo,
	GitIcon,
	IrysIcon,
	MinusFooterDetailIcon,
	MirrorIcon,
	PlusFooterDetailIcon,
	TelegramIcon,
	TwitterIcon,
	YoutubeIcon,
} from "../../svg";
import { useEffect, useState } from "react";

import IrysLogoText from "../../svg/IrysLogoText";
import Link from "next/link";

const FooterMobile = ({
	data,
}: {
	data: {
		title: string;
		options: {
			name: string;
			href: string;
			label?: string;
		}[];
	}[];
}) => {
	return (
		<>
			<footer className="border-t border-timberwolf bg-seashell px-[20px] pt-10 pb-10 font-backup font-satochi xl:hidden text-black">
				<IrysLogoText className="w-[150px]" />
				<p className="mt-[20px] mb-[68px] whitespace-normal text-[40px] leading-none font-semibold tracking-tighter">
					PROVENANCE <br />
					IS THE PROOF
				</p>
				{data.map((definition) => (
					<ExpandableSection title={definition.title} options={definition.options} key={definition.title} />
				))}
				<section className="mt-[60px] flex items-center gap-[21px] pb-[10px]">
					<a
						href="https://youtube.irys.xyz"
						target="_blank"
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105"
						aria-label="Telegram"
					>
						<YoutubeIcon />
					</a>
					{/* <a
            href="https://medium.com/bundlr-network"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="transition-all hover:rotate-6 hover:scale-105"
          >
            <MediumIcon />
          </a> */}
					{/* <a
            href="https://mirror.xyz/0x9AbB09BF9F58E72A532E859d798eB4E8e10A35e1"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="transition-all hover:rotate-6 hover:scale-105"
          >
            <MirrorIcon className="h-6 w-6 text-black" />
          </a> */}
					<a
						href="https://twitter.irys.xyz"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105"
					>
						<TwitterIcon />
					</a>
					<a
						href="https://discord.irys.xyz"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105"
					>
						<DiscordIcon />
					</a>
					<a
						href="https://github.com/Irys-xyz/"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105"
					>
						<GitIcon />
					</a>
					<a
						href="https://telegram.irys.xyz"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105"
					>
						<TelegramIcon />
					</a>
				</section>
				<p className="mt-[17px] mb-[36px] flex items-center gap-2">
					<IrysIcon className="w-6 h-6" />
					{new Date().getFullYear()} Irys. All rights reserved.
				</p>
			</footer>
		</>
	);
};

const ExpandableSection = ({
	title,
	options,
}: {
	title: string;
	options: {
		name: string;
		href: string;
		label?: string;
		newTab?: boolean;
	}[];
}) => {
	return (
		<details>
			<summary className="mt-[26px] font-bold flex cursor-pointer items-center justify-between text-[15px]">
				{title}
				<PlusFooterDetailIcon />
				<MinusFooterDetailIcon />
			</summary>
			<ul className="mt-[20px]">
				{options.map((option, index) => (
					<li className="mt-[20px]" key={`option-${option}-${index}`}>
						<Link
							href={option.href}
							className="text-[15px]"
							target={option.newTab ? "_blank" : "_self"}
							rel="noreferrer"
						>
							{option.name}
						</Link>
						{option.label && (
							<span className="ml-[10px] rounded-full bg-black px-[10px] py-[5px] text-xs font-bold text-white">
								{option.label}
							</span>
						)}
					</li>
				))}
			</ul>
		</details>
	);
};

export default FooterMobile;
