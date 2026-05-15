import { useRef, useState } from 'react';

const SLIDE_WIDTH = 375;
const SNAP_THRESHOLD_RATIO = 1 / 3;

const useCarouselDrag = (totalCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const handleDragStart = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const delta = clientX - startXRef.current;

    if (currentIndex === 0 && delta > 0) return;
    if (currentIndex === totalCount - 1 && delta < 0) return;

    const baseOffset = -currentIndex * SLIDE_WIDTH;
    trackRef.current.style.transform = `translateX(${baseOffset + delta}px)`;
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    isDraggingRef.current = false;

    const delta = clientX - startXRef.current;
    const threshold = SLIDE_WIDTH * SNAP_THRESHOLD_RATIO;

    let nextIndex = currentIndex;
    if (delta < -threshold)
      nextIndex = Math.min(currentIndex + 1, totalCount - 1);
    if (delta > threshold) nextIndex = Math.max(currentIndex - 1, 0);

    setCurrentIndex(nextIndex);
    trackRef.current.style.transition = 'transform 0.3s ease';
    trackRef.current.style.transform = `translateX(${-nextIndex * SLIDE_WIDTH}px)`;

    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = '';
    }, 300);
  };

  const dragHandlers = {
    onPointerDown: (e: React.PointerEvent) => handleDragStart(e),
    onPointerMove: (e: React.PointerEvent) => handleDragMove(e.clientX),
    onPointerUp: (e: React.PointerEvent) => handleDragEnd(e.clientX),
  };

  return {
    currentIndex,
    trackRef,
    dragHandlers,
  };
};

export default useCarouselDrag;
