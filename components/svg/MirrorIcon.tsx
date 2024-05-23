import { SVGAttributes } from 'react'

const MirrorIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="20"
      fill="none"
      viewBox="0 0 17 20"
      {...props}
    >
      <g clipPath="url(#mirror)">
        <mask id="mirror_3" fill="#fff">
          <path d="M0 0h17v18a2 2 0 01-2 2H2a2 2 0 01-2-2V0z"></path>
        </mask>
        <path
          stroke="currentColor"
          strokeWidth="6"
          d="M0 0h17v18a2 2 0 01-2 2H2a2 2 0 01-2-2V0z"
          mask="url(#mirror_3)"
        ></path>
      </g>
      <g clipPath="url(#mirror_2)">
        <path
          stroke="currentColor"
          strokeWidth="3"
          d="M15.5 10.55c0 4.933-3.353 8.5-7 8.5s-7-3.567-7-8.5c0-4.932 3.353-8.5 7-8.5s7 3.568 7 8.5z"
        ></path>
      </g>
      <rect
        width="13"
        height="16"
        x="2"
        y="3"
        fill="currentColor"
        rx="4"
      ></rect>
      <defs>
        <clipPath id="mirror">
          <path fill="#fff" d="M0 0H17V9H0z" transform="translate(0 11)"></path>
        </clipPath>
        <clipPath id="mirror_2">
          <path fill="#fff" d="M0 0H17V11H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default MirrorIcon
