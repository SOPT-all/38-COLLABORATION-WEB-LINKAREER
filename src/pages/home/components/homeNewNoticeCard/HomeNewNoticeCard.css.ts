import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';
import { zIndex } from '@styles/tokens/zIndex';

export const container = style({
  position: 'relative',
  borderRadius: '12px',
  paddingTop: '7.8rem',
  width: '22rem',
  overflow: 'hidden',
});

export const thumbnail = style({
  position: 'absolute',
  inset: 0,
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const ddayLayer = style({
  position: 'absolute',
  zIndex: zIndex.overlay,
  top: 0,
  right: 0,
});

export const overlay = style({
  position: 'relative',
  zIndex: zIndex.overlay,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  gap: '0.8rem',
  borderRadius: '0 0 12px 12px',
  background: vars.color.overlay90,
  padding: '1.6rem',
  height: '20.2rem',
});

export const title = style({
  display: '-webkit-box',
  width: '100%',
  height: '5.4rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'pre-wrap',
  color: vars.color.white,
  ...typography.title_sb_18,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
});
