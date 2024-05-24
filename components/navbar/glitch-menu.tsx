"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

const randomLetters: string[] = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

const GlitchMenu: React.FC = () => {
	const hoverDivRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLUListElement>(null);
	const linkRefs = useRef<(() => void)[]>([]);

	useEffect(() => {
		const hoverDiv = hoverDivRef.current;
		const menu = menuRef.current;
		const links = menuRef.current?.querySelectorAll<HTMLLIElement>("li");

		const handleMouseEnter = () => {
			if (hoverDiv) hoverDiv.classList.add("active");
		};

		const handleMouseLeave = () => {
			if (hoverDiv) hoverDiv.classList.remove("active");
		};

		const animateLink = (link: HTMLLIElement, index: number) => {
			let originalText = link.innerText;
			let randomString = originalText.split("");
			let frame = 0;

			const animate = () => {
				if (frame < 40) {
					if (frame % 3 === 0) {
						randomString = randomString.map(() => randomLetters[Math.floor(Math.random() * randomLetters.length)]);
						link.innerText = randomString.join("");
					}
					frame++;
					requestAnimationFrame(animate);
				} else {
					link.innerText = originalText;
				}
			};

			const handleMouseEnterLink = () => {
				if (hoverDiv) hoverDiv.style.transform = `translateX(${index * 100}%)`;
				link.style.transition = "ease-in-out 0.5s";
				animate();
			};

			const handleMouseLeaveLink = () => {
				frame = 0;
			};

			link.addEventListener("mouseenter", handleMouseEnterLink);
			link.addEventListener("mouseleave", handleMouseLeaveLink);

			return () => {
				link.removeEventListener("mouseenter", handleMouseEnterLink);
				link.removeEventListener("mouseleave", handleMouseLeaveLink);
			};
		};

		if (menu && links) {
			menu.addEventListener("mouseenter", handleMouseEnter);
			menu.addEventListener("mouseleave", handleMouseLeave);

			links.forEach((link, index) => linkRefs.current.push(animateLink(link, index)));
		}

		return () => {
			if (menu) {
				menu.removeEventListener("mouseenter", handleMouseEnter);
				menu.removeEventListener("mouseleave", handleMouseLeave);
			}
			linkRefs.current.forEach((cleanup) => cleanup());
		};
	}, []);

	const VALUES = [
		{ title: "Home", href: "/" },
		{ title: "OVERVIEW", href: "/overview" },
		{ title: "PROTOCOL", href: "/protocol" },
		{ title: "SERVICES", href: "/services" },
	];

	const path = usePathname();

	return (
		<div className="sticky top-0 z-50 bg-black flex items-center justify-center">
			<div ref={hoverDivRef}></div>
			<ul className="flex uppercase items-center justify-center gap-12 menu" ref={menuRef}>
				{VALUES.map((value, index) => (
					<Link href={value.href} key={index} className="w-28 flex items-center justify-center text-white">
						<li>{value.title}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default GlitchMenu;
