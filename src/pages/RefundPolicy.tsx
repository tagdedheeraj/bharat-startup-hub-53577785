
import React from 'react';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import SectionTitle from '@/components/legal/SectionTitle';
import { RefreshCcw, Mail, CreditCard, FileText, UserCheck } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="LEGAL"
      description="Procedure and terms for refunds and cancellations of services provided by Bharat Startup Solution."
      icon="disclaimer"
    >
      <div className="space-y-6">
        <SectionTitle icon={<FileText size={20} className="text-brand-500" />}>
          Definitions
        </SectionTitle>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service Provider:</strong> The person who provides specified services in exchange for payment.
          </li>
          <li>
            <strong>Service Receiver:</strong> The person who receives or avails services provided by the service provider.
          </li>
        </ul>
        
        <SectionTitle icon={<UserCheck size={20} className="text-brand-500" />}>
          Eligibility Requirements for Refund
        </SectionTitle>
        <p>
          The Service Receiver will be eligible to claim a refund only after a thorough assessment of the service by the Service Provider or as stated in duly executed documents such as Agreement, Undertaking, or other signed documents.
        </p>
        
        <SectionTitle icon={<CreditCard size={20} className="text-brand-500" />}>
          Types of Refunds
        </SectionTitle>
        <p>
          Refund will include the amount mentioned in executed documents or mutually agreed between the Service Provider and Service Receiver.
        </p>
        
        <SectionTitle icon={<RefreshCcw size={20} className="text-brand-500" />}>
          Refund Timeframe
        </SectionTitle>
        <p>
          The Refund will be processed within 45 working days after receipt of all required documents, details, and information by the Service Provider.
        </p>
        
        <SectionTitle icon={<FileText size={20} className="text-brand-500" />}>
          Refund Process
        </SectionTitle>
        <p>
          An e-mail will be sent detailing the refund terms, including the reason and amount. The Service Receiver must:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accept and acknowledge the refund details</li>
          <li>Provide bank account details (account number and IFSC code)</li>
        </ul>
        <p>
          After receiving the required details, the refund will be initiated and processed within the specified timeframe.
        </p>
        
        <SectionTitle icon={<Mail size={20} className="text-brand-500" />}>
          Grievance Resolution
        </SectionTitle>
        <p>
          For any queries, contact legal@egniol.co.in with the following details:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name of the Company</li>
          <li>Service availed</li>
          <li>Query details</li>
          <li>Name and contact of the person connected with the project</li>
        </ul>
      </div>
    </LegalPageLayout>
  );
};

export default RefundPolicy;

