import Link from "next/link";
import React from "react";
import SvgIrysLogo from "@/public/assets/logo/irys-white.webp";
import Image from "next/image";
import SOCIAL_MEDIAS_FOOTER from "./footer-socials";

// Define the type for the new prop
type Props = {
  bgColor?: "black" | "white"; // Optional prop to specify background color
};

// Define the types for the footer options
type FooterOption = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

// Define the footer options as a constant outside the component
const FOOTER_OPTIONS: FooterOption[] = [
  {
    title: "OVERVIEW",
    items: [
      { title: "What is Irys?", href: "/learn-about-irys/what-is-irys" },
      {
        title: "What is A Datachain?",
        href: "/learn-about-irys/what-is-datachain",
      },
      { title: "Build With Us!", href: "/build-with-us" },
    ],
  },
  {
    title: "TOOLS FOR ARWEAVE",
    items: [
      { title: "SDK", href: "https://arweave-tools.irys.xyz/irys-sdk" },
      {
        title: "Query Package",
        href: "https://arweave-tools.irys.xyz/querying/query-package",
      },
      { title: "CLI", href: "https://arweave-tools.irys.xyz/cli" },
    ],
  },
];

const Footer = ({ bgColor }: Props) => {
  // Helper function to render a list of links
  const renderLinks = (items: { title: string; href: string }[]) => (
    <ul
      className={[
        "font-light dark:text-[#B7B7B7] text-black leading-4 flex flex-col gap-5",
        bgColor === "black" ? "!text-white" : "",
      ].join(" ")}
    >
      {items.map((item) => (
        <Link key={item.href} href={item.href} target="_blank">
          <li className="hover:underline">{item.title}</li>
        </Link>
      ))}
    </ul>
  );

  // Determine the footer background, text color, and border color based on the bgColor prop
  const bgClass =
    bgColor === "black"
      ? "bg-black"
      : bgColor === "white"
      ? "bg-white"
      : "dark:bg-black bg-white";
  const textClass =
    bgColor === "black"
      ? "text-white"
      : bgColor === "white"
      ? "text-black"
      : "dark:text-white text-black";
  const borderClass =
    bgColor === "black"
      ? "border-white/20"
      : bgColor === "white"
      ? "border-black/20"
      : "dark:border-white/20 border-black/20";

  return (
    <footer
      className={`flex flex-col gap-28 py-20 w-full px-4 md:px-4 2xl:px-0 border-t ${borderClass} mt-10 ${bgClass}`}
    >
      <div
        className={`flex flex-col md:flex-row justify-between ${textClass} light gap-y-20 max-w-[1440px] mx-auto w-full`}
      >
        <div className="md:col-span-4 lg:col-span-4 col-span-12 ml-5">
          <Image
            src={SvgIrysLogo}
            alt="Irys Logo"
            width={99}
            className={`invert ${
              bgColor === "black" ? "invert-0" : "dark:invert-0"
            }`}
          />
        </div>
        <div className="flex gap-20 flex-col md:flex-row ml-5">
          {FOOTER_OPTIONS.map((option) => (
            <div
              key={option.title}
              className="col-span-12 md:col-span-4 lg:col-span-4 text-base flex flex-col gap-6"
            >
              <div className="font-bold">{option.title}</div>
              {renderLinks(option.items)}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col gap-8 md:gap-14 w-full max-w-[1440px] mx-auto ${textClass}`}
      >
        <div
          className={`dark:bg-[#0B0B0B] bg-[#F5F5F5] grid grid-cols-12 rounded-xl w-full ${
            bgColor === "black" ? "!bg-[#0B0B0B]" : "bg-[#F5F5F5]"
          }`}
        >
          <div className="col-span-12 md:col-span-6 flex gap-4 flex-col p-7 md:p-12">
            <h2 className="text-3xl font-bold text-center md:text-start">
              Join the Irys Community
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 gap-2 flex items-center justify-center p-12">
            {SOCIAL_MEDIAS_FOOTER.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative isolated cursor-pointer col-span-12 md:col-span-4 w-14 h-14 rounded-xl flex items-center justify-center  bg-black dark:bg-gradient-to-b from-[#171717] to-[#08080833]"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        <div className={`text-center md:!text-start ${textClass}`}>
          {new Date().getFullYear()} Irys. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
