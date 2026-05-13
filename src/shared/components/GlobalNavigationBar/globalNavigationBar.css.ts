import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '2rem',
  backgroundColor: color.blue500,
  padding: '0 0.8rem 0 1.6rem',
  width: '100%',
  height: '6rem',
});

export const frame = style({
  display: 'flex',
  flex: '1 0 0',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'space-between',
});

export const logo = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '12rem',
  height: '4.4rem',
});

export const logoIcon = style({
  flexShrink: 0,
  width: '100%',
  height: '100%',
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  height: '4.4rem',
  listStyle: 'none',
});

export const iconButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.2rem 1rem',
  width: '4rem',
  height: '4.4rem',
});

export const icon = style({
  flexShrink: 0,
  width: '2rem',
  height: '2rem',
});
