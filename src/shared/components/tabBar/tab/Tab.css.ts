import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const tab = recipe({
  base: {
    display: 'inline-flex',
    flex: '1 0 max-content',
    ...typography.body_sb_16,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '0.3rem solid transparent',
    padding: '1rem 0.2rem 0.7rem',
    selectors: {
      '&:disabled': {
        cursor: 'default',
      },
    },
  },
  variants: {
    selected: {
      true: {
        borderBottomColor: vars.color.blue500,
        color: vars.color.blue500,
      },
      false: {
        borderBottomColor: 'transparent',
        color: vars.color.gray800,
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const textWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const textWrapperWithDot = style({
  selectors: {
    '&::after': {
      flexShrink: 0,
      alignSelf: 'flex-start',
      marginLeft: '0.4rem',
      borderRadius: '50%',
      backgroundColor: vars.color.red200,
      width: '0.5rem',
      height: '0.5rem',
      content: '""',
    },
  },
});
