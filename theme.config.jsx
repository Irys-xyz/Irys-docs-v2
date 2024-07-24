import IrysLogoText from "./components/svg/IrysLogoText";
import Footer from "./components/footer/footer";
import { useRouter } from "next/router";
import {
	MdAutoAwesomeMosaic,
	MdOutlineMonetizationOn,
	MdOutlineAccountBalance,
	MdOutlineMining,
	MdOutlineDescription,
	MdOutlineVerified,
	MdOutlineStorage,
	MdOutlineMenuBook,
	MdOutlineViewList,
	MdOutlineSwapHoriz,
	MdOutlineViewQuilt,
	Md360,
	MdBlurLinear,
} from "react-icons/md";

const FooterWrapper = () => {
	const router = useRouter();
	return <Footer />;
};

// Create a mapping for the sub-items (using a single icon for now)
const iconMapping = {
	architecture: <MdAutoAwesomeMosaic />,
	pricing: <MdOutlineMonetizationOn />,
	treasury: <MdOutlineAccountBalance />,
	mining: <MdBlurLinear />,
	overview: <Md360 />,
	"use-cases": <MdOutlineDescription />,
	verifiability: <MdOutlineVerified />,
	"provable-storage": <MdOutlineStorage />,
	ledgers: <MdOutlineMenuBook />,
	partitions: <MdOutlineViewList />,
	transactions: <MdOutlineSwapHoriz />,
	"2d-packing": <MdOutlineViewQuilt />,
};

export default {
	nextThemes: {
		defaultTheme: "dark",
	},
	themeSwitch: {
		useOptions() {
			return {
				dark: "Dark",
				light: "Light",
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
		titleComponent({ title, type }) {
			const iconStyles = { fontSize: "1.1rem", marginRight: "0.5rem" };
			const containerStyles = { display: "flex", alignItems: "center" };

			if (type !== "separator") {
				const key = title.toLowerCase().replace(/\s+/g, "-");
				console.log(key);
				const icon = iconMapping[key];
				return (
					<div style={containerStyles}>
						{icon && <span style={iconStyles}>{icon}</span>}
						<span>{title}</span>
					</div>
				);
			}
			return (
				<div style={containerStyles}>
					<span>{title}</span>
				</div>
			);
		},
	},
	logo: <IrysLogoText width={65} />,
	project: {
		link: "https://github.com/Irys-xyz/",
	},
	footer: {
		component: FooterWrapper,
	},
	banner: {},
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
				<meta property="og:image" content="/irys-open-graph.jpg" />
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
