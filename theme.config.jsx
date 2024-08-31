/* eslint-disable import/no-anonymous-default-export */
import NavOptions from "./components/nav-options/nav-options";
import Footer from "./components/footer/footer";
import { useRouter } from "next/router";
import {
  MdOutlineVerified,
  MdOutlineStorage,
  MdOutlineMenuBook,
  MdOutlineViewList,
  MdOutlineSwapHoriz,
  MdOutlineViewQuilt,
  MdFlipToBack,
  MdDataObject,
  MdDataset,
  MdOutlineCropFree,
  MdOutlineQuestionMark,
  MdOutlineBlurOn,
  MdOutlineAccountTree,
  MdOutlineBolt,
  MdOutlineBubbleChart,
  MdOutlineBuild,
} from "react-icons/md";
import React from "react";

import IrysInteractiveEye from "./components/irys-logo/irys-logo";
import Rive from "@rive-app/react-canvas";
import SimpleRiveViewer from "./components/SimpleRiveViewer";
import RiveIcon from "./components/rive/rive.tsx";

const FooterWrapper = () => {
  const router = useRouter();
  return <Footer />;
};

// public/assets/rive/build/01 Quickstart.riv public/assets/rive/build/02 Overview.riv public/assets/rive/build/03 Features.riv public/assets/rive/build/04 SDK.riv public/assets/rive/build/05 Storage CLI.riv public/assets/rive/build/06 Querying.riv public/assets/rive/build/07 Guides.riv public/assets/rive/build/08 Troubleshooting.riv public/assets/rive/build/09 Solidity Library.riv public/assets/rive/build/10 Calling Smart Contracts.riv public/assets/rive/build/11 UI Toolkit.riv

// Create a mapping for the sub-items
const iconMapping = {
  "What-is-Irys?": {
    src: "/assets/rive/learn/01-What Is Irys.riv",
    animation: "WhatIsIrysAnim",
  },
  "What-is-a-Datachain?": {
    src: "/assets/rive/learn/03-Why Iris Exist.riv",
    animation: "Hover",
  },
  "Why-Irys-Exists": {
    src: "/assets/rive/learn/03-Why Iris Exist.riv",
    animation: "Hover",
  },
  "How-Irys-Solves-These-Problems": {
    src: "/assets/rive/learn/04 - How Irys Solve These Problems.riv",
    animation: "Hover",
  },

  "Programmable-Data": {
    src: "/assets/rive/learn/05-Programable Data.riv",
    animation: "Hover",
  },
  Verifiability: {
    src: "/assets/rive/learn/06- Verifiability.riv",
    animation: "Hover",
  },
  IrysVM: {
    src: "/assets/rive/learn/07- Irys VM.riv",
    animation: "Hover",
  },

  "Running-a-Node": {
    src: "/assets/rive/learn/08 - Running a Node.riv",
    animation: "Hover",
  },
  "Matrix-Packing": {
    src: "/assets/rive/learn/09 -  2d Packaging.riv",
    animation: "Hover",
  },
  "Efficient-Sampling": {
    src: "/assets/rive/learn/10 - Efficient Sampling.riv",
    animation: "Hover",
  },

  "Protocol-Overview": {
    src: "/assets/rive/learn/11 - Protocol Overview.riv",
    animation: "Hover",
  },
  Partitions: {
    src: "/assets/rive/learn/12 - Partitions.riv",
    animation: "Hover",
  },
  Ledgers: {
    src: "/assets/rive/learn/13 - Ledgers.riv",
    animation: "Hover",
  },
  Transactions: {
    src: "/assets/rive/learn/14 - Transactions.riv",
    animation: "Hover",
  },
  "Proof-of-Work-+-Staking": {
    src: "/assets/rive/learn/15 - Proof of Work.riv",
    animation: "Hover",
  },
  "Fast-Finality": {
    src: "/assets/rive/learn/16 - Fast Finality.riv",
    animation: "Hover",
  },
  "Quickstart": {
    src: "/assets/rive/build/01 Quickstart.riv",
    animation: "FlagAnim",
  },
  Overview: {
    src: "/assets/rive/build/02 Overview.riv",
    animation: "Overview Anim",
  },
  Features: {
    src: "/assets/rive/build/03 Features.riv",
    animation: "Features Anim",
  },
  SDK: {
    src: "/assets/rive/build/04 SDK.riv",
    animation: "SDKAnim ",
  },
  "Storage-CLI": {
    src: "/assets/rive/build/05 Storage CLI.riv",
    animation: "StorageAnim",
  },
  Querying: {
    src: "/assets/rive/build/06 Querying.riv",
    animation: "Querying",
  },
  Guides: {
    src: "/assets/rive/build/07 Guides.riv",
    animation: "GuidesAnim",
  },
  Troubleshooting: {
    src: "/assets/rive/build/08 Troubleshooting.riv",
    animation: "TroubleshootingAnim",
  },
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

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [hovered, setHovered] = React.useState(false);

      const handleMouseEnter = () => setHovered(true);
      const handleMouseLeave = () => setHovered(false);

      const isSeparator = type === "separator";
      const key = title.replace(/\s+/g, "-");
      const icon = iconMapping[key];

      return isSeparator ? (
        <div>
          <span>{title}</span>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 !rounded-md w-full px-2 py-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {icon && (
            <RiveIcon
              src={icon.src}
              animation={icon.animation}
              hovered={hovered}
            />
          )}
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
    extraContent: () => <NavOptions />,
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
