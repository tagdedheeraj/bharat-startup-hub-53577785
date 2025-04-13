
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavigationObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Clean up portals when navigation happens
    try {
      const portals = document.querySelectorAll('[data-radix-portal]');
      portals.forEach(portal => {
        try {
          portal.remove();
        } catch (e) {
          // Silent fail
        }
      });
    } catch (e) {
      // Silent fail
    }
    
    // This effect will run on each location change
  }, [location]);
  
  return null;
};

export default NavigationObserver;
