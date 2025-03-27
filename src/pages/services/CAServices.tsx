
import { Calculator, FileText, BarChart3, Bank, Receipt, DollarSign, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const CAServicesPage = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-brand-600" />,
      title: "Certifications",
      description: "Professional assistance for obtaining various business certifications to enhance your credibility.",
      link: "/services/ca-services/certifications"
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-600" />,
      title: "Trademark",
      description: "Protect your brand identity with our comprehensive trademark registration and management services.",
      link: "/services/ca-services/trademark"
    },
    {
      icon: <Calculator className="h-8 w-8 text-brand-600" />,
      title: "Income Tax",
      description: "Expert tax planning, preparation, and filing services for businesses and individuals.",
      link: "/services/ca-services/income-tax"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-brand-600" />,
      title: "Accounting",
      description: "Comprehensive accounting solutions to maintain accurate financial records for your business.",
      link: "/services/ca-services/accounting"
    },
    {
      icon: <Receipt className="h-8 w-8 text-brand-600" />,
      title: "GST",
      description: "Complete GST compliance, filing, and consultation services for businesses of all sizes.",
      link: "/services/ca-services/gst"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-600" />,
      title: "Payroll",
      description: "Efficient payroll management services to ensure timely and accurate employee payments.",
      link: "/services/ca-services/payroll"
    },
    {
      icon: <Bank className="h-8 w-8 text-brand-600" />,
      title: "Compliance",
      description: "Stay compliant with all financial regulations and requirements applicable to your business.",
      link: "/services/ca-services/compliance"
    }
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="CA Services"
        subheading="Comprehensive Chartered Accountant services for businesses of all sizes"
        align="center"
      />
      
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Need Professional Financial Assistance?</h3>
          <p className="text-gray-600 mb-8">
            Our team of experienced chartered accountants is ready to help you with all your financial and compliance needs. We provide tailored solutions to ensure your business stays compliant and financially healthy.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CAServicesPage;
