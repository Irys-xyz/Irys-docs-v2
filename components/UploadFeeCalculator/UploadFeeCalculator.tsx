"use client";

import React, { useCallback, useEffect, useState } from "react";

import { CURRENCY_ATOMIC } from "../../lib/atomicValues";
import { CiFileOn } from "react-icons/ci";
import DropdownSelector from "../DropdownSelector";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import redstone from "redstone-api";
import { tokenOptions } from "../../lib/tokens";
import { useDropzone } from "react-dropzone";

type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface RedstonePrice {
	id: string;
	symbol: string;
	provider: string;
	value: number;
	liteEvmSignature: string;
	permawebTx: string;
	version: string;
	source: Source;
	timestamp: number;
	minutes: number;
	providerPublicKey: string;
}

export interface Source {
	binance: number;
	binanceusdm: number;
	coingecko: number;
	htx: number;
}

interface FileWithPreview extends File {
	preview: string;
}

const DefaultInput: React.FC<DefaultInputProps> = (props) => (
	<input className="border border-gray-900 rounded-full px-4 py-3 flex-1 text-white bg-[#303031]" {...props} />
);

// Smaller components for better management
const FileInput = ({ onFileChange }: { onFileChange: (files: FileWithPreview[]) => void }) => {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			const filesWithPreview = acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				}),
			);
			onFileChange(filesWithPreview);
		},
		[onFileChange],
	);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div
			{...getRootProps()}
			className="flex border-gray-300 border-dashed rounded-3xl border-2 items-center justify-center w-full py-20 cursor-pointer"
		>
			<input {...getInputProps()} />
			<p className="font-bold">Add files you plan to upload</p>
		</div>
	);
};

const ItemInput = ({ onItemAdd }: { onItemAdd: (name: string, value: string) => void }) => {
	const [itemName, setItemName] = useState("");
	const [itemValue, setItemValue] = useState("");

	const handleItemNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setItemName(event.target.value);
	};

	const handleItemValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setItemValue(event.target.value);
	};

	const handleAddClick = () => {
		if (itemName && itemValue) {
			onItemAdd(itemName, itemValue);
			setItemName("");
			setItemValue("");
		}
	};

	return (
		<div className="flex items-center gap-4 justify-between">
			<DefaultInput
				type="text"
				placeholder="Name"
				value={itemName}
				onChange={handleItemNameChange}
				style={{ width: "100%" }}
			/>

			<DefaultInput
				type="text"
				placeholder="Value"
				value={itemValue}
				onChange={handleItemValueChange}
				style={{ width: "100%" }}
			/>
			<button
				onClick={handleAddClick}
				className="border-gray-500 border bg-white text-black justify-center text-md z-50 flex items-center gap-2 rounded-full px-4 py-3 font-backup font-satoshi uppercase font-semibold hover:scale-[98%] active:scale-95 transition-all lg:px-6 lg:py-3"
			>
				<FaPlus />
			</button>
		</div>
	);
};

// Main component
const UploadFeeCalculator: React.FC = () => {
	const FILE_UNITS = [
		{ value: "bytes", label: "Bytes (B)", mult: 1 },
		{ value: "kb", label: "Kilobytes (KB)", mult: 1000 },
		{ value: "mb", label: "Megabytes (MB)", mult: 1000 ** 2 },
		{ value: "gb", label: "Gigabytes (GB)", mult: 1000 ** 3 },
		{ value: "tb", label: "Terabytes (TB)", mult: 1000 ** 4 },
	];

	const [selectedFileUnit, setSelectedFileUnit] = useState(FILE_UNITS[0]);
	const [currency, setCurrency] = useState(tokenOptions[0]);
	const [droppedFiles, setDroppedFiles] = useState<FileWithPreview[]>([]);
	const [items, setItems] = useState<{ name: string; value: string }[]>([]);
	const [customSize, setCustomSize] = useState(0);
	const [price, setPrice] = useState(0);
	const [sumOfBytes, setsumOfBytes] = useState(0);
	const [usdPrice, setUsdPrice] = useState<RedstonePrice | null>(null);
	const [baseBytesPrice, setBaseBytesPrice] = useState(0);

	const handleFileChange = (newFiles: FileWithPreview[]) => {
		setDroppedFiles((prevFiles) => [...prevFiles, ...newFiles]);
	};

	const handleItemAdd = (name: string, value: string) => {
		setItems((prevItems) => [...prevItems, { name, value }]);
	};

	const handleRemoveFile = (index: number) => {
		setDroppedFiles(droppedFiles.filter((_, i) => i !== index));
	};

	const handleRemoveItem = (index: number) => {
		setItems(items.filter((_, i) => i !== index));
	};

	useEffect(() => {
		const tagSum = items.reduce((acc, item) => acc + new Blob([item.name, item.value]).size, 0);
		const numberOfFiles = droppedFiles.length;

		fetch(`https://node1.irys.xyz/price/${currency.value}/${tagSum + 250}/`)
			.then((res) => res.json())
			.then((data) => {
				setBaseBytesPrice((data / CURRENCY_ATOMIC[currency.value].atomic) * numberOfFiles);
			});
	}, [currency, droppedFiles, items]);

	useEffect(() => {
		const fileSum = droppedFiles.reduce((acc, file) => acc + file.size, 0);

		const manualBytes = isNaN(customSize) ? 0 : customSize * selectedFileUnit.mult;

		const sum = fileSum + manualBytes;

		fetch(`https://node1.irys.xyz/price/${currency.value}/${sum}/`)
			.then((res) => res.json())
			.then((data) => {
				setPrice(data / CURRENCY_ATOMIC[currency.value].atomic);
			});

		redstone.getPrice(currency.ticker).then((price: any) => setUsdPrice(price as RedstonePrice));

		const tagSum = items.reduce((acc, item) => acc + new Blob([item.name, item.value]).size, 0);

		setsumOfBytes(sum + tagSum);
	}, [currency, droppedFiles, items, customSize, selectedFileUnit]);

	// if the user inserts a custom size, we need to reset the dropped files
	useEffect(() => {
		if (customSize) {
			setDroppedFiles([]);
		}
	}, [customSize]);

	// if the user drops files, we need to reset the custom size
	useEffect(() => {
		if (droppedFiles.length) {
			setCustomSize(0);
		}
	}, [droppedFiles]);

	return (
		// screen size, centered content
		<div className="antialiased flex flex-col lg:flex-row justify-center gap-10 bg-black text-white p-6 shadow-lg rounded-2xl">
			<div className="flex flex-col p-4 max-w-full lg:max-w-[446px] bg-black text-white gap-5">
				<p>Enter a fixed amount of data</p>
				<div className="flex gap-4">
					<DefaultInput
						type="number"
						placeholder="Enter amount of data"
						value={customSize}
						onChange={(e) => setCustomSize(parseInt(e.target.value))}
					/>
					<DropdownSelector
						selectedOption={selectedFileUnit}
						// @ts-ignore
						onChange={setSelectedFileUnit}
						options={FILE_UNITS}
					/>
				</div>
				<div className="flex items-center gap-6">
					<div className="w-full h-[1px] bg-gray-200"></div>
					<div className="">OR</div>
					<div className="w-full h-[1px] bg-gray-200"></div>
				</div>
				<FileInput onFileChange={handleFileChange} />
				<div className="flex flex-col gap-4 border-l-2 pl-4 overflow-y-scroll scrollbar-thumb-gray-200 scrollbar-thin max-h-48 [&::-webkit-scrollbar]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
					{droppedFiles.map((file, index) => (
						<div key={index} className="flex items-center justify-between">
							<div className="flex items-start gap-2">
								<div className="pt-1">
									<CiFileOn />
								</div>
								<span>
									{file.name} - <span className="text-neutral-500">{file.size} bytes</span>
								</span>
							</div>
							<div className="">
								<MdClose onClick={() => handleRemoveFile(index)} style={{ cursor: "pointer" }} />
							</div>
						</div>
					))}
				</div>
				<p>
					Include any{" "}
					<a className="underline" href="/overview/tags">
						tags
					</a>{" "}
					you'll use
				</p>
				<ItemInput onItemAdd={handleItemAdd} />
				<div className="flex flex-wrap gap-4 overflow-y-scroll scrollbar-thumb-gray-200 scrollbar-thin max-h-60 [&::-webkit-scrollbar]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
					{items.map((item, index) => (
						<div
							key={index}
							className="bg-[#EEF0F6] relative  py-2 px-4 flex items-center justify-between rounded-full group max-w-sm overflow-hidden truncate"
						>
							<span className="truncate group-hover:opacity-40 transition-all text-neutral-600">
								{item.name}: <span className="font-bold text-black">{item.value}</span>
							</span>
							<button
								className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-0 border-l-2 top-0 bg-[#EEF0F6] p-3 rounded-full text-black"
								onClick={() => handleRemoveItem(index)}
							>
								<MdClose className="hover:scale-125 transition-all" />
							</button>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col p-4 w-full lg:w-[358px] bg-black text-white gap-5">
				<h2 className="text-2xl font-bold">Upload cost overview</h2>
				{/* Cost overview UI */}
				{/* Total file size */}
				<div className="flex justify-between">
					<div>Total data size</div>
					<div className="text-neutral-300">{sumOfBytes} bytes</div>
				</div>
				{/* Number of files */}
				<div className="flex justify-between">
					<div>Number of files</div>
					<div className="text-neutral-300">{droppedFiles.length}</div>
				</div>
				{/* Number of tags */}
				<div className="flex justify-between">
					<div>Number of tags</div>
					<div className="text-neutral-300">{items.length}</div>
				</div>
				{/* Currency selector */}
				<DropdownSelector
					selectedOption={currency}
					// @ts-ignore
					onChange={setCurrency}
					options={tokenOptions}
				/>
				{/* Total cost */}
				<div className="flex justify-between mt-auto border-t pt-6">
					<div className="font-semibold">{currency.ticker} total</div>
					<div className="text-neutral-300">
						{sumOfBytes === 0 ? 0 : (price + baseBytesPrice).toFixed(8)} {currency.label.split(" - ")[1]}
					</div>
				</div>
				{usdPrice && (
					<div className="flex justify-between mt-auto border-t pt-6">
						<div className="font-semibold">USD total</div>
						<div className="font-semibold">
							${sumOfBytes === 0 ? 0 : ((price + baseBytesPrice) * usdPrice?.value).toFixed(8)}
							{/* {(price * usdPrice?.value).toFixed(8)} USD */}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default UploadFeeCalculator;
