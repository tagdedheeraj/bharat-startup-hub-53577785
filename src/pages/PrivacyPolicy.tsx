
import React from 'react';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import SectionTitle from '@/components/legal/SectionTitle';
import { Shield, Database, UserCheck, Share2, Lock, User, Cookie, RefreshCw, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="LEGAL"
      description="We value your privacy and are committed to protecting your personal information."
      icon="privacy"
    >
      <div className="space-y-6">
        <SectionTitle icon={<Database size={20} className="text-india-green" />}>
          1. Information We Collect
        </SectionTitle>
        <p>
          We may collect the following types of personal information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact information (name, email address, phone number)</li>
          <li>Business information (company name, designation, industry)</li>
          <li>Financial information necessary for service provision</li>
          <li>Information provided in communications with us</li>
          <li>Website usage data through cookies and similar technologies</li>
        </ul>
        
        <SectionTitle icon={<UserCheck size={20} className="text-india-green" />}>
          2. How We Use Your Information
        </SectionTitle>
        <p>
          We use your personal information for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Providing and improving our services</li>
          <li>Communicating with you about our services</li>
          <li>Processing payments and transactions</li>
          <li>Complying with legal obligations</li>
          <li>Analyzing and improving our website and services</li>
          <li>Marketing and promotional activities (with your consent)</li>
        </ul>
        
        <SectionTitle icon={<Share2 size={20} className="text-india-green" />}>
          3. Information Sharing
        </SectionTitle>
        <p>
          We do not sell your personal information. We may share your information with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service providers who assist in our operations</li>
          <li>Legal and regulatory authorities when required by law</li>
          <li>Business partners with your explicit consent</li>
          <li>Professional advisers such as auditors and lawyers</li>
        </ul>
        
        <SectionTitle icon={<Lock size={20} className="text-india-green" />}>
          4. Data Security
        </SectionTitle>
        <p>
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
        
        <SectionTitle icon={<User size={20} className="text-india-green" />}>
          5. Your Rights
        </SectionTitle>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to or restrict processing of your information</li>
          <li>Data portability</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        
        <SectionTitle icon={<Cookie size={20} className="text-india-green" />}>
          6. Cookies
        </SectionTitle>
        <p>
          Our website uses cookies to enhance your experience. You can set your browser to refuse cookies, but this may limit your ability to use certain features of our website.
        </p>
        
        <SectionTitle icon={<RefreshCw size={20} className="text-india-green" />}>
          7. Changes to This Privacy Policy
        </SectionTitle>
        <p>
          We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on our website.
        </p>
        
        <SectionTitle icon={<Mail size={20} className="text-india-green" />}>
          8. Contact Us
        </SectionTitle>
        <p>
          If you have questions or concerns about this Privacy Policy or our data practices, please contact us at info@bharatstartup.com.
        </p>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
