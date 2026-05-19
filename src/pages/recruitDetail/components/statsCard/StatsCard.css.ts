import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

// 공통 베이스
export const container = style({
  flexShrink: 0,
  border: `1px solid ${vars.color.gray100}`,
  borderRadius: '1.2rem',
  backgroundColor: vars.color.white,
  padding: '2rem',
  width: '34.3rem',
  minHeight: '24.9rem',
});
export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  marginBottom: '1.6rem',
});

export const title = style({
  ...typography.body_sb_16,
  color: vars.color.gray900,
});

// StatsRankCard
export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const leftContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const rank = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.4rem',
  backgroundColor: vars.color.blue50,
  width: '2rem',
  height: '2rem',
  ...typography.body_r_14,
  textAlign: 'center',
  color: vars.color.blue500,
});

export const label = style({
  ...typography.body_r_14,
  color: vars.color.gray900,
});

export const percent = style({
  ...typography.body_m_14,
  color: vars.color.blue500,
});

// StatsAgeCard
export const chartArea = style({
  display: 'flex',
  flexDirection: 'column',
});

export const activePercent = style({
  ...typography.caption_m_12,
  color: vars.color.blue500,
});

export const inactivePercent = style({
  ...typography.caption_r_12,
  color: vars.color.gray700,
});

export const barList = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  height: '15rem',
});

export const barItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '100%',
});

export const barTrack = style({
  position: 'relative',
  borderRadius: '9999px',
  backgroundColor: vars.color.gray100,
  width: '1.5rem',
  height: '11.9rem',
  overflow: 'hidden',
});

export const barFill = style({
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: '9999px',
  backgroundColor: vars.color.blue500,
});

export const barFillInactive = style({
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: '9999px',
  backgroundColor: vars.color.gray200,
});

export const ageLabel = style({
  ...typography.caption_r_12,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color: vars.color.gray900,
});
