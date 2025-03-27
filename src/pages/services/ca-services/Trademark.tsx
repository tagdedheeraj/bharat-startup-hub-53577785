
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const TrademarkPage = () => {
  const trademarkServices = [
    {
      title: "Trademark Search & Analysis",
      description: "Comprehensive search and analysis to ensure your trademark is unique and registrable.",
      benefits: ["Identify potential conflicts", "Assess registration eligibility", "Strategic recommendations"]
    },
    {
      title: "Trademark Registration",
      description: "End-to-end assistance with the trademark registration process in India.",
      benefits: ["Complete application preparation", "Responses to official objections", "Regular status updates"]
    },
    {
      title: "International Trademark Filing",
      description: "Assistance with filing trademarks internationally through the Madrid Protocol.",
      benefits: ["Multi-country protection", "Streamlined filing process", "Cost-effective global protection"]
    },
    {
      title: "Trademark Monitoring & Renewal",
      description: "Ongoing monitoring and timely renewal of your registered trademarks.",
      benefits: ["Protect against infringement", "Maintain trademark rights", "Avoid lapse of protection"]
    }
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="Trademark Services"
        subheading="Protect your brand identity with our comprehensive trademark services"
        align="center"
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="bg-brand-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Trademark Registration Matters</h2>
          <p className="text-gray-600 mb-4">
            A registered trademark provides exclusive rights to use your brand name, logo, or slogan, preventing others from using similar marks that might confuse consumers. It's a valuable business asset that enhances your brand's credibility and protection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-brand-700 mb-2">Legal Protection</h3>
              <p className="text-sm text-gray-600">Exclusive rights to use your mark and legal grounds to prevent infringement</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-brand-700 mb-2">Brand Value</h3>
              <p className="text-sm text-gray-600">Increased brand value and recognition in the market</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-brand-700 mb-2">Business Asset</h3>
              <p className="text-sm text-gray-600">A valuable intangible asset that can be licensed, franchised, or sold</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trademarkServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="h-7 w-7 text-brand-600 mr-3" />
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
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Protect Your Brand Today</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our trademark experts will help you secure your brand identity and prevent unauthorized use of your intellectual property.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Get Trademark Assistance
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrademarkPage;
