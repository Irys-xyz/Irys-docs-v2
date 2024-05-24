"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BuildTheDataverse: React.FC = () => {
	const router = useRouter();

	const handleDocsClick = () => {
		router.push("/overview/irys-architecture");
	};

	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-7xl text-white font-bold text-center">Build the Dataverse</h1>
			<p className="text-center text-[#B7B7B7]">
				Irys empowers transparency in the data economy, ensuring trust and accountability.
			</p>
			<div className="flex flex-col justify-center items-center mt-2">
				<div className="p-2 border-[.8px] rounded-lg border-white/10 flex items-center justify-center">
					<button
						className="text-base text-white font-bold py-4 px-14 border-red-200 bg-black border-[.8px] rounded-md ml-5"
						onClick={handleDocsClick}
					>
						DOCS
					</button>
				</div>
			</div>
		</div>
	);
};

export default BuildTheDataverse;
