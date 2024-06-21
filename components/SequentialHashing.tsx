import React, { useEffect, useState } from "react";

import { Spring } from "react-spring";
import { CiPlay1 } from "react-icons/ci";
import { useRive } from "@rive-app/react-canvas";

const SequentialHashing: React.FC = () => {
	const { rive, RiveComponent } = useRive({
		src: "/packing/irys_-_cursor.riv",
		stateMachines: "bumpy",
		autoplay: false,
	});
	const handleStep1 = () => {};
	return (
		<div>
			{" "}
			<div className="w-[650px] h-[200px] bg-white">
				{/* <RiveComponent onMouseEnter={() => rive && rive.play()} onMouseLeave={() => rive && rive.pause()} /> */}
			</div>
			<div className="mt-5 grid grid-cols-[1fr_6fr] gap-2 border border-gray-400 p-4">
				<button
					className="relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
					onClick={handleStep1}
				>
					<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
					<span className="absolute text-xs font-bold">1</span>
				</button>
				<div className="flex items-center">
					Combine mining address, partition id, and chunk id using SHA-256 to form seed hash
				</div>

				<div className="flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10">
					2
				</div>
				<div className="flex items-center">Hash the seed hash using SHA-256 to form the initial segment</div>

				<div className="flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10">
					3
				</div>
				<div className="flex items-center">Append the segment bytes at the start of the empty chunk</div>

				<div className="flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10">
					4
				</div>
				<div className="flex items-center">Use the segment as input for the next SHA-256 hash</div>

				<div className="flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10">
					5
				</div>
				<div className="flex items-center">Append the resulting segment following the previous segment's bytes</div>

				<div className="flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10">
					6
				</div>
				<div className="flex items-center">Repeat steps 4 and 5 until the chunk is full of segments</div>
			</div>
		</div>
	);
};

export default SequentialHashing;
