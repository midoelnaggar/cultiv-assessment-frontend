import { SVGProps } from "react";

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.14 11.027a2.083 2.083 0 0 1 0 2.946L20.223 36.89a2.083 2.083 0 0 1-2.946 0L6.86 26.473a2.083 2.083 0 1 1 2.946-2.946l8.944 8.943 21.444-21.443a2.083 2.083 0 0 1 2.946 0Z"
      fill="#2D3648"
    />
  </svg>
);

export default CheckIcon;
