
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, CheckCircle, BarChart2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const AccountingPage = () => {
  const services = [
    {
      title: "Bookkeeping Services",
      description: "Regular recording and maintenance of financial transactions and business records."
    },
    {
      title: "Financial Statement Preparation",
      description: "Preparation of balance sheets, profit & loss statements, and cash flow statements."
    },
    {
      title: "Accounts Receivable & Payable",
      description: "Management of receivables and payables to optimize cash flow and business operations."
    },
    {
      title: "Financial Analysis & Reporting",
      description: "Analysis of financial data to provide insights for informed business decisions."
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
                <Calculator className="h-10 w-10 text-brand-600" />
              </div>
            </div>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Accounting Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional accounting solutions to maintain financial accuracy and provide insights for business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subheading="FINANCIAL MANAGEMENT"
              heading="Comprehensive Accounting Solutions"
              description="Our accounting services help businesses maintain accurate financial records and gain valuable business insights."
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
              <h3 className="text-2xl font-bold mb-4">Benefits of Professional Accounting</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <BarChart2 className="h-8 w-8 text-brand-600 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Financial Clarity</h4>
                  <p className="text-gray-600">
                    Gain clear insights into your financial position, helping you make informed business decisions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="h-8 w-8 text-brand-600 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Compliance</h4>
                  <p className="text-gray-600">
                    Stay compliant with accounting standards and regulatory requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <ArrowRight className="h-8 w-8 text-brand-600 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Growth Planning</h4>
                  <p className="text-gray-600">
                    Use accurate financial data to plan and implement effective growth strategies.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <Calculator className="h-8 w-8 text-brand-600 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Cost Optimization</h4>
                  <p className="text-gray-600">
                    Identify areas where costs can be reduced and efficiency improved.
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Accounting?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our accounting experts can help you maintain accurate financial records while providing valuable insights for business growth.
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

export default AccountingPage;
