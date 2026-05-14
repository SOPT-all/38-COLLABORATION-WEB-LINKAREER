import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const tabBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  borderBottom: `1px solid ${vars.color.gray100}`,
  backgroundColor: vars.color.white,
  padding: `0 1.6rem`,
  overflowX: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
