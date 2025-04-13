
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import NavigationObserver from "@/components/NavigationObserver";

const App = () => {
  // Add an effect to initialize portal visibility
  useEffect(() => {
    console.log("App mounted - initializing modal support");
    // Add a custom class to the body for portal positioning
    document.body.classList.add("portal-ready");
    
    return () => {
      document.body.classList.remove("portal-ready");
    };
  }, []);

  return (
    <AppProviders>
      <BrowserRouter>
        <NavigationObserver />
        <AppRoutes />
        {/* Higher z-index for toaster to appear above dialogs */}
        <Toaster position="top-right" richColors closeButton />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
