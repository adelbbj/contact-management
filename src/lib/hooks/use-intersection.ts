import { useRef, useCallback } from "react";

type Props = {
  hasMore: boolean;
  onLoadMore: () => void;
  threshold?: number;
  rootMargin?: string;
};

export const useInfiniteScroll = ({
  hasMore,
  onLoadMore,
  threshold = 0.1,
  rootMargin = "200px",
}: Props) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const setLastElement = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();

      if (node && hasMore) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              onLoadMore();
            }
          },
          { threshold, rootMargin }
        );
        observerRef.current.observe(node);
      }

      lastElementRef.current = node;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasMore, onLoadMore, threshold]
  );

  return { setLastElement };
};
