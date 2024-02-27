import { SVGProps } from "react";

const MoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.417 29.167a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.334ZM25 29.167a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.334ZM35.417 25a4.167 4.167 0 1 0 8.333 0 4.167 4.167 0 0 0-8.333 0Z"
      fill="#2D3648"
    />
  </svg>
);

export default MoreIcon;
