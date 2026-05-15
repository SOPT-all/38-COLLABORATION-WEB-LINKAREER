import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const writeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: vars.color.blue500,
  width: '4.8rem',
  height: '4.8rem',
});
