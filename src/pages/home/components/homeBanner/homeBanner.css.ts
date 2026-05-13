import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@styles/tokens/color';

const bannerBorder = `1px solid ${color.gray300}`;

export const bannerContainer = recipe({
  base: {
    backgroundColor: color.gray100,
    padding: '1.6rem',
    width: '100%',
    height: '11.2rem',
  },

  variants: {
    borderPosition: {
      top: {
        borderTop: bannerBorder,
      },
      bottom: {
        borderBottom: bannerBorder,
      },
    },
  },

  defaultVariants: {
    borderPosition: 'bottom',
  },
});

export const bannerImage = style({
  borderRadius: '0.8rem',
  backgroundColor: color.gray200,
  objectFit: 'cover',
  objectPosition: 'center',
  width: '100%',
  height: '100%',
});
