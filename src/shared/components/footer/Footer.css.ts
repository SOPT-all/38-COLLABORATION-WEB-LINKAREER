import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 'auto',
  backgroundColor: color.gray50,
  padding: '0.4rem 0 7.4rem 0',
  width: '100%',
});

export const topContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1.2rem',
});

export const titleContainer = style({
  textAlign: 'center',
});

export const text = recipe({
  base: {
    color: color.gray600,
  },
  variants: {
    type: {
      menu: {
        cursor: 'pointer',
        ...typography.caption_m_12,
        padding: '1.2rem 0.4rem',
      },
      copyright: {
        ...typography.caption_r_12,
      },
      strong: {
        ...typography.caption_b_12,
      },
    },
  },
});
