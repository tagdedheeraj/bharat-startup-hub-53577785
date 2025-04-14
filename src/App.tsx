
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import NavigationObserver from "@/components/NavigationObserver";
import TestPopup from "@/components/TestPopup";
import { applyMobileOptimizations, setupPeriodicCleanup } from "@/utils/mobilePerformance";

const App = () => {
  useEffect(() => {
    // Apply performance optimizations for mobile on mount
    applyMobileOptimizations();
    
    // Setup periodic DOM cleanup for better performance
    setupPeriodicCleanup();
    
    // Disable unnecessary animations after 10 seconds of inactivity
    let inactivityTimer: number | null = null;
    
    const resetInactivityTimer = () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      
      // After 10 seconds of inactivity, reduce animations for better performance
      inactivityTimer = window.setTimeout(() => {
        document.documentElement.classList.add('inactive-reduce-motion');
      }, 10000);
    };
    
    // Setup event listeners for user activity
    const events = ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'];
    
    const handleUserActivity = () => {
      document.documentElement.classList.remove('inactive-reduce-motion');
      resetInactivityTimer();
    };
    
    events.forEach(event => {
      window.addEventListener(event, handleUserActivity, { passive: true });
    });
    
    // Initialize the timer
    resetInactivityTimer();
    
    // Cleanup event listeners
    return () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      
      events.forEach(event => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, []);

  return (
    <AppProviders>
      <BrowserRouter>
        <NavigationObserver />
        <AppRoutes />
        <Toaster position="top-right" richColors closeButton />
        <TestPopup />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
