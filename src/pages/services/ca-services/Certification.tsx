
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CertificationServicesPage = () => {
  const services = [
    {
      title: "Incorporation Certificates",
      description: "Official documentation certifying the legal formation of your business entity.",
    },
    {
      title: "Compliance Certifications",
      description: "Certificates validating your adherence to industry standards and regulatory requirements.",
    },
    {
      title: "Financial Certifications",
      description: "Professional verification of financial statements and records for various purposes.",
    },
    {
      title: "Statutory Certifications",
      description: "Mandatory certifications required by law for specific business operations.",
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/services/ca-services" className="text-sm text-brand-600 font-medium hover:underline flex items-center justify-center gap-1 mb-4">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to CA Services
            </Link>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CERTIFICATION SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Professional Certification Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enhance your business credibility with our comprehensive certification services
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR OFFERINGS"
            heading="Certification Solutions"
            description="We provide a wide range of certification services to meet various business requirements."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <FileCheck className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="How We Work"
            description="Our streamlined process ensures efficient and accurate certification services."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative">
              {/* Process steps with connecting line */}
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-brand-100 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">1</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">We start with a thorough consultation to understand your specific certification needs and requirements.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">2</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Documentation Collection</h3>
                    <p className="text-gray-600">We help you gather all necessary documents and information required for the certification process.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">3</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Application & Processing</h3>
                    <p className="text-gray-600">Our experts handle the application and processing of your certification with relevant authorities.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">4</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Certification Delivery</h3>
                    <p className="text-gray-600">We deliver your certification documents along with guidance on their usage and maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="BENEFITS"
            heading="Why Choose Our Certification Services"
            description="Our certification services offer numerous advantages for your business."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Enhanced Credibility</h3>
                  <p className="text-gray-600">Professional certifications boost your business credibility in the market.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Legal Compliance</h3>
                  <p className="text-gray-600">Ensure your business complies with all relevant legal requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Competitive Advantage</h3>
                  <p className="text-gray-600">Stand out from competitors with recognized certifications.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Business Opportunities</h3>
                  <p className="text-gray-600">Access new business opportunities that require specific certifications.</p>
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
              Contact us today to discuss your certification needs and how we can help you achieve your business goals.
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

export default CertificationServicesPage;
