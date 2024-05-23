// components/Footer.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
	const router = useRouter();

	const handleDocsClick = () => {
		router.push("/overview/irys-architecture");
	};

	return (
		<footer
			className="fixed bottom-0 w-full bg-black text-white py-4 z-10 rounded-t-2xl shadow-2lg"
			style={{ boxShadow: "0 -10px 10px -10px rgba(255, 255, 0, 0.5)" }}
		>
			<div className="container mx-auto flex justify-between items-center">
				<div className="w-2/3 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
					<div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 px-10">
						<span>Want the alpha? Join our mailing list.</span>
						<input type="email" placeholder="Your email" className="px-4 py-2 rounded-full text-black" />
						<button className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-700">Submit</button>
					</div>
				</div>
				<div className="w-1/3 flex justify-end">
					<button className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-700 mr-3">Discord</button>
					<button onClick={handleDocsClick} className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-700 ml-5 mr-8">
						Docs
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
