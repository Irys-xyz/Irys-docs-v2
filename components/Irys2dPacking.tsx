import React, { useEffect, useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { useRive, Fit, Alignment, Layout, useStateMachineInput } from "@rive-app/react-canvas";

const Irys2dPacking: React.FC = () => {
	const { rive, RiveComponent } = useRive({
		src: "/packing/2dpacking.riv",
		autoplay: true,
		stateMachines: "State Machine 1",
		layout: new Layout({
			fit: Fit.Fill,
			alignment: Alignment.TopCenter,
		}),
	});

	const containerRef = useRef<HTMLDivElement>(null);
	const [componentDimensions, setComponentDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			if (containerRef.current) {
				const { clientWidth, clientHeight } = containerRef.current;
				const aspectRatio = 650 / 200; // Original canvas aspect ratio (650x200)

				// Calculate dimensions while maintaining aspect ratio
				let newWidth = clientWidth;
				let newHeight = clientWidth / aspectRatio;

				// Adjust height if it exceeds container height
				if (newHeight > clientHeight) {
					newHeight = clientHeight;
					newWidth = clientHeight * aspectRatio;
				}

				setComponentDimensions({ width: newWidth, height: newHeight });
			}
		};

		// Initial dimensions setup
		updateDimensions();

		// Listen for window resize events
		window.addEventListener("resize", updateDimensions);

		return () => {
			// Clean up event listener on component unmount
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);

	const levelInput = useStateMachineInput(rive, "State Machine 1", "step", 0);
	const exitInput = useStateMachineInput(rive, "State Machine 1", "exit");

	useEffect(() => {
		if (levelInput) {
			levelInput.value = 0; // Set initial level to 0
		}
	}, [levelInput]);

	const delay = (ms: number): Promise<void> => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const setStep = async (step: number) => {
		if (levelInput && exitInput) {
			exitInput.fire();
			await delay(600);
			levelInput.value = step; // Change level when button is clicked
		}
	};

	return (
		<div className="flex flex-col border w-full mt-5 mb-5">
			<div
				ref={containerRef}
				className="w-full flex justify-center"
				style={{ height: "auto", minHeight: "200px", position: "relative" }}
			>
				{RiveComponent && (
					<RiveComponent
						style={{
							width: `${componentDimensions.width}px`,
							height: `${componentDimensions.height}px`,
						}}
					/>
				)}
			</div>

			<div className="flex flex-row mt-5">
				<div className="w-20">
					<button
						className="px-3 relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
						onClick={() => setStep(1)}
					>
						<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
						<span className="absolute text-xs font-bold">1</span>
					</button>
				</div>
				<div className="flex flex-col items-start ml-5">
					<p className="font-bold">Partitions</p>
					The foundational building block of storage on Irys is the 16TB partition. Irys partitions data logically into
					these partitions which can then be stored on individual 16TB HDDs. SSDs do not provide a mining advantage for
					reasons that will be discussed later.
				</div>
			</div>

			<div className="flex flex-row mt-5">
				<div className="w-20">
					<button
						className="px-3 relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
						onClick={() => setStep(2)}
					>
						<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
						<span className="absolute text-xs font-bold">2</span>
					</button>
				</div>
				<div className="flex flex-col items-start ml-5">
					<p className="font-bold">Chunks</p>
					Each partition is further divided into 256KiB chunks which are read during the mining process to produce
					hashes which have the potential to be a mining solution and enable the miner to announce a block to the
					network and earn rewards.
				</div>
			</div>
			<div className="flex flex-row mt-5">
				<div className="w-20">
					<button
						className="px-3 relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
						onClick={() => setStep(3)}
					>
						<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
						<span className="absolute text-xs font-bold">3</span>
					</button>
				</div>
				<div className="flex flex-col items-start ml-5">
					<p className="font-bold">Segments</p>
					Each chunk is further divided into segments 32 bytes in size. These segments contain the packing entropy that
					is the result of a SHA-256 hash.
				</div>
			</div>
		</div>
	);
};

export default Irys2dPacking;
