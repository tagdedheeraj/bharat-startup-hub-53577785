
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { ensureBottomNavVisibility, resetZIndexStacking } from "@/utils/portalCleanup";

const App = () => {
  useEffect(() => {
    // Function to ensure UI integrity
    const ensureUIIntegrity = () => {
      console.log("Running UI integrity check");
      ensureBottomNavVisibility();
      resetZIndexStacking();
      
      // Make bottom nav visible
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
      }
    };
    
    // Initial cleanup
    ensureUIIntegrity();
    
    // Run multiple times with different delays to ensure it works
    const timers = [
      setTimeout(ensureUIIntegrity, 1000),
      setTimeout(ensureUIIntegrity, 3000),
    ];
    
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <AppProviders>
      <AppRoutes />
      <Toaster />
      <Sonner />
    </AppProviders>
  );
};

export default App;
