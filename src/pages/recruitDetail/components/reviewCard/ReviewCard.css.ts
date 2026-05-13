import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.6rem',
    width: '100%',
  },

  variants: {
    isBorder: {
      true: {
        border: `1px solid ${color.gray200}`,
      },
      false: {},
    },
  },

  defaultVariants: {
    isBorder: false,
  },
});

export const titleBodyWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  marginBottom: '0.8rem',
});

export const title = style({
  ...typography.body_sb_16,
  color: color.gray800,
});

export const body = style({
  overflow: 'hidden',
  ...typography.body_r_14,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  color: color.gray700,
});

export const tagRow = style({
  display: 'flex',
  gap: '0.8rem',
});
