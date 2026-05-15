import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  backgroundColor: vars.color.white,
  padding: '0.8rem 0',
});

export const icContainer = style({
  padding: '0.4rem 0.4rem 0.4rem 1.6rem',
});

export const icCircle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: vars.color.gray50,
  width: '3.8rem',
  height: '3.8rem',
});

export const filterContainer = style({
  display: 'flex',
  gap: '0.6rem',
  overflowX: 'auto',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
