
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cleanupAllPortals } from "@/utils/portalCleanup";

const NavigationObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log("Navigation changed to:", location.pathname);
    
    // Schedule cleanup on next tick to avoid React rendering issues
    setTimeout(() => {
      // Clean up portals when navigation happens
      const count = cleanupAllPortals();
      if (count > 0) {
        console.log(`Cleaned up ${count} portals during navigation`);
      }
    }, 0);
  }, [location]);
  
  return null;
};

export default NavigationObserver;
