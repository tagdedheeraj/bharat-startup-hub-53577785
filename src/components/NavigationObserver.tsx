
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { debugPortals } from "@/utils/portalCleanup";

const NavigationObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log("Navigation changed to:", location.pathname);
    
    // Only debug portals, never clean them up
    if (process.env.NODE_ENV === 'development') {
      debugPortals();
    }
    
    // IMPORTANT: Never cleaning up portals to ensure popups work correctly
    console.log("Allowing portals to remain mounted for proper popup functionality");
    
  }, [location]);
  
  return null;
};

export default NavigationObserver;
