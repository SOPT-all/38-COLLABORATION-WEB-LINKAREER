import { useEffect, useRef } from 'react';

interface UseTabScrollSyncProps {
  passDataRef: React.RefObject<HTMLDivElement | null>;
  offset?: number;
  onTabChange: (value: string) => void;
}

export const useTabScrollSync = ({
  passDataRef,
  offset = 88,
  onTabChange,
}: UseTabScrollSyncProps) => {
  const onTabChangeRef = useRef(onTabChange);

  useEffect(() => {
    onTabChangeRef.current = onTabChange;
  }, [onTabChange]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onTabChangeRef.current(entry.isIntersecting ? 'pass-data' : 'detail');
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0,
      },
    );

    if (passDataRef.current) observer.observe(passDataRef.current);

    return () => observer.disconnect();
  }, [offset, passDataRef]);
};
