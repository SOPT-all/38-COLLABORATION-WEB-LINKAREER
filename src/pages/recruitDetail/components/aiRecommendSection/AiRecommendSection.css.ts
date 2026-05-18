import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  backgroundColor: vars.color.white,
  padding: '2.4rem 1.6rem',
});

export const sectionTitle = style({
  ...typography.title_b_20,
  marginBottom: '0.8rem',
  color: vars.color.gray900,
});
