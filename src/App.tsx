
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { cleanupPortals } from "@/utils/portalCleanup";

const App = () => {
  // Force a clean mount of portals when the app starts
  useEffect(() => {
    // Run cleanup initially
    cleanupPortals();
    
    // Also set up an interval for periodic cleanup
    const interval = setInterval(cleanupPortals, 5000);
    
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
