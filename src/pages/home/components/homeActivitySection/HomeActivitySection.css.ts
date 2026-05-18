import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: '1.6rem',
  paddingLeft: '1.6rem',
});

export const activityList = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: '1.6rem',
  overflowX: 'auto',
  scrollBehavior: 'smooth',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
