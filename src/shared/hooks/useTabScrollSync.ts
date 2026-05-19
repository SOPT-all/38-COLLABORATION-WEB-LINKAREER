import { useEffect } from 'react';

interface UseTabScrollSyncProps {
  passDataRef: React.RefObject<HTMLDivElement>;
  offset?: number;
  onTabChange: (value: string) => void;
}

export const useTabScrollSync = ({
  passDataRef,
  offset,
  onTabChange,
}: UseTabScrollSyncProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onTabChange(entry.isIntersecting ? 'pass-data' : 'detail');
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0,
      },
    );

    if (passDataRef.current) observer.observe(passDataRef.current);

    return () => observer.disconnect();
  }, []);
};
