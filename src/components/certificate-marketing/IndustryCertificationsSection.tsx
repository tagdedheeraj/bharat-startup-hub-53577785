
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { certificationCategories } from './CertificationData';

const IndustryCertificationsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="INDUSTRY-SPECIFIC CERTIFICATIONS"
          heading="Specialized Certifications By Industry"
          description="Discover the right certifications for your specific industry to enhance compliance and market access."
        />
        
        <div className="mt-12">
          {certificationCategories.slice(1).map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-l-4 border-brand-600 pl-4">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.certifications.map((cert, certIndex) => (
                  <div 
                    key={certIndex} 
                    className="glass-card rounded-xl p-6 animate-fadeIn bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col"
                    style={{ animationDelay: `${certIndex * 100}ms` }}
                  >
                    <div className="flex items-start mb-4">
                      <div className="mr-3 bg-brand-50 p-2 rounded-lg">
                        {cert.icon}
                      </div>
                      <h4 className="text-lg font-bold">{cert.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
                    <div className="mt-auto">
                      <h5 className="font-semibold text-sm mb-2">Key Benefits:</h5>
                      <ul className="space-y-1">
                        {cert.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCertificationsSection;
