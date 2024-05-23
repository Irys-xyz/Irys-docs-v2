import { useState } from "react";

interface Section {
	id: number;
	title: string;
	description: string | null;
	snippet: string;
}

interface ExpandableSectionProps {
	subtitle: string;
	items: Section[];
}

type CodeSections = {
	[key: number]: JSX.Element;
};

const CODE_SECTIONS: CodeSections = {
	1: (
		<code
			className="font-backup font-satoshi bg-[#1f282f] bg-primary-700/5 mb-4 px-4 overflow-x-auto rounded-xl font-medium subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-1 lg:py-4"
			style={{ fontSize: ".9em", lineHeight: "1.25rem" }}
		>
			<span className="text-[#eb707d]">const</span> <span className="text-[#79b8ff]">irys</span>{" "}
			<span className="text-[#eb707d]">= new</span> <span className="text-[#b392f0]">Irys</span>({"{ url: "}
			<span className="text-[#44a447]">"https://node1.irys.network"</span>,{" token: "}
			<span className="text-[#44a447]">"matic"</span>,{" key: "}
			<span className="text-[#44a447]">"polygon-private-key"</span>
			{" });"}
		</code>
	),
	2: (
		<code
			className="font-backup font-satoshi bg-[#1f282f] bg-primary-700/5 mb-4 px-4 overflow-x-auto rounded-xl font-medium subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-1 lg:py-4"
			style={{ fontSize: ".9em", lineHeight: "1.25rem" }}
		>
			<span className="text-[#eb707d]">const</span> <span className="text-[#79b8ff]">response</span>{" "}
			<span className="text-[#eb707d]">= await</span> <span className="text-[#79b8ff]">irys</span>.
			<span className="text-[#b392f0]">fund</span>(irys.utils.toAtomic("1"));
		</code>
	),
	3: (
		<div
			className="inline-block font-backup font-satoshi bg-[#1f282f] bg-primary-700/5 mb-4 px-4 overflow-x-auto rounded-xl font-medium subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-1 lg:py-4"
			style={{ fontSize: ".9em", lineHeight: "1.25rem" }}
		>
			<span className="text-[#eb707d]">const</span> <span className="text-[#79b8ff]">dataToUpload</span>{" "}
			<span className="text-[#eb707d]">=</span> <span className="text-[#44a447]">"GM world."</span>;
			<br />
			<span className="text-[#eb707d]">const</span> <span className="text-[#79b8ff]">response</span>{" "}
			<span className="text-[#b392f0">= await</span> <span className="text-[#79b8ff]">irys</span>.
			<span className="text-[#b392f0]">provenance</span>.<span className="text-[#b392f0]">upload</span>
			(dataToUpload);
		</div>
	),
};

const ExpandableSection = ({ subtitle, items }: ExpandableSectionProps) => {
	const [currentlyOpen, setCurrentlyOpen] = useState<number | null>(1);

	const handleSectionClick = (id: number) => {
		setCurrentlyOpen((prev) => (prev === id ? null : id));
	};

	return (
		<section className="flex flex-col gap-10">
			<p className="text-center font-backup font-satoshi text-lg md:text-left">{subtitle}</p>
			<ul className="flex flex-col gap-10 lg:gap-16">
				{items.map(({ id, title }) => (
					<li
						key={id}
						onClick={() => handleSectionClick(id)}
						className="flex cursor-pointer flex-col items-center justify-center gap-2 md:items-start lg:gap-9"
					>
						<h2
							className={`flex items-center gap-3 text-center text-3xl text-white md:text-left lg:text-5xl ${currentlyOpen !== id && "text-onyx hover:text-onyx/90"
								}`}
						>
							<span
								className={`hidden h-6 w-6 items-center justify-center rounded-full bg-white text-base text-black lg:flex ${currentlyOpen !== id && "bg-onyx hover:bg-onyx/90"
									}`}
							>
								{id}
							</span>{" "}
							{title}
						</h2>
						{currentlyOpen === id && <div className="w-full">{CODE_SECTIONS[id] as JSX.Element}</div>}
					</li>
				))}
			</ul>
		</section>
	);
};

export default ExpandableSection;
