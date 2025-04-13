
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import NavigationObserver from "@/components/NavigationObserver";
import TestPopup from "@/components/TestPopup";

const App = () => {
  return (
    <AppProviders>
      <BrowserRouter>
        <NavigationObserver />
        <AppRoutes />
        <Toaster position="top-right" richColors closeButton />
        <TestPopup />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
