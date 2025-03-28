
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionHeading
        subheading="LEGAL"
        heading="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our services."
      />
      
      <div className="prose prose-lg mt-8">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by Bharat Startup Solution ("the Company"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
        </p>
        
        <h2>2. Description of Services</h2>
        <p>
          The Company provides consulting services related to business development, funding, legal compliance, and other business services as described on our website. The specific details of each service will be agreed upon separately.
        </p>
        
        <h2>3. Fees and Payment</h2>
        <p>
          The fees for our services will be as quoted to you in writing before the commencement of any work. All fees are exclusive of applicable taxes unless stated otherwise. Payment terms will be specified in the service agreement.
        </p>
        
        <h2>4. Confidentiality</h2>
        <p>
          The Company treats all client information as confidential and will not disclose any information to third parties without explicit consent, except as required by law or regulatory authorities.
        </p>
        
        <h2>5. Intellectual Property</h2>
        <p>
          All intellectual property rights in the materials produced by the Company remain the property of the Company unless specifically agreed otherwise in writing.
        </p>
        
        <h2>6. Limitation of Liability</h2>
        <p>
          The Company's liability is limited to the fees paid for the specific services rendered. We are not liable for any indirect, consequential, or special damages arising from the use of our services.
        </p>
        
        <h2>7. Termination</h2>
        <p>
          Either party may terminate the service agreement with written notice as specified in the service contract. The Company reserves the right to terminate services immediately if the client breaches these terms.
        </p>
        
        <h2>8. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
        </p>
        
        <h2>9. Changes to Terms</h2>
        <p>
          The Company reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to the website. Continued use of our services after such modifications constitutes acceptance of the modified terms.
        </p>
        
        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at info@bharatstartup.com.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
