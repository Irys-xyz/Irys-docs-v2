import nextra from "nextra";

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
	defaultShowCopyCode: "true"
});

const nextConfig = withNextra({
	async redirects() {
		return [
			{
				source: "/",
				destination: "/learn/what/what-a-datachain-is",
				permanent: true,
			},
			{
				source: '/learn/learn-about-irys/what-is-datachain',
				destination: '/learn/what/what-a-datachain-is',
				permanent: true,
			},
			{
				source: '/learn/learn-about-irys/what-is-irys',
				destination: '/learn/what/what-irys-is',
				permanent: true,
			},
			{
				source: '/learn/learn-about-irys/why-irys-exists',
				destination: '/learn/what/why-irys-exists',
				permanent: true,
			},
			{
				source: '/learn/learn-about-irys/problems-solved',
				destination: '/learn/what/how-irys-solves-these-problems',
				permanent: true,
			},
			{
				source: '/learn/learn-about-irys/what-is-a-datachain',
				destination: '/learn/what/what-a-datachain-is',
				permanent: true,
			},
			{
				source: '/learn/why-build-on-irys/programmable-data',
				destination: '/learn/why/why-programmable-data',
				permanent: true,
			},
			{
				source: '/learn/why-build-on-irys/verifiability',
				destination: '/learn/why/why-verifiability',
				permanent: true,
			},
			{
				source: '/learn/why-build-on-irys/irysvm',
				destination: '/learn/why/why-irysvm',
				permanent: true,
			},
			{
				source: '/learn/network/miners',
				destination: '/learn/network-overview/becoming-a-miner-on-irys',
				permanent: true,
			},
			{
				source: '/learn/network/bundler',
				destination: '/learn/network-overview/bundling-transactions',
				permanent: true,
			},
			{
				source: '/learn/network/gateway',
				destination: '/learn/network-overview/irys-gateway',
				permanent: true,
			},
			{
				source: '/learn/protocol/partitions',
				destination: '/learn/protocol-overview/partitions-overview',
				permanent: true,
			},
			{
				source: '/learn/protocol/ledgers',
				destination: '/learn/protocol-overview/ledgers-overview',
				permanent: true,
			},
			{
				source: '/learn/protocol/transactions',
				destination: '/learn/protocol-overview/transactions-overview',
				permanent: true,
			},
			{
				source: '/learn/mining-on-irys/matrix-packing',
				destination: '/learn/protocol-overview/matrix-packaging-overview',
				permanent: true,
			},
			{
				source: '/learn/mining-on-irys/efficient-sampling',
				destination: '/learn/protocol-overview/efficient-sampling-overview',
				permanent: true,
			},
		];
	},
});

// If you have other Next.js configurations, you can pass them as the parameter:
// const nextConfig = withNextra({ /* other next.js config */ });

export default nextConfig;