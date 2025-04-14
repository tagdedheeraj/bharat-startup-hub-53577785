
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

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
        // Clean up any lingering portals or modals that might be causing issues
        try {
          const elements = document.querySelectorAll('[role="dialog"][data-state="closed"]');
          elements.forEach(el => {
            if (el.parentNode) el.parentNode.removeChild(el);
          });
        } catch (e) {
          // Silent fail
        }
        
        // Force garbage collection hint
        window.scrollTo(0, 0);
      }, 300);
      
      return () => clearTimeout(cleanup);
    }
  }, [location.pathname]);
  
  return null;
};

export default NavigationObserver;
