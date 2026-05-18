import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '2.4rem 0',
});

export const sectionHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1.6rem',
});

export const sectionTitle = style({
  ...typography.title_sb_18,
  color: vars.color.gray900,
});

export const moreButton = style({
  display: 'flex',
  alignItems: 'center',
  ...typography.body_m_14,
  color: vars.color.gray600,
});

export const viewport = style({
  touchAction: 'none',
  width: '100%',
  overflow: 'hidden',
});

export const track = style({
  display: 'flex',
  gap: '1.6rem',
  willChange: 'transform',
  padding: '0 1.6rem',
});

export const indicatorWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});
