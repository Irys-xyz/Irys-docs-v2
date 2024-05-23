import { SVGAttributes } from 'react'

const ChevronDownIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="9"
      fill="none"
      viewBox="0 0 13 9"
      {...props}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth="0.183"
        d="M2.823.953L2.796.908H.834l.088.14 4.629 7.334.026.043h1.216l.027-.038 5.255-7.334.103-.145h-1.97l-.028.04L6.26 6.7 2.822.953z"
      ></path>
    </svg>
  )
}

export default ChevronDownIcon
