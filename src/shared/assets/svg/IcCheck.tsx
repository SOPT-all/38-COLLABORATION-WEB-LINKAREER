import type { SVGProps } from "react";
const SvgIcCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1A1D20"
      d="M19.47 5.47a.75.75 0 1 1 1.06 1.06l-11 11a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L9 15.94z"
    />
  </svg>
);
export default SvgIcCheck;
