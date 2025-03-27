
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, Landmark, TrendingUp, Calculator, Receipt, Users, Shield } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CAServicesPage = () => {
  const services = [
    {
      icon: <FileCheck className="h-8 w-8 text-brand-600" />,
      title: "Certification Services",
      description: "Comprehensive certification services for businesses including incorporation certificates, compliance certifications, and more.",
      link: "/services/ca-services/certification"
    },
    {
      icon: <Landmark className="h-8 w-8 text-brand-600" />,
      title: "Trademark Services",
      description: "Protect your intellectual property with our expert trademark registration and maintenance services.",
      link: "/services/ca-services/trademark"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-600" />,
      title: "Income Tax Services",
      description: "Professional income tax filing, planning, and consultation services for individuals and businesses.",
      link: "/services/ca-services/income-tax"
    },
    {
      icon: <Calculator className="h-8 w-8 text-brand-600" />,
      title: "Accounting Services",
      description: "Complete accounting solutions including bookkeeping, financial statements, and accounting software implementation.",
      link: "/services/ca-services/accounting"
    },
    {
      icon: <Receipt className="h-8 w-8 text-brand-600" />,
      title: "GST Services",
      description: "GST registration, filing, reconciliation, and advisory services to ensure full compliance.",
      link: "/services/ca-services/gst"
    },
    {
      icon: <Users className="h-8 w-8 text-brand-600" />,
      title: "Payroll Services",
      description: "End-to-end payroll management including salary processing, statutory compliance, and reporting.",
      link: "/services/ca-services/payroll"
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-600" />,
      title: "Compliance Services",
      description: "Stay compliant with all regulatory requirements with our comprehensive compliance services.",
      link: "/services/ca-services/compliance"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Comprehensive CA Services for Your Business</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional chartered accountancy services to help your business grow, stay compliant, and achieve financial excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR CA SERVICES"
            heading="Expert Financial Solutions"
            description="We provide a wide range of professional CA services tailored to meet your business requirements."
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

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="WHY CHOOSE US"
            heading="Trusted CA Services Partner"
            description="We combine expertise, technology, and personalized service to deliver exceptional financial solutions."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 p-2 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certified Professionals</h3>
                  <p className="text-gray-600">Our team consists of certified professionals with years of experience in various financial domains.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 p-2 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Solutions</h3>
                  <p className="text-gray-600">We understand that each business is unique and provide customized solutions to meet your specific needs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 p-2 rounded-lg mr-4">
                  <TrendingUp className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technology-Driven</h3>
                  <p className="text-gray-600">We leverage the latest financial technologies to ensure accuracy, efficiency, and transparency.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 p-2 rounded-lg mr-4">
                  <Receipt className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                  <p className="text-gray-600">We understand the importance of deadlines and ensure timely delivery of all our services.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Expert CA Services?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your financial needs and how our CA services can help you achieve your business goals.
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
