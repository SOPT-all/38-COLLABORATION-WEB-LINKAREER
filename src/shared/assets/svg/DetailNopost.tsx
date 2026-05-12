import type { SVGProps } from 'react';
const SvgDetailNopost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 80 80"
    {...props}
  >
    <g
      fillRule="evenodd"
      clipPath="url(#detail_nopost_svg__a)"
      clipRule="evenodd"
    >
      <path
        fill="#F2F2F3"
        d="M12.547 69.741V10.56c0-1.056.851-1.91 1.903-1.91h37.069L67.547 24.73v45.012c0 1.055-.852 1.91-1.903 1.91H14.45a1.905 1.905 0 0 1-1.903-1.91"
      />
      <path fill="#C4C5C6" d="M53.9 25H68L52 9v14.1c0 1.05.85 1.9 1.9 1.9" />
    </g>
    <defs>
      <clipPath id="detail_nopost_svg__a">
        <path fill="#fff" d="M0 0h80v80H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDetailNopost;
