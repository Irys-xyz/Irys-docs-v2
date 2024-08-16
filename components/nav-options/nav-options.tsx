import React from "react";
import LearnIcon from "../svg/navbar/learn";
import BuildIcon from "../svg/navbar/build";
import MineIcon from "../svg/navbar/mine";
import GithubIcon from "../svg/navbar/github";

type Props = {};

const NavOptions = (props: Props) => {
  return (
    <div className="ml-auto">
      <ul className="flex gap-1">
        <li className="group cursor-pointer hover:bg-[#FF8451] hover:text-white rounded-lg px-4 py-2 dark:text-[#BABABA] flex items-center justify-center gap-2 bg-[#F2F2F2] dark:bg-[#090909]">
          <LearnIcon className="text-[#4F4F4F] group-hover:text-white" />
          <p className="hidden md:flex">Learn</p>
        </li>
        <li className="group cursor-pointer hover:bg-[#FF8451] hover:text-white rounded-lg px-4 py-2 dark:text-[#BABABA] flex items-center justify-center gap-2 bg-[#F2F2F2] dark:bg-[#090909]">
          <BuildIcon className="text-[#4F4F4F] group-hover:text-white" />
          <p className="hidden md:flex">Build</p>
        </li>
        <li className="group cursor-pointer hover:bg-[#FF8451] hover:text-white rounded-lg px-4 py-2 dark:text-[#BABABA] flex items-center justify-center gap-2 bg-[#F2F2F2] dark:bg-[#090909]">
          <MineIcon className="text-[#4F4F4F] group-hover:text-white" />
          <p className="hidden md:flex">Mine</p>
        </li>
        <li className="font-bold group cursor-pointer hover:bg-[#FF8451] hover:text-white rounded-lg px-4 py-2 text-white flex items-center justify-center gap-2 bg-[#111111]">
          <GithubIcon className="text-white group-hover:text-white" />
          <p className="hidden md:flex">Github</p>
        </li>
      </ul>
    </div>
  );
};

export default NavOptions;
