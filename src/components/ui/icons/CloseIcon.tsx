import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.161 24.215a2.083 2.083 0 1 0-2.946 2.946L33.054 36l-8.84 8.839a2.083 2.083 0 0 0 2.947 2.946L36 38.946l8.839 8.84a2.083 2.083 0 1 0 2.946-2.947L38.946 36l8.839-8.839a2.083 2.083 0 1 0-2.946-2.946l-8.84 8.839-8.838-8.84Z"
      fill="#2D3648"
    />
  </svg>
);

export default CloseIcon;
