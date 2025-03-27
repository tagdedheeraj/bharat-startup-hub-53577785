
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const GSTServicesPage = () => {
  const services = [
    {
      title: "GST Registration",
      description: "Complete assistance with GST registration process for businesses.",
      features: [
        "Eligibility assessment",
        "Documentation preparation",
        "Application filing",
        "Registration certificate procurement"
      ]
    },
    {
      title: "GST Return Filing",
      description: "Timely and accurate filing of monthly, quarterly, and annual GST returns.",
      features: [
        "GSTR-1, GSTR-3B preparation and filing",
        "GSTR-9 annual return filing",
        "Error rectification",
        "Compliance monitoring"
      ]
    },
    {
      title: "GST Reconciliation",
      description: "Reconciliation of your GST data to ensure accuracy and compliance.",
      features: [
        "Input tax credit reconciliation",
        "Sales and purchase reconciliation",
        "E-way bill reconciliation",
        "GSTR-2A/2B matching"
      ]
    },
    {
      title: "GST Advisory",
      description: "Expert guidance on GST matters for optimal tax management.",
      features: [
        "GST rate classification",
        "HSN code determination",
        "Input tax credit optimization",
        "GST impact assessment"
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
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">GST Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive GST registration, filing, reconciliation, and advisory services for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="GST EXPERTISE"
            heading="Our GST Services"
            description="Navigate the complexities of Goods and Services Tax with our professional assistance."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <FileText className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Service Includes:</h4>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                        <Check size={14} className="text-brand-600" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need GST Assistance?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our GST experts to ensure your business remains compliant with all GST regulations.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTServicesPage;
