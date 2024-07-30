import nextra from "nextra";

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
});

const nextConfig = withNextra({
	async redirects() {
		return [
			{
				source: "/",
				destination: "/learn-about-irys/what-is-irys",
				permanent: true,
			},
		];
	},
});

// If you have other Next.js configurations, you can pass them as the parameter:
// const nextConfig = withNextra({ /* other next.js config */ });

export default nextConfig;
