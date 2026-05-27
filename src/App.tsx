
import { useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import NavigationObserver from "@/components/NavigationObserver";
import SupportPopup from "@/components/SupportPopup";
import { applyMobileOptimizations, setupPeriodicCleanup } from "@/utils/mobile/optimization";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileBottomNav from "@/components/mobile-nav/MobileBottomNav";

const App = () => {
  const optimizationsApplied = useRef(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!optimizationsApplied.current) {
      applyMobileOptimizations();
      setupPeriodicCleanup();
      optimizationsApplied.current = true;
    }
    
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
    
    document.body.style.height = '100%';
    document.body.style.overflowX = 'hidden';
    
    let inactivityTimer: number | null = null;
    
    const resetInactivityTimer = () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      
      inactivityTimer = window.setTimeout(() => {
        document.documentElement.classList.add('inactive-reduce-motion');
      }, 10000);
    };
    
    const events = ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'];
    
    const handleUserActivity = () => {
      document.documentElement.classList.remove('inactive-reduce-motion');
      resetInactivityTimer();
    };
    
    events.forEach(event => {
      window.addEventListener(event, handleUserActivity, { passive: true });
    });
    
    if (isMobile) {
      document.body.style.overscrollBehavior = 'none';
    }
    
    resetInactivityTimer();
    
    // Additional cleanup function to remove any "Edit with Lovable" elements
    const removeLovableElements = () => {
      const selectors = [
        '[class*="lovable-"]',
        '[id*="lovable-"]',
        '[data-lovable]',
        '.gpt-engineer-container',
        '.gpt-engineer-button',
        '[class*="gpt-engineer"]',
        '[id*="gpt-engineer"]',
        'div[style*="position: fixed"][style*="bottom: 0"][style*="right: 0"]:not([class])'
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el && el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });
      });
    };
    
    // Run cleanup immediately and on interval
    removeLovableElements();
    const cleanupInterval = setInterval(removeLovableElements, 1000);
    
    return () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      
      events.forEach(event => {
        window.removeEventListener(event, handleUserActivity);
      });
      
      document.head.removeChild(style);
      
      clearInterval(cleanupInterval);
    };
  }, [isMobile]);

  return (
    <AppProviders>
      <Router>
        <NavigationObserver />
        <AppRoutes />
        <Toaster 
          position="top-right" 
          richColors 
          closeButton 
          toastOptions={{
            duration: isMobile ? 3000 : 5000,
          }}
        />
        <SupportPopup />
        <MobileBottomNav />
      </Router>
    </AppProviders>
  );
};

export default App;
