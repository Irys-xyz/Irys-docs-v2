import { SVGAttributes } from 'react'

const SearchIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
      viewBox="0 0 21 21"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.253"
        d="M16.23 8.854l.005.006v-.307a7.682 7.682 0 00-15.362 0h0a7.68 7.68 0 007.681 7.679c1.893 0 3.607-.709 4.945-1.843l5.697 5.7.09.09.089-.09.715-.714.09-.09-.09-.09-5.697-5.7c1.074-1.265 1.766-2.866 1.836-4.641zM8.553 14.97a6.428 6.428 0 01-6.416-6.416 6.425 6.425 0 016.416-6.416 6.423 6.423 0 016.416 6.416 6.426 6.426 0 01-6.416 6.416z"
      ></path>
    </svg>
  )
}

export default SearchIcon
