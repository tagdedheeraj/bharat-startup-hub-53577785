
import React from 'react';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import SectionTitle from '@/components/legal/SectionTitle';
import { Info, AlertCircle, Briefcase, Link, AlertTriangle, ShieldOff, Mail } from 'lucide-react';

const Disclaimer = () => {
  return (
    <LegalPageLayout
      title="Disclaimer"
      subtitle="LEGAL"
      description="Important information about the limitations of our services."
      icon="disclaimer"
    >
      <div className="space-y-6">
        <SectionTitle icon={<Info size={20} className="text-brand-500" />}>
          General Disclaimer
        </SectionTitle>
        <p>
          The information provided by Bharat Startup Solution ("we," "us," or "our") on our website and through our services is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
        </p>
        
        <SectionTitle icon={<Briefcase size={20} className="text-brand-500" />}>
          No Professional Advice
        </SectionTitle>
        <p>
          Our website and services may contain information that might be deemed professional advice. However, this information is provided for general guidance only and should not be considered as a substitute for professional advice. Before making any decision or taking any action that might affect your business or personal finances, you should consult with a qualified professional adviser.
        </p>
        
        <SectionTitle icon={<AlertCircle size={20} className="text-brand-500" />}>
          No Guarantees
        </SectionTitle>
        <p>
          While we strive to provide valuable services to our clients, we cannot and do not guarantee specific outcomes, including but not limited to successful funding, business growth, or legal compliance. Success depends on many factors beyond our control.
        </p>
        
        <SectionTitle icon={<Link size={20} className="text-brand-500" />}>
          Third-Party Links
        </SectionTitle>
        <p>
          Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        </p>
        
        <SectionTitle icon={<AlertTriangle size={20} className="text-brand-500" />}>
          Errors and Omissions
        </SectionTitle>
        <p>
          The information provided by us is subject to change without notice and may contain errors or be outdated. We do not warrant that the website or any of its contents are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
        </p>
        
        <SectionTitle icon={<ShieldOff size={20} className="text-brand-500" />}>
          Limitation of Liability
        </SectionTitle>
        <p>
          In no event shall Bharat Startup Solution, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your access to or use of or inability to access or use our services</li>
          <li>Any conduct or content of any third party on our website</li>
          <li>Any content obtained from our services</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content</li>
        </ul>
        
        <SectionTitle icon={<Mail size={20} className="text-brand-500" />}>
          Contact Us
        </SectionTitle>
        <p>
          If you have any questions about this Disclaimer, please contact us at info@bharatstartup.com.
        </p>
      </div>
    </LegalPageLayout>
  );
};

export default Disclaimer;
