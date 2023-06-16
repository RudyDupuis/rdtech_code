import { useEffect } from "react";
export const useScreenSizeDetect = (
  setIsSmallScreen: (isSmallScreen: boolean) => void,
  breakpoint: number
) => {
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsSmallScreen, breakpoint]);
};
