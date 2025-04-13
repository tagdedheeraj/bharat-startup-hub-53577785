
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { debugPortals } from "@/utils/portalCleanup";

const NavigationObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log("Navigation changed to:", location.pathname);
    
    // Only debug portals in development mode
    if (process.env.NODE_ENV === 'development') {
      debugPortals();
    }
    
    // No automatic cleanup on navigation to avoid interfering with dialogs
    
  }, [location]);
  
  return null;
};

export default NavigationObserver;
