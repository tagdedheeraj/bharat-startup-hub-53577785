
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigationObserver = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    return () => {
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
    };
  }, [navigate]);
  
  return null;
};

export default NavigationObserver;
