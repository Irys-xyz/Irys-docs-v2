import { useEffect, useState } from "react";

import Heading from "../Heading";
import SectionTitle from "../SectionTitle";

const HomeProduct = ({
	items,
	title,
}: {
	items: {
		id: number;
		title: string;
		description: string;
		href: string;
	}[];
	title: string;
}) => {
	return (
		<>
			<section className="flex bg-black flex-col items-center justify-center px-5 pb-10 md:items-center lg:items-start lg:px-[79px] lg:pb-[120px]">
				<div className="pt-20 text-white lg:pt-[117px]">
					<SectionTitle title={title} />
				</div>
				<div
					style={{}}
					className={`mx-auto mt-16 flex w-full flex-col items-center lg:items-stretch justify-center gap-20 lg:flex-row lg:justify-evenly lg:mt-28 lg:gap-0`}
				>
					{/* 1st column title, text, and find out more button */}
					{items.map((info, index) => {
						return (
							<div
								key={`info-${index}`}
								className={`flex w-full xl:max-w-[250px] 2xl:max-w-2xl flex-col items-center lg:items-start gap-4 text-white ${items.length === 1 ? "max-w-full flex-row items-center" : ""
									}`}
							>
								{/* <h3
                className="text-3xl lg:text-5xl leading-none font-fkDisplay"
                dangerouslySetInnerHTML={{
                  __html: info.title
                }}
              ></h3> */}
								<Heading
									level={3}
									className="text-white"
									dangerouslySetInnerHTML={{
										__html: info.title,
									}}
								/>
								<p
									className={` white mt-auto font-backup font-satoshi text-lg font-normal leading-loose ${items.length === 1 ? "text-center" : ""
										}`}
								>
									{info.description}
								</p>
								<a
									href={info.href}
									className="mt-auto whitespace-nowrap font-backup font-satoshi text-base uppercase tracking-widest text-white hover:font-bold"
								>
									Learn more
								</a>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default HomeProduct;
