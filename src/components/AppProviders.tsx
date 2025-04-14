
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/auth/AuthProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./ErrorBoundary";
import { DialogProvider } from "@/contexts/dialog/DialogProvider";

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <DialogProvider>
            <TooltipProvider>
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </TooltipProvider>
          </DialogProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default AppProviders;
