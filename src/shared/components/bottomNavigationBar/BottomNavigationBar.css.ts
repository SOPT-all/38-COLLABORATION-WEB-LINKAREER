import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const mainContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: `1px solid ${vars.color.gray200}`,
  borderBottom: `1px solid ${vars.color.gray200}`,
  background: vars.color.white,
  padding: '0 2.4rem',
  width: '100%',
  height: '5.8rem',
  position: 'sticky',
  bottom: 0,
  zIndex: 10,
});

export const navItem = recipe({
  base: {
    display: 'flex',
    flex: '1 0 0',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.6rem',
  },
  variants: {
    active: {
      true: {
        color: vars.color.gray800,
        ...typography.caption_m_12,
      },
      false: {
        color: vars.color.gray600,
        ...typography.caption_r_12,
      },
    },
  },
});
