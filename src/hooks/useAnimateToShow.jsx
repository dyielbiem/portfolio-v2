import { useCallback } from "react";

const useAnimateToShow = ({ threshold = 0.2, rootMargin = "0px" } = {}) =>
  useCallback(
    (element) => {
      element.classList.add("animate-to-show");

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          element.classList.add("animated");
          observer.disconnect();
        },
        { threshold, rootMargin },
      );

      observer.observe(element);

      return () => observer.disconnect();
    },
    [threshold, rootMargin],
  );

export default useAnimateToShow;
