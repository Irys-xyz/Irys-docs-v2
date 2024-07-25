import IrysLogoText from "./components/svg/IrysLogoText";
import Footer from "./components/footer/footer";
import { useRouter } from "next/router";
import {
	MdAutoAwesomeMosaic,
	MdOutlineMonetizationOn,
	MdOutlineAccountBalance,
	MdOutlineDescription,
	MdOutlineVerified,
	MdOutlineStorage,
	MdOutlineMenuBook,
	MdOutlineViewList,
	MdOutlineSwapHoriz,
	MdOutlineViewQuilt,
	Md360,
	MdBlurLinear,
	MdFlipToBack,
	MdDataObject,
	MdDataset,
	MdAutoGraph,
	MdCalculate,
	MdOutlineQuestionMark,
	MdOutlineSync,
	MdOutlineBlurOn,
} from "react-icons/md";

const FooterWrapper = () => {
	const router = useRouter();
	return <Footer />;
};

// Create a mapping for the sub-items
const iconMapping = {
	"what-is-irys": <MdOutlineQuestionMark color="#ff8451" />,
	"pow-+-staking": <MdOutlineBlurOn color="#ff8451" />,
	architecture: <MdAutoAwesomeMosaic color="#ff8451" />,
	treasury: <MdOutlineAccountBalance color="#ff8451" />,
	mining: <MdBlurLinear color="#ff8451" />,
	"use-cases": <MdOutlineDescription color="#ff8451" />,
	verifiability: <MdOutlineVerified color="#ff8451" />,
	"provable-storage": <MdOutlineStorage color="#ff8451" />,
	ledgers: <MdOutlineMenuBook color="#ff8451" />,
	partitions: <MdOutlineViewList color="#ff8451" />,
	transactions: <MdOutlineSwapHoriz color="#ff8451" />,
	"2d-packing": <MdOutlineViewQuilt color="#ff8451" />,
	"efficient-sampling": <MdFlipToBack color="#ff8451" />,
	storage: <MdDataset color="#ff8451" />,
	execution: <MdOutlineSync color="#ff8451" />,
	"programmable-data": <MdDataObject color="#ff8451" />,
	"pricing-model": <MdOutlineMonetizationOn color="#ff8451" />,
	"pricing-model-calculator": <MdCalculate color="#ff8451" />,
	"token-price-approximation": <MdAutoGraph color="#ff8451" />,
};

export default {
	nextThemes: {
		defaultTheme: "system",
	},
	themeSwitch: {
		useOptions() {
			return {
				dark: "Dark",
				light: "Light",
				system: "System",
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
				// console.log(key);
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
