import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent, PointerEvent } from 'react';

import HomeFeaturedCarouselCard from '@pages/home/components/homeFeaturedCarousel/homeFeaturedCarouselCard/HomeFeaturedCarouselCard';
import {
  DRAG_CLICK_THRESHOLD_PX,
  HOME_FEATURED_CAROUSEL_INDEX,
  HOME_FEATURED_CAROUSEL_ITEM_COUNT,
  SLIDE_INTERVAL_MS,
  SWIPE_THRESHOLD_PX,
} from '@pages/home/constants/homeFeaturedCarousel';
import type { HomeFeaturedCarouselItem } from '@pages/home/types/homeFeaturedCarousel';
import {
  getClonedFirstSlideIndex,
  getCssVarName,
  getHomeFeaturedCarouselItemKey,
  getLastRealSlideIndex,
  getRealIndex,
} from '@pages/home/utils/homeFeaturedCarousel';

import * as styles from './HomeFeaturedCarousel.css';

interface HomeFeaturedCarouselProps {
  items: HomeFeaturedCarouselItem[];
}

interface HomeFeaturedCarouselSlide {
  item: HomeFeaturedCarouselItem;
  key: string;
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
  const [activeIndex, setActiveIndex] = useState<number>(
    HOME_FEATURED_CAROUSEL_INDEX.FIRST_REAL_SLIDE,
  );
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragOffsetRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const shouldPreventClick = useRef(false);
  const transitionFrameIdsRef = useRef<number[]>([]);

  const homeFeaturedCarouselItems = useMemo<HomeFeaturedCarouselSlide[]>(() => {
    const realSlides = items.map((item) => ({
      item,
      key: getHomeFeaturedCarouselItemKey(item),
    }));

    if (itemCount <= HOME_FEATURED_CAROUSEL_ITEM_COUNT.MIN_LOOP)
      return realSlides;

    const firstSlide = realSlides[HOME_FEATURED_CAROUSEL_INDEX.FIRST_ITEM];
    const lastSlide = realSlides[getLastRealSlideIndex(itemCount)];

    return [
      { ...lastSlide, key: `clone-prev-${lastSlide.key}` },
      ...realSlides,
      { ...firstSlide, key: `clone-next-${firstSlide.key}` },
    ];
  }, [itemCount, items]);

  const goToNextSlide = useCallback(() => {
    if (
      itemCount <= HOME_FEATURED_CAROUSEL_ITEM_COUNT.MIN_LOOP ||
      isAnimatingRef.current
    )
      return;

    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    setActiveIndex(
      (prevIndex) => prevIndex + HOME_FEATURED_CAROUSEL_INDEX.STEP,
    );
  }, [itemCount]);

  const goToPrevSlide = useCallback(() => {
    if (
      itemCount <= HOME_FEATURED_CAROUSEL_ITEM_COUNT.MIN_LOOP ||
      isAnimatingRef.current
    )
      return;

    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    setActiveIndex(
      (prevIndex) => prevIndex - HOME_FEATURED_CAROUSEL_INDEX.STEP,
    );
  }, [itemCount]);

  const cancelTransitionFrames = useCallback(() => {
    transitionFrameIdsRef.current.forEach((frameId) => {
      window.cancelAnimationFrame(frameId);
    });
    transitionFrameIdsRef.current = [];
  }, []);

  const restoreTransitionAfterJump = () => {
    cancelTransitionFrames();

    const firstFrameId = window.requestAnimationFrame(() => {
      const secondFrameId = window.requestAnimationFrame(() => {
        transitionFrameIdsRef.current = [];
        isAnimatingRef.current = false;
        setIsTransitionEnabled(true);
      });

      transitionFrameIdsRef.current = [secondFrameId];
    });

    transitionFrameIdsRef.current = [firstFrameId];
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      itemCount <= HOME_FEATURED_CAROUSEL_ITEM_COUNT.MIN_LOOP ||
      isAnimatingRef.current
    )
      return;

    dragStartX.current = event.clientX;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    setIsTransitionEnabled(false);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;

    const nextDragOffset = event.clientX - dragStartX.current;

    dragOffsetRef.current = nextDragOffset;
    setDragOffset(nextDragOffset);
  };

  const releasePointerCapture = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;

    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    releasePointerCapture(event);

    if (dragStartX.current === null) return;

    const currentDragOffset = dragOffsetRef.current;
    shouldPreventClick.current =
      Math.abs(currentDragOffset) > DRAG_CLICK_THRESHOLD_PX;

    // 드래그 거리와 SWIPE_THRESHOLD_PX 비교하여 카드 이동 여부 판별
    if (currentDragOffset <= -SWIPE_THRESHOLD_PX) {
      setIsAutoSlidePaused(true);
      goToNextSlide();
    } else if (currentDragOffset >= SWIPE_THRESHOLD_PX) {
      setIsAutoSlidePaused(true);
      goToPrevSlide();
    } else {
      setIsTransitionEnabled(true);
    }

    dragStartX.current = null;
    dragOffsetRef.current = 0;
    setDragOffset(0);
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!shouldPreventClick.current) return;

    event.preventDefault();
    event.stopPropagation();
    shouldPreventClick.current = false;
  };

  const handleTransitionEnd = () => {
    if (activeIndex === HOME_FEATURED_CAROUSEL_INDEX.CLONED_LAST_SLIDE) {
      setIsTransitionEnabled(false);
      setActiveIndex(itemCount);
      restoreTransitionAfterJump();

      return;
    }

    if (activeIndex === getClonedFirstSlideIndex(itemCount)) {
      setIsTransitionEnabled(false);
      setActiveIndex(HOME_FEATURED_CAROUSEL_INDEX.FIRST_REAL_SLIDE);
      restoreTransitionAfterJump();

      return;
    }

    isAnimatingRef.current = false;
  };

  useEffect(() => {
    if (
      itemCount <= HOME_FEATURED_CAROUSEL_ITEM_COUNT.MIN_LOOP ||
      isAutoSlidePaused ||
      dragStartX.current !== null
    )
      return;

    const slideTimer = window.setTimeout(() => {
      goToNextSlide();
    }, SLIDE_INTERVAL_MS);

    return () => window.clearTimeout(slideTimer);
  }, [activeIndex, goToNextSlide, isAutoSlidePaused, itemCount]);

  useEffect(() => cancelTransitionFrames, [cancelTransitionFrames]);

  if (itemCount === HOME_FEATURED_CAROUSEL_ITEM_COUNT.EMPTY) return null;

  const currentSlideIndex = getRealIndex(activeIndex, itemCount);
  const currentItem = items[currentSlideIndex];

  return (
    <section
      className={styles.container}
      role="region"
      aria-roledescription="carousel"
      aria-label="추천 공고 캐러셀"
    >
      <span className={styles.screenReaderOnly} aria-live="polite">
        {`${currentSlideIndex + HOME_FEATURED_CAROUSEL_INDEX.CARD_NUMBER_OFFSET} / ${itemCount}, ${currentItem.announcementTitle}`}
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
            itemCount <= HOME_FEATURED_CAROUSEL_ITEM_COUNT.MIN_LOOP
              ? HOME_FEATURED_CAROUSEL_INDEX.CLONED_LAST_SLIDE
              : activeIndex,
            dragOffset,
          )}
          onTransitionEnd={handleTransitionEnd}
        >
          {homeFeaturedCarouselItems.map(({ item, key }, index) => {
            const currentCardNumber =
              getRealIndex(index, itemCount) +
              HOME_FEATURED_CAROUSEL_INDEX.CARD_NUMBER_OFFSET;

            return (
              <div className={styles.slide} key={key}>
                <HomeFeaturedCarouselCard
                  homeFeaturedCarouselItem={item}
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
