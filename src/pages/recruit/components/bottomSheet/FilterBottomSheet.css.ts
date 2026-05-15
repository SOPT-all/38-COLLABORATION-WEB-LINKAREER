import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';
import { zIndex } from '@styles/tokens/zIndex';

export const backdrop = style({
  position: 'fixed',
  zIndex: zIndex.backdrop,
  top: 0,
  transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
  visibility: 'hidden',
  opacity: 0,
  backgroundColor: vars.color.opacity40,
  pointerEvents: 'none',
  touchAction: 'none',
  width: '37.5rem',
  height: '100%',
});

export const backdropVisible = style({
  visibility: 'visible',
  opacity: 1,
  pointerEvents: 'auto',
});

export const container = style({
  position: 'fixed',
  zIndex: zIndex.sheet,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  transform: 'translateY(100%)',
  transition: 'transform 0.3s ease-in-out',
  borderRadius: '1.2rem 1.2rem 0 0',
  backgroundColor: vars.color.white,
  width: '37.5rem',
  minHeight: '35rem',
  maxHeight: '43.8rem',
});

export const containerOpen = style({
  transform: 'translateY(0)',
});

export const closeBtn = style({
  padding: '0',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${vars.color.gray100}`,
  padding: '2rem',
});

export const title = style({
  ...typography.body_b_16,
  color: vars.color.gray900,
});
