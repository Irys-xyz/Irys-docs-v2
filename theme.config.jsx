import IrysLogoText from "./components/svg/IrysLogoText";
import Footer from "./components/footer/footer";
import { useRouter } from "next/router";
import {
	MdOutlineAccountBalance,
	MdOutlineDescription,
	MdOutlineVerified,
	MdOutlineStorage,
	MdOutlineMenuBook,
	MdOutlineViewList,
	MdOutlineSwapHoriz,
	MdOutlineViewQuilt,
	MdBlurLinear,
	MdFlipToBack,
	MdDataObject,
	MdDataset,
	MdOutlineCropFree,
	MdOutlineQuestionMark,
	MdOutlineSync,
	MdOutlineBlurOn,
	MdOutlineAccountTree,
	MdOutlineBolt,
	MdOutlineBubbleChart,
	MdOutlineBuild,
} from "react-icons/md";

const FooterWrapper = () => {
	const router = useRouter();
	return (
		<div className="border-t border-[#222222] mt-10 mx-auto bg-[#111111]">
			{" "}
			<Footer />
		</div>
	);
};

// Create a mapping for the sub-items
const iconMapping = {
	"What-is-Irys?": <MdOutlineQuestionMark color="#ff8451" />,
	"What-is-a-Datachain?": <MdDataset color="#ff8451" />,
	"Why-Irys-Exists": <MdOutlineCropFree color="#ff8451" />,
	"How-Irys-Solves-These-Problems": <MdOutlineBuild color="#ff8451" />,

	"Programmable-Data": <MdDataObject color="#ff8451" />,
	Verifiability: <MdOutlineVerified color="#ff8451" />,
	IrysVM: <MdOutlineBubbleChart color="#ff8451" />,

	"Running-a-Node": <MdOutlineAccountTree color="#ff8451" />,
	"2D-Packing": <MdOutlineViewQuilt color="#ff8451" />,
	"Efficient-Sampling": <MdFlipToBack color="#ff8451" />,

	"Protocol-Overview": <MdOutlineStorage color="#ff8451" />,
	Partitions: <MdOutlineViewList color="#ff8451" />,
	Ledgers: <MdOutlineMenuBook color="#ff8451" />,
	Transactions: <MdOutlineSwapHoriz color="#ff8451" />,
	"Proof-of-Work-+-Staking": <MdOutlineBlurOn color="#ff8451" />,
	"Fast-Finality": <MdOutlineBolt color="#ff8451" />,
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
		defaultMenuCollapseLevel: 2,
		titleComponent({ title, type }) {
			const iconStyles = { fontSize: "1.1rem", marginRight: "0.5rem" };
			const containerStyles = { display: "flex", alignItems: "center" };

			if (type !== "separator") {
				const key = title.replace(/\s+/g, "-");
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
