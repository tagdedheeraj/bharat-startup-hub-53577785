
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { essentialCertifications } from './CertificationData';

const EssentialCertificationsSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="KEY CERTIFICATIONS"
          heading="Essential Certifications for Business Growth"
          description="We help you obtain and market these valuable certifications to enhance your business credibility and access exclusive benefits."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {essentialCertifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 animate-fadeIn bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-brand-50 p-3 rounded-lg">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold">{cert.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{cert.description}</p>
              <h4 className="font-semibold mb-3">Key Benefits:</h4>
              <ul className="space-y-2 mt-auto">
                {cert.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialCertificationsSection;
