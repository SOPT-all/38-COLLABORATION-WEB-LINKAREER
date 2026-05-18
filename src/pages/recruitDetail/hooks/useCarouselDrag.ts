import { useEffect, useRef, useState } from 'react';

const SNAP_THRESHOLD_RATIO = 1 / 3;
const TRANSITION_DURATION = 300;

interface UseCarouselDragOptions {
  isLoop?: boolean;
}

const useCarouselDrag = (
  totalCount: number,
  { isLoop = false }: UseCarouselDragOptions = {},
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const isDraggingRef = useRef(false);
  const slideWidthRef = useRef<number>(375);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const calculateSlideWidth = () => {
      if (!trackRef.current) return;
      const firstChild = trackRef.current.children[0] as HTMLElement;
      if (!firstChild) return;
      const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
      slideWidthRef.current = firstChild.offsetWidth + gap;
    };

    calculateSlideWidth();

    const observer = new ResizeObserver(calculateSlideWidth);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => {
      observer.disconnect();
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, []);

  const handleDragStart = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
  };

  const handleDragMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    const deltaY = e.clientY - startYRef.current;

    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    if (!isLoop) {
      if (currentIndex === 0 && deltaX > 0) return;
      if (currentIndex === totalCount - 1 && deltaX < 0) return;
    }

    const baseOffset = -currentIndex * slideWidthRef.current;
    trackRef.current.style.transform = `translateX(${baseOffset + deltaX}px)`;
  };

  const handleDragEnd = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    isDraggingRef.current = false;

    const deltaX = e.clientX - startXRef.current;
    const deltaY = e.clientY - startYRef.current;

    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    const threshold = slideWidthRef.current * SNAP_THRESHOLD_RATIO;

    let nextIndex = currentIndex;
    if (deltaX < -threshold) {
      nextIndex = isLoop
        ? (currentIndex + 1) % totalCount
        : Math.min(currentIndex + 1, totalCount - 1);
    }
    if (deltaX > threshold) {
      nextIndex = isLoop
        ? (currentIndex - 1 + totalCount) % totalCount
        : Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(nextIndex);
    trackRef.current.style.transition = `transform ${TRANSITION_DURATION}ms ease`;
    trackRef.current.style.transform = `translateX(${-nextIndex * slideWidthRef.current}px)`;

    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = '';
    }, TRANSITION_DURATION);
  };

  const dragHandlers = {
    onPointerDown: (e: React.PointerEvent) => handleDragStart(e),
    onPointerMove: (e: React.PointerEvent) => handleDragMove(e),
    onPointerUp: (e: React.PointerEvent) => handleDragEnd(e),
  };

  return {
    currentIndex,
    trackRef,
    dragHandlers,
  };
};

export default useCarouselDrag;
