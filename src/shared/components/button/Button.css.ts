import { recipe } from '@vanilla-extract/recipes';
import { typography } from '@styles/tokens/typography';
import { vars } from '@styles/theme.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
    border: 'none',
    cursor: 'pointer',
    flexShrink: 0,
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
        backgroundColor: vars.color.white,
        color: vars.color.blue500,
        border: `1px solid ${vars.color.blue500}`,
        selectors: {
          '&:active': {
            backgroundColor: vars.color.blue50,
          },
        },
      },

      ghost: {
        backgroundColor: vars.color.white,
        color: vars.color.gray900,
        border: `1px solid ${vars.color.gray200}`,
        selectors: {
          '&:active': {
            backgroundColor: vars.color.gray50,
          },
        },
      },
    },

    size: {
      sm: {
        width: '7.2rem',
        height: '3.2rem',
        borderRadius: '0.6rem',
        ...typography.caption_m_12,
      },
      md: {
        width: '12rem',
        height: '3.6rem',
        borderRadius: '0.8rem',
        ...typography.caption_m_12,
      },
      lg: {
        width: '28.7rem',
        height: '4.8rem',
        borderRadius: '0.8rem',
        ...typography.body_sb_16,
      },
    },
  },

  defaultVariants: {
    color: 'filled',
    size: 'lg',
  },
});
