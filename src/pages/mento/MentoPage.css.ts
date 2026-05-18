import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const pageContainer = style({
  position: 'relative',
});

export const stickyContent = style({
  position: 'sticky',
  top: 0,
});

export const mentoSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '1.6rem',
  paddingRight: 0,
});

export const sectionTitle = style({
  ...typography.title_b_20,
});

export const highlight = style({
  color: vars.color.blue500,
});

export const postSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const postList = style({
  display: 'flex',
  flexDirection: 'column',
});

export const paginationContainer = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '4rem 0',
});
