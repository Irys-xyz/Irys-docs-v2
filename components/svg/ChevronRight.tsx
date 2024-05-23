import { SVGAttributes } from 'react'

const ChevronRight = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="20"
      fill="none"
      viewBox="0 0 14 20"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.3"
        d="M.923 16.018l-.073.043V19.272l.23-.145 12-7.573.07-.045V9.521l-.063-.045-12-8.598L.85.708v3.225l.066.045 9.41 6.416-9.403 5.624z"
      ></path>
    </svg>
  )
}

export default ChevronRight
