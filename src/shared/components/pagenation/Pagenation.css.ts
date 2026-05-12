import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';
import { recipe } from '@vanilla-extract/recipes';

export const pagenationWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const pagenationButtonBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3.6rem',
  height: '3.6rem',
  cursor: 'pointer',
});

export const pageNumberRecipe = recipe({
  base: [pagenationButtonBase],

  variants: {
    active: {
      true: {
        ...typography.body_m_14,
        color: color.blue500,
      },
      false: {
        ...typography.body_r_14,
        color: color.gray300,
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
