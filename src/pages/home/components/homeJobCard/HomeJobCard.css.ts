import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const card = style({
  display: 'flex',
  width: '35.9rem',
  alignItems: 'center',
  gap: '1.6rem',
});

export const textBox = style({
  display: 'flex',
  width: '16rem',
  height: '8.8rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexShrink: 0,
  textAlign: 'left',
});

export const logoImage = style({
  width: '8.8rem',
  height: '8.8rem',
  flexShrink: 0,
  aspectRatio: '1 / 1',
  borderRadius: '1.2rem',
  border: `1px solid ${vars.color.gray300}`,
  objectFit: 'cover',
});

export const title = style({
  marginBottom: '0.8rem',
  height: '4.2rem',
  flexShrink: 0,
  alignSelf: 'stretch',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  ...typography.body_b_14,
  color: vars.color.gray900,
});

export const companyName = style({
  alignSelf: 'stretch',
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

export const category = style({
  ...typography.caption_m_12,
  color: vars.color.gray500,
});

export const bookmarkBox = style({
  display: 'flex',
  width: '4.4rem',
  height: '4.4rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',
  flexShrink: 0,
});

export const bookmarkIcon = style({
  width: '1.0667rem',
  height: '1.3333rem',
});

export const bookmarkText = style({
  textAlign: 'center',
  ...typography.caption_r_12,
  color: vars.color.gray500,
});
