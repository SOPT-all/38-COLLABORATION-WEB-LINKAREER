import type { SVGProps } from 'react';
const SvgIcCalender = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1A1D20"
      d="M20.25 10.75H3.75V19A2.25 2.25 0 0 0 6 21.25h12A2.25 2.25 0 0 0 20.25 19zm-4.78 1.72a.75.75 0 1 1 1.06 1.06l-5.146 5.147a1.25 1.25 0 0 1-1.768 0L7.47 16.53a.75.75 0 1 1 1.06-1.06l1.97 1.97zM15.25 6V4.75h-6.5V6a.75.75 0 0 1-1.5 0V4.75H6A2.25 2.25 0 0 0 3.75 7v2.25h16.5V7A2.25 2.25 0 0 0 18 4.75h-1.25V6a.75.75 0 0 1-1.5 0m6.5 13A3.75 3.75 0 0 1 18 22.75H6A3.75 3.75 0 0 1 2.25 19V7A3.75 3.75 0 0 1 6 3.25h1.25V2a.75.75 0 0 1 1.5 0v1.25h6.5V2a.75.75 0 0 1 1.5 0v1.25H18A3.75 3.75 0 0 1 21.75 7z"
    />
  </svg>
);
export default SvgIcCalender;
