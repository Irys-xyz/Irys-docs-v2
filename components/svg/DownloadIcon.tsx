import { SVGAttributes } from 'react'

const DownloadIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      fill="none"
      viewBox="0 0 16 15"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.373 9.004v3.41H1.672v-3.41H0v5.116h15.045V9.004h-1.671z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.36 7.53V.88H6.685v6.65L4.194 5.085 3.009 6.247l4.493 4.412 4.534-4.412-1.185-1.163-2.49 2.447z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default DownloadIcon
