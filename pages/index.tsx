"use client";

import Socials from "@/components/socials/socials";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import localFont from "next/font/local";
import Footer from "@/components/footer/footer";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
    },
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
    },
  ],
});

export default function Home() {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div
      className={`text-white relative overflow-hidden ${satoshi.className} pb-10`}
    >
      <AnimatePresence>
        {buttonHovered && (
          <motion.img
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "tween", duration: 0.2 } }}
            exit={{ x: 200 }}
            src="/assets/home/avatars/avatar-2-resized.png"
            alt=""
            className="absolute right-0 top-[20%] hidden md:block"
            width={242}
            height={373}
          />
        )}
      </AnimatePresence>

      <div className="absolute w-full">
        <img
          src="/assets/home/overlay.png"
          alt=""
          className="absolute -top-[1800px] overflow-clip -left-[250%] md:-left-[100%] lg:-left-[65%] xl:-left-[500px] 2xl:-left-60 min-w-[2500px]"
        />
      </div>

      <main className="container mx-auto my-[260px] relative flex flex-col gap-14 items-center justify-center max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
          className="text-5xl lg:text-7xl font-bold text-center"
        >
          Build With The Datachain
        </motion.h1>
        <motion.p
          className="px-10 md:px-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.35 } }}
        >
          Unleash Your Creativity, Build With Programmable Data
        </motion.p>
        <div className="flex flex-row gap-5">
          <motion.a
            href="/learn/learn-about-irys/what-is-irys"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            <div className="hover:bg-[#FF8451] transition-all group w-[213.57px] h-16 rounded-full custom-shadow border-[#FF8451] border p-2 flex items-center  text-white hover:text-black justify-center">
              <div className="uppercase gap-3 flex items-center justify-center font-bold tracking-tight">
                Learn
                <div>
                  <img
                    src="/assets/home/others/chevron.svg"
                    alt=""
                    className="group-hover:invert"
                  />
                </div>
              </div>
            </div>
          </motion.a>
          <motion.a
            href="/build/welcome-devs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            <div className="hover:bg-[#FF8451] transition-all group w-[213.57px] h-16 rounded-full custom-shadow border-[#FF8451] border p-2 flex items-center  text-white hover:text-black justify-center">
              <div className="uppercase gap-3 flex items-center justify-center font-bold tracking-tight">
                Build
                <div>
                  <img
                    src="/assets/home/others/chevron.svg"
                    alt=""
                    className="group-hover:invert"
                  />
                </div>
              </div>
            </div>
          </motion.a>
          <motion.a
            href="/mine"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            <div className="hover:bg-[#FF8451] transition-all group w-[213.57px] h-16 rounded-full custom-shadow border-[#FF8451] border p-2 flex items-center  text-white hover:text-black justify-center">
              <div className="uppercase gap-3 flex items-center justify-center font-bold tracking-tight">
                Mine
                <div>
                  <img
                    src="/assets/home/others/chevron.svg"
                    alt=""
                    className="group-hover:invert"
                  />
                </div>
              </div>
            </div>
          </motion.a>

        </div>
        <Socials />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          className="grid grid-cols-12 md:gap-x-7 px-5 customGradient rounded-2xl mx-7 md:mx-0"
        >
          <div className="relative col-span-12 justify-between items-center grid grid-cols-12 w-full">
            <div className="w-full absolute inset-0  mix-blend-color-dodge">
              <img src="/assets/home/frame.png" className="w-full" />
            </div>
            <div className="col-span-12 md:col-span-6 flex items-center justify-center relative md:hidden pt-14">
              <img src="/assets/home/irys-tech.svg" alt="" />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-10 items-start justify-center  p-7 md:p-12 ">
              <h2 className="font-bold text-2xl md:text-4xl tracking-tight">
                Why build on Irys?
              </h2>
              <p className="text-[#959595] leading-loose">
                At the core of our vision is the belief that developers should
                have the freedom to build fully onchain applications. The Irys
                L1 blockchain uniquely integrates verifiable compute and
                verifiable data, empowering developers to unleash their
                creativity and create seamless decentralized applications within
                a single blockchain ecosystem.
              </p>
            </div>
            <div className="col-span-6 items-center justify-center relative hidden md:flex">
              <img src="/assets/home/irys-tech.svg" alt="" />
            </div>
          </div>
          <div className="col-span-12 h-[1px] w-full bg-gradient-to-r from-transparent via-[#222222] to-transparent" />
          <div className="grid grid-cols-12 col-span-12 px-7 md:px-12">
            {/* <div className="col-span-12 md:col-span-4 pt-12 pr-8">
							<h2 className="font-bold text-2xl tracking-tight">Irys L1</h2>
							<p className="text-[#959595] pt-7 leading-loose">
								At the core of our vision is the belief that developers should have the freedom to build
								fully onchain applications.
								<br />
								<br />
								The Irys L1 blockchain uniquely integrates verifiable compute and verifiable data,
								empowering developers to unleash their creativity and create seamless decentralized
								applications within a single blockchain ecosystem.
							</p>
						</div> */}

            {/* <div className="col-span-12 md:col-span-4 px-0 md:px-8 md:border-x pt-12 border-[#222222] border-x-0 border-y md:border-y-0 mt-10 pb-10 md:mt-0 md:pb-0"> */}
            <div className="col-span-12 md:col-span-6 pt-12 pr-8">
              <h2 className="font-bold text-2xl tracking-tight">
                IrysVM + Programmable Data
              </h2>
              <p className="text-[#959595] pt-7 leading-loose">
                Programmable Data merges data with compute, enabling the
                creation of verifiable data applications onchain at internet
                scale.
                <br />
                <br />
                With programmable data, you can:
                <br />- Access uploaded transaction data within the VM.
                <br />- Prove and verify computations done onchain.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 pt-12 pl-0 md:pl-8">
              <h2 className="font-bold text-2xl tracking-tight">
                Permanent Data + Term Data
              </h2>
              <p className="text-[#959595] pt-7 leading-loose">
                True data ownership means you control the lifecycle of your data
                and only pay for the storage you need.
                <br />
                <br />- <b>Permanent Data:</b> Guaranteed to be retrievable
                forever.
                <br />- <b>Term Data:</b> You control how long it’s retrievable
                for.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <div className="border-t border-[#222222]">
        <div className="mx-auto container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
