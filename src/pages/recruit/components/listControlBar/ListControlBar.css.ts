import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.6rem',
  backgroundColor: vars.color.white,
  padding: '0.8rem 1.6rem',
});

export const count = styleVariants({
  default: {
    ...typography.caption_r_12,
    color: vars.color.gray500,
  },
  strong: {
    ...typography.caption_m_12,
    color: vars.color.gray900,
  },
});

export const rightContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const checkboxContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.4rem',
});

export const checkboxLabel = style({
  ...typography.caption_m_12,
  color: vars.color.gray900,
});

export const divider = style({
  backgroundColor: vars.color.gray200,
  width: '0.1rem',
  height: '1.4rem',
});
