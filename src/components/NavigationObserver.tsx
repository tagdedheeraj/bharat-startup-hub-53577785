
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { debugPortals } from "@/utils/portalCleanup";
import { useDialog } from "@/contexts/dialog/DialogProvider";

const NavigationObserver = () => {
  const location = useLocation();
  const { isAnyDialogOpen } = useDialog();
  
  useEffect(() => {
    console.log("Navigation changed to:", location.pathname);
    console.log("Any dialog open:", isAnyDialogOpen);
    
    // Debug the portals but never clean them up or modify them
    if (process.env.NODE_ENV === 'development') {
      debugPortals();
    }
    
    // IMPORTANT: Never attempt to close or clean up portals
    // This ensures popups will remain visible when triggered
    console.log("Preventing any portal cleanup to ensure popups work correctly");
    
  }, [location, isAnyDialogOpen]);
  
  return null;
};

export default NavigationObserver;
