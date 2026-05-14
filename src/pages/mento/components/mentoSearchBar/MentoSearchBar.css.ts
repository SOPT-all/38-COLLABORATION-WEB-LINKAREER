import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  gap: '0.3rem',
  margin: '1rem 1.9rem',
  height: '3.8rem',
});

export const inputField = style({
  flex: 1,
  ...typography.body_r_14,
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: '0.8rem',
  padding: '0.8rem 1.6rem',
  lineHeight: 'normal',
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
  color: vars.color.white,
  ...typography.caption_m_12,
});
