
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Copyright, FileText, Calculator, Receipt, ListChecks, Shield } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CAServicesPage = () => {
  const services = [
    {
      icon: <Award className="h-8 w-8 text-brand-600" />,
      title: "Certifications",
      description: "Get professional certificates to validate your business and enhance your credibility in the market.",
      link: "/services/ca-services/certifications"
    },
    {
      icon: <Copyright className="h-8 w-8 text-brand-600" />,
      title: "Trademark",
      description: "Protect your brand identity with trademark registration and related legal services.",
      link: "/services/ca-services/trademark"
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-600" />,
      title: "Income Tax",
      description: "Comprehensive income tax filing, planning, and compliance services for businesses and individuals.",
      link: "/services/ca-services/income-tax"
    },
    {
      icon: <Calculator className="h-8 w-8 text-brand-600" />,
      title: "Accounting",
      description: "Professional accounting services to maintain your financial records accurately and efficiently.",
      link: "/services/ca-services/accounting"
    },
    {
      icon: <Receipt className="h-8 w-8 text-brand-600" />,
      title: "GST Services",
      description: "Complete GST registration, filing, and compliance support for your business.",
      link: "/services/ca-services/gst-services"
    },
    {
      icon: <ListChecks className="h-8 w-8 text-brand-600" />,
      title: "Payroll",
      description: "End-to-end payroll management services for businesses of all sizes.",
      link: "/services/ca-services/payroll"
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-600" />,
      title: "Compliance",
      description: "Stay compliant with all statutory requirements and regulatory frameworks applicable to your business.",
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
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Chartered Accountancy Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive financial and compliance solutions for businesses of all sizes, delivered by certified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR EXPERTISE"
            heading="CA Services We Offer"
            description="Complete range of chartered accountancy services to support your business growth."
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
              Contact our team of certified professionals to discuss your specific requirements and get customized solutions.
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
