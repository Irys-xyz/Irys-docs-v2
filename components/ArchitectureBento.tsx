import React from "react";

const ArchitectureBento: React.FC = () => {
	return (
		<div className="bg-gray-900 text-white p-2">
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1">
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold mb-2">Efficient Sampling</h3>
					<p>Enables economical storage scaling with a 24-hour sampling window for 16TB HDDs.</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold mb-2">Fast 2D Packing</h3>
					<p>Combined with staked mining addresses, enables incentive-compatible packing that:</p>
					<ul className="list-disc list-inside ml-4">
						<li>Scales horizontally</li>
						<li>Reduces packing costs</li>
						<li>Increases the network{"'"}s ability to ingest data</li>
					</ul>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold mb-2">Capacity Mining</h3>
					<p>Allows pre-packing of empty capacity partitions for efficient data ingress.</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold mb-2">Verifiability</h3>
					<p>End users can easily verify onchain which mining addresses are storing their data.</p>
					<p>2D Unpacking is cross-platform and can be done on consumer hardware, even in a browser.</p>
				</div>
			</div>
		</div>
	);
};

export default ArchitectureBento;
