import { useMemo } from 'react';
import type { CSSProperties } from 'react';

import HomeFeaturedCarouselCard from '@pages/home/components/homeFeaturedCarousel/homeFeaturedCarouselCard/HomeFeaturedCarouselCard';
import { MIN_LOOP_ITEM_COUNT } from '@pages/home/constants/homeFeaturedCarousel';
import { useHomeFeaturedCarousel } from '@pages/home/hooks/useHomeFeaturedCarousel';
import type { HomeFeaturedCarouselItem } from '@pages/home/types/homeFeaturedCarousel';
import {
  getCssVarName,
  getHomeFeaturedCarouselSlides,
  getRealItemIndex,
} from '@pages/home/utils/homeFeaturedCarousel';

import * as styles from './HomeFeaturedCarousel.css';

interface HomeFeaturedCarouselProps {
  items: HomeFeaturedCarouselItem[];
}

const getTrackStyle = (
  activeIndex: number,
  dragOffset: number,
): CSSProperties => ({
  [getCssVarName(styles.activeIndexVar)]: String(activeIndex),
  [getCssVarName(styles.dragOffsetVar)]: `${dragOffset}px`,
});

const HomeFeaturedCarousel = ({ items }: HomeFeaturedCarouselProps) => {
  const itemCount = items.length;
  const slides = useMemo(() => getHomeFeaturedCarouselSlides(items), [items]);
  const {
    activeIndex,
    dragOffset,
    isTransitionEnabled,
    handleClickCapture,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleTransitionEnd,
  } = useHomeFeaturedCarousel({ itemCount });

  if (itemCount === 0) return null;

  const currentItemIndex = getRealItemIndex(activeIndex, itemCount);
  const currentItem = items[currentItemIndex];
  const carouselAnnouncement = currentItem
    ? `${currentItemIndex + 1} / ${itemCount}, ${currentItem.announcementTitle}`
    : '';

  return (
    <section
      className={styles.container}
      role="region"
      aria-roledescription="carousel"
      aria-label="추천 공고 캐러셀"
    >
      <span className={styles.screenReaderOnly} aria-live="polite">
        {carouselAnnouncement}
      </span>
      <div
        className={styles.viewport}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
      >
        <div
          className={styles.track({ isTransitionEnabled })}
          style={getTrackStyle(
            itemCount <= MIN_LOOP_ITEM_COUNT ? 0 : activeIndex,
            dragOffset,
          )}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map(({ item, key }, index) => {
            const currentCardNumber = getRealItemIndex(index, itemCount) + 1;

            return (
              <div className={styles.slide} key={key}>
                <HomeFeaturedCarouselCard
                  carouselItem={item}
                  totalCardCount={itemCount}
                  currentCardNumber={currentCardNumber}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedCarousel;
