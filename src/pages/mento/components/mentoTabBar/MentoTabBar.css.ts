import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  borderTop: `1px solid ${vars.color.gray100}`,
  borderBottom: `1px solid ${vars.color.gray100}`,
  padding: '0.8rem 1.6rem',
});
