
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import NavigationObserver from "@/components/NavigationObserver";
import TestPopup from "@/components/TestPopup";
import { applyMobileOptimizations, cleanupDOM } from "@/utils/mobilePerformance";

const App = () => {
  useEffect(() => {
    // Apply performance optimizations for mobile
    applyMobileOptimizations();
    
    // Periodically clean up DOM for better performance
    const cleanupInterval = setInterval(() => {
      cleanupDOM();
    }, 30000); // Run every 30 seconds
    
    return () => {
      clearInterval(cleanupInterval);
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
