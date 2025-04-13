
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cleanupAllPortals, debugPortals } from "@/utils/portalCleanup";
import { useDialog } from "@/contexts/dialog/DialogProvider";

const NavigationObserver = () => {
  const location = useLocation();
  const { isAnyDialogOpen } = useDialog();
  
  useEffect(() => {
    console.log("Navigation changed to:", location.pathname);
    console.log("Any dialog open:", isAnyDialogOpen);
    
    // Debug the portals before cleanup
    if (process.env.NODE_ENV === 'development') {
      debugPortals();
    }
    
    // Never close portals during navigation - let components handle their own popup state
    // This solves the popup visibility issues
    console.log("Skipping portal cleanup during navigation to prevent popup issues");
    
  }, [location, isAnyDialogOpen]);
  
  return null;
};

export default NavigationObserver;
