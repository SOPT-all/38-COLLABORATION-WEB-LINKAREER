import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '1.6rem',
  width: '16rem',
});

export const logoBox = style({
  aspectRatio: '1 / 1',
  position: 'relative',
  borderRadius: '1.2rem',
  width: '16rem',
  overflow: 'hidden',
});

export const image = style({
  display: 'block',
  width: '100%',
  height: '100%',
});

export const logoShadow = style({
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: '0 0 1.2rem 1.2rem',
  background: vars.color.overlay90,
  height: '8rem',
});

export const textBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.8rem',
});

export const title = style({
  display: '-webkit-box',
  height: '4.2rem',
  overflow: 'hidden',
  color: vars.color.gray900,
  WebkitLineClamp: 2,
  ...typography.body_b_14,
  WebkitBoxOrient: 'vertical',
});

export const companyName = style({
  ...typography.caption_m_12,
  color: vars.color.gray900,
});

export const bottomBox = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: '0.4rem',
});

export const dDay = style({
  ...typography.caption_m_12,
  color: vars.color.blue500,
});

export const dot = style({
  width: '0.8rem',
  textAlign: 'center',
  ...typography.caption_m_12,
  color: vars.color.gray500,
});

export const category = style({
  ...typography.caption_r_12,
  color: vars.color.gray500,
});
