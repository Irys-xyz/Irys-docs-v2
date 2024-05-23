import { useEffect, useState } from 'react'

import Heading from '../Heading'

const useSectionTitle = () => {
  return {}
}

const SectionTitle = ({ title }: { title: string }) => {
  const { } = useSectionTitle()

  return (
    <>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="28"
          fill="none"
          viewBox="0 0 34 28"
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.264"
            d="M.95 15.04l-.082.035V18.113l.185-.081 16.594-7.293.08-.035V8.774l-.074-.036L1.06.458.868.363V3.408l.075.036 13.015 6.18L.949 15.04zM33 27.557h.132v-2.52H17.084v2.52H33z"
          ></path>
        </svg>
        <Heading level={3}>{title}</Heading>
        {/* <h2 className='text-3xl lg:text-4xl font-satoshi'>
          {
            title
          }
        </h2> */}
      </div>
    </>
  )
}

export default SectionTitle
