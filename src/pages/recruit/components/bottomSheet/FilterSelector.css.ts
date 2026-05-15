import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const filterContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const tabContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const tab = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',

    backgroundColor: vars.color.gray100,
    padding: '1.6rem 0 1.6rem 2rem',
    width: '12.3rem',
    ...typography.body_m_14,
    height: '5.3rem',
    textAlign: 'left',
    color: vars.color.gray700,
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.color.white,
        ...typography.body_b_14,
        color: vars.color.blue500,
      },
    },
  },
});

export const count = styleVariants({
  ellipse: {
    flexShrink: '0',
    borderRadius: '50%',
    backgroundColor: vars.color.blue500,
    width: '1.6rem',
    height: '1.6rem',
    textAlign: 'center',
    color: vars.color.white,
    ...typography.caption_m_10,
  },
  bold: {
    ...typography.body_b_16,
    marginLeft: '0.8rem',
    color: vars.color.blue500,
  },
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '21.2rem',
  overflowY: 'auto',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const option = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',

    backgroundColor: vars.color.white,
    ...typography.body_m_14,
    width: '25.2rem',
    height: '5.3rem',
    textAlign: 'left',
    color: vars.color.gray700,
  },
  variants: {
    isSelected: {
      true: {
        ...typography.body_b_14,
        padding: '1.6rem 0 1.6rem 2rem',
        color: vars.color.blue500,
      },
      false: { padding: '1.6rem 0 1.6rem 5.2rem' },
    },
  },
});

export const selectedContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  backgroundColor: vars.color.white,
  padding: '1.6rem 0 1.6rem 2rem',
  width: '100%',
  height: '9rem',
});

export const text = style({
  ...typography.body_b_16,
  color: vars.color.gray900,
});

export const tagList = style({
  display: 'flex',
  gap: '0.8rem',
  width: '35.5rem',
  overflowX: 'auto',
  whiteSpace: 'nowrap',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::after': {
      flexShrink: '0',
      width: '1.2rem',
      content: '',
    },
  },
});
