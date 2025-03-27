
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const AccountingPage = () => {
  const services = [
    {
      title: "Bookkeeping Services",
      description: "Regular recording and organization of financial transactions for your business.",
      features: [
        "Daily, weekly, or monthly transaction recording",
        "Expense categorization",
        "Bank and credit card reconciliation",
        "Financial record maintenance"
      ]
    },
    {
      title: "Financial Statement Preparation",
      description: "Preparation of accurate financial statements for business analysis and reporting.",
      features: [
        "Balance sheet preparation",
        "Profit & loss statements",
        "Cash flow statements",
        "Statement analysis and interpretation"
      ]
    },
    {
      title: "Accounts Receivable & Payable",
      description: "Management of your business accounts receivable and payable processes.",
      features: [
        "Invoice generation and tracking",
        "Payment processing",
        "Vendor bill management",
        "Aging reports and analysis"
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
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Accounting Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional bookkeeping, financial statement preparation, and accounting services for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FINANCIAL EXPERTISE"
            heading="Our Accounting Services"
            description="Keep your financial records accurate and up-to-date with our professional accounting services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Receipt className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">What's Included:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Accounting Services?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our accounting team to discuss your business needs and how we can help.
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

export default AccountingPage;
