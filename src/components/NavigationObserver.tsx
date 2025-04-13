
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavigationObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Simple logging without expensive operations
    console.log("Navigation changed to:", location.pathname);
  }, [location]);
  
  return null;
};

export default NavigationObserver;
