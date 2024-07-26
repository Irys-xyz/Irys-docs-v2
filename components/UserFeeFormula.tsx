import React, { useState } from "react";
import Latex from "react-latex-next";

const UserFeeFormula: React.FC = () => {
	const [storageCost, setStorageCost] = useState<number>(8.65);
	const [storageRequested, setStorageRequested] = useState<number>(200);
	const [tokenPrice, setTokenPrice] = useState<number>(1.09);

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		if (e.target.value.startsWith("$")) {
			e.target.value = e.target.value.substring(1);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		setter: React.Dispatch<React.SetStateAction<number>>,
	) => {
		const value = e.target.value.startsWith("$") ? e.target.value.substring(1) : e.target.value;
		const parsedValue = parseFloat(value);
		if (!isNaN(parsedValue) && parsedValue >= 0) {
			setter(parsedValue);
		}
	};

	return (
		<div className="mt-5 ">
			<div className="flex flex-col border p-2 rounded-2xl">
				<div className="flex justify-center px-2 py-2 mb-4 ">
					<table className="table-auto md:border md:border-gray-200 w-full md:rounded-2xl">
						<thead>
							<tr className="bg-slate-800 text-white ">
								<th className="md:border px-4 py-2">Parameter</th>
								<th className="md:border px-4 py-2">Value</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="md:border px-4 py-2">Cost to store 1GB (10 replicas, 200y)</td>
								<td className="md:border px-4 py-2">
									<input
										type="text"
										value={`$${storageCost}`}
										onFocus={handleFocus}
										onChange={(e) => handleChange(e, setStorageCost)}
										className="bg-slate-800 text-white p-1 rounded"
									/>
								</td>
							</tr>
							<tr>
								<td className="md:border px-4 py-2">Storage Requested (MB)</td>
								<td className="md:border px-4 py-2">
									<input
										type="number"
										value={storageRequested}
										onChange={(e) => setStorageRequested(parseFloat(e.target.value))}
										className="bg-slate-800 text-white p-1 rounded"
									/>
								</td>
							</tr>
							<tr>
								<td className="md:border px-4 py-2">Native Token Price</td>
								<td className="md:border px-4 py-2">
									<input
										type="text"
										value={`$${tokenPrice}`}
										onFocus={handleFocus}
										onChange={(e) => handleChange(e, setTokenPrice)}
										className="bg-slate-800 text-white p-1 rounded"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="flex flex-col items-start mb-2 gap-2 mt-5 px-2 md:px-5 md:flex-row">
					<div className="px-5 flex items-center justify-center bg-[#FF8451] rounded-full text-xl text-white w-full md:w-auto">
						1
					</div>
					<div className="w-full md:w-3/6 flex-1 ml-2 items-start mt-2 md:mt-0">
						Determine the Ratio of Storage Requested to 1GB of Storage
					</div>
					<div className="w-full md:w-2/6 flex flex-col items-start mt-2 md:mt-0">
						<Latex>{`$$= \\frac{\\text{Storage requested}}{\\text{1 GB}}$$`}</Latex>
						<Latex>{`$$= \\frac{${storageRequested}}{1024}$$`}</Latex>
						<Latex>{`$$= ${(storageRequested / 1024).toFixed(7)}$$`}</Latex>
					</div>
				</div>

				<div className="flex flex-col items-start mb-2 gap-2 mt-5 px-5 md:flex-row">
					<div className="px-5 flex items-center justify-center bg-[#FF8451] rounded-full text-xl text-white w-full md:w-auto">
						2
					</div>
					<div className="w-full md:w-3/6 flex-1 ml-2 items-start mt-2 md:mt-0">
						Determine the USD fee for Storage Requested using the Storage Ratio
					</div>
					<div className="w-full md:w-2/6 flex flex-col items-start mt-2 md:mt-0">
						<Latex>{`$$= \\text{Cost to store 1GB} \\times \\text{Storage Ratio}$$`}</Latex>
						<Latex>{`$$= ${storageCost} \\times ${(storageRequested / 1024).toFixed(7)}$$`}</Latex>
						<Latex>{`$$= ${(storageCost * (storageRequested / 1024)).toFixed(7)} = ${(
							storageCost *
							(storageRequested / 1024)
						).toFixed(2)}$$`}</Latex>
					</div>
				</div>

				<div className="flex flex-col items-start mb-2 gap-2 mt-5 px-5 md:flex-row">
					<div className="px-5 flex items-center justify-center bg-[#FF8451] rounded-full text-xl text-white w-full md:w-auto">
						3
					</div>
					<div className="w-full md:w-3/6 flex-1 ml-2 items-start mt-2 md:mt-0">
						Denominate the USD fee in the native token
					</div>
					<div className="w-full md:w-2/6 flex flex-col items-start mt-2 md:mt-0">
						<Latex>{`$$= \\frac{\\text{USD fee}}{\\text{Native Token Price}}$$`}</Latex>
						<Latex>{`$$= ${(storageCost * (storageRequested / 1024)).toFixed(
							2,
						)} \\div ${tokenPrice}$$`}</Latex>
						<Latex>{`$$= ${((storageCost * (storageRequested / 1024)) / tokenPrice).toFixed(7)} = ${(
							(storageCost * (storageRequested / 1024)) /
							tokenPrice
						).toFixed(2)} \\text{ Native Token}$$`}</Latex>
					</div>
				</div>

				<div className="flex flex-col items-start mb-2 gap-2 mt-5 px-5 md:flex-row">
					<div className="px-5 flex items-center justify-center bg-[#FF8451] rounded-full text-xl text-white w-full md:w-auto">
						4
					</div>
					<div className="w-full md:w-3/6 flex-1 ml-2 items-start mt-2 md:mt-0">
						The protocol adds an additional 5% to the network fee for the reward paid to the miner that
						includes the transaction in a block.
					</div>
					<div className="w-full md:w-2/6 flex flex-col items-start mt-2 md:mt-0">
						<Latex>{`$$= \\text{Network fee} + 5\\%$$`}</Latex>
						<Latex>{`$$= ${((storageCost * (storageRequested / 1024)) / tokenPrice).toFixed(
							2,
						)} \\times 1.05$$`}</Latex>
						<Latex>{`$$= ${(((storageCost * (storageRequested / 1024)) / tokenPrice) * 1.05).toFixed(
							7,
						)}$$`}</Latex>
						<Latex>{`$$= ${(((storageCost * (storageRequested / 1024)) / tokenPrice) * 1.05).toFixed(
							2,
						)} \\text{ Native Token}$$`}</Latex>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserFeeFormula;
