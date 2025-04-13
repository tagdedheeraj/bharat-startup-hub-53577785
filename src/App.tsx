
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { ensureBottomNavVisibility } from "@/utils/portalCleanup";

const App = () => {
  useEffect(() => {
    // Simple function to ensure bottom nav is visible
    ensureBottomNavVisibility();
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
