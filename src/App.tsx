
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { ensureBottomNavVisibility, resetZIndexStacking, ensureDialogVisibility } from "@/utils/portalCleanup";

const App = () => {
  useEffect(() => {
    // Function to ensure UI integrity
    const ensureUIIntegrity = () => {
      console.log("Running UI integrity check");
      ensureBottomNavVisibility();
      resetZIndexStacking();
      ensureDialogVisibility();
      
      // Also directly ensure support button visibility
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'flex';
          button.classList.remove('hidden');
        }
      });
      
      // Make bottom nav visible
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.classList.remove('hidden');
      }
    };
    
    // Initial cleanup
    ensureUIIntegrity();
    
    // Run multiple times with different delays to ensure it works
    const timers = [
      setTimeout(ensureUIIntegrity, 100),
      setTimeout(ensureUIIntegrity, 500),
      setTimeout(ensureUIIntegrity, 1000),
      setTimeout(ensureUIIntegrity, 2000),
      setTimeout(ensureUIIntegrity, 5000),
    ];
    
    // Periodic cleanup to maintain UI integrity
    const intervalId = setInterval(ensureUIIntegrity, 3000);
    
    return () => {
      clearInterval(intervalId);
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
