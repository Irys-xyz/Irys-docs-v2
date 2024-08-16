import Link from "next/link";
import React from "react";
import SvgIrysLogo from "@/public/assets/logo/irys-white.webp";
import Image from "next/image";
import SOCIAL_MEDIAS_FOOTER from "./footer-socials";

type Props = {};

const Footer = (props: Props) => {
  const OPTIONS: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }[] = [
    {
      title: "OVERVIEW",
      items: [
        {
          title: "What is Irys?",
          href: "/learn-about-irys/what-is-irys",
        },
        {
          title: "What is A Datachain?",
          href: "/learn-about-irys/what-is-datachain",
        },
        {
          title: "Build With Us!",
          href: "/build-with-us",
        },
      ],
    },
    {
      title: "TOOLS FOR ARWEAVE",
      items: [
        {
          title: "SDK",
          href: "https://arweave-tools.irys.xyz/irys-sdk",
        },
        {
          title: "Query Package",
          href: "https://arweave-tools.irys.xyz/querying/query-package",
        },
        {
          title: "CLI",
          href: "https://arweave-tools.irys.xyz/cli",
        },
      ],
    },
  ];

  return (
    <footer className="max-w-[1392px] flex flex-col gap-28 my-20 px-7 md:px-0 mx-auto pb-10 -mb-10">
      <div className="grid grid-cols-12 text-white light gap-y-20">
        <div className="md:col-span-4 lg:col-span-4 col-span-12 ml-5">
          <Image src={SvgIrysLogo} alt="Irys Logo" width={99} />
        </div>
        {OPTIONS.map((option) => (
          <div
            key={option.title}
            className="col-span-6 md:col-span-4 lg:col-span-4 text-base flex flex-col gap-6"
          >
            <div className="font-bold">{option.title}</div>
            <ul className="font-light text-[#B7B7B7] leading-4 flex flex-col gap-5">
              {option.items.map((item) => (
                <Link href={item.href} key={item.href}>
                  <li className="hover:underline">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 md:gap-14">
        <div className="bg-[#0B0B0B] grid grid-cols-12 rounded-xl">
          <div className="col-span-12 md:col-span-6 flex gap-4 flex-col p-7 md:p-12">
            <h2 className="text-white text-3xl font-bold">
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
                className="relative isolated cursor-pointer col-span-12 md:col-span-4 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#171717] to-[#08080833]"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="text-[#B7B7B7] text-center md:text-start">
          {new Date().getFullYear()} Irys. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
