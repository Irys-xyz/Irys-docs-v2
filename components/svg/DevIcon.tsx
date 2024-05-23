import { SVGAttributes } from 'react'

const DevIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="11"
      fill="none"
      viewBox="0 0 18 11"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.15"
        d="M10.961 8.509l-.036.022v1.605l.115-.073 6-3.786.035-.022V5.26l-.031-.022-6-4.299-.119-.085v1.613l.033.022 4.705 3.208-4.702 2.812zM7.038 2.491l.037-.022V.864L6.96.937l-6 3.786-.035.022V5.74l.031.022 6 4.299.119.085V8.533l-.033-.022-4.705-3.208L7.038 2.49z"
      ></path>
    </svg>
  )
}

export default DevIcon
