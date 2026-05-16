import { HOME_FEATURED_CAROUSEL_INDEX } from '@pages/home/constants/homeFeaturedCarousel';
import type { HomeFeaturedCarouselItem } from '@pages/home/types/homeFeaturedCarousel';

export const getHomeFeaturedCarouselItemKey = (
  item: HomeFeaturedCarouselItem,
) => `${item.to}-${item.announcementTitle}`;

export const getClonedFirstSlideIndex = (itemCount: number) =>
  itemCount + HOME_FEATURED_CAROUSEL_INDEX.STEP;

export const getLastRealSlideIndex = (itemCount: number) =>
  itemCount - HOME_FEATURED_CAROUSEL_INDEX.STEP;

export const getRealIndex = (activeIndex: number, itemCount: number) => {
  if (activeIndex === HOME_FEATURED_CAROUSEL_INDEX.CLONED_LAST_SLIDE)
    return getLastRealSlideIndex(itemCount);
  if (activeIndex === getClonedFirstSlideIndex(itemCount))
    return HOME_FEATURED_CAROUSEL_INDEX.FIRST_ITEM;
  return activeIndex - HOME_FEATURED_CAROUSEL_INDEX.FIRST_REAL_SLIDE;
};

export const getCssVarName = (cssVar: string) =>
  cssVar.slice('var('.length, -1);
