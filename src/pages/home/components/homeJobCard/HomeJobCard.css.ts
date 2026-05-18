import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const cardContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  width: '35.9rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignItems: 'flex-start',
  width: '16rem',
  height: '8.8rem',
  textAlign: 'left',
});

export const logoImage = style({
  aspectRatio: '1 / 1',
  flexShrink: 0,
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: '1.2rem',
  objectFit: 'cover',
  width: '8.8rem',
  height: '8.8rem',
});

export const title = style({
  display: '-webkit-box',
  flexShrink: 0,
  alignSelf: 'stretch',
  marginBottom: '0.8rem',
  height: '4.2rem',
  overflow: 'hidden',
  color: vars.color.gray900,
  WebkitLineClamp: 2,
  ...typography.body_b_14,
  WebkitBoxOrient: 'vertical',
});

export const companyName = style({
  alignSelf: 'stretch',
  ...typography.caption_m_12,
  color: vars.color.gray900,
});

export const bottomContainer = style({
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
  ...typography.caption_m_12,
  color: vars.color.gray500,
});

export const bookmarkContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  width: '4.4rem',
  height: '4.4rem',
});

export const bookmarkText = style({
  textAlign: 'center',
  ...typography.caption_r_12,
  color: vars.color.gray500,
});
