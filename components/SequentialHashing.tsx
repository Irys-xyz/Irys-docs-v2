import React, { useEffect, useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { useRive, Fit, Alignment, Layout, useStateMachineInput } from "@rive-app/react-canvas";

const SequentialHashing: React.FC = () => {
	const { rive, RiveComponent } = useRive({
		src: "/packing/sequentialhashing.riv",
		autoplay: true,
		stateMachines: "sequentialHashingStateMachine",
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

				let newWidth = clientWidth;
				let newHeight = clientWidth / aspectRatio;

				setComponentDimensions({ width: newWidth, height: newHeight });
			}
		};

		updateDimensions();

		window.addEventListener("resize", updateDimensions);

		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);

	const levelInput = useStateMachineInput(rive, "sequentialHashingStateMachine", "step", 0);

	const setStep = async (step: number) => {
		console.log({ levelInput });
		if (levelInput) {
			levelInput.value = step;
		}
	};

	return (
		<div className="flex flex-col border rounded-xl w-full mt-5 mb-5">
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
			<div className="px-5 pb-5">
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
					<div className="flex flex-col items-start justify-center ml-5">
						<p className="">Combine mining address, partition id, and chunk id using SHA-256 to form seed hash</p>
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
					<div className="flex flex-col items-start justify-center ml-5">
						<p className="">Hash the seed hash using SHA-256 to form the initial segment</p>
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
					<div className="flex flex-col items-start justify-center ml-5">
						<p className="">The segment bytes are appended at the start of the empty chunk.</p>
					</div>
				</div>
				<div className="flex flex-row mt-5">
					<div className="w-20">
						<button
							className="px-3 relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
							onClick={() => setStep(4)}
						>
							<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
							<span className="absolute text-xs font-bold">4</span>
						</button>
					</div>
					<div className="flex flex-col items-start justify-center ml-5">
						<p className="">Segment is also used as input for the next SHA-256.</p>
					</div>
				</div>
				<div className="flex flex-row mt-5">
					<div className="w-20">
						<button
							className="px-3 relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
							onClick={() => setStep(5)}
						>
							<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
							<span className="absolute text-xs font-bold">5</span>
						</button>
					</div>
					<div className="flex flex-col items-start justify-center ml-5">
						<p className="">Resulting segment is appended following the previous segment{"'"}s bytes.</p>
					</div>
				</div>
				<div className="flex flex-row mt-5">
					<div className="w-20">
						<button
							className="px-3 relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
							onClick={() => setStep(6)}
						>
							<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
							<span className="absolute text-xs font-bold">6</span>
						</button>
					</div>
					<div className="flex flex-col items-start ml-5">
						<p className="">Steps 4 and 5 are repeated until the empty chunk is full of segments.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SequentialHashing;
