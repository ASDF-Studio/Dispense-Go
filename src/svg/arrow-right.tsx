import * as React from "react"
import { SVGProps } from "react"
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={49}
    fill="none"
    {...props}
  >
    <path
      fill="#008254"
      d="m55.667 26.299-20.75 22c-.375.5-1 .625-1.5.625s-1-.125-1.375-.5a1.86 1.86 0 0 1-.125-2.75l17.5-18.75H2.292c-1.125 0-2-.875-2-1.875s.875-2.125 2-2.125h47.125l-17.5-18.625c-.75-.75-.75-2 .125-2.75s2.125-.75 2.875.125l20.75 22c.75.75.75 1.875 0 2.625Z"
    />
  </svg>
)
export default ArrowRight
