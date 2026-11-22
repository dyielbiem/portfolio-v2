import { useCallback, useEffect, useRef } from "react";

const useAnimateToShow = ({ threshold = 0.2, rootMargin = "0px" } = {}) => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("animated");
          observerRef.current?.unobserve(entry.target);
        });
      },
      { threshold, rootMargin },
    );

    return () => observerRef.current?.disconnect();
  }, [threshold, rootMargin]);

  const ref = useCallback((element) => {
    if (!element) return;

    element.classList.add("animate-to-show");
    observerRef.current?.observe(element);
  }, []);

  return ref;
};

export default useAnimateToShow;
