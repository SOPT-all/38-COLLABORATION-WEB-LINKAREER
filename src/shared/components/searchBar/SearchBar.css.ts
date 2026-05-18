import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';
import { zIndex } from '@styles/tokens/zIndex';

export const container = style({
  position: 'sticky',
  zIndex: zIndex.sticky,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.blue500,
  padding: '0.4rem 1.6rem 1.2rem 1.6rem',
  width: '100%',
  height: '6rem',
});

export const frame = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: '0.8rem',
  background: vars.color.white,
  padding: '0.8rem 1.6rem',
  height: '4.4rem',
  fontSize: '1.5rem',
});

export const searchField = style({
  flex: 1,
  minWidth: 0,
  ...typography.body_r_15,
  color: vars.color.gray800,
  selectors: {
    '&::placeholder': {
      color: vars.color.gray400,
    },
    '&:focus': {
      outline: 'none',
    },
  },
});

export const verticalDivider = style({
  backgroundColor: vars.color.gray300,
  padding: 0,
  width: '1px',
  height: '2rem',
});

export const aiSearchButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  marginLeft: '0.8rem',
  padding: 0,
  width: '6.5rem',
});

export const aiIcon = style({
  flexShrink: 0,
  width: '1.8rem',
  height: '1.8rem',
});

export const aiText = style({
  background: vars.color.search,
  backgroundClip: 'text',
  padding: 0,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  ...typography.body_m_15,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
