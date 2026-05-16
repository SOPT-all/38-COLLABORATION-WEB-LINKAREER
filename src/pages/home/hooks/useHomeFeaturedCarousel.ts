import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  MouseEventHandler,
  PointerEvent,
  PointerEventHandler,
} from 'react';

import {
  DRAG_CLICK_THRESHOLD_PX,
  MIN_LOOP_ITEM_COUNT,
  SLIDE_INTERVAL_MS,
  SWIPE_THRESHOLD_PX,
} from '@pages/home/constants/homeFeaturedCarousel';
import { getClonedFirstSlideIndex } from '@pages/home/utils/homeFeaturedCarousel';

interface UseHomeFeaturedCarouselParams {
  itemCount: number;
}

interface UseHomeFeaturedCarouselReturn {
  activeIndex: number;
  dragOffset: number;
  isTransitionEnabled: boolean;
  handleClickCapture: MouseEventHandler<HTMLDivElement>;
  handlePointerDown: PointerEventHandler<HTMLDivElement>;
  handlePointerMove: PointerEventHandler<HTMLDivElement>;
  handlePointerUp: PointerEventHandler<HTMLDivElement>;
  handleTransitionEnd: () => void;
}

export const useHomeFeaturedCarousel = ({
  itemCount,
}: UseHomeFeaturedCarouselParams): UseHomeFeaturedCarouselReturn => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const shouldPreventClick = useRef(false);
  const transitionFrameIdsRef = useRef<number[]>([]);

  const goToNextSlide = useCallback(() => {
    if (itemCount <= MIN_LOOP_ITEM_COUNT || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    setActiveIndex((prevIndex) => prevIndex + 1);
  }, [itemCount]);

  const goToPrevSlide = useCallback(() => {
    if (itemCount <= MIN_LOOP_ITEM_COUNT || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    setActiveIndex((prevIndex) => prevIndex - 1);
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

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    if (itemCount <= MIN_LOOP_ITEM_COUNT || isAnimatingRef.current) return;

    dragStartX.current = event.clientX;
    dragOffsetRef.current = 0;
    isDraggingRef.current = false;
    shouldPreventClick.current = false;
    setDragOffset(0);
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (dragStartX.current === null) return;

    const nextDragOffset = event.clientX - dragStartX.current;
    const hasDragged =
      Math.abs(nextDragOffset) > DRAG_CLICK_THRESHOLD_PX ||
      isDraggingRef.current;

    if (!hasDragged) return;

    if (!isDraggingRef.current) {
      isDraggingRef.current = true;
      setIsTransitionEnabled(false);

      if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    }

    dragOffsetRef.current = nextDragOffset;
    setDragOffset(nextDragOffset);
  };

  const releasePointerCapture = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;

    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (event) => {
    releasePointerCapture(event);

    if (dragStartX.current === null) return;

    const currentDragOffset = dragOffsetRef.current;
    shouldPreventClick.current =
      isDraggingRef.current &&
      Math.abs(currentDragOffset) > DRAG_CLICK_THRESHOLD_PX;

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
    isDraggingRef.current = false;
    setDragOffset(0);
  };

  const handleClickCapture: MouseEventHandler<HTMLDivElement> = (event) => {
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

    if (activeIndex === getClonedFirstSlideIndex(itemCount)) {
      setIsTransitionEnabled(false);
      setActiveIndex(1);
      restoreTransitionAfterJump();

      return;
    }

    isAnimatingRef.current = false;
  };

  useEffect(() => {
    if (
      itemCount <= MIN_LOOP_ITEM_COUNT ||
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

  return {
    activeIndex,
    dragOffset,
    isTransitionEnabled,
    handleClickCapture,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleTransitionEnd,
  };
};
