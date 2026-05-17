import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.6rem',
  width: '16rem',
});

export const logoBox = style({
  aspectRatio: '1/1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'flex-end',
  gap: '1rem',
  padding: '0 0.8rem',
  height: '16rem',
});

export const image = style({
  display: 'block',
  width: '100%',
  height: '100%',
});

export const logoShadow = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignItems: 'flex-start',
  gap: '1rem',
  borderRadius: '0 0 1.2rem 1.2rem',
  background: vars.color.overlay90,
  padding: '1rem',
  width: '16rem',
  height: '8rem',
});

export const textBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const title = style({
  display: '-webkit-box',
  alignSelf: 'stretch',
  marginBottom: '0.8rem',
  height: '4.2rem',
  overflow: 'hidden',
  color: vars.color.gray900,
  ...typography.body_b_14,
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

export const companyName = style({
  alignSelf: 'stretch',
  ...typography.caption_m_12,
  marginBottom: '0.2rem',
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
