import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  padding: '2.8rem 1.6rem',
});

export const mainTitle = style({
  ...typography.title_sb_18,
  marginBottom: '1.6rem',
  color: vars.color.gray900,
});

export const innerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const sectionTitle = style({
  ...typography.body_sb_16,
  color: vars.color.gray900,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const listItem = style({
  ...typography.body_r_14,
  paddingLeft: '1.2rem',
  color: vars.color.gray900,
  selectors: {
    '&::before': {
      content: '"• "',
    },
  },
});

export const periodText = style({
  ...typography.body_r_14,
  color: vars.color.gray900,
});
