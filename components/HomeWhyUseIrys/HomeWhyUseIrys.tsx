import Heading from "../Heading";
import SectionTitle from "../SectionTitle";

const HomeWhyUseIrys = ({
	content,
	children,
}: {
	content: {
		title: string;
		description: string;
		href: string;
	}[];
	children?: React.ReactNode;
}) => {
	return (
		<>
			<section>
				<div className="mx-4 flex items-center justify-center pt-20 md:ml-[79px] lg:justify-start">
					<SectionTitle title="Irys 101" />
				</div>
				<ul className="mx-4 mt-[49px] flex max-w-[1128px] flex-col gap-10 pb-[50px] lg:ml-auto lg:mr-[79px] lg:mt-[66px] lg:pl-10 2xl:max-w-[80%]">
					{/* Dots border bottom */}
					{content.map((definition, index) => {
						return (
							<li
								key={`definition-${index}`}
								className={`flex border-spacing-4 flex-col items-center justify-between gap-5 border-b-[2.5px] border-dotted border-gray-400 pb-9 lg:flex-row lg:gap-0 ${index === content.length - 1 ? "!border-b-0" : ""
									}`}
							>
								<a href={definition.href}>
									<Heading level={4} className="whitespace-nowrap text-center lg:text-left">
										{definition.title}
									</Heading>
								</a>

								<p className="pl-6 text-center font-backup font-satoshi text-base lg:text-end max-w-md">
									{definition.description}
								</p>
							</li>
						);
					})}
				</ul>
				{children}
			</section>
		</>
	);
};

export default HomeWhyUseIrys;
