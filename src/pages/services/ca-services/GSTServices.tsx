
import { Link } from 'react-router-dom';
import { Receipt, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const GSTServicesPage = () => {
  const services = [
    {
      title: "GST Registration",
      description: "Complete assistance with GST registration process for businesses of all types."
    },
    {
      title: "GST Return Filing",
      description: "Timely and accurate filing of monthly, quarterly, and annual GST returns."
    },
    {
      title: "GST Compliance",
      description: "Ensuring full compliance with GST regulations and requirements."
    },
    {
      title: "GST Audit Support",
      description: "Professional support during GST audits and assessments."
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
                <Receipt className="h-10 w-10 text-brand-600" />
              </div>
            </div>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">GST Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive GST solutions to help businesses comply with indirect tax regulations efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subheading="INDIRECT TAX MANAGEMENT"
              heading="Complete GST Solutions"
              description="Our GST services help businesses navigate the complexities of indirect taxation with ease and accuracy."
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
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-500 mt-0.5" />
              <p className="text-sm text-yellow-700">
                Regular and timely filing of GST returns is mandatory for all registered businesses. 
                Non-compliance can lead to penalties, interest, and other legal consequences.
              </p>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">GST Compliance Requirements</h3>
              <div className="space-y-4 mt-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2">GSTR-1 (Outward Supplies)</h4>
                  <p className="text-gray-600 text-sm">Monthly/Quarterly filing of details of outward supplies of goods and services.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2">GSTR-3B (Summary Return)</h4>
                  <p className="text-gray-600 text-sm">Monthly/Quarterly summary return of inward and outward supplies with tax payment.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2">Annual Return (GSTR-9)</h4>
                  <p className="text-gray-600 text-sm">Annual consolidated return for each financial year.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2">E-way Bills</h4>
                  <p className="text-gray-600 text-sm">Electronic way bills for movement of goods exceeding specified value.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need GST Support?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our GST experts can handle all your indirect tax requirements, ensuring complete compliance and peace of mind.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Contact GST Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTServicesPage;
