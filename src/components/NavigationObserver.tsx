
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
    
    // Only clean up portals if no dialogs are open
    if (!isAnyDialogOpen) {
      console.log("No dialogs open, scheduling cleanup");
      // Schedule cleanup on next tick to avoid React rendering issues
      setTimeout(() => {
        // Only clean up CLOSED portals when navigation happens
        cleanupAllPortals();
      }, 300); // Increased delay to allow animations to finish
    } else {
      console.log("Skipping portal cleanup because a dialog is open");
    }
  }, [location, isAnyDialogOpen]);
  
  return null;
};

export default NavigationObserver;
