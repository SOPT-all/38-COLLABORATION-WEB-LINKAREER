import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

const expandAnimation = keyframes({
  from: {
    opacity: 0.5,
    width: '0.7rem',
  },
  to: {
    opacity: 1,
    width: '1.6rem',
  },
});

const collapseAnimation = keyframes({
  from: {
    opacity: 1,
    width: '1.6rem',
  },
  to: {
    opacity: 0.5,
    width: '0.7rem',
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
        background: vars.color.blue500,
        width: '1.6rem',
        animation: `${expandAnimation} 0.5s ease forwards`,
      },
      false: {
        background: vars.color.gray200,
        width: '0.7rem',
        animation: `${collapseAnimation} 0.5s ease forwards`,
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
