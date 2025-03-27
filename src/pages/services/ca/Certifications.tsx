
import { Link } from 'react-router-dom';
import { ArrowRight, Certificate, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CertificationsPage = () => {
  const certifications = [
    {
      title: "ISO Certification",
      description: "International standards certification for quality management, environmental management, and more.",
      benefits: [
        "Enhanced credibility in international markets",
        "Improved operational efficiency",
        "Better customer satisfaction and trust"
      ]
    },
    {
      title: "MSME Registration",
      description: "Official registration for Micro, Small, and Medium Enterprises to access government benefits.",
      benefits: [
        "Access to government subsidies and schemes",
        "Priority sector lending benefits",
        "Protection against delayed payments"
      ]
    },
    {
      title: "Startup India Recognition",
      description: "Official recognition as a startup under the Startup India initiative.",
      benefits: [
        "Tax benefits for 3 consecutive years",
        "Easier compliance procedures",
        "Access to startup funding opportunities"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Business Certifications</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Obtain essential business certifications to enhance your credibility and unlock various benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="CERTIFICATION SERVICES"
            heading="Build Business Credibility"
            description="We assist in obtaining various business certifications that can enhance your market position."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Certificate className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Key Benefits:</h4>
                  {cert.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                        <Check size={14} className="text-brand-600" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="How We Help"
            description="Our streamlined process makes certification easy and hassle-free."
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-brand-100 p-4 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-brand-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">We evaluate your business to determine which certifications are most beneficial for your specific industry and goals.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-brand-100 p-4 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-brand-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Documentation Preparation</h3>
                  <p className="text-gray-600">Our team handles all the necessary documentation, ensuring compliance with certification requirements.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-brand-100 p-4 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-brand-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Application & Follow-up</h3>
                  <p className="text-gray-600">We submit applications on your behalf and follow up with the relevant authorities to expedite the process.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-brand-100 p-4 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-brand-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certification & Implementation</h3>
                  <p className="text-gray-600">Once certified, we help you implement best practices to maintain certification standards and maximize benefits.</p>
                </div>
              </div>
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
              Contact us today to discuss your certification needs and how we can help your business grow.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
