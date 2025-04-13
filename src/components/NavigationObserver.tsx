
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cleanupAllPortals, debugPortals } from "@/utils/portalCleanup";

const NavigationObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log("Navigation changed to:", location.pathname);
    
    // Debug the portals before cleanup
    if (process.env.NODE_ENV === 'development') {
      debugPortals();
    }
    
    // Schedule cleanup on next tick to avoid React rendering issues
    // But use a longer delay to give animations time to complete
    setTimeout(() => {
      // Only clean up CLOSED portals when navigation happens
      const count = cleanupAllPortals();
      if (count > 0) {
        console.log(`Cleaned up ${count} inactive portals during navigation`);
      }
    }, 300); // Increased delay to allow animations to finish
  }, [location]);
  
  return null;
};

export default NavigationObserver;
