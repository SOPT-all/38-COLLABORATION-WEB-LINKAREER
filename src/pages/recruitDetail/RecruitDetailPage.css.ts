import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { zIndex } from '@styles/tokens/zIndex';

export const topBtnWrapper = style({
  position: 'fixed',
  zIndex: zIndex.floating,
  right: 'calc((100vw - 37.5rem) / 2 + 1.6rem)',
  bottom: '8.8rem',
});

export const passDataWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  backgroundColor: vars.color.gray50,
  padding: '1.6rem 0',
});

export const sectionAnchor = style({
  scrollMarginTop: `4.4rem`,
});

export const stickyTabBar = style({
  position: 'sticky',
  zIndex: zIndex.sticky,
  top: '4.4rem',
});
