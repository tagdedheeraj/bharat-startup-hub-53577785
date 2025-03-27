
import { Link } from 'react-router-dom';
import { ArrowRight, Certificate, FileText, Receipt, Shield, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CAServicesPage = () => {
  const services = [
    {
      icon: <Certificate className="h-8 w-8 text-brand-600" />,
      title: "Certifications",
      description: "Obtain essential business certifications to enhance your credibility and market presence.",
      link: "/services/ca-services/certifications"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-brand-600" />,
      title: "Trademark Registration",
      description: "Protect your brand identity with trademark registration and intellectual property services.",
      link: "/services/ca-services/trademark"
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-600" />,
      title: "Income Tax Services",
      description: "Comprehensive income tax planning, filing, and compliance services for businesses and individuals.",
      link: "/services/ca-services/income-tax"
    },
    {
      icon: <Receipt className="h-8 w-8 text-brand-600" />,
      title: "Accounting Services",
      description: "Professional bookkeeping, financial statement preparation, and accounting services.",
      link: "/services/ca-services/accounting"
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-600" />,
      title: "GST Services",
      description: "GST registration, filing, reconciliation, and advisory services for businesses.",
      link: "/services/ca-services/gst-services"
    },
    {
      icon: <Receipt className="h-8 w-8 text-brand-600" />,
      title: "Payroll Services",
      description: "End-to-end payroll processing, compliance, and management for businesses of all sizes.",
      link: "/services/ca-services/payroll"
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-600" />,
      title: "Compliance Services",
      description: "Ensure adherence to statutory compliance requirements across various regulatory domains.",
      link: "/services/ca-services/compliance"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Professional Accounting & Tax Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive chartered accountancy services to help your business maintain financial health, ensure compliance, and achieve growth.
            </p>
          </div>
        </div>
      </section>

      {/* CA Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR EXPERTISE"
            heading="CA Services Portfolio"
            description="From taxation to compliance, we provide end-to-end accounting services for businesses of all sizes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-8 group hover:shadow-lg transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-brand-600 font-medium group-hover:text-brand-700">
                  Learn More 
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional CA Services?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team of experienced chartered accountants to discuss your specific requirements.
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

export default CAServicesPage;
