import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  backgroundColor: vars.color.white,
  padding: '2.4rem 1.6rem',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.8rem 0',
});

export const sectionTitle = style({
  ...typography.title_sb_18,
  color: vars.color.blue500,
});

export const moreButton = style({
  display: 'flex',
  alignItems: 'center',
  ...typography.body_m_14,
  color: vars.color.gray600,
});
