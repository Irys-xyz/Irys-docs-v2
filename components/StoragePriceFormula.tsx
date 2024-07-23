import React, { useState } from "react";
import Latex from "react-latex-next";
import { FaArrowTurnDown } from "react-icons/fa6";

type Step = {
	stepNumber: number;
	description: string;
	calculation: string;
};

const formula =
	"$$\\text{Total cost} = \\text{Initial annual cost} \\times \\left( \\frac{1 - (1 - r)^n}{r} \\right)$$";

const givens = ["r = 0.01 - decay rate of 1%", "n = 200 - years to pay for storage"];

const steps: Step[] = [
	{
		stepNumber: 1,
		description: "Calculate (1 - r)^n",
		calculation: "$$(1 - 0.01)^{200} \\approx 0.1353$$",
	},
	{
		stepNumber: 2,
		description: "Subtract the result from 1",
		calculation: "$$1 - 0.1353 = 0.8647$$",
	},
	{
		stepNumber: 3,
		description: "Divide the result by r",
		calculation: "$$\\frac{0.8647}{0.01} = 86.47$$",
	},
	{
		stepNumber: 4,
		description: "Multiply by the initial annual cost",
		calculation: "$$\\$0.01 \\times 86.47 = \\$0.8647$$",
	},
];

const StoragePriceFormula: React.FC = () => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="mt-5 w-full">
			<div className="grid grid-cols-[1fr_6fr_6fr] gap-2 border border-gray-400 p-4">
				<div className="col-span-3 px-4 py-2 bg-slate-800 rounded-xl text-white">
					<Latex>{formula}</Latex>
				</div>
				<div className="col-span-3 px-4 py-2 text-white flex flex-row items-end">
					<div className="w-2/3">
						{givens.map((given, index) => (
							<div key={index} className="mt-2">
								{given}
							</div>
						))}
					</div>
					<div className="w-1/3">
						<button
							onClick={() => setShowDetails(!showDetails)}
							className="flex items-center bg-[#FF8451] text-white px-4 py-2 rounded-full"
						>
							<FaArrowTurnDown className={`transition-transform ${showDetails ? "rotate-180" : ""}`} />
							{showDetails ? (
								<span className="ml-2">Hide Details</span>
							) : (
								<span className="ml-2">More Details</span>
							)}
						</button>
					</div>
				</div>

				{showDetails &&
					steps.map((step) => (
						<React.Fragment key={step.stepNumber}>
							<div className="flex items-center justify-center bg-[#FF8451] rounded-full text-xl m-2 text-white w-10 h-10">
								{step.stepNumber}
							</div>
							<div className="flex items-center">{step.description}</div>
							<div className="flex items-center">
								<Latex>{step.calculation}</Latex>
							</div>
						</React.Fragment>
					))}
			</div>
		</div>
	);
};

export default StoragePriceFormula;
