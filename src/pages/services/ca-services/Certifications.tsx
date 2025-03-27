
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CertificationsPage = () => {
  const certifications = [
    {
      title: "Business Registration Certificates",
      description: "Official documents proving your business is legally registered and authorized to operate."
    },
    {
      title: "ISO Certifications",
      description: "International standards certifications that validate your quality management systems."
    },
    {
      title: "Industry-Specific Certifications",
      description: "Specialized certifications relevant to your specific industry or sector."
    },
    {
      title: "Compliance Certificates",
      description: "Documents certifying that your business complies with relevant regulations and standards."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-brand-50 p-4 rounded-full">
                <Award className="h-10 w-10 text-brand-600" />
              </div>
            </div>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Certifications</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enhance your business credibility with professional certifications that validate your standards and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subheading="OUR CERTIFICATION SERVICES"
              heading="Building Trust Through Validation"
              description="We help businesses obtain necessary certifications to build trust with customers and comply with regulations."
            />
            
            <div className="mt-12 space-y-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-600">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Why Certifications Matter</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Enhance business credibility and customer trust</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Meet regulatory and compliance requirements</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Gain competitive advantage in the market</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Access to new markets and business opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Certified?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts will guide you through the entire certification process, handling the paperwork and compliance requirements.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
