import type { SVGProps } from 'react';
const SvgIcWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1A1D20"
      d="M19.25 19c0-.69-.56-1.25-1.25-1.25H6a1.25 1.25 0 1 0 0 2.5h12c.69 0 1.25-.56 1.25-1.25M4 10.75a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm18 0a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5zM3.47 4.97a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06m16 0a.75.75 0 1 1 1.06 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06zm-8.22-.47v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0m5 8.5a4.25 4.25 0 0 0-8.5 0v3.25h8.5zm1.5 3.25H18a2.75 2.75 0 1 1 0 5.5H6a2.75 2.75 0 1 1 0-5.5h.25V13a5.75 5.75 0 1 1 11.5 0z"
    />
  </svg>
);
export default SvgIcWarning;
