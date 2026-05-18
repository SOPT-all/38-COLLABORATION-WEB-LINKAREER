import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';

export const topBtnWrapper = style({
  position: 'fixed',
  zIndex: 100,
  right: 'calc((100vw - 37.5rem) / 2 + 1.6rem)',
  bottom: '8rem',
});

export const passDataWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  backgroundColor: color.gray50,
  padding: '1.6rem 0',
});
