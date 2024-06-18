import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectIdeaProps {
	image_url?: string;
	title: string;
	body: string;
}

const ProjectIdea: React.FC<ProjectIdeaProps> = ({ image_url, title, body }) => (
	<div className="animated-border cursor-pointer p-10 h-auto rounded-xl flex flex-col items-start justify-end bg-gradient-to-b from-[#171717]/50 to-[#171717]/20">
		<h3 className="text-4xl w-full font-bold text-white text-center">{title}</h3>
		{image_url && (
			<div className="w-full mt-3">
				<Image alt={title} src={image_url} layout="responsive" width={1470} height={792} className="w-full h-auto" />
			</div>
		)}
		<p className="text-base font-light text-[#B7B7B7] mt-2">{body}</p>
	</div>
);

interface ProjectIdeasBentoProps {
	projects: ProjectIdeaProps[];
}

const ProjectIdeasBento: React.FC<ProjectIdeasBentoProps> = ({ projects }) => (
	<section className="container px-5 md:px-0 mx-auto mt-5 flex flex-col gap-y-8">
		{projects.map((project, index) => (
			<ProjectIdea key={index} {...project} />
		))}
	</section>
);

export default ProjectIdeasBento;
