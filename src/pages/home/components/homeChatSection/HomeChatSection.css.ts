import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.6rem',
  paddingLeft: '1.6rem',
  width: '37.5rem',
});

export const chatList = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: '1.2rem',
  overflowX: 'auto',
  scrollBehavior: 'smooth',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
