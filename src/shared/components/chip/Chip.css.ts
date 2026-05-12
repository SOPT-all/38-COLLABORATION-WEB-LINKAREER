import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const chip = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
    outline: 'none',
    border: '1px solid transparent',
    ...typography.caption_m_12,
    borderRadius: '20rem',
    padding: '0.8rem 1.4rem',
    height: '3.4rem',
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      default: {
        border: `1px solid ${color.gray200}`,
        color: color.gray700,
      },
      filled: {
        backgroundColor: color.blue500,
        color: color.white,
      },
      outline: {
        border: `1px solid ${color.blue500}`,
        color: color.blue500,
      },
      outlineFilled: {
        border: `1px solid ${color.blue500}`,
        backgroundColor: color.blue50,
        color: color.blue500,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const text = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
