import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const pagenationWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const pagenationButtonBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '3.6rem',
  height: '3.6rem',
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
