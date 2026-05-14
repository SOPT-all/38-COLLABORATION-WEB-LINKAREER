import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const ddayTag = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: vars.color.blue500,
    color: vars.color.white,
    ...typography.body_sb_16,
  },
  variants: {
    size: {
      small: {
        borderRadius: '0 12px',
        padding: '0.8rem 1.6rem',
      },
      medium: {
        borderRadius: '12px 0',
        padding: '0.8rem 2rem',
      },
    },
  },
});
