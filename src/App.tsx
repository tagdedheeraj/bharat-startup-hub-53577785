
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppProviders from "@/components/AppProviders";
import AppRoutes from "@/routes/AppRoutes";
import NavigationObserver from "@/components/NavigationObserver";
import { DialogProvider } from "@/contexts/dialog/DialogProvider";

const App = () => {
  return (
    <AppProviders>
      <DialogProvider>
        <BrowserRouter>
          <NavigationObserver />
          <AppRoutes />
          <Toaster position="top-right" richColors closeButton />
        </BrowserRouter>
      </DialogProvider>
    </AppProviders>
  );
};

export default App;
