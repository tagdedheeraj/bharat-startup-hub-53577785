
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CACompliancePage = () => {
  const services = [
    {
      title: "ROC Compliance",
      description: "Complete compliance with Registrar of Companies (ROC) requirements for companies.",
      features: [
        "Annual return filing",
        "Financial statement submission",
        "Director-related compliances",
        "Event-based filings (share transfers, changes, etc.)"
      ]
    },
    {
      title: "Labour Law Compliance",
      description: "Ensure adherence to various labor laws applicable to your business.",
      features: [
        "Shops & Establishment Act compliance",
        "Factory Act compliance",
        "ESI & PF compliance",
        "Contract Labour Act compliance"
      ]
    },
    {
      title: "FEMA Compliance",
      description: "Foreign Exchange Management Act compliance for businesses with international operations.",
      features: [
        "FDI reporting",
        "ODI reporting",
        "Annual compliance reporting",
        "FEMA transaction advisory"
      ]
    },
    {
      title: "Industry-Specific Compliance",
      description: "Specialized compliance services for specific industry requirements.",
      features: [
        "Sector-specific regulatory compliance",
        "Licensing requirements",
        "Periodic reporting obligations",
        "Compliance audits"
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
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Compliance Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ensure adherence to statutory compliance requirements across various regulatory domains.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="REGULATORY COMPLIANCE"
            heading="Our Compliance Services"
            description="Navigate complex regulatory requirements with our comprehensive compliance services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Shield className="h-8 w-8 text-brand-600" />
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="ADVANTAGES"
            heading="Why Compliance Matters"
            description="The importance of staying compliant with regulatory requirements."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Risk Mitigation</h3>
              <p className="text-gray-600">Avoid penalties, fines, and legal issues by ensuring compliance with all applicable regulations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Reputation</h3>
              <p className="text-gray-600">Maintain a positive reputation with stakeholders, investors, and customers as a compliant business.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Operational Efficiency</h3>
              <p className="text-gray-600">Streamline operations with structured compliance processes and avoid business disruptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Compliant with Expert Assistance</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our compliance experts today to ensure your business meets all regulatory requirements.
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

export default CACompliancePage;
