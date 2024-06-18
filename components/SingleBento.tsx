import React from "react";
import Image from "next/image";

interface SingleBentoProps {
	image_url?: string;
	title: string;
	body: string;
}

const SingleBento: React.FC<SingleBentoProps> = ({ image_url, title, body }) => (
	<div className="animated-border cursor-pointer p-5 h-auto rounded-xl flex flex-col items-start justify-end bg-gradient-to-b from-[#171717]/50 to-[#171717]/20">
		<h3 className="text-xl w-full font-bold text-white text-start">{title}</h3>
		{image_url && (
			<div className="w-full mt-3">
				<Image alt={title} src={image_url} layout="responsive" width={1470} height={792} className="w-full h-auto" />
			</div>
		)}
		<p className="text-base mt-2">{body}</p>
	</div>
);

export default SingleBento;
