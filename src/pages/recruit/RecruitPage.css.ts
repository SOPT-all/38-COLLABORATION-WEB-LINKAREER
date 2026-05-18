import { style } from '@vanilla-extract/css';

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '0.8rem 1.6rem',
});

export const paginationContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2.4rem 0',
});
