import { SVGProps } from "react"

const Loading = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={200} viewBox="0 0 200 200" {...props}>
    <path fill="inherit" stroke="inherit" strokeWidth={15} d="M25 85h30v30H25z">
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur={2}
        values="1;0;1;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin={-0.4}
      />
    </path>
    <path fill="inherit" stroke="inherit" strokeWidth={15} d="M85 85h30v30H85z">
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur={2}
        values="1;0;1;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin={-0.2}
      />
    </path>
    <path
      fill="inherit"
      stroke="inherit"
      strokeWidth={15}
      d="M145 85h30v30h-30z"
    >
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur={2}
        values="1;0;1;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin={0}
      />
    </path>
  </svg>
)

export default Loading;
