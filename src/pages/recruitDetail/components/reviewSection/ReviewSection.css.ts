import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  backgroundColor: color.white,
  padding: '2.4rem 1.6rem',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const sectionTitle = style({
  ...typography.title_b_20,
  color: color.blue500,
});

export const moreButton = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  ...typography.body_r_14,
  color: color.gray500,
});
