import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  gap: '0.3rem',
  backgroundColor: vars.color.gray50,
  padding: '1rem 1.9rem',
});

export const inputField = style({
  flex: 1,
  ...typography.body_r_14,
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: '0.8rem',
  backgroundColor: vars.color.white,
  padding: '0.8rem 1.6rem',
  height: '3.8rem',
  selectors: {
    '&::placeholder': {
      color: vars.color.gray400,
    },
    '&:focus': {
      outline: 'none',
    },
  },
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.6rem',
  backgroundColor: vars.color.blue500,
  padding: '0.8rem 1.2rem',
  width: '5.6rem',
  height: '3.8rem',
  color: vars.color.white,
  ...typography.caption_m_12,
});
