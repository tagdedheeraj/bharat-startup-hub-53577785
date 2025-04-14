
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { cleanupDOM } from "@/utils/mobilePerformance";

const NavigationObserver = () => {
  const location = useLocation();
  const previousPathRef = useRef<string>(location.pathname);
  
  useEffect(() => {
    if (previousPathRef.current !== location.pathname) {
      // Only log when the path actually changes
      console.log("Navigation changed to:", location.pathname);
      previousPathRef.current = location.pathname;
      
      // Perform cleanup of any stale DOM elements
      // This is important for mobile performance
      const cleanup = setTimeout(() => {
        // Clean up portal elements and other remnants
        cleanupDOM();
        
        // Force scroll to top for better user experience
        window.scrollTo(0, 0);
      }, 100); // Reduced from 300ms to 100ms for faster cleanup
      
      return () => clearTimeout(cleanup);
    }
  }, [location.pathname]);
  
  return null;
};

export default NavigationObserver;
