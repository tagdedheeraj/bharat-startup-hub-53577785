
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const IncomeTaxPage = () => {
  const taxServices = [
    {
      title: "Tax Planning",
      description: "Strategic tax planning to minimize tax liability and maximize savings.",
      benefits: ["Identify tax-saving opportunities", "Optimize deductions and exemptions", "Structured approach to finances"]
    },
    {
      title: "Income Tax Return Filing",
      description: "Accurate and timely filing of income tax returns for individuals and businesses.",
      benefits: ["Error-free filing", "Maximum eligible refunds", "Compliance with deadlines"]
    },
    {
      title: "Tax Audit Services",
      description: "Comprehensive tax audit services to ensure compliance with tax regulations.",
      benefits: ["Detailed examination of accounts", "Compliance verification", "Risk mitigation"]
    },
    {
      title: "Tax Notice Assistance",
      description: "Expert assistance in responding to notices from tax authorities.",
      benefits: ["Professional representation", "Timely responses", "Resolution of tax disputes"]
    }
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="Income Tax Services"
        subheading="Professional income tax planning and filing services"
        align="center"
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Professional Tax Services Matter</h2>
              <p className="text-gray-600 mb-4">
                Tax regulations are complex and constantly changing. Professional tax services ensure you remain compliant while maximizing your tax benefits and avoiding potential penalties.
              </p>
              <div className="flex items-center mt-6 bg-brand-50 p-3 rounded-md">
                <AlertCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Did you know? The Income Tax Act has over 298 sections with numerous sub-sections and is amended every year.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-brand-50 flex items-center justify-center">
                <Calculator className="h-24 w-24 text-brand-600" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {taxServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Calculator className="h-7 w-7 text-brand-600 mr-3" />
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
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Need Tax Assistance?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our tax experts will help you navigate the complex tax landscape and ensure you receive all the benefits you're entitled to.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Consult Our Tax Experts
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxPage;
