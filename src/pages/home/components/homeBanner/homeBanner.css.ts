import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';

export const bannerContainer = style({
  borderBottom: `1px solid ${color.gray300}`,
  backgroundColor: color.gray100,
  padding: '1.6rem',
  width: '100%',
  height: '11.2rem',
});

export const bannerImage = style({
  borderRadius: '0.8rem',
  backgroundColor: color.gray200,
  objectFit: 'cover',
  objectPosition: 'center',
  width: '100%',
  height: '100%',
});
