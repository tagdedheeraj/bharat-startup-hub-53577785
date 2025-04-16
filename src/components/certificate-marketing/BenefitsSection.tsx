
import { Award, TrendingUp, FileCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="KEY ADVANTAGES"
          heading="Why Invest in Business Certifications"
          description="Discover how the right certifications can transform your business prospects."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "100ms" }}>
            <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Government Recognition</h3>
            <p className="text-gray-600">
              Gain official recognition and priority status for government schemes, subsidies, and procurement opportunities.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Financial Benefits</h3>
            <p className="text-gray-600">
              Access special loan schemes, tax exemptions, subsidies and improved terms for business funding.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "300ms" }}>
            <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileCheck className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Market Credibility</h3>
            <p className="text-gray-600">
              Build trust with customers, partners, and investors through official validation of your business quality and standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
