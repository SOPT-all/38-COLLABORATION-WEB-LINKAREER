import { style } from '@vanilla-extract/css';

export const bottomBarWrapper = style({
  position: 'fixed',
  zIndex: 100,
  right: 0,
  bottom: 0,
  left: 0,
});

export const contentWrapper = style({
  paddingBottom: '1.6rem',
});
