import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const activeIndexVar = createVar();
export const dragOffsetVar = createVar();

export const container = style({
  width: '100%',
});

export const screenReaderOnly = style({
  position: 'absolute',
  margin: '-1px',
  border: 0,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  clip: 'rect(0, 0, 0, 0)',
});

export const viewport = style({
  touchAction: 'pan-y',
  width: '100%',
  overflow: 'hidden',
});

export const track = recipe({
  base: {
    display: 'flex',
    transform: `translateX(calc(${activeIndexVar} * -100% + ${dragOffsetVar}))`,
    willChange: 'transform',
    width: '100%',
  },
  variants: {
    isTransitionEnabled: {
      true: {
        transition: 'transform 400ms ease-out',
      },
      false: {
        transition: 'none',
      },
    },
  },
});

export const slide = style({
  display: 'flex',
  flex: '0 0 100%',
  justifyContent: 'center',
  width: '100%',
});
