import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { zIndex } from '@styles/tokens/zIndex';

export const tabBar = style({
  position: 'sticky',
  zIndex: zIndex.sticky,
  top: '6rem',
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
