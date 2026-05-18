import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  borderTop: `1px solid ${color.gray200}`,
  padding: '1.2rem 1.6rem',
});

export const iconButton = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${color.gray200}`,
  borderRadius: '0.8rem',
  width: '4.8rem',
  height: '4.8rem',
});

export const buttonContainer = style({
  flex: 1,
});
