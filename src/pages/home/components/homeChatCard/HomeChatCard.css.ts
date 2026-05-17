import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const card = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: '1.2rem',
  padding: '0.8rem',
  width: '13.6rem',
  height: '21rem',
});

export const innerBox = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignItems: 'flex-start',
  gap: '1.6rem',
  width: '12rem',
});

export const topBox = style({
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

export const textBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
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

export const statusIcon = style({
  width: '1.6rem',
  height: '1.6rem',
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

export const buttonBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  border: `1px solid ${vars.color.blue500}`,
  borderRadius: '0.8rem',
  padding: '0.8rem 1.2rem',
  width: '12rem',
  height: '3.6rem',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.blue200}`,
      outlineOffset: '2px',
    },
  },
});

export const buttonText = style({
  textAlign: 'center',
  color: vars.color.blue500,
  ...typography.caption_m_12,
});
