
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import { ensureBottomNavVisibility } from "@/utils/portalCleanup";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  // Ensure nav visibility on app initialization
  useEffect(() => {
    // Check for bottom nav visibility periodically
    const intervalId = setInterval(ensureBottomNavVisibility, 2000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <AppProviders>
      <BrowserRouter>
        <AppRoutes />
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
