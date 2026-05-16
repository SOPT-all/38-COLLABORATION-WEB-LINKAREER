import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const card = style({
  display: 'flex',
  width: '16rem',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '1.6rem',
});

export const logoBox = style({
  position: 'relative',
  width: '16rem',
  aspectRatio: '1 / 1',
  borderRadius: '1.2rem',
  overflow: 'hidden',
});

export const image = style({
  display: 'block',
  width: '100%',
  height: '100%',
});

export const logoShadow = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '8rem',
  borderRadius: '0 0 1.2rem 1.2rem',
  background: vars.color.overlay90,
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
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  ...typography.body_b_14,
  color: vars.color.gray900,
});

export const companyName = style({
  ...typography.caption_m_12,
  color: vars.color.gray900,
});

export const bottomBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  alignSelf: 'stretch',
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
