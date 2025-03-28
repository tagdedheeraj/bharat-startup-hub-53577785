
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionHeading
        subheading="LEGAL"
        heading="Disclaimer"
        description="Important information about the limitations of our services."
      />
      
      <div className="prose prose-lg mt-8">
        <h2>General Disclaimer</h2>
        <p>
          The information provided by Bharat Startup Solution ("we," "us," or "our") on our website and through our services is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
        </p>
        
        <h2>No Professional Advice</h2>
        <p>
          Our website and services may contain information that might be deemed professional advice. However, this information is provided for general guidance only and should not be considered as a substitute for professional advice. Before making any decision or taking any action that might affect your business or personal finances, you should consult with a qualified professional adviser.
        </p>
        
        <h2>No Guarantees</h2>
        <p>
          While we strive to provide valuable services to our clients, we cannot and do not guarantee specific outcomes, including but not limited to successful funding, business growth, or legal compliance. Success depends on many factors beyond our control.
        </p>
        
        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        </p>
        
        <h2>Errors and Omissions</h2>
        <p>
          The information provided by us is subject to change without notice and may contain errors or be outdated. We do not warrant that the website or any of its contents are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
        </p>
        
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall Bharat Startup Solution, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul>
          <li>Your access to or use of or inability to access or use our services</li>
          <li>Any conduct or content of any third party on our website</li>
          <li>Any content obtained from our services</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content</li>
        </ul>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Disclaimer, please contact us at info@bharatstartup.com.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
