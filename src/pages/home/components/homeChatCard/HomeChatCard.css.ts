import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: '1.2rem',
  padding: '0.8rem',
  width: 'calc(13.6rem + 2px)',
  height: '21rem',
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: '0.8rem',
});

export const imageBox = style({
  alignSelf: 'stretch',
  borderRadius: '0.8rem',
  height: '7.3rem',
});

export const image = style({
  display: 'block',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
  gap: '0.2rem',
  minWidth: 0,
});

export const statusBox = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: '0.2rem',
});

export const statusText = style({
  ...typography.caption_b_12,
  color: vars.color.blue500,
});

export const companyName = style({
  ...typography.body_b_14,
  alignSelf: 'stretch',
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: vars.color.gray900,
});

export const participantCount = style({
  ...typography.caption_r_12,
  color: vars.color.gray700,
});
