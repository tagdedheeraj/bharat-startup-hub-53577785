
import React from 'react';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import SectionTitle from '@/components/legal/SectionTitle';
import { RefreshCcw, Mail, CreditCard, FileText, UserCheck, Clock, ShieldCheck } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="LEGAL"
      description="Clear guidelines and procedures for refunds at Bharat Startup Solution"
      icon="disclaimer"
    >
      <div className="space-y-8">
        <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
          <p className="text-brand-800">
            At Bharat Startup Solution, we are committed to maintaining transparency and fairness in our refund process. 
            This policy outlines the terms and conditions for refunds of our services.
          </p>
        </div>

        <SectionTitle icon={<ShieldCheck size={20} className="text-brand-500" />}>
          Refund Eligibility
        </SectionTitle>
        <div className="space-y-4">
          <p>To be eligible for a refund, the following conditions must be met:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The service has not been fully delivered or completed</li>
            <li>The request is made within the specified timeframe</li>
            <li>Valid documentation supporting the refund request is provided</li>
            <li>The service agreement terms allow for a refund in the specific situation</li>
          </ul>
        </div>

        <SectionTitle icon={<Clock size={20} className="text-brand-500" />}>
          Refund Timeline
        </SectionTitle>
        <div className="space-y-4">
          <p>Our refund process typically follows this timeline:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Initial review of refund request: 2-3 business days</li>
            <li>Documentation verification: 3-5 business days</li>
            <li>Refund processing after approval: 5-7 business days</li>
            <li>Bank transfer completion: 2-3 business days</li>
          </ul>
          <p className="text-sm text-gray-600">
            Note: The total refund process may take up to 15 working days depending on your bank and the payment method used.
          </p>
        </div>

        <SectionTitle icon={<CreditCard size={20} className="text-brand-500" />}>
          Refund Methods
        </SectionTitle>
        <p>Refunds will be processed through the original payment method used for the service:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Bank transfers will be refunded to the same account</li>
          <li>Online payments will be reversed to the original payment source</li>
          <li>Alternative refund methods may be discussed in special cases</li>
        </ul>

        <SectionTitle icon={<FileText size={20} className="text-brand-500" />}>
          Required Documentation
        </SectionTitle>
        <p>For processing your refund, please provide:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Service agreement or contract number</li>
          <li>Original payment receipt</li>
          <li>Written explanation for the refund request</li>
          <li>Any relevant supporting documents</li>
        </ul>

        <SectionTitle icon={<Mail size={20} className="text-brand-500" />}>
          How to Request a Refund
        </SectionTitle>
        <div className="space-y-4">
          <p>To initiate a refund request, please email us at <a href="mailto:admin@bharatstartupsolution.com" className="text-brand-600 hover:text-brand-700">admin@bharatstartupsolution.com</a> with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your full name and contact information</li>
            <li>Service details and date of purchase</li>
            <li>Reason for requesting the refund</li>
            <li>All required documentation as mentioned above</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-200">
          <h3 className="font-semibold mb-2">Important Note:</h3>
          <p className="text-gray-700">
            Each refund request is reviewed on a case-by-case basis. Our team strives to handle all requests fairly and in accordance with our service agreement terms. For any queries about our refund policy, please contact our support team.
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
};

export default RefundPolicy;
