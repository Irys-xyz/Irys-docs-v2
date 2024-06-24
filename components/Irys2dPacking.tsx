import React, { useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const Irys2dPacking: React.FC = () => {
	const { rive, RiveComponent } = useRive({
		src: "/packing/sequentialhashing.riv",
		autoplay: true,
		stateMachines: "State Machine 1",
	});

	const levelInput = useStateMachineInput(rive, "State Machine 1", "level", 0);
	const exitOpeningInput = useStateMachineInput(rive, "State Machine 1", "exitOpening");
	// const levelInput = useStateMachineInput(rive);

	useEffect(() => {
		if (levelInput) {
			levelInput.value = 0; // Set initial level to 0
		}
	}, [levelInput]);

	const delay = (ms: number): Promise<void> => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const setStep = async (step: number) => {
		if (levelInput && exitOpeningInput) {
			if (step === 1) {
				exitOpeningInput.fire();
				await delay(600);
				// wait 500 milisconds
			}
			levelInput.value = step; // Change level to 1 when button is clicked
		}
	};

	return (
		<div className="flex flex-col border w-full mt-5">
			<div className="w-full h-[200px] flex justify-center">
				<RiveComponent />
			</div>
			<div className="flex flex-row">
				<button
					className="relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
					onClick={() => setStep(1)}
				>
					<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
					<span className="absolute text-xs font-bold">1</span>
				</button>
				<div className="flex items-center ml-5">
					Combine mining address, partition id, and chunk id using SHA-256 to form seed hash
				</div>
			</div>
			<div className="flex flex-row">
				<button
					className="relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
					onClick={() => setStep(2)}
				>
					<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
					<span className="absolute text-xs font-bold">2</span>
				</button>
				<div className="flex items-center ml-5">Hash the seed hash using SHA-256 to form the initial segment</div>
			</div>
			<div className="flex flex-row">
				<button
					className="relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
					onClick={() => setStep(3)}
				>
					<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
					<span className="absolute text-xs font-bold">3</span>
				</button>
				<div className="flex items-center ml-5">The segment bytes are appended at the start of the empty chunk.</div>
			</div>
			<div className="flex flex-row">
				<button
					className="relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
					onClick={() => setStep(4)}
				>
					<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
					<span className="absolute text-xs font-bold">4</span>
				</button>
				<div className="flex items-center ml-5">Segment is also used as input for the next SHA-256.</div>
			</div>
			<div className="flex flex-row">
				<button
					className="relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
					onClick={() => setStep(5)}
				>
					<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
					<span className="absolute text-xs font-bold">5</span>
				</button>
				<div className="flex items-center ml-5">
					Resulting segment is appended following the previous segment{"'"}s bytes.
				</div>
			</div>
			<div className="flex flex-row">
				<button
					className="relative flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
					onClick={() => setStep(6)}
				>
					<CiPlay1 className="absolute text-4xl ml-1" style={{ fill: "white" }} />
					<span className="absolute text-xs font-bold">6</span>
				</button>
				<div className="flex items-center ml-5">
					Steps 4 and 5 are repeated until the empty chunk is full of segments.
				</div>
			</div>
		</div>
	);
};

export default Irys2dPacking;
