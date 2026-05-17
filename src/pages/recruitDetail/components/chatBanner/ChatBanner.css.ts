import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  margin: '1.8rem 1.6rem',
  border: `1px solid ${color.gray100}`,
  borderRadius: '1.2rem',
  backgroundColor: color.white,
  padding: '1.6rem',
});

export const leftContent = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.8rem',
});

export const textContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const description = style({
  ...typography.body_r_14,
  color: color.gray700,
});

export const joinButton = style({
  ...typography.body_m_14,
  color: color.blue500,
});
