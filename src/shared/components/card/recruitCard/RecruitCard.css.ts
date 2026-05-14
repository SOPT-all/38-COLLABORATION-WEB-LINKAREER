import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  gap: '1.2rem',
  border: `1px solid ${vars.color.gray100}`,
  borderRadius: '1.2rem',
  backgroundColor: vars.color.white,
  cursor: 'pointer',
  padding: '1.6rem',
  width: '30.7rem',
  minHeight: '11.8rem',
});

export const imgContainer = style({
  flexShrink: '0',
  borderRadius: '1rem',
  width: '6rem',
  height: '6rem',
});

export const contentContainer = style({
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  gap: '2rem',
});

export const topContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const title = style({
  ...typography.body_sb_16,
  width: '16.3rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: vars.color.gray900,
});

export const company = style({
  ...typography.caption_r_12,
  width: '16.3rem',
  color: vars.color.gray700,
});

export const icContainer = style({
  padding: '0.6rem',
  width: '2.8rem',
  height: '2.8rem',
});
export const bottomContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const tagContainer = style({
  display: 'flex',
  gap: '0.6rem',
});

export const deadline = style({
  ...typography.caption_r_12,
  color: vars.color.gray600,
});
