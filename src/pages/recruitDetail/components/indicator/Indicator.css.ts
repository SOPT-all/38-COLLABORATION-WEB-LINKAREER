import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color } from '@styles/tokens/color';

const expandAnimation = keyframes({
  from: {
    width: '0.7rem',
    opacity: 0.5,
  },
  to: {
    width: '1.6rem',
    opacity: 1,
  },
});

const collapseAnimation = keyframes({
  from: {
    width: '1.6rem',
    opacity: 1,
  },
  to: {
    width: '0.7rem',
    opacity: 0.5,
  },
});

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
        animation: `${expandAnimation} 0.5s ease forwards`,
      },
      false: {
        width: '0.7rem',
        background: color.gray200,
        animation: `${collapseAnimation} 0.5s ease forwards`,
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
