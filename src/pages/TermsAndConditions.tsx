
import React from 'react';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import SectionTitle from '@/components/legal/SectionTitle';
import { FileText, CheckSquare, CreditCard, Lock, Scale, XCircle, Edit, Globe, AlertTriangle, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="LEGAL"
      description="Please read these terms and conditions carefully before using our services."
      icon="terms"
    >
      <div className="space-y-6">
        <SectionTitle icon={<CheckSquare size={20} className="text-india-saffron" />}>
          1. Acceptance of Terms
        </SectionTitle>
        <p>
          By accessing or using the services provided by Bharat Startup Solution ("the Company"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
        </p>
        
        <SectionTitle icon={<FileText size={20} className="text-india-saffron" />}>
          2. Description of Services
        </SectionTitle>
        <p>
          The Company provides consulting services related to business development, funding, legal compliance, and other business services as described on our website. The specific details of each service will be agreed upon separately.
        </p>
        
        <SectionTitle icon={<CreditCard size={20} className="text-india-saffron" />}>
          3. Fees and Payment
        </SectionTitle>
        <p>
          The fees for our services will be as quoted to you in writing before the commencement of any work. All fees are exclusive of applicable taxes unless stated otherwise. Payment terms will be specified in the service agreement.
        </p>
        
        <SectionTitle icon={<Lock size={20} className="text-india-saffron" />}>
          4. Confidentiality
        </SectionTitle>
        <p>
          The Company treats all client information as confidential and will not disclose any information to third parties without explicit consent, except as required by law or regulatory authorities.
        </p>
        
        <SectionTitle icon={<FileText size={20} className="text-india-saffron" />}>
          5. Intellectual Property
        </SectionTitle>
        <p>
          All intellectual property rights in the materials produced by the Company remain the property of the Company unless specifically agreed otherwise in writing.
        </p>
        
        <SectionTitle icon={<AlertTriangle size={20} className="text-india-saffron" />}>
          6. Limitation of Liability
        </SectionTitle>
        <p>
          The Company's liability is limited to the fees paid for the specific services rendered. We are not liable for any indirect, consequential, or special damages arising from the use of our services.
        </p>
        
        <SectionTitle icon={<XCircle size={20} className="text-india-saffron" />}>
          7. Termination
        </SectionTitle>
        <p>
          Either party may terminate the service agreement with written notice as specified in the service contract. The Company reserves the right to terminate services immediately if the client breaches these terms.
        </p>
        
        <SectionTitle icon={<Scale size={20} className="text-india-saffron" />}>
          8. Governing Law
        </SectionTitle>
        <p>
          These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
        </p>
        
        <SectionTitle icon={<Edit size={20} className="text-india-saffron" />}>
          9. Changes to Terms
        </SectionTitle>
        <p>
          The Company reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to the website. Continued use of our services after such modifications constitutes acceptance of the modified terms.
        </p>
        
        <SectionTitle icon={<Mail size={20} className="text-india-saffron" />}>
          10. Contact Information
        </SectionTitle>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at info@bharatstartup.com.
        </p>
      </div>
    </LegalPageLayout>
  );
};

export default TermsAndConditions;
