import React from "react";

const Info: React.FC = () => {
	return (
		<div className="bg-black text-white p-10 space-y-10 w-5/6 mx-auto">
			<div className="flex justify-start">
				<div className="w-2/3 space-y-4">
					<h2 className="text-3xl font-bold">IrysChain</h2>
					<p>We’re launching the fastest PoW chain in existence enabling both performant onchain storage and DeFi.</p>
					<p>We introduce two novel concepts:</p>
					<ul className="list-disc list-inside">
						<li>
							A new consensus mechanism called XYZ that enables the most efficient storage sampling seen across all
							storage networks
						</li>
						<li>A finality gadget for fast finality and block times.</li>
					</ul>
				</div>
			</div>
			<div className="flex justify-end">
				<div className="w-2/3 space-y-4 text-right">
					<h2 className="text-3xl font-bold">IrysVM</h2>
					<p>
						Irys enables programmable data by introducing IrysVM – a fork of the EVM. Long term, most logic will be
						pushed into IrysVM.
					</p>
					<p>
						IrysVM unlocks a new DeFi ecosystem for data including a new primitive to Irys – a programmable
						protocol-owned treasury (POT) used to fund future storage costs and generate yield for miners.
					</p>
				</div>
			</div>
			<div className="flex justify-start">
				<div className="w-2/3 space-y-4">
					<h2 className="text-3xl font-bold">IrysTreasury</h2>
					<p>
						Irys introduces a protocol-owned treasury – a powerful unlock that generates extra yield for miners on the
						network while decreasing circulating supply over time.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Info;
