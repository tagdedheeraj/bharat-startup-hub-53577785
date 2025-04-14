
import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import NavigationObserver from "@/components/NavigationObserver";
import TestPopup from "@/components/TestPopup";
import { applyMobileOptimizations, setupPeriodicCleanup } from "@/utils/mobilePerformance";
import { useIsMobile } from "@/hooks/use-mobile";

const App = () => {
  const optimizationsApplied = useRef(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Only apply these optimizations once to avoid performance issues
    if (!optimizationsApplied.current) {
      // Apply performance optimizations for mobile on mount
      applyMobileOptimizations();
      
      // Setup periodic DOM cleanup for better performance
      setupPeriodicCleanup();
      
      optimizationsApplied.current = true;
    }
    
    // Add touch-friendly scrolling CSS
    const style = document.createElement('style');
    style.innerHTML = `
      html, body {
        overscroll-behavior: none;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: auto !important;
      }
      
      * {
        -webkit-tap-highlight-color: transparent;
      }
      
      .mobile-device .embla__container {
        backface-visibility: hidden;
      }
    `;
    document.head.appendChild(style);
    
    // Fix for body scrolling
    document.body.style.height = '100%';
    document.body.style.overflowX = 'hidden';
    
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
    
    // Setup event listeners for user activity - use passive listeners for better performance
    const events = ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'];
    
    const handleUserActivity = () => {
      document.documentElement.classList.remove('inactive-reduce-motion');
      resetInactivityTimer();
    };
    
    events.forEach(event => {
      window.addEventListener(event, handleUserActivity, { passive: true });
    });
    
    // Disable pull-to-refresh on mobile for smoother scrolling
    if (isMobile) {
      document.body.style.overscrollBehavior = 'none';
    }
    
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
      
      document.head.removeChild(style);
    };
  }, [isMobile]);

  return (
    <AppProviders>
      <BrowserRouter>
        <NavigationObserver />
        <AppRoutes />
        <Toaster 
          position="top-right" 
          richColors 
          closeButton 
          // Limit number of toasts on mobile for better performance
          toastOptions={{
            duration: isMobile ? 3000 : 5000,
          }}
        />
        <TestPopup />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
