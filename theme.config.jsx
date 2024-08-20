import IrysLogoText from "./components/svg/IrysLogoText";
import NavOptions from "./components/nav-options/nav-options";
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

import IrysInteractiveEye from "./components/irys-logo/irys-logo";

const FooterWrapper = () => {
  const router = useRouter();
  return (

  
      <Footer />

  );
};

// Create a mapping for the sub-items
const iconMapping = {
  "What-is-Irys?": <MdOutlineQuestionMark  />,
  "What-is-a-Datachain?": <MdDataset  />,
  "Why-Irys-Exists": <MdOutlineCropFree  />,
  "How-Irys-Solves-These-Problems": <MdOutlineBuild  />,

  "Programmable-Data": <MdDataObject  />,
  Verifiability: <MdOutlineVerified  />,
  IrysVM: <MdOutlineBubbleChart  />,

  "Running-a-Node": <MdOutlineAccountTree  />,
  "2D-Packing": <MdOutlineViewQuilt  />,
  "Efficient-Sampling": <MdFlipToBack  />,

  "Protocol-Overview": <MdOutlineStorage  />,
  Partitions: <MdOutlineViewList  />,
  Ledgers: <MdOutlineMenuBook  />,
  Transactions: <MdOutlineSwapHoriz  />,
  "Proof-of-Work-+-Staking": <MdOutlineBlurOn  />,
  "Fast-Finality": <MdOutlineBolt  />,
};

export default {
  nextThemes: {
    defaultTheme: "system",
  },
  primaryHue: 0,
  primarySaturation: 1,
  themeSwitch: false,
  editLink: {
    component: () => null,
  },
  feedback: {
    content: () => null,
  },
  sidebar: {
    toggleButton: false,
    defaultMenuCollapseLevel: 2,
    titleComponent({ title, type }) {
      const iconStyles = { fontSize: "1.1rem", marginRight: "0.5rem" };
      const containerStyles = { display: "flex", alignItems: "center", marginTop: "3px", marginBottom: "3px" };

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
  // logo: <IrysLogoText width={65} />,
  logo: <IrysInteractiveEye />,
  // project: {
  //   link: "https://github.com/Irys-xyz/",
  // },
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
  navbar: {
    extraContent: () => <NavOptions />
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
