import React from "react";
import LearnIcon from "../svg/navbar/learn";
import BuildIcon from "../svg/navbar/build";
import MineIcon from "../svg/navbar/mine";
import GithubIcon from "../svg/navbar/github";
import SunIcon from "../svg/navbar/sun";
import MoonIcon from "../svg/navbar/moon";
import Link from "next/link";

// Type for individual nav item
type NavItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  isHighlighted?: boolean;
  onClick?: () => void;
  className?: string;
};

// NavItem component to render individual navigation items
const NavItem: React.FC<NavItemProps> = ({
  Icon,
  text,
  isHighlighted = false,
  onClick,
  className,
}) => {
  const baseClasses =
    "group cursor-pointer flex items-center justify-center gap-2 rounded-lg px-4 py-2";
  const hoverClasses =
    "dark:hover:bg-[#FF8451] hover:bg-[#FF8451] hover:text-white dark:hover:text-white";
  const textColorClasses =
    "dark:text-[#BABABA] text-[#2C2C2C] group-hover:text-white";
  const darkBackgroundClasses = "bg-[#F2F2F2] dark:bg-[#090909]";
  const highlightClasses = isHighlighted
    ? `font-bold cursor-pointer text-white bg-[#111111] px-4 py-2 flex gap-2 items-center justify-center rounded-lg ${hoverClasses} ${className}`
    : `${baseClasses} ${hoverClasses} ${textColorClasses} ${darkBackgroundClasses} ${className}`;

  return (
    <li className={highlightClasses} onClick={onClick}>
      <Icon
        className={
          isHighlighted ? "text-white" : "text-[#4F4F4F] group-hover:text-white"
        }
      />
      {text && <p className="hidden md:flex">{text}</p>}
    </li>
  );
};

// ThemeToggle component to handle theme switching
const ThemeToggle: React.FC = () => {
  const handleClick = () => {
    const html = document.querySelector(".dark, .light");
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      html?.classList.add("light");
      html?.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      html?.classList.add("dark");
      html?.classList.remove("light");
    }
  };

  return (
    <li
      className="group cursor-pointer hover:text-white dark:hover:text-white border border-[#EAEAEA] dark:border-[#0B0B0B] rounded-lg  w-[40px] dark:text-[#BABABA] flex items-center justify-center gap-2 bg-[#F2F2F2] dark:bg-[#090909] text-black hover:bg-[#090909] dark:hover:bg-[#F2F2F2] dark:hover:text-black"
      onClick={handleClick}
    >
      <MoonIcon className="text-[#4F4F4F] group-hover:text-black dark:flex hidden" />
      <SunIcon className="text-[#777777] group-hover:text-white dark:hidden" />
    </li>
  );
};

// Main NavOptions component
const NavOptions: React.FC = () => {
  return (
    <div className="ml-auto">
      <ul className="flex gap-1">
        <Link href={"/learn/learn-about-irys/what-is-irys"}>
          <NavItem Icon={LearnIcon} text="Learn" />
        </Link>
        <Link href={"/build/welcome-builders"}>
          <NavItem Icon={BuildIcon} text="Build" />
        </Link>
        {/* <Link href={"/mine"}>
          <NavItem Icon={MineIcon} text="Mine" />
        </Link> */}
        <Link href="https://github.com/Irys-xyz" target="_blank">
          <NavItem
            Icon={GithubIcon}
            text="Github"
            isHighlighted
            className="ml-3"
          />
        </Link>
        <ThemeToggle />
      </ul>
    </div>
  );
};

export default NavOptions;
