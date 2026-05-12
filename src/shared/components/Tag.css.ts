import { style, styleVariants } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';

export const baseTag = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.25rem',
});

export const sizeVariants = styleVariants({
  small: {
    padding: '0.125rem 0.5rem',
  },
  large: {
    flexDirection: 'column',
    gap: '0.625rem',
    padding: '0.25rem 0.5rem',
  },
});

export const text = style({
  lineHeight: '150%',
  letterSpacing: '-0.015rem',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontWeight: '500',
  fontStyle: 'normal',
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
