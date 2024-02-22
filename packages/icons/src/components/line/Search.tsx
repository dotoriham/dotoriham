import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15.7113 10.4295C15.7113 13.1755 13.4466 15.4215 10.6281 15.4215C7.80955 15.4215 5.54492 13.1755 5.54492 10.4295C5.54492 7.6836 7.80955 5.4375 10.6281 5.4375C13.4466 5.4375 15.7113 7.6836 15.7113 10.4295Z"
      stroke="currentColor"
      strokeWidth={1.5}
      vectorEffect="non-scaling-stroke"
    />
    <line
      x1={0.75}
      y1={-0.75}
      x2={5.54627}
      y2={-0.75}
      transform="matrix(0.712652 0.701517 -0.712652 0.701517 13.4326 14.8955)"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSearch;