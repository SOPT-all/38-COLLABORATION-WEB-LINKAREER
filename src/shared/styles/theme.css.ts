import { createGlobalTheme } from '@vanilla-extract/css';

import { color } from './tokens/color';
import { grid } from './tokens/grid';
import { shadow } from './tokens/shadow';

export const vars = createGlobalTheme(':root', {
  color,
  grid,
  shadow,
});
