import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

export const writeButton = recipe({
  base: {
    position: 'fixed',
    bottom: '7.4rem',
    left: 'calc(50% + 18.75rem - 1.6rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateX(-100%)',
    borderRadius: '50%',
    backgroundColor: vars.color.blue500,
    width: '4.8rem',
    height: '4.8rem',
  },
  variants: {
    isPressed: {
      true: {
        backgroundColor: vars.color.blue600,
      },
    },
  },
});
