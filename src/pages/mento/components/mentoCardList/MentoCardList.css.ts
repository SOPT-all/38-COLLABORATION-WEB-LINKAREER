import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '1.2rem',
  paddingRight: '1.6rem',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
