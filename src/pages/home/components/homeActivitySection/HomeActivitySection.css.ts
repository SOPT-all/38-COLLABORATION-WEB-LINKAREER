import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
  paddingLeft: '1.6rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.6rem',
  alignSelf: 'stretch',
});

export const activityList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  alignSelf: 'stretch',
});
