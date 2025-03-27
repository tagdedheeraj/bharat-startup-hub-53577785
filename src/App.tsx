
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import HomePage from "./pages/Index";
import AboutPage from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import FundingConsultationPage from "./pages/services/FundingConsultation";
import CertificateMarketingPage from "./pages/services/CertificateMarketing";
import LegalConsultationPage from "./pages/services/LegalConsultation";
import CAServicesPage from "./pages/services/CAServices";
import CertificationsPage from "./pages/services/ca-services/Certifications";
import TrademarkPage from "./pages/services/ca-services/Trademark";
import IncomeTaxPage from "./pages/services/ca-services/IncomeTax";
import AccountingPage from "./pages/services/ca-services/Accounting";
import GSTPage from "./pages/services/ca-services/GST";
import PayrollPage from "./pages/services/ca-services/Payroll";
import CompliancePage from "./pages/services/ca-services/Compliance";
import SuccessStoriesPage from "./pages/SuccessStories";
import ContactPage from "./pages/Contact";
import ExpertsPage from "./pages/more/Experts";
import MSMEEventsPage from "./pages/more/MSMEEvents";
import ReviewsPage from "./pages/more/Reviews";
import BlogsPage from "./pages/more/Blogs";
import ComplianceMorePage from "./pages/more/Compliance";
import NotFound from "./pages/NotFound";
import ITSolutionsPage from "./pages/ITSolutions";
import FAQsPage from "./pages/FAQs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/funding-consultation" element={<FundingConsultationPage />} />
            <Route path="/services/certificate-marketing" element={<CertificateMarketingPage />} />
            <Route path="/services/legal-consultation" element={<LegalConsultationPage />} />
            <Route path="/services/ca-services" element={<CAServicesPage />} />
            <Route path="/services/ca-services/certifications" element={<CertificationsPage />} />
            <Route path="/services/ca-services/trademark" element={<TrademarkPage />} />
            <Route path="/services/ca-services/income-tax" element={<IncomeTaxPage />} />
            <Route path="/services/ca-services/accounting" element={<AccountingPage />} />
            <Route path="/services/ca-services/gst" element={<GSTPage />} />
            <Route path="/services/ca-services/payroll" element={<PayrollPage />} />
            <Route path="/services/ca-services/compliance" element={<CompliancePage />} />
            <Route path="/it-solutions" element={<ITSolutionsPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/more/experts" element={<ExpertsPage />} />
            <Route path="/more/msme-events" element={<MSMEEventsPage />} />
            <Route path="/more/reviews" element={<ReviewsPage />} />
            <Route path="/more/blogs" element={<BlogsPage />} />
            <Route path="/more/compliance" element={<ComplianceMorePage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
