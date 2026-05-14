import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  borderRadius: '12px',
  paddingTop: '7.8rem',
  width: '34.3rem',
  overflow: 'hidden',
});

export const thumbnail = style({
  position: 'absolute',
  inset: 0,
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const fractionalIndicator = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  right: 0,
  padding: '1.2rem',
});

export const ddayIndicator = style({
  position: 'absolute',
  zIndex: 2,
  right: 0,
  bottom: 0,
});

export const overlay = style({
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  borderRadius: '0 0 12px 12px',
  background: vars.color.overlay90,
  padding: '1.2rem',
  width: '100%',
  height: '14rem',
});

export const companyInfoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const companyIcon = style({
  aspectRatio: 1,
  borderRadius: '0.8rem',
  objectFit: 'cover',
  width: '4.4rem',
  height: '4.4rem',
});

export const companyInfoText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '0.2rem',
  textShadow: vars.shadow.text_shadow,
  color: vars.color.white,
});

export const companyName = style({
  ...typography.body_sb_16,
});

export const companySize = style({
  ...typography.caption_r_12,
});
