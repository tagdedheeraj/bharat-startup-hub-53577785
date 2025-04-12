
import { TrendingUp, Briefcase, Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="WHY CHOOSE US"
          heading="Comprehensive Solutions for Your Business Needs"
          description="We provide end-to-end services to help your startup or MSME succeed in today's competitive market."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "100ms" }}>
            <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
              <TrendingUp className="h-6 w-6 text-brand-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Funding Support</h3>
            <p className="text-gray-600 mb-4">
              Access to various funding options from ₹50 Lacs to ₹5 CR depending on your business requirements.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>Customized funding solutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>Investor connections</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>Pitch deck preparation</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
              <Briefcase className="h-6 w-6 text-brand-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Legal Consultation</h3>
            <p className="text-gray-600 mb-4">
              Expert legal guidance to navigate complex regulatory frameworks and ensure compliance.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>Business registration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>Contract drafting & review</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>Intellectual property protection</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
            <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
              <Shield className="h-6 w-6 text-brand-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compliance Services</h3>
            <p className="text-gray-600 mb-4">
              Stay compliant with all regulatory requirements and focus on growing your business.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>GST registration & filing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>MSME registration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span>Annual compliance management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
