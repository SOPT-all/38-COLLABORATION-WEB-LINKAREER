import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '1.6rem',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const companyName = style({
  ...typography.body_r_14,
  color: color.gray500,
});

export const title = style({
  ...typography.title_b_20,
  color: color.gray900,
});

export const tagRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.6rem',
  marginBottom: '0.5rem',
});

export const conditionTable = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const conditionRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const conditionLabel = style({
  ...typography.body_r_14,
  flexShrink: 0,
  width: '6rem',
  color: color.gray500,
});

export const conditionValue = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  ...typography.body_r_14,
  color: color.gray900,
});
