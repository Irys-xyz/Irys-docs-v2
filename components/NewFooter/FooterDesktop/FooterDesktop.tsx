import { FooterLogo, IrysIcon } from "../../svg";

import IrysLogoText from "../../svg/IrysLogoText";
import Link from "next/link";
import { ReactNode } from "react";

const FooterDesktop = ({
  data,
  noPadding,
}: {
  data: {
    title: string;
    options: {
      name: string;
      href: string;
      label?: string;
      newTab?: boolean;
    }[];
    footer?: ReactNode;
  }[];
  noPadding?: boolean;
}) => {
  return (
    <>
      <footer
        className={`hidden items-start border-t border-timberwolf bg-seashell  font-backup font-satoshi antialiased xl:flex !text-black mt-10 ${noPadding ? "px-[24px]" : "px-[79px]"
          }`}
      >
        <section className="flex w-auto max-w-[513px] flex-col pt-[36px] leading-none">
          <Link href="/">
            <IrysLogoText className="cursor-pointer w-[140px]" />
          </Link>
          <p className="mt-[140px] whitespace-normal text-[62px] tracking-tighter lg:text-[31px] font-semibold">
            PROVENANCE <br />IS THE PROOF
          </p>
          <p className="mt-[47px] flex items-center gap-2 pr-4">
            <IrysIcon className='w-6 h-6' />
            {new Date().getFullYear()} Irys. All rights reserved.
          </p>
        </section>
        <section className="ml-auto flex h-[568px] min-w-[272px] gap-20">
          {data.map((definition) => {
            return (
              <div
                key={definition.title}
                className="mb-auto flex h-full flex-col border-l border-timberwolf pt-[36px] pl-[30px]"
              >
                <p className="text-[16px] font-bold">{definition.title}</p>
                <ul className="mt-[50px] flex flex-col gap-[10px]">
                  {definition.options.map((option) => {
                    return (
                      <li
                        key={option.name}
                        className="self-start hover:underline"
                      >
                        <Link
                          legacyBehavior
                          href={option.href}
                          className="whitespace-nowrap text-base"
                          rel="noreferrer"
                          passHref
                        >
                          <a target={option.newTab ? "_blank" : "_self"}>
                            {option.name}
                            {option.label && (
                              <span className="ml-[10px] rounded-full bg-black px-[10px] py-[5px] text-xs font-bold text-white">
                                {option.label}
                              </span>
                            )}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {definition.footer}
              </div>
            );
          })}
        </section>

        <section className="border-l border-timberwolf"></section>
      </footer>
    </>
  );
};

export default FooterDesktop;
