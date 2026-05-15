import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent, PointerEvent } from 'react';

import CarouselCard from '@pages/home/components/homeFeaturedCarousel/carouselCard/CarouselCard';
import type { CarouselItem } from '@pages/home/types/homeFeaturedCarousel';

import * as styles from './Carousel.css';

const SLIDE_INTERVAL_MS = 3000;
const SWIPE_THRESHOLD_PX = 50;
const DRAG_CLICK_THRESHOLD_PX = 5;

interface CarouselProps {
  items: CarouselItem[];
}

interface CarouselSlide {
  item: CarouselItem;
  key: string;
}

const getCarouselItemKey = (item: CarouselItem) =>
  `${item.to}-${item.announcementTitle}`;

const getRealIndex = (activeIndex: number, itemCount: number) => {
  if (activeIndex === 0) return itemCount - 1;
  if (activeIndex === itemCount + 1) return 0;
  return activeIndex - 1;
};

const getCssVarName = (cssVar: string) => cssVar.slice('var('.length, -1);

const getTrackStyle = (
  activeIndex: number,
  dragOffset: number,
): CSSProperties => ({
  [getCssVarName(styles.activeIndexVar)]: String(activeIndex),
  [getCssVarName(styles.dragOffsetVar)]: `${dragOffset}px`,
});

const HomeFeaturedCarousel = ({ items }: CarouselProps) => {
  const itemCount = items.length;
  const [activeIndex, setActiveIndex] = useState(1); // [0]은 마지막 카드의 클론 카드
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragOffsetRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const shouldPreventClick = useRef(false);

  const carouselItems = useMemo<CarouselSlide[]>(() => {
    const realSlides = items.map((item) => ({
      item,
      key: getCarouselItemKey(item),
    }));

    if (itemCount <= 1) return realSlides;

    const firstSlide = realSlides[0];
    const lastSlide = realSlides[itemCount - 1];

    return [
      { ...lastSlide, key: `clone-prev-${lastSlide.key}` },
      ...realSlides,
      { ...firstSlide, key: `clone-next-${firstSlide.key}` },
    ];
  }, [itemCount, items]);

  const goToNextSlide = useCallback(() => {
    if (itemCount <= 1 || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    setActiveIndex((prevIndex) => prevIndex + 1);
  }, [itemCount]);

  const goToPrevSlide = useCallback(() => {
    if (itemCount <= 1 || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    setActiveIndex((prevIndex) => prevIndex - 1);
  }, [itemCount]);

  const restoreTransitionAfterJump = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        isAnimatingRef.current = false;
        setIsTransitionEnabled(true);
      });
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (itemCount <= 1 || isAnimatingRef.current) return;

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

  const handlePointerUp = () => {
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
    if (activeIndex === 0) {
      setIsTransitionEnabled(false);
      setActiveIndex(itemCount);
      restoreTransitionAfterJump();

      return;
    }

    if (activeIndex === itemCount + 1) {
      setIsTransitionEnabled(false);
      setActiveIndex(1);
      restoreTransitionAfterJump();

      return;
    }

    isAnimatingRef.current = false;
  };

  useEffect(() => {
    if (itemCount <= 1 || isAutoSlidePaused || dragStartX.current !== null)
      return;

    const slideTimer = window.setTimeout(() => {
      goToNextSlide();
    }, SLIDE_INTERVAL_MS);

    return () => window.clearTimeout(slideTimer);
  }, [activeIndex, goToNextSlide, isAutoSlidePaused, itemCount]);

  if (itemCount === 0) return null;

  return (
    <section className={styles.container}>
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
          style={getTrackStyle(itemCount <= 1 ? 0 : activeIndex, dragOffset)}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselItems.map(({ item, key }, index) => {
            const currentCardNumber = getRealIndex(index, itemCount) + 1;

            return (
              <div className={styles.slide} key={key}>
                <CarouselCard
                  to={item.to}
                  totalCardCount={itemCount}
                  currentCardNumber={currentCardNumber}
                  companyName={item.companyName}
                  companySize={item.companySize}
                  daysLeft={item.daysLeft}
                  thumbnailUrl={item.thumbnailUrl}
                  thumbnailAlt={item.thumbnailAlt}
                  companyLogoUrl={item.companyLogoUrl}
                  companyLogoAlt={item.companyLogoAlt}
                  announcementTitle={item.announcementTitle}
                  announcementDeadline={item.announcementDeadline}
                  announcementCategory={item.announcementCategory}
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
