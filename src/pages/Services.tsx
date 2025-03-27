
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Scale, FileCheck, Landmark, Search, PieChart, Calculator } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const ServicesPage = () => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-600" />,
      title: "Funding Consultation",
      description: "Access funding options ranging from ₹50 Lac to ₹5 CR for various business stages and needs.",
      link: "/services/funding-consultation"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-brand-600" />,
      title: "Certificate Marketing",
      description: "Enhance your business credibility and market position with proper certification and marketing strategies.",
      link: "/services/certificate-marketing"
    },
    {
      icon: <Scale className="h-8 w-8 text-brand-600" />,
      title: "Legal Consultation",
      description: "Navigate complex legal frameworks with our expert guidance on compliance, contracts, and regulations.",
      link: "/services/legal-consultation"
    },
    {
      icon: <Calculator className="h-8 w-8 text-brand-600" />,
      title: "CA Services",
      description: "Comprehensive chartered accountant services including taxation, accounting, GST, and compliance.",
      link: "/services/ca-services"
    },
    {
      icon: <Landmark className="h-8 w-8 text-brand-600" />,
      title: "MSME Registration",
      description: "Simplify your MSME registration process and access government schemes and benefits.",
      link: "/more/compliance"
    },
    {
      icon: <Search className="h-8 w-8 text-brand-600" />,
      title: "Market Research",
      description: "Get data-driven insights about your market, competitors, and target audience to make informed decisions.",
      link: "/services"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Comprehensive Solutions for Your Business</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From funding to legal compliance, we offer the services you need to launch, operate, and grow your startup or MSME.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="WHAT WE OFFER"
            heading="Our Core Services"
            description="We provide end-to-end business solutions tailored to your unique needs."
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

      {/* Main Services Detail */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="DETAILED SERVICES"
            heading="How We Help You Succeed"
            description="Explore our specialized services designed to address the unique challenges of startups and MSMEs."
          />
          
          {/* Funding Consultation */}
          <div className="max-w-5xl mx-auto mb-24 animate-fadeIn">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">01</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Funding Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Our funding consultation services help you identify the best funding options for your business stage and requirements. We connect you with the right investors and guide you through the entire process from pitch preparation to deal closure.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Customized funding solutions from ₹50 Lac to ₹5 CR</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Investor network connections and introductions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Pitch deck and business plan preparation</span>
                  </li>
                </ul>
                <Link to="/services/funding-consultation" className="btn-primary inline-flex items-center">
                  Explore Funding Options
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Funding Consultation"
                    className="relative z-10 rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Certificate Marketing */}
          <div className="max-w-5xl mx-auto mb-24 animate-fadeIn">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">02</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Certificate Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Enhance your business credibility and market position with proper certification and effective marketing strategies. We help you obtain relevant certifications and leverage them to gain a competitive edge.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Industry-specific certification guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Marketing strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Brand positioning and reputation management</span>
                  </li>
                </ul>
                <Link to="/services/certificate-marketing" className="btn-primary inline-flex items-center">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform -rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Certificate Marketing"
                    className="relative z-10 rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal Consultation */}
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">03</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Legal Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Navigate complex legal frameworks with our expert guidance on compliance, contracts, and regulations. Our legal team ensures your business operations adhere to all applicable laws while protecting your interests.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Business registration and incorporation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Contract drafting and review</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                      <ArrowRight size={14} className="text-brand-600" />
                    </div>
                    <span>Intellectual property protection</span>
                  </li>
                </ul>
                <Link to="/services/legal-consultation" className="btn-primary inline-flex items-center">
                  Get Legal Support
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Legal Consultation"
                    className="relative z-10 rounded-xl shadow-xl"
                  />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Success Journey?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your business needs and how our services can help you achieve your goals.
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

export default ServicesPage;
