import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '0 1.6rem 2.4rem',
});

export const sectionTitle = style({
  ...typography.body_sb_16,
  color: vars.color.gray900,
});

export const imageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const imageCollapsed = style({
  maxHeight: '12rem',
  overflow: 'hidden',
});

export const image = style({
  objectFit: 'cover',
  width: '100%',
});
