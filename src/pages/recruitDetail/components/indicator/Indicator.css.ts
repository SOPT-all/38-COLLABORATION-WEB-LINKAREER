import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

export const dotRecipe = recipe({
  base: {
    transition: 'width 0.5s ease, opacity 0.5s ease',
    borderRadius: '9999px',
    height: '0.7rem',
  },

  variants: {
    active: {
      true: {
        opacity: 1,
        backgroundColor: vars.color.blue500,
        width: '1.6rem',
      },
      false: {
        opacity: 0.5,
        backgroundColor: vars.color.gray200,
        width: '0.7rem',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
