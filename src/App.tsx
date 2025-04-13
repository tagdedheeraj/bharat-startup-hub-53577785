
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { ensureBottomNavVisibility, resetZIndexStacking, cleanupOrphanedPortals } from "@/utils/portalCleanup";

const App = () => {
  useEffect(() => {
    // Initial cleanup
    ensureBottomNavVisibility();
    resetZIndexStacking();
    
    // Periodic cleanup to maintain UI integrity
    const intervalId = setInterval(() => {
      ensureBottomNavVisibility();
      cleanupOrphanedPortals();
    }, 3000);
    
    return () => clearInterval(intervalId);
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
