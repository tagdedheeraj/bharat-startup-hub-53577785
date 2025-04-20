
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";
import AdminProtectedRoute from "@/components/AdminProtectedRoute";

// Pages
import HomePage from "@/pages/Index";
import AboutPage from "@/pages/AboutUs";
import ServicesPage from "@/pages/Services";
import AIServicesPage from "@/pages/AIServices";
import FundingConsultationPage from "@/pages/services/FundingConsultation";
import CertificateMarketingPage from "@/pages/services/CertificateMarketing";
import LegalConsultationPage from "@/pages/services/LegalConsultation";
import SuccessStoriesPage from "@/pages/SuccessStories";
import ContactPage from "@/pages/Contact";
import ExpertsPage from "@/pages/more/Experts";
import TeamMembersPage from "@/pages/more/TeamMembers";
import MSMEEventsPage from "@/pages/more/MSMEEvents";
import ReviewsPage from "@/pages/more/Reviews";
import BlogsPage from "@/pages/more/Blogs";
import CompliancePage from "@/pages/more/Compliance";
import NotFound from "@/pages/NotFound";
import ITSolutionsPage from "@/pages/ITSolutions";
import FAQsPage from "@/pages/FAQs";
import TermsAndConditionsPage from "@/pages/TermsAndConditions";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import DisclaimerPage from "@/pages/Disclaimer";
import ClientServiceAgreementPage from "@/pages/ClientServiceAgreement";
import RefundPolicyPage from "@/pages/RefundPolicy";
import GrievancesPage from "@/pages/Grievances";
import SpecialServicesPage from "@/pages/more/SpecialServices";

// CA Services Pages
import CAServicesPage from "@/pages/CAServices";
import CertificationsPage from "@/pages/ca-services/Certifications";
import TrademarkPage from "@/pages/ca-services/Trademark";
import IncomeTaxPage from "@/pages/ca-services/IncomeTax";
import AccountingPage from "@/pages/ca-services/Accounting";
import GSTPage from "@/pages/ca-services/GST";
import PayrollPage from "@/pages/ca-services/Payroll";
import CACompliancePage from "@/pages/ca-services/Compliance";

// Auth and Dashboard Pages
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import StartupDashboard from "@/pages/dashboard/StartupDashboard";
import InvestorDashboard from "@/pages/dashboard/InvestorDashboard";

// Admin Pages
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/services/funding-consultation" element={<FundingConsultationPage />} />
        <Route path="/services/certificate-marketing" element={<CertificateMarketingPage />} />
        <Route path="/services/legal-consultation" element={<LegalConsultationPage />} />
        <Route path="/it-solutions" element={<ITSolutionsPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/grievances" element={<GrievancesPage />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
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
        
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/client-service-agreement" element={<ClientServiceAgreementPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        
        <Route path="/ca-services" element={<CAServicesPage />} />
        <Route path="/ca-services/certifications" element={<CertificationsPage />} />
        <Route path="/ca-services/trademark" element={<TrademarkPage />} />
        <Route path="/ca-services/income-tax" element={<IncomeTaxPage />} />
        <Route path="/ca-services/accounting" element={<AccountingPage />} />
        <Route path="/ca-services/gst" element={<GSTPage />} />
        <Route path="/ca-services/payroll" element={<PayrollPage />} />
        <Route path="/ca-services/compliance" element={<CACompliancePage />} />
        
        <Route path="/more/experts" element={<ExpertsPage />} />
        <Route path="/more/team" element={<TeamMembersPage />} />
        <Route path="/more/msme-events" element={<MSMEEventsPage />} />
        <Route path="/more/reviews" element={<ReviewsPage />} />
        <Route path="/more/blogs" element={<BlogsPage />} />
        <Route path="/more/compliance" element={<CompliancePage />} />
        <Route path="/more/special-services" element={<SpecialServicesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
      <Route path="/admin" element={<AdminLogin />} />
      <Route 
        path="/admin/dashboard" 
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
