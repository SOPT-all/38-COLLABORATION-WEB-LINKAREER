import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent, PointerEvent } from 'react';

import CarouselCard from '@pages/home/components/homeFeaturedCarousel/carouselCard/CarouselCard';
import {
  CAROUSEL_INDEX,
  CAROUSEL_ITEM_COUNT,
  DRAG_CLICK_THRESHOLD_PX,
  SLIDE_INTERVAL_MS,
  SWIPE_THRESHOLD_PX,
} from '@pages/home/constants/carousel';
import type { CarouselItem } from '@pages/home/types/homeFeaturedCarousel';
import {
  getCarouselItemKey,
  getClonedFirstSlideIndex,
  getCssVarName,
  getLastRealSlideIndex,
  getRealIndex,
} from '@pages/home/utils/carousel';

import * as styles from './Carousel.css';

interface CarouselProps {
  items: CarouselItem[];
}

interface CarouselSlide {
  item: CarouselItem;
  key: string;
}

const getTrackStyle = (
  activeIndex: number,
  dragOffset: number,
): CSSProperties => ({
  [getCssVarName(styles.activeIndexVar)]: String(activeIndex),
  [getCssVarName(styles.dragOffsetVar)]: `${dragOffset}px`,
});

const HomeFeaturedCarousel = ({ items }: CarouselProps) => {
  const itemCount = items.length;
  const [activeIndex, setActiveIndex] = useState<number>(
    CAROUSEL_INDEX.FIRST_REAL_SLIDE,
  );
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragOffsetRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const shouldPreventClick = useRef(false);
  const transitionFrameIdsRef = useRef<number[]>([]);

  const carouselItems = useMemo<CarouselSlide[]>(() => {
    const realSlides = items.map((item) => ({
      item,
      key: getCarouselItemKey(item),
    }));

    if (itemCount <= CAROUSEL_ITEM_COUNT.MIN_LOOP) return realSlides;

    const firstSlide = realSlides[CAROUSEL_INDEX.FIRST_ITEM];
    const lastSlide = realSlides[getLastRealSlideIndex(itemCount)];

    return [
      { ...lastSlide, key: `clone-prev-${lastSlide.key}` },
      ...realSlides,
      { ...firstSlide, key: `clone-next-${firstSlide.key}` },
    ];
  }, [itemCount, items]);

  const goToNextSlide = useCallback(() => {
    if (itemCount <= CAROUSEL_ITEM_COUNT.MIN_LOOP || isAnimatingRef.current)
      return;

    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    setActiveIndex((prevIndex) => prevIndex + CAROUSEL_INDEX.STEP);
  }, [itemCount]);

  const goToPrevSlide = useCallback(() => {
    if (itemCount <= CAROUSEL_ITEM_COUNT.MIN_LOOP || isAnimatingRef.current)
      return;

    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    setActiveIndex((prevIndex) => prevIndex - CAROUSEL_INDEX.STEP);
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
    if (itemCount <= CAROUSEL_ITEM_COUNT.MIN_LOOP || isAnimatingRef.current)
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
    if (activeIndex === CAROUSEL_INDEX.CLONED_LAST_SLIDE) {
      setIsTransitionEnabled(false);
      setActiveIndex(itemCount);
      restoreTransitionAfterJump();

      return;
    }

    if (activeIndex === getClonedFirstSlideIndex(itemCount)) {
      setIsTransitionEnabled(false);
      setActiveIndex(CAROUSEL_INDEX.FIRST_REAL_SLIDE);
      restoreTransitionAfterJump();

      return;
    }

    isAnimatingRef.current = false;
  };

  useEffect(() => {
    if (
      itemCount <= CAROUSEL_ITEM_COUNT.MIN_LOOP ||
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

  if (itemCount === CAROUSEL_ITEM_COUNT.EMPTY) return null;

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
        {`${currentSlideIndex + CAROUSEL_INDEX.CARD_NUMBER_OFFSET} / ${itemCount}, ${currentItem.announcementTitle}`}
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
            itemCount <= CAROUSEL_ITEM_COUNT.MIN_LOOP
              ? CAROUSEL_INDEX.CLONED_LAST_SLIDE
              : activeIndex,
            dragOffset,
          )}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselItems.map(({ item, key }, index) => {
            const currentCardNumber =
              getRealIndex(index, itemCount) +
              CAROUSEL_INDEX.CARD_NUMBER_OFFSET;

            return (
              <div className={styles.slide} key={key}>
                <CarouselCard
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
