import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  position: 'relative',
  overflow: 'hidden',
  width: '37.5rem',
  height: '24rem',
  touchAction: 'none',
});

export const track = style({
  display: 'flex',
  height: '100%',
  willChange: 'transform',
  userSelect: 'none',
});

export const slide = style({
  flexShrink: 0,
  width: '37.5rem',
  height: '24rem',
});

export const image = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const pageLabel = style({
  position: 'absolute',
  right: '1.2rem',
  bottom: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  backgroundColor: vars.color.opacity40,
  ...typography.caption_r_12,
  width: '3.4rem',
  height: '2.2rem',
  color: vars.color.white,
});
