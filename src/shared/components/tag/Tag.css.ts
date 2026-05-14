import { recipe } from '@vanilla-extract/recipes';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const tag = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.4rem',
    ...typography.caption_m_12,
  },

  variants: {
    size: {
      small: {
        padding: '0.2rem 0.8rem',
      },
      medium: {
        flexDirection: 'column',
        padding: '0.4rem 0.8rem',
      },
      withIcon: {
        gap: '0.4rem',
        padding: '0.4rem 0.8rem',
      },
    },

    color: {
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
    },
  },
});
