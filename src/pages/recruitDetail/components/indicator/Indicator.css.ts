import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color } from '@styles/tokens/color';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

export const dotRecipe = recipe({
  base: {
    borderRadius: '9999px',
    height: '0.7rem',
  },

  variants: {
    active: {
      true: {
        width: '1.6rem',
        background: color.blue500,
      },
      false: {
        width: '0.7rem',
        background: color.gray200,
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
