import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const curatedCard = style({
  position: 'relative',
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: '12px',
  backgroundColor: vars.color.white,
  width: '25.5rem',
  height: '16rem',
  overflow: 'hidden',
});

export const curatedContentContainer = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  marginTop: '1.6rem',
  marginLeft: '1.6rem',
  width: '11.6rem',
});

export const curatedTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
  gap: '0.8rem',
});

export const cardEyebrow = style({
  width: '100%',
  color: vars.color.gray700,
  ...typography.caption_r_12,
});

export const cardTitle = style({
  width: '100%',
  whiteSpace: 'pre-line',
  color: vars.color.gray900,
  ...typography.body_sb_16,
});

export const cardImage = style({
  position: 'absolute',
  right: '1.6rem',
  bottom: 0,
  width: '8.7rem',
  height: '10rem',
});
