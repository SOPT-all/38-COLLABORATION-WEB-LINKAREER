import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const topTextContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1.6rem',
  width: '100%',
  height: '4.4rem',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const mainTitle = style({
  color: vars.color.gray900,
  ...typography.title_b_20,
});

export const viewMoreButton = style({
  textAlign: 'right',
  ...typography.body_r_14,
  color: vars.color.gray500,
});

export const description = style({
  ...typography.caption_m_12,
  color: vars.color.gray700,
});
