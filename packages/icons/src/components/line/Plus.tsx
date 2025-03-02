import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 -960 960 960"
    width="1em"
    fill="currentColor"
    {...props}>
    <path
      d="M450-450H220v-60h230v-230h60v230h230v60H510v230h-60v-230Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);
export default SvgPlus;
