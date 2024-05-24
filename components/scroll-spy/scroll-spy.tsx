"use client";

import React, { useState } from "react";
import clsx from "clsx";
import CurrentSectionScrollCircle from "@/public/assets/scroll-spy/ellipse.svg";
import Image from "next/image";

const ScrollSpyWrapper = ({ children }: any) => {
  const [currentSection, setCurrentSection] = useState(0);

  React.useEffect(() => {
    if (!window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(Number(entry.target.id.split("-")[1]));
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="text-white fixed right-20 top-[calc(50%-140px)] flex gap-12 flex-col">
        {/* fixed center of screen */}

        {Array.from({ length: 6 }).map((_, index) => (
          <a
            key={index}
            href={`#section-${index}`}
            className={clsx("bg-white w-1 h-1 relative", {
              "opacity-100": index <= currentSection,
              "opacity-40": index > currentSection,
              "active-sonar btn-sonar": index === currentSection,
            })}
          >
            {index === currentSection && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22px] h-[22px] ">
                <Image src={CurrentSectionScrollCircle} alt="current section" />
              </div>
            )}
          </a>
        ))}

        {/* vertical line absolute */}
        <div
          className="
      absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[.8px] bg-white/40
    "
        ></div>
        {/* make the same line absolute, but the height is until the currentSection index */}
        <div
          className="absolute transition-all ease-in-out top-0 left-1/2 transform -translate-x-1/2 w-[.8px] bg-white"
          style={{ height: `calc(${currentSection} * 52px)` }}
        ></div>
      </div>

      <div>{children}</div>
    </>
  );
};

export default ScrollSpyWrapper;
