import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@styles/tokens/color';
import { zIndex } from '@styles/tokens/zIndex';

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: color.blue500,
    padding: '0 0.8rem 0 1.6rem',
    width: '100%',
    height: '6rem',
  },
  variants: {
    isSticky: {
      true: {
        position: 'sticky',
        zIndex: zIndex.sticky,
        top: 0,
      },
    },
  },
});

export const logo = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '12rem',
  height: '4.4rem',
});

export const logoIcon = style({
  flexShrink: 0,
  width: '100%',
  height: '100%',
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  height: '4.4rem',
  listStyle: 'none',
});

export const iconButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.2rem 1rem',
  width: '4rem',
  height: '4.4rem',
});

export const icon = style({
  flexShrink: 0,
  width: '2rem',
  height: '2rem',
});
