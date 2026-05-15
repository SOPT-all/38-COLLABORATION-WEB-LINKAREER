import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const hiddenInput = style({
  display: 'none',
});

export const checkbox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: '0.4rem',
  backgroundColor: vars.color.white,
  width: '1.8rem',
  height: '1.8rem',

  selectors: {
    [`${hiddenInput}:checked + &`]: {
      borderColor: vars.color.blue500,
      backgroundColor: vars.color.blue500,
    },
  },
});
