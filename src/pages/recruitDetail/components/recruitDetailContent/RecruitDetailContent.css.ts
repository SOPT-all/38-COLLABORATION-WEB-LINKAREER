import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const wrapper = style({
  padding: '2.8rem 1.6rem',
});

export const mainTitle = style({
  ...typography.title_b_18,
  marginBottom: '1.6rem',
  color: color.gray900,
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const sectionTitle = style({
  ...typography.title_b_18,
  color: color.gray900,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const listItem = style({
  ...typography.body_r_14,
  paddingLeft: '1.2rem',
  color: color.gray700,
  selectors: {
    '&::before': {
      content: '"• "',
    },
  },
});

export const periodText = style({
  ...typography.body_r_14,
  color: color.gray700,
});
