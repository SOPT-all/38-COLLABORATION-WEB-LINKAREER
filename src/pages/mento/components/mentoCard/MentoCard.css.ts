import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = recipe({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '1rem',
    border: `1px solid ${vars.color.gray200}`,
    borderRadius: '1.2rem',
    backgroundColor: vars.color.white,
    padding: '1.8rem',
    paddingRight: '0.9rem',
    width: '21.4rem',
  },

  variants: {
    isFixed: {
      true: {
        borderColor: vars.color.blue200,
        backgroundColor: vars.color.blue50,
      },
    },
  },
});

export const cardHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const headerTop = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const mentoNamePart = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const mentoName = style({
  color: vars.color.black,
  ...typography.body_sb_16,
});

export const filterRow = style({
  display: 'flex',
  ...typography.body_m_14,
  alignItems: 'center',
  gap: '0.6rem',
  color: vars.color.gray600,
});

export const divider = style({
  backgroundColor: vars.color.gray600,
  width: '0.1rem',
  height: '1.2rem',
});

export const cardInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const title = style({
  color: vars.color.blue500,
  ...typography.body_sb_16,
});

export const infoBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const infoRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  ...typography.body_m_14,
  color: vars.color.gray600,
});

export const circleDivider = style({
  borderRadius: '50%',
  backgroundColor: vars.color.gray600,
  width: '0.2rem',
  height: '0.2rem',
});
