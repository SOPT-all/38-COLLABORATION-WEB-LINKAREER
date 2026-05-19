import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  margin: '0 auto',
  borderTop: `1px solid ${vars.color.gray200}`,
  backgroundColor: vars.color.white,
  padding: '1.2rem 1.6rem',
  maxWidth: '37.5rem',
});

export const iconButton = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.gray200}`,
  borderRadius: '0.8rem',
  width: '4.8rem',
  height: '4.8rem',
});

export const buttonContainer = style({
  flex: 1,
});
