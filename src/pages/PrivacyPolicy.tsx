
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionHeading
        subheading="LEGAL"
        heading="Privacy Policy"
        description="We value your privacy and are committed to protecting your personal information."
      />
      
      <div className="prose prose-lg mt-8">
        <h2>1. Information We Collect</h2>
        <p>
          We may collect the following types of personal information:
        </p>
        <ul>
          <li>Contact information (name, email address, phone number)</li>
          <li>Business information (company name, designation, industry)</li>
          <li>Financial information necessary for service provision</li>
          <li>Information provided in communications with us</li>
          <li>Website usage data through cookies and similar technologies</li>
        </ul>
        
        <h2>2. How We Use Your Information</h2>
        <p>
          We use your personal information for:
        </p>
        <ul>
          <li>Providing and improving our services</li>
          <li>Communicating with you about our services</li>
          <li>Processing payments and transactions</li>
          <li>Complying with legal obligations</li>
          <li>Analyzing and improving our website and services</li>
          <li>Marketing and promotional activities (with your consent)</li>
        </ul>
        
        <h2>3. Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share your information with:
        </p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Legal and regulatory authorities when required by law</li>
          <li>Business partners with your explicit consent</li>
          <li>Professional advisers such as auditors and lawyers</li>
        </ul>
        
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
        
        <h2>5. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to or restrict processing of your information</li>
          <li>Data portability</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        
        <h2>6. Cookies</h2>
        <p>
          Our website uses cookies to enhance your experience. You can set your browser to refuse cookies, but this may limit your ability to use certain features of our website.
        </p>
        
        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on our website.
        </p>
        
        <h2>8. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy or our data practices, please contact us at info@bharatstartup.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
