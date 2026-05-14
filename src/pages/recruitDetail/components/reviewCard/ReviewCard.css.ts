import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.8rem 0',
    width: '100%',
  },

  variants: {
    isBorder: {
      true: {
        borderBottom: `1px solid ${vars.color.gray100}`,
      },
    },
  },

  defaultVariants: {
    isBorder: false,
  },
});

export const title = style({
  ...typography.body_sb_16,
  marginBottom: '0.4rem',
  color: vars.color.gray800,
});

export const body = style({
  display: '-webkit-box',
  ...typography.body_r_14,
  marginBottom: '0.8rem',
  overflow: 'hidden',
  color: vars.color.gray700,
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
});

export const tagRow = style({
  display: 'flex',
  gap: '0.6rem',
});
