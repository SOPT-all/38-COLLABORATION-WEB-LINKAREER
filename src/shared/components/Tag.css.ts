import { style, styleVariants } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';

export const baseTag = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.4rem',
});

export const sizeVariants = styleVariants({
  small: {
    padding: '0.2rem 0.8rem',
  },
  large: {
    flexDirection: 'column',
    gap: '1rem',
    padding: '0.4rem 0.8rem',
  },
  withIcon: {
    gap: '0.4rem',
    padding: '0.4rem 0.8rem',
  },
});

export const colorVariants = styleVariants({
  gray: {
    backgroundColor: color.gray100,
    color: color.gray600,
  },
  blue: {
    backgroundColor: color.blue50,
    color: color.blue500,
  },
  red: {
    backgroundColor: color.red100,
    color: color.red200,
  },
  black: {
    backgroundColor: color.opacity70,
    color: color.white,
  },
});
