import { useRouter } from "next/router";
import { useEffect } from "react";

export const useBackPosition = () => {
  const router = useRouter();

  useEffect(() => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    const pagePosition = localStorage.getItem("pagePosition");
    const url = router.asPath;

    if (pagePosition === url && scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    localStorage.removeItem("pagePosition");
    localStorage.removeItem("scrollPosition");
  }, []);
};
