
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Suspense } from "react";
import React from 'react'; // Add explicit React import

// Pages
import HomePage from "./pages/Index";
import AboutPage from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import FundingConsultationPage from "./pages/services/FundingConsultation";
import CertificateMarketingPage from "./pages/services/CertificateMarketing";
import LegalConsultationPage from "./pages/services/LegalConsultation";
import SuccessStoriesPage from "./pages/SuccessStories";
import ContactPage from "./pages/Contact";
import ExpertsPage from "./pages/more/Experts";
import MSMEEventsPage from "./pages/more/MSMEEvents";
import ReviewsPage from "./pages/more/Reviews";
import BlogsPage from "./pages/more/Blogs";
import CompliancePage from "./pages/more/Compliance";
import NotFound from "./pages/NotFound";

// CA Services Pages
import CAServicesPage from "./pages/services/CAServices";
import CertificationPage from "./pages/services/ca-services/Certification";
import TrademarkPage from "./pages/services/ca-services/Trademark";
import IncomeTaxPage from "./pages/services/ca-services/IncomeTax";
import AccountingPage from "./pages/services/ca-services/Accounting";
import GSTPage from "./pages/services/ca-services/GST";
import PayrollPage from "./pages/services/ca-services/Payroll";
import CACompliancePage from "./pages/services/ca-services/Compliance";

// Error boundary for catching and displaying errors
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="p-4 bg-red-50 border border-red-100 rounded-md max-w-2xl mx-auto my-8">
      <h2 className="text-xl font-bold text-red-700 mb-2">Something went wrong</h2>
      <p className="text-red-600 mb-4">We've encountered an error. Please refresh the page to try again.</p>
      <p className="text-sm text-red-500 font-mono bg-red-50 p-2 rounded">{error.message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Refresh Page
      </button>
    </div>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error as Error} />;
    }
    return this.props.children;
  }
}

// Create a new QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/funding-consultation" element={<FundingConsultationPage />} />
                <Route path="/services/certificate-marketing" element={<CertificateMarketingPage />} />
                <Route path="/services/legal-consultation" element={<LegalConsultationPage />} />
                
                {/* CA Services Routes */}
                <Route path="/services/ca-services" element={<CAServicesPage />} />
                <Route path="/services/ca-services/certification" element={<CertificationPage />} />
                <Route path="/services/ca-services/trademark" element={<TrademarkPage />} />
                <Route path="/services/ca-services/income-tax" element={<IncomeTaxPage />} />
                <Route path="/services/ca-services/accounting" element={<AccountingPage />} />
                <Route path="/services/ca-services/gst" element={<GSTPage />} />
                <Route path="/services/ca-services/payroll" element={<PayrollPage />} />
                <Route path="/services/ca-services/compliance" element={<CACompliancePage />} />
                
                <Route path="/success-stories" element={<SuccessStoriesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/more/experts" element={<ExpertsPage />} />
                <Route path="/more/msme-events" element={<MSMEEventsPage />} />
                <Route path="/more/reviews" element={<ReviewsPage />} />
                <Route path="/more/blogs" element={<BlogsPage />} />
                <Route path="/more/compliance" element={<CompliancePage />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Suspense>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
