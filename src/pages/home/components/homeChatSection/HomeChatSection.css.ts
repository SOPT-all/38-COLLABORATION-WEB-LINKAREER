import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
  width: '37.5rem',
  paddingLeft: '1.6rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.6rem',
});

export const chatList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  alignSelf: 'stretch',
  overflowX: 'auto',
  scrollBehavior: 'smooth',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
