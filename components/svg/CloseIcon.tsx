import { SVGAttributes } from 'react'

const CloseIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.53 14L6.53 8.817c.054-.067.121-.134.256-.134.134 0 .202.067.255.134L10.985 14h2.53v-.539l-5.007-6.38L13.65.565V0h-2.504l-3.89 5.048c-.054.067-.121.135-.256.135s-.202-.068-.256-.135L2.894 0H.377v.538l4.9 6.247L0 13.46V14h2.53z"
      ></path>
    </svg>
  )
}

export default CloseIcon
