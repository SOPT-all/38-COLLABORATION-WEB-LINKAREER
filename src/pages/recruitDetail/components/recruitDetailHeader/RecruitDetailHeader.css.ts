import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const header = style({
  position: 'sticky',
  zIndex: 10,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: vars.color.blue500,
  padding: '0 1.6rem',
  width: '100%',
  height: '4.4rem',
});

export const iconButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '4rem',
  height: '4rem',
});
