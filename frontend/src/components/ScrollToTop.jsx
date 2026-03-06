import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.body.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    scrollToTop();
    const timer = setTimeout(scrollToTop, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
