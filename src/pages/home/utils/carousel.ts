import { CAROUSEL_INDEX } from '@pages/home/constants/carousel';
import type { CarouselItem } from '@pages/home/types/homeFeaturedCarousel';

export const getCarouselItemKey = (item: CarouselItem) =>
  `${item.to}-${item.announcementTitle}`;

export const getClonedFirstSlideIndex = (itemCount: number) =>
  itemCount + CAROUSEL_INDEX.STEP;

export const getLastRealSlideIndex = (itemCount: number) =>
  itemCount - CAROUSEL_INDEX.STEP;

export const getRealIndex = (activeIndex: number, itemCount: number) => {
  if (activeIndex === CAROUSEL_INDEX.CLONED_LAST_SLIDE)
    return getLastRealSlideIndex(itemCount);
  if (activeIndex === getClonedFirstSlideIndex(itemCount))
    return CAROUSEL_INDEX.FIRST_ITEM;
  return activeIndex - CAROUSEL_INDEX.FIRST_REAL_SLIDE;
};

export const getCssVarName = (cssVar: string) =>
  cssVar.slice('var('.length, -1);
