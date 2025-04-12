
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { cleanupPortals, ensureBottomNavVisibility, ensureDialogVisibility } from "@/utils/portalCleanup";

const App = () => {
  // Set up improved portal cleanup and bottom nav visibility
  useEffect(() => {
    console.log("App mounted - initializing portal cleanup and nav visibility");
    
    // Run an initial visibility check
    ensureBottomNavVisibility();
    ensureDialogVisibility();
    
    // Set up interval for periodic checks
    const interval = setInterval(() => {
      console.log("Periodic portal and nav visibility check");
      cleanupPortals();
      ensureBottomNavVisibility();
      ensureDialogVisibility();
    }, 10000); // Every 10 seconds is plenty
    
    return () => {
      clearInterval(interval);
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
