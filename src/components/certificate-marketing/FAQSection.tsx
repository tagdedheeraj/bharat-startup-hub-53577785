
import { HelpCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FAQSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="FREQUENTLY ASKED QUESTIONS"
          heading="Common Questions About Certifications"
          description="Get answers to your questions about our certification services."
        />
        
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          <div className="glass-card rounded-xl p-6 animate-fadeIn">
            <div className="flex items-start">
              <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold mb-2">How long does it take to get MSME certification?</h4>
                <p className="text-gray-600">
                  The MSME certification process typically takes 3-7 working days once all documentation is complete and submitted correctly. Our assistance can help ensure a smooth and efficient process.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "100ms" }}>
            <div className="flex items-start">
              <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold mb-2">Which certifications are most valuable for my business?</h4>
                <p className="text-gray-600">
                  The most valuable certifications depend on your industry, business stage, and goals. For most startups and MSMEs, the MSME and Startup India registrations provide the most immediate benefits. During our initial consultation, we'll assess your specific situation and recommend the certifications that will provide the greatest return on investment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <div className="flex items-start">
              <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold mb-2">What documents are required for certification?</h4>
                <p className="text-gray-600">
                  Documentation requirements vary by certification type. Generally, you'll need business registration documents, financial statements, bank details, PAN and Aadhar details, and sometimes category-specific documentation. Our team will provide you with a comprehensive checklist based on your specific certification needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
            <div className="flex items-start">
              <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold mb-2">How do I access benefits after certification?</h4>
                <p className="text-gray-600">
                  Once certified, you can access benefits through various government portals, financial institutions, and relevant departments. Our team provides comprehensive guidance on activating and maximizing each benefit available to you, including step-by-step assistance with applications for schemes, subsidies, and exemptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
