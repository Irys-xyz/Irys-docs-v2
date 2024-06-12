import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectIdeasBento: React.FC = () => {
	return (
		<section className="container px-5 md:px-0 mx-auto mt-5 flex flex-col gap-y-8">
			<div className="animated-border cursor-pointer p-10 h-auto rounded-xl flex flex-col items-start justify-end bg-gradient-to-b from-[#171717]/50 to-[#171717]/20">
				<h3 className="text-4xl w-full font-bold text-white text-center">SMTP Bridge Nodes</h3>
				<div className="w-full mt-3">
					<Image src="/diagrams/smtp.png" layout="responsive" width={1470} height={792} className="w-full h-auto" />
				</div>

				<p className="text-base font-light text-[#B7B7B7] mt-2">
					Imagine building an onchain message replacement to email but in order to bootstrap it you need to make it
					compatible with the legacy SMTP email protocol. You can build your inbox experience, account management,
					message sending and storing all onchain with Irys, but to be able to send and receive messages from a gmail
					inbox you’ll need to run a SMTP mail server.
				</p>
				<p className="mt-5 mb-5 font-bold">How do you do this in a decentralized way?</p>
				<p className="text-base font-light text-[#B7B7B7]">
					In the past this would have been a heavy lift, you’d have to make your own p2p network, token, and be
					responsible for its security. With programmable data on Irys chain, building a decentralized SMTP service
					becomes much simpler. The token required to incentivize/reward SMTP servers for participating can be an ERC-20
					token secured by the EVM. All the management of SMTP servers can be facilitated through indexed data stored
					onchain and operated on by smart contracts. For distributing rewards, Iry’s smart contracts can access the
					onchain activity of each SMTP server within the contract and programmatically distribute rewards in a
					completely decentralized manner.
				</p>
			</div>
			<div className="animated-border cursor-pointer p-10 h-auto rounded-xl flex flex-col items-start justify-end bg-gradient-to-b from-[#171717]/50 to-[#171717]/20">
				<h3 className="text-3xl flex flex-row font-bold tracking-tight text-white text-center">DA Sampling Layer</h3>
				<div className="flex flex-col">
					<Image src="/diagrams/da.png" width="500" height="500" />
					<div>
						<p className="text-base font-light text-[#B7B7B7]">
							Irys smart contracts could challenge participating peers with availability proofs and later evaluate
							whether the DA proof was posted. Slashing then offending peer/validator when necessary. This could be done
							on an application basis with each smart contract managing DA for a different client application.
						</p>
						<p className="text-base mt-5 font-light text-[#B7B7B7]">
							For DA Sampling, the registry of what data is supposed to be on chain and available for a particular
							application could be managed by smart contract state and onchain data and what peers are storing it. This
							data may have a different set of storage parameters (e.g. num replicas) from Irys data. DA data would be
							erasure coded and Irys smart contracts could validate the encoding had been done correctly. Light clients
							could read this data from participants and use it to sample, posting fraud or availability proofs as
							needed.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectIdeasBento;
