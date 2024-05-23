import { SVGAttributes } from 'react'

const MenuIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="17"
      fill="none"
      viewBox="0 0 26 17"
      {...props}
    >
      <path stroke="currentColor" strokeWidth="2" d="M0 1.5L26 1.5"></path>
      <path stroke="currentColor" strokeWidth="2" d="M0 15.5L26 15.5"></path>
    </svg>
  )
}

export default MenuIcon
