
import { Link } from "react-router-dom";
import { ArrowRight, Bank, CheckCircle, ShieldCheck, AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const CompliancePage = () => {
  const complianceServices = [
    {
      title: "Company Law Compliance",
      description: "Ensuring compliance with Companies Act and related regulations.",
      benefits: ["Annual filings with MCA", "Board meeting compliance", "Statutory registers maintenance"]
    },
    {
      title: "ROC Compliance",
      description: "Timely filing of required documents with the Registrar of Companies.",
      benefits: ["Form filing assistance", "Compliance calendar", "Penalty avoidance"]
    },
    {
      title: "FEMA Compliance",
      description: "Ensuring compliance with Foreign Exchange Management Act regulations.",
      benefits: ["Foreign investment reporting", "ODI/FDI compliance", "RBI filing assistance"]
    },
    {
      title: "Labor Law Compliance",
      description: "Management of compliance with various labor and employment laws.",
      benefits: ["PF/ESI compliance", "Labor law advisory", "Statutory documentation"]
    }
  ];

  const complianceRisks = [
    {
      risk: "Penalties and Fines",
      description: "Non-compliance can lead to significant monetary penalties."
    },
    {
      risk: "Legal Proceedings",
      description: "Regulatory authorities may initiate legal proceedings against non-compliant businesses."
    },
    {
      risk: "Business Disruption",
      description: "Severe non-compliance can lead to temporary or permanent closure of business operations."
    },
    {
      risk: "Reputation Damage",
      description: "Non-compliance can harm your brand image and customer trust."
    }
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="Compliance Services"
        subheading="Comprehensive compliance solutions for regulatory requirements"
        align="center"
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Compliance Matters</h2>
              <p className="text-gray-600 mb-4">
                Regulatory compliance is essential for businesses to operate legally and avoid penalties. With constantly evolving regulations across multiple domains, maintaining compliance can be challenging without professional assistance.
              </p>
              <p className="text-gray-600">
                Our compliance services ensure your business adheres to all applicable laws and regulations, allowing you to focus on your core business activities while minimizing compliance risks.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-brand-50 flex items-center justify-center">
                <ShieldCheck className="h-24 w-24 text-brand-600" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Risks of Non-Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {complianceRisks.map((item, index) => (
              <div key={index} className="bg-brand-50 p-4 rounded-lg border-l-4 border-brand-600">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-brand-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.risk}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {complianceServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Bank className="h-7 w-7 text-brand-600 mr-3" />
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
        
        <div className="mt-16 bg-gradient-to-r from-brand-50 to-brand-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Our Compliance Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-brand-100 h-14 w-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-brand-700">1</span>
              </div>
              <h4 className="text-center font-semibold text-gray-800 mb-2">Assessment</h4>
              <p className="text-center text-gray-600 text-sm">Thorough assessment of your business to identify applicable compliance requirements</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-brand-100 h-14 w-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-brand-700">2</span>
              </div>
              <h4 className="text-center font-semibold text-gray-800 mb-2">Implementation</h4>
              <p className="text-center text-gray-600 text-sm">Setting up systems and processes to ensure ongoing compliance</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-brand-100 h-14 w-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-brand-700">3</span>
              </div>
              <h4 className="text-center font-semibold text-gray-800 mb-2">Monitoring</h4>
              <p className="text-center text-gray-600 text-sm">Continuous monitoring and updating to address regulatory changes</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ensure Your Business Compliance</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our compliance experts will help you navigate the complex regulatory landscape and ensure your business operates within the legal framework.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Get Compliance Support
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
