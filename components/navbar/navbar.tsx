import React from "react";
import Image from "next/image";
import IrysEye from "@/public/assets/navbar/irys-eye.svg";
import Search from "@/public/assets/navbar/search.svg";
import GlitchMenu from "@/components/navbar/glitch-menu";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between backdrop-blur-md">
        <div className="text-5xl text-white p-9">
          <Image src={IrysEye} alt="Irys Eye" />
        </div>
        <GlitchMenu />
        <div className="text-5xl text-white p-9">
          <Image src={Search} alt="Irys Eye" />
        </div>
      </nav>

      <div className="relative">
        <div className="absolute inset-0 h-[1px] bg-white/15"></div>
        <div
          className="opacity-40 absolute inset-0 h-[1px] z-10 ease-in-out"
          style={{
            backgroundColor: "transparent",
            animation: "lineDrawToRight 1.5s forwards",
            // animationDelay: "1s",
          }}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
