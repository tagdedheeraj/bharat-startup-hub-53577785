
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { cleanupPortals, ensureBottomNavVisibility, debugPortals } from "@/utils/portalCleanup";

const App = () => {
  // Set up improved portal cleanup and bottom nav visibility
  useEffect(() => {
    console.log("App mounted - initializing portal cleanup and nav visibility");
    
    // Initially run debugging to see what portals exist
    debugPortals();
    
    // Run cleanup initially - but be extremely cautious
    setTimeout(() => {
      cleanupPortals();
      ensureBottomNavVisibility();
    }, 1000); // Delay initial cleanup to allow everything to render
    
    // Set up interval for periodic checks - but be very gentle
    const interval = setInterval(() => {
      console.log("Periodic portal and nav visibility check");
      cleanupPortals();
      ensureBottomNavVisibility();
      
      // Add periodic debugging to help trace issues
      if (Math.random() < 0.2) { // Only debug occasionally (20% of the time)
        debugPortals();
      }
    }, 10000); // Every 10 seconds is plenty - reduced frequency to avoid interference
    
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
