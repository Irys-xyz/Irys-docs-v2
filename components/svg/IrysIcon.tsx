import React, { SVGAttributes } from "react";

const IrysIcon = (props: SVGAttributes<SVGElement>) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="280"
      height="140"
      fill="none"
      viewBox="0 0 280 140"
      {...props}
    >
      <path
        fill="currentColor"
        d="M140 140c16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30z"
      ></path>
      <path
        fill="currentColor"
        d="M280 140h-40c0-55.14-44.86-100-100-100S40 84.86 40 140H0C0 62.8 62.8 0 140 0s140 62.8 140 140z"
      ></path>
    </svg>
  );
}

export default IrysIcon;