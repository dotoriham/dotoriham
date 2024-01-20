import { SVGProps } from 'react';
const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}>
    <rect x={5} y={5} width={14} height={14} fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.77778 4H18.2222C19.2 4 20 4.8 20 5.77778V18.2222C20 19.2 19.2 20 18.2222 20H5.77778C4.8 20 4 19.2 4 18.2222V5.77778C4 4.8 4.8 4 5.77778 4ZM18.6667 18.6667V5.33333H5.33333V18.6667H18.6667Z"
      fill="#AAAAAA"
    />
  </svg>
);
export default SvgCheckbox;
