"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {};

const Socials = (props: Props) => {
	const [currentHover, setCurrentHover] = useState("");
	const [currentProject, setCurrentProject] = useState(undefined);

	useEffect(() => {
		setCurrentProject(
			// @ts-ignore
			socials.find((social) => social.title.toLowerCase() === currentHover.toLowerCase()),
		);

		return () => {
			// @ts-ignore
			setCurrentProject(null);
		};
	}, [currentHover]);

	const socials = [
		{
			title: "X (Twitter)",
			href: "https://x.com/irys_xyz",
			color: "hover:bg-white",
			css: "invert",
			icon: "/assets/home/socials/x.svg",
			hover: "Follow us on",
		},
		{
			title: "Youtube",
			href: "https://www.youtube.com/@irys_xyz",
			color: "hover:bg-[#FF0000]",
			icon: "/assets/home/socials/yt.svg",
			hover: "Subscribe on",
		},
		{
			title: "Telegram",
			href: "https://t.me/+XBHwxDZzApRhOGM9",
			color: "hover:bg-[#29A8EB]",
			icon: "/assets/home/socials/tg.svg",
			hover: "Join the community on",
		},
		{
			title: "Github",
			href: "https://github.com/Irys-xyz",
			color: "hover:bg-[#FF4500]",
			icon: "/assets/home/socials/git.svg",
			hover: "Check out the",
		},
		{
			title: "Discord",
			href: "https://discord.irys.xyz/",
			color: "hover:bg-[#5869E9]",
			icon: "/assets/home/socials/dscd.svg",
			hover: "Join the community on",
		},
	];

	return (
		<div className="min-h-[145px]">
			{/* <div className="bg-[#FF0000] bg-[#29A8EB] bg-[#FF4500] bg-[#5869E9]" /> */}
			<div className="bg-gradient-to-r from-transparent via-[#222222] to-transparent h-[1px] w-full"></div>
			<ul className="flex items-center justify-center gap-2 py-2">
				{socials.map((social, index) => (
					<motion.a
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
						href={social.href}
						target="_blank"
						key={index}
						onMouseEnter={() => setCurrentHover(social.title)}
						onMouseLeave={() => setCurrentHover("")}
					>
						<li
							className={`group w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#111111] rounded-xl hover:rounded-full transition-all ease-in ${
								social.title === "X (Twitter)" ? "hover:bg-white" : `${social.color}`
							}`}
						>
							<img src={social.icon} alt="" className={`group-hover:hidden`} />
							<img
								src="/assets/home/socials/arrow.svg"
								alt=""
								className={`hidden group-hover:block ${social.css}`}
							/>
						</li>
					</motion.a>
				))}
			</ul>
			<div className="bg-gradient-to-r from-transparent via-[#222222] to-transparent h-[1px] w-full"></div>
			{currentProject && (
				<motion.div
					className="flex w-full items-center text-[#7A7A7A] justify-center py-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					{/* @ts-ignore */}
					{currentProject?.hover} {/* @ts-ignore */}
					<img src={currentProject.icon} alt="" className="group-hover:hidden px-2" />
					{/* @ts-ignore */}
					{currentProject.title}
				</motion.div>
			)}
		</div>
	);
};

export default Socials;
