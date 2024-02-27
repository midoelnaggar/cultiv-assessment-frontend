import { SVGProps } from "react";

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.083 10.417a2.083 2.083 0 0 0-4.166 0v12.5h-12.5a2.083 2.083 0 0 0 0 4.166h12.5v12.5a2.083 2.083 0 1 0 4.166 0v-12.5h12.5a2.083 2.083 0 1 0 0-4.166h-12.5v-12.5Z"
      fill="#2D3648"
    />
  </svg>
);

export default AddIcon;
