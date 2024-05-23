import Footer from "./components/Footer";
import IrysLogoText from "./components/svg/IrysLogoText";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const FooterWrapper = () => {
	const router = useRouter();
	return <Footer noPadding={router.asPath !== "/"} />;
};

export default {
	nextThemes: {
		defaultTheme: "dark",
	},
	themeSwitch: {
		useOptions() {
			return {
				dark: "Dark",
			};
		},
	},
	editLink: {
		component: () => null,
	},
	feedback: {
		content: () => null,
	},
	sidebar: {
		toggleButton: true,
	},
	logo: <IrysLogoText width={65} />,
	project: {
		link: "https://github.com/Irys-xyz/",
	},
	footer: {
		component: FooterWrapper,
	},
	banner: {
		key: "dev-quest2",
		text: (
			<a href="/developer-docs/network-merge-guide" target="_blank">
				Irys merged our mainnet nodes. Migration guide →
			</a>
		),
	},
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "Irys | %s",
			};
		} else {
			return {
				titleTemplate: "Irys | Docs",
			};
		}
	},
	head: () => {
		return (
			<>
				<meta property="og:site_name" content="Irys" />
				<meta property="og:url" content="https://docs.irys.xyz" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://irys.xyz/new/assets/shared/open-graph.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<script type="application/ld+json">
					{`{
  "@context" : "https://schema.org",
  "@type" : "WebSite",
  "name" : "Irys",
  "url" : "https://docs.irys.xyz"
}`}
				</script>
			</>
		);
	},
};
