
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";

const App = () => {
  // Set up improved portal cleanup and bottom nav visibility
  useEffect(() => {
    console.log("App mounted");
    
    // Function to ensure UI elements are visible
    const ensureUIVisibility = () => {
      // Check bottom navigation
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.style.visibility = 'visible';
        bottomNav.style.opacity = '1';
        bottomNav.classList.remove('hidden');
      }
      
      // Check support buttons
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'flex';
          button.style.visibility = 'visible';
          button.style.opacity = '1';
          button.classList.remove('hidden');
          button.classList.add('flex');
        }
      });
      
      // Check for any dialogs
      const dialogs = document.querySelectorAll('[role="dialog"]');
      dialogs.forEach(dialog => {
        if (dialog instanceof HTMLElement && dialog.style.display === 'none') {
          dialog.style.display = 'block';
          dialog.style.visibility = 'visible';
          dialog.style.opacity = '1';
        }
      });
    };
    
    // Run immediately and periodically
    ensureUIVisibility();
    
    // Set interval to check periodically
    const interval = setInterval(ensureUIVisibility, 3000);
    
    // Also run on initial load and after short delays
    const timers = [
      setTimeout(ensureUIVisibility, 500),
      setTimeout(ensureUIVisibility, 1000),
      setTimeout(ensureUIVisibility, 2000),
    ];
    
    return () => {
      clearInterval(interval);
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
