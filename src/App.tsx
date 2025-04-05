
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import { Suspense, useEffect, useState, Component, ErrorInfo, ReactNode } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

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
import ITSolutionsPage from "./pages/ITSolutions";
import FAQsPage from "./pages/FAQs";
import TermsAndConditionsPage from "./pages/TermsAndConditions";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import DisclaimerPage from "./pages/Disclaimer";
import ServiceAgreementPage from "./pages/ServiceAgreement";

// CA Services Pages
import CAServicesPage from "./pages/CAServices";
import CertificationsPage from "./pages/ca-services/Certifications";
import TrademarkPage from "./pages/ca-services/Trademark";
import IncomeTaxPage from "./pages/ca-services/IncomeTax";
import AccountingPage from "./pages/ca-services/Accounting";
import GSTPage from "./pages/ca-services/GST";
import PayrollPage from "./pages/ca-services/Payroll";
import CACompliancePage from "./pages/ca-services/Compliance";

// Auth and Dashboard Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import StartupDashboard from "./pages/dashboard/StartupDashboard";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard";

// Error boundary to prevent the whole app from crashing
class ErrorBoundary extends Component<{ children: ReactNode, fallback?: ReactNode }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 text-center">
          <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
          <p className="mb-4">Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create a history observer component to clean portals on navigation
function NavigationObserver() {
  const navigate = useNavigate();
  
  useEffect(() => {
    return () => {
      // Clean up portals when navigation happens
      try {
        const portals = document.querySelectorAll('[data-radix-portal]');
        portals.forEach(portal => {
          try {
            portal.remove();
          } catch (e) {
            // Silent fail
          }
        });
      } catch (e) {
        // Silent fail
      }
    };
  }, [navigate]);
  
  return null;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  // Force a clean mount of portals when the app starts
  useEffect(() => {
    // Clean up any leftover portals
    const cleanupPortals = () => {
      try {
        const portals = document.querySelectorAll('[data-radix-portal]');
        portals.forEach(portal => {
          try {
            portal.remove();
          } catch (e) {
            // Silent fail
          }
        });
      } catch (e) {
        // Silent fail
      }
    };
    
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
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <BrowserRouter>
              <NavigationObserver />
              <ErrorBoundary>
                <Layout>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/services/funding-consultation" element={<FundingConsultationPage />} />
                      <Route path="/services/certificate-marketing" element={<CertificateMarketingPage />} />
                      <Route path="/services/legal-consultation" element={<LegalConsultationPage />} />
                      <Route path="/it-solutions" element={<ITSolutionsPage />} />
                      <Route path="/success-stories" element={<SuccessStoriesPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/faqs" element={<FAQsPage />} />
                      
                      {/* Auth Routes */}
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      
                      {/* Dashboard Routes */}
                      <Route 
                        path="/dashboard/startup" 
                        element={
                          <ProtectedRoute allowedRoles={['startup']}>
                            <StartupDashboard />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/dashboard/investor" 
                        element={
                          <ProtectedRoute allowedRoles={['investor']}>
                            <InvestorDashboard />
                          </ProtectedRoute>
                        } 
                      />
                      
                      {/* Legal Pages */}
                      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                      <Route path="/disclaimer" element={<DisclaimerPage />} />
                      <Route path="/service-agreement" element={<ServiceAgreementPage />} />
                      
                      {/* CA Services Routes */}
                      <Route path="/ca-services" element={<CAServicesPage />} />
                      <Route path="/ca-services/certifications" element={<CertificationsPage />} />
                      <Route path="/ca-services/trademark" element={<TrademarkPage />} />
                      <Route path="/ca-services/income-tax" element={<IncomeTaxPage />} />
                      <Route path="/ca-services/accounting" element={<AccountingPage />} />
                      <Route path="/ca-services/gst" element={<GSTPage />} />
                      <Route path="/ca-services/payroll" element={<PayrollPage />} />
                      <Route path="/ca-services/compliance" element={<CACompliancePage />} />
                      
                      {/* More Routes */}
                      <Route path="/more/experts" element={<ExpertsPage />} />
                      <Route path="/more/msme-events" element={<MSMEEventsPage />} />
                      <Route path="/more/reviews" element={<ReviewsPage />} />
                      <Route path="/more/blogs" element={<BlogsPage />} />
                      <Route path="/more/compliance" element={<CompliancePage />} />
                      <Route path="/404" element={<NotFound />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </Layout>
              </ErrorBoundary>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
