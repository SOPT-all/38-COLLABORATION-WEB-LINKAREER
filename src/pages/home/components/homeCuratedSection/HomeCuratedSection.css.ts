import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  backgroundColor: vars.color.blue50,
  padding: '2.4rem 0',
});

export const titleContainer = style({
  ...typography.title_b_20,
  marginLeft: '1.6rem',
});

export const title = style({
  color: vars.color.gray900,
});

export const titleBlue = style({
  color: vars.color.blue500,
});

export const subTitle = style({
  color: vars.color.gray700,
  ...typography.caption_m_12,
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
