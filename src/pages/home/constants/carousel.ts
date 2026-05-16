export const SLIDE_INTERVAL_MS = 3000;
export const SWIPE_THRESHOLD_PX = 50;
export const DRAG_CLICK_THRESHOLD_PX = 5;

export const CAROUSEL_ITEM_COUNT = {
  EMPTY: 0,
  MIN_LOOP: 1,
} as const;

export const CAROUSEL_INDEX = {
  FIRST_ITEM: 0,
  CLONED_LAST_SLIDE: 0,
  FIRST_REAL_SLIDE: 1,
  STEP: 1,
  CARD_NUMBER_OFFSET: 1,
} as const;
