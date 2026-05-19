import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: '1.6rem',
});

export const jobList = style({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
  gap: '1.6rem',
  padding: '0 1.6rem',
});
