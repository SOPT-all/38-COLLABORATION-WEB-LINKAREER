import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const button = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
  },

  variants: {
    color: {
      filled: {
        backgroundColor: vars.color.blue500,
        color: vars.color.white,
        selectors: {
          '&:active': {
            backgroundColor: vars.color.blue600,
          },
        },
      },

      outlined: {
        border: `1px solid ${vars.color.blue500}`,
        backgroundColor: vars.color.white,
        color: vars.color.blue500,
        selectors: {
          '&:active': {
            backgroundColor: vars.color.blue50,
          },
        },
      },

      ghost: {
        border: `1px solid ${vars.color.gray200}`,
        backgroundColor: vars.color.white,
        color: vars.color.gray900,
        selectors: {
          '&:active': {
            backgroundColor: vars.color.gray50,
          },
        },
      },
    },

    size: {
      sm: {
        borderRadius: '0.6rem',
        width: '7.2rem',
        height: '3.2rem',
        ...typography.caption_m_12,
      },
      md: {
        borderRadius: '0.8rem',
        width: '12rem',
        height: '3.6rem',
        ...typography.caption_m_12,
      },
      lg: {
        borderRadius: '0.8rem',
        width: '28.7rem',
        height: '4.8rem',
        ...typography.body_sb_16,
      },
    },
  },

  defaultVariants: {
    color: 'filled',
    size: 'lg',
  },
});
