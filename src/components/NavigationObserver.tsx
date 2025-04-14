
import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { cleanupDOM } from "@/utils/mobilePerformance";
import { useIsMobile } from "@/hooks/use-mobile";

const NavigationObserver = () => {
  const location = useLocation();
  const previousPathRef = useRef<string>(location.pathname);
  const isMobile = useIsMobile();
  
  // Use a memoized cleanup function to avoid unnecessary re-renders
  const performCleanup = useCallback(() => {
    // Clean up portal elements and other remnants
    cleanupDOM();
    
    // Force scroll to top for better user experience
    // For mobile devices, use a more performant approach
    if (isMobile) {
      // On mobile, use scrollTo with behavior: 'auto' for performance
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use 'auto' instead of 'smooth' for better performance
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [isMobile]);
  
  useEffect(() => {
    if (previousPathRef.current !== location.pathname) {
      // Only log when the path actually changes
      console.log("Navigation changed to:", location.pathname);
      previousPathRef.current = location.pathname;
      
      // For mobile, perform immediate cleanup without timeout
      if (isMobile) {
        performCleanup();
      } else {
        // Use timeout only for non-mobile
        const cleanup = setTimeout(performCleanup, 100);
        return () => clearTimeout(cleanup);
      }
    }
  }, [location.pathname, performCleanup, isMobile]);
  
  return null;
};

export default NavigationObserver;
