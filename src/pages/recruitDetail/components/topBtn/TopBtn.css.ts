import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const topBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: '50%',
  background: vars.color.white,
  width: '4.8rem',
  height: '4.8rem',
});
