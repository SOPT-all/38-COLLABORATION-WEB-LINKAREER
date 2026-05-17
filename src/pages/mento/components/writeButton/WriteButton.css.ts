import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

export const writeButton = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
