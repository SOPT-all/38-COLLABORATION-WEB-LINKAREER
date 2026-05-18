import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const topTextContainer = style({
  display: 'flex',
  width: '34.3rem',
  justifyContent: 'space-between',
  alignItems: 'center',
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
