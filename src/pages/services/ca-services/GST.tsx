
import { Link } from "react-router-dom";
import { ArrowRight, Receipt, CheckCircle, AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const GSTPage = () => {
  const gstServices = [
    {
      title: "GST Registration",
      description: "Assistance with GST registration process for businesses of all sizes.",
      benefits: ["Proper documentation", "Fast processing", "Compliance with requirements"]
    },
    {
      title: "GST Return Filing",
      description: "Timely and accurate filing of GST returns to ensure compliance.",
      benefits: ["On-time filing", "Error-free returns", "Input tax credit optimization"]
    },
    {
      title: "GST Audit",
      description: "Comprehensive GST audit services to ensure compliance with GST regulations.",
      benefits: ["Identify discrepancies", "Prevent notices", "Ensure tax credit eligibility"]
    },
    {
      title: "GST Advisory",
      description: "Expert advice on GST matters to optimize tax efficiency.",
      benefits: ["Industry-specific guidance", "Tax planning", "Compliance strategy"]
    }
  ];

  const commonIssues = [
    "Incorrect classification of goods and services",
    "Missing input tax credits",
    "Late filing of returns",
    "Errors in invoice details",
    "Mismatch in GSTR-1 and GSTR-3B"
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="GST Services"
        subheading="Comprehensive GST compliance and advisory services"
        align="center"
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">GST Compliance Made Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. Compliance with GST regulations is mandatory for businesses, but navigating the complex framework can be challenging.
              </p>
              <p className="text-gray-600">
                Our GST experts simplify the process, ensuring your business remains compliant while maximizing available tax benefits and avoiding potential penalties.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-brand-600 mr-2" />
                Common GST Issues Businesses Face
              </h3>
              <ul className="space-y-2">
                {commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-brand-50 text-brand-700 text-sm font-medium h-5 w-5 rounded-full flex items-center justify-center mr-2 mt-0.5">{index + 1}</span>
                    <span className="text-gray-600">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gstServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Receipt className="h-7 w-7 text-brand-600 mr-3" />
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
        
        <div className="mt-16 bg-brand-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">GST Return Filing Calendar</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-brand-100">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-800">Return Type</th>
                  <th className="py-3 px-4 text-left text-gray-800">Applicable For</th>
                  <th className="py-3 px-4 text-left text-gray-800">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 text-gray-700">GSTR-1</td>
                  <td className="py-3 px-4 text-gray-600">All regular taxpayers</td>
                  <td className="py-3 px-4 text-gray-600">11th of next month</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">GSTR-3B</td>
                  <td className="py-3 px-4 text-gray-600">All regular taxpayers</td>
                  <td className="py-3 px-4 text-gray-600">20th of next month</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">GSTR-4</td>
                  <td className="py-3 px-4 text-gray-600">Composition dealers</td>
                  <td className="py-3 px-4 text-gray-600">18th of month after quarter</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">GSTR-9</td>
                  <td className="py-3 px-4 text-gray-600">Annual return</td>
                  <td className="py-3 px-4 text-gray-600">31st December</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Need GST Assistance?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our GST experts will help you navigate the complex GST framework and ensure your business remains compliant.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Consult Our GST Experts
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GSTPage;
