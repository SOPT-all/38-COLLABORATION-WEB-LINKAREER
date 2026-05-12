import { style } from '@vanilla-extract/css';
import { color } from '@styles/tokens/color';

export const btnTop = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '4.8rem',
  height: '4.8rem',
  border: `1px solid ${color.gray200}`,
  borderRadius: '50%',
  background: color.white,
});
