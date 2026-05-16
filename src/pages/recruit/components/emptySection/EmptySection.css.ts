import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem',
  minHeight: '21.4rem',
});

export const text = style({
  ...typography.body_b_14,
  color: vars.color.gray700,
});
