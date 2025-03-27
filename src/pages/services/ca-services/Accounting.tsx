
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, CheckCircle, ClipboardList } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const AccountingPage = () => {
  const accountingServices = [
    {
      title: "Bookkeeping Services",
      description: "Systematic recording of financial transactions to maintain accurate books of accounts.",
      benefits: ["Organized financial records", "Regular financial statements", "Time and cost savings"]
    },
    {
      title: "Financial Statement Preparation",
      description: "Professional preparation of balance sheets, income statements, and cash flow statements.",
      benefits: ["Compliance with accounting standards", "Accurate financial reporting", "Decision-making support"]
    },
    {
      title: "Accounts Receivable & Payable",
      description: "Management of outstanding invoices and payments to optimize cash flow.",
      benefits: ["Improved cash flow management", "Reduced payment delays", "Better vendor relationships"]
    },
    {
      title: "Financial Analysis",
      description: "In-depth analysis of financial data to provide insights for business decisions.",
      benefits: ["Performance evaluation", "Trend identification", "Strategic recommendations"]
    }
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="Accounting Services"
        subheading="Professional accounting solutions for businesses of all sizes"
        align="center"
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-brand-50 to-brand-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Professional Accounting Matters</h2>
          <p className="text-gray-700 mb-6">
            Accurate accounting is the foundation of financial stability and growth for any business. It provides clarity on your financial position, ensures compliance with regulatory requirements, and enables informed business decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-brand-700 mb-2">Financial Clarity</h3>
              <p className="text-sm text-gray-600">Gain clear insights into your business's financial health</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-brand-700 mb-2">Compliance</h3>
              <p className="text-sm text-gray-600">Meet all regulatory and statutory accounting requirements</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-brand-700 mb-2">Decision Support</h3>
              <p className="text-sm text-gray-600">Make informed business decisions based on accurate financial data</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accountingServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-7 w-7 text-brand-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <h4 className="font-medium text-gray-800 mb-2">What We Offer:</h4>
              <ul className="space-y-2 mb-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <ClipboardList className="h-24 w-24 text-brand-600" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Accounting Process</h3>
              <ol className="space-y-3">
                <li className="flex">
                  <span className="bg-brand-100 text-brand-700 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3">1</span>
                  <span className="text-gray-700">Initial assessment of your accounting needs</span>
                </li>
                <li className="flex">
                  <span className="bg-brand-100 text-brand-700 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3">2</span>
                  <span className="text-gray-700">Setup of appropriate accounting systems and processes</span>
                </li>
                <li className="flex">
                  <span className="bg-brand-100 text-brand-700 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3">3</span>
                  <span className="text-gray-700">Regular recording and reconciliation of transactions</span>
                </li>
                <li className="flex">
                  <span className="bg-brand-100 text-brand-700 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3">4</span>
                  <span className="text-gray-700">Preparation of financial statements and reports</span>
                </li>
                <li className="flex">
                  <span className="bg-brand-100 text-brand-700 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3">5</span>
                  <span className="text-gray-700">Financial analysis and recommendations</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Streamline Your Accounting?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experienced accountants is ready to help you maintain accurate financial records and gain valuable insights into your business finances.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Get Accounting Support
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountingPage;
