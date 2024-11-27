/* eslint-disable import/no-anonymous-default-export */
import NavOptions from "./components/nav-options/nav-options";
import Footer from "./components/footer/footer";
import { useRouter } from "next/router";
import React from "react";

import IrysInteractiveEye from "./components/irys-logo/irys-logo";
import RiveIcon from "./components/rive/rive.tsx";

const FooterWrapper = () => {
  const router = useRouter();
  return <Footer />;
};

// public/assets/rive/build/01 Quickstart.riv public/assets/rive/build/02 Overview.riv public/assets/rive/build/03 Features.riv public/assets/rive/build/04 SDK.riv public/assets/rive/build/05 Storage CLI.riv public/assets/rive/build/06 Querying.riv public/assets/rive/build/07 Guides.riv public/assets/rive/build/08 Troubleshooting.riv public/assets/rive/build/09 Solidity Library.riv public/assets/rive/build/10 Calling Smart Contracts.riv public/assets/rive/build/11 UI Toolkit.riv

// Create a mapping for the sub-items
const iconMapping = {
  "What-Irys-Is": {
    src: "/assets/rive/learn/what-is-irys.riv",
    animation: "WhatIsIrysAnim",
  },
  "What-Irys-Isn't": {
    src: "/assets/rive/learn/what-is-irys.riv",
    animation: "Hover",
  },
  "What-a-Datachain-Is": {
    src: "/assets/rive/learn/what-is-a-datachain.riv",
    animation: "Hover",
  },
  "Why-Irys-Exists": {
    src: "/assets/rive/learn/why-irys-exist.riv",
    animation: "Hover",
  },
  "How-Irys-Solves-These-Problems": {
    src: "/assets/rive/learn/how-irys-solve-these-problems.riv",
    animation: "Hover",
  },

  "Why-Programmable-Data": {
    src: "/assets/rive/learn/programable-data.riv",
    animation: "Hover",
  },
  "Programmable-Data": {
    src: "/assets/rive/learn/programable-data.riv",
    animation: "Hover",
  },
  "Why-Verifiability": {
    src: "/assets/rive/learn/verifiability.riv",
    animation: "Hover",
  },
  "Why-IrysVM": {
    src: "/assets/rive/learn/irys-vm.riv",
    animation: "Hover",
  },
  "Running-a-Node": {
    src: "/assets/rive/learn/running-a-node.riv",
    animation: "Hover",
  },
  "Matrix-Packaging-Overview": {
    src: "/assets/rive/learn/2d-packaging.riv",
    animation: "Hover",
  },
  "Efficient-Sampling-Overview": {
    src: "/assets/rive/learn/efficient-sampling.riv",
    animation: "Hover",
  },
  "Bundling-Transactions": {
    src: "/assets/rive/build/bundler.riv",
    animation: "Hover",
  },
  "Irys-Gateway": {
    src: "/assets/rive/learn/gateway.riv",
    animation: "Hover",
  },
  "Becoming-a-Miner-on-Irys": {
    src: "/assets/rive/learn/mining.riv",
    animation: "Hover",
  },
  // "Protocol-Overview": {
  //   src: "/assets/rive/learn/protocol-overview.riv",
  //   animation: "Hover",
  // },
  "Partitions-Overview": {
    src: "/assets/rive/learn/partitions.riv",
    animation: "Hover",
  },
  "Ledgers-Overview": {
    src: "/assets/rive/learn/ledgers.riv",
    animation: "Hover",
  },
  "Transactions-Overview": {
    src: "/assets/rive/learn/transactions.riv",
    animation: "Hover",
  },
  "Irys-Consensus-Overview": {
    src: "/assets/rive/learn/proof-of-work.riv",
    animation: "Hover",
  },
  "Fast-Finality": {
    src: "/assets/rive/learn/fast-finality.riv",
    animation: "Hover",
  },
  "Quickstart": {
    src: "/assets/rive/build/quickstart.riv",
    animation: "FlagAnim",
  },
  Overview: {
    src: "/assets/rive/build/overview.riv",
    animation: "Overview Anim",
  },
  Features: {
    src: "/assets/rive/build/features.riv",
    animation: "Features Anim",
  },
  "Testnet-/-Devnet": {
    src: "/assets/rive/build/networks.riv",
    animation: "NetworksAnim",
  },
  Explorer: {
    src: "/assets/rive/build/explorer.riv",
    animation: "Hover",
  },
  SDK: {
    src: "/assets/rive/build/sdk.riv",
    animation: "SDKAnim ",
  },
  "Irys-in-the-Browser": {
    src: "/assets/rive/build/browser.riv",
    animation: "BrowserAnim",
  },
  "Storage-CLI": {
    src: "/assets/rive/build/storage-cli.riv",
    animation: "StorageAnim",
  },
  "REST-API": {
    src: "/assets/rive/build/rest-api.riv",
    animation: "Hover",
  },
  "Downloading": {
    src: "/assets/rive/build/guides.riv",
    animation: "GuidesAnim",
  },
  Querying: {
    src: "/assets/rive/build/querying.riv",
    animation: "Querying",
  },
  Guides: {
    src: "/assets/rive/build/guides.riv",
    animation: "GuidesAnim",
  },
  Troubleshooting: {
    src: "/assets/rive/build/troubleshooting.riv",
    animation: "TroubleshootingAnim",
  },
  Migrating: {
    src: "/assets/rive/build/migrating.riv",
    animation: "MigratingAnim",
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
          className="flex justify-start items-center gap-2 !rounded-md w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ paddingLeft: 0, paddingTop: "4px", paddingBottom: "4px" }} // Override padding for the entire item
        >
          {icon && (
            <RiveIcon
              src={icon.src}
              animation={icon.animation}
              hovered={hovered}
              className="ml-0" // Ensure the icon starts at the left
            />
          )}
          <span className="pl-2">{title}</span> {/* Adjust padding to create spacing from the icon */}
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
        <meta name="twitter:image" content="/irys-open-graph.jpg" />
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
