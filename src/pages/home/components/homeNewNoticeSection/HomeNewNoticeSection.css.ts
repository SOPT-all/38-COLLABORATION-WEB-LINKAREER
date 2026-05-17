import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  margin: '4.8rem 0',
  width: '100%',
});

export const titleContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...typography.title_b_20,
  margin: '0 1.6rem',
});

export const title = style({
  color: vars.color.gray900,
});

export const titleBlue = style({
  color: vars.color.blue500,
});

export const updateTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  color: vars.color.gray500,
  ...typography.body_r_14,
  selectors: {
    '&::before': {
      display: 'block',
      borderRadius: '50%',
      backgroundColor: vars.color.blue500,
      width: '0.6rem',
      height: '0.6rem',
      content: '',
    },
  },
});

export const chipContainer = style({
  display: 'flex',
  gap: '0.8rem',
  marginLeft: '1.6rem',
});

export const cardContainer = style({
  display: 'flex',
  gap: '1.6rem',
  padding: '0 1.6rem',
  width: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const cardItem = style({
  flexShrink: 0,
  cursor: 'pointer',
});
