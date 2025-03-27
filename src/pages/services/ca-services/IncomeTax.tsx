
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const IncomeTaxPage = () => {
  const services = [
    {
      title: "Income Tax Return Filing",
      description: "Accurate and timely filing of income tax returns for individuals and businesses."
    },
    {
      title: "Tax Planning",
      description: "Strategic planning to optimize tax liabilities and maximize savings within legal frameworks."
    },
    {
      title: "Tax Assessment Support",
      description: "Assistance with tax assessment proceedings and handling notices from tax authorities."
    },
    {
      title: "Tax Compliance",
      description: "Ensuring compliance with income tax laws, regulations, and filing requirements."
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
                <FileText className="h-10 w-10 text-brand-600" />
              </div>
            </div>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Income Tax Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive income tax solutions to help individuals and businesses manage their tax obligations efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subheading="TAX MANAGEMENT"
              heading="Professional Income Tax Services"
              description="Our team of tax experts provides comprehensive income tax services to help you navigate complex tax regulations."
            />
            
            <div className="mt-12 space-y-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Income Tax Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Expert tax professionals with years of experience</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Up-to-date knowledge of tax laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Personalized approach based on your specific situation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Timely filing to avoid penalties and interest</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 p-6 bg-brand-50 border border-brand-100 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-brand-600" />
                <h4 className="text-lg font-semibold">Important Tax Dates</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <p className="font-medium">Individual Tax Returns</p>
                  <p className="text-gray-600 text-sm">July 31st (without audit)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <p className="font-medium">Business Tax Returns</p>
                  <p className="text-gray-600 text-sm">October 31st (with audit)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <p className="font-medium">Advance Tax Payments</p>
                  <p className="text-gray-600 text-sm">Quarterly (Jun, Sep, Dec, Mar)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <p className="font-medium">TDS Returns</p>
                  <p className="text-gray-600 text-sm">Quarterly filing deadlines</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Income Tax?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our tax experts are ready to assist you with all your income tax needs, ensuring compliance and optimizing your tax position.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Consult Our Tax Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IncomeTaxPage;
