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
		<div className="flex flex-col border w-full mt-5 mb-5">
			<div className="w-full h-[200px] flex justify-center">
				<RiveComponent />
			</div>
			<div className="flex flex-row">
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
