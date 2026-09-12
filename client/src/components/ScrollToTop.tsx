import { useLayoutEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    let secondFrame = 0;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    root.style.scrollBehavior = "auto";

    const resetScroll = () => {
      window.scrollTo(0, 0);
      root.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    const firstFrame = window.requestAnimationFrame(() => {
      resetScroll();
      secondFrame = window.requestAnimationFrame(() => {
        resetScroll();
        root.style.scrollBehavior = previousScrollBehavior;
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, [location]);

  return null;
}
