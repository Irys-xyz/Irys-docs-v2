import { SVGAttributes } from 'react'

const ParenthesisIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="17"
      fill="none"
      viewBox="0 0 15 17"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 8.397c0 4.041 1.404 6.597 2.988 8.397h1.386v-.261c-1.566-1.98-2.853-4.356-2.853-8.136 0-3.78 1.296-6.156 2.853-8.136V0H2.988C1.404 1.8 0 4.356 0 8.397zM14.351 8.397c0-4.041-1.404-6.597-2.988-8.397H9.977v.261c1.566 1.98 2.853 4.356 2.853 8.136 0 3.78-1.296 6.156-2.853 8.136v.261h1.386c1.584-1.8 2.988-4.356 2.988-8.397z"
      ></path>
    </svg>
  )
}

export default ParenthesisIcon
