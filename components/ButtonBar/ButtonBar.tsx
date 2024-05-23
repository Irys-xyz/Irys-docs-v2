import React, { useState } from "react";

import Button from "../Button";
import ConfettiExplosion from "react-confetti-explosion";
// import { Web3Button } from "@thirdweb-dev/react";

interface ButtonBarProps {
	submitUrl: string;
	contractAddress: string;
	tokenId: number;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ submitUrl, contractAddress, tokenId }) => {
	const successMessage = `Congratulations on finishing the quest! Your NFT has been claimed, you can view it on <a class="underline decoration-white" href="https://opensea.io/assets/matic/0x1c8f5f29d1498474844d6a5160b640c674276dba/1" target="_blank">Opensea</a>`;
	const errorMessage = `Your address is not currently whitelisted, if you believe this is an error, please reach out to us on <a class="underline decoration-white" href="https://discord.irys.xyz" target="_blank">Discord.</a>`;

	const [message, setMessage] = useState<string>("");
	const [claimButtonText, setClaimButtonText] = useState<string>("Claim NFT!");
	const [isExploding, setIsExploding] = React.useState(false);

	return (
		<div className="flex flex-col">
			{isExploding && <ConfettiExplosion />}
			<div className="flex flex-row gap-4 mt-2">
				{submitUrl && <Button onClick={() => window.open(submitUrl)}>Submit Quest</Button>}
				{/* <Web3Button
					theme="dark"
					contractAddress={contractAddress}
					action={(contract) => contract.erc1155.claim(tokenId, 1)}
					className="bundlr-web3-button"
					onSuccess={() => {
						setMessage(successMessage);
						setIsExploding(true);
					}}
					onError={(error) => {
						setMessage(errorMessage);
					}}
				>
					{claimButtonText}
				</Web3Button> */}
			</div>
			<div className="mt-5 text-left" dangerouslySetInnerHTML={{ __html: message }} />
		</div>
	);
};

export default ButtonBar;
