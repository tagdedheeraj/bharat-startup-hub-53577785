
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { cleanupPortals, ensureBottomNavVisibility } from "@/utils/portalCleanup";

const App = () => {
  // Set up improved portal cleanup and bottom nav visibility
  useEffect(() => {
    console.log("App mounted - initializing portal cleanup and nav visibility");
    
    // Run cleanup initially
    cleanupPortals();
    ensureBottomNavVisibility();
    
    // Also set up an interval for periodic cleanup - but be more gentle
    const interval = setInterval(() => {
      console.log("Periodic portal cleanup");
      cleanupPortals();
      ensureBottomNavVisibility();
    }, 5000); // Every 5 seconds should be plenty
    
    return () => {
      clearInterval(interval);
      cleanupPortals();
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
