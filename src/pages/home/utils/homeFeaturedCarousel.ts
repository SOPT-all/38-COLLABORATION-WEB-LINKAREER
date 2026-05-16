import { MIN_LOOP_ITEM_COUNT } from '@pages/home/constants/homeFeaturedCarousel';
import type { HomeFeaturedCarouselItem } from '@pages/home/types/homeFeaturedCarousel';

export interface HomeFeaturedCarouselSlide {
  item: HomeFeaturedCarouselItem;
  key: string;
}

export const getHomeFeaturedCarouselItemKey = (
  item: HomeFeaturedCarouselItem,
): string => `${item.to}-${item.announcementTitle}`;

export const getClonedFirstSlideIndex = (itemCount: number): number =>
  itemCount + 1;

export const getLastRealSlideIndex = (itemCount: number): number =>
  itemCount - 1;

export const getRealItemIndex = (
  activeIndex: number,
  itemCount: number,
): number => {
  if (activeIndex === 0) return getLastRealSlideIndex(itemCount);
  if (activeIndex === getClonedFirstSlideIndex(itemCount)) return 0;
  return activeIndex - 1;
};

export const getHomeFeaturedCarouselSlides = (
  items: HomeFeaturedCarouselItem[],
): HomeFeaturedCarouselSlide[] => {
  const realSlides = items.map((item) => ({
    item,
    key: getHomeFeaturedCarouselItemKey(item),
  }));

  if (items.length <= MIN_LOOP_ITEM_COUNT) return realSlides;

  const firstSlide = realSlides[0];
  const lastSlide = realSlides[getLastRealSlideIndex(items.length)];

  return [
    { ...lastSlide, key: `clone-prev-${lastSlide.key}` },
    ...realSlides,
    { ...firstSlide, key: `clone-next-${firstSlide.key}` },
  ];
};

export const getCssVarName = (cssVar: string): string =>
  cssVar.slice('var('.length, -1);
