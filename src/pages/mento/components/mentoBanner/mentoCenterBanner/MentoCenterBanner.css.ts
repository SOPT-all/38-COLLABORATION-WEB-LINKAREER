import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.2rem',
});

export const adLeftContent = style({
  display: 'flex',
  flexDirection: 'column',
  width: '22.7rem',
});

export const adTitle = style({
  ...typography.body_sb_16,
  flexShrink: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: vars.color.gray700,
});

export const adDetail = style({
  marginTop: '-0.2rem',
  ...typography.caption_m_12,
  color: vars.color.gray700,
});

export const tagRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  marginTop: '0.2rem',
});

export const adSource = style({
  ...typography.caption_m_12,
  color: vars.color.gray400,
});

export const adImg = style({
  flexShrink: 0,
  backgroundColor: vars.color.gray100,
  objectFit: 'cover',
  width: '6.8rem',
  height: '6.8rem',
});
