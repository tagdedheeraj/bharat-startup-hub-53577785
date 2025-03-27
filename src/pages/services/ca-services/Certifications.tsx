
import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const CertificationsPage = () => {
  const certifications = [
    {
      title: "ISO Certification",
      description: "International Organization for Standardization certifications for quality management systems.",
      benefits: ["Enhanced credibility", "Improved customer satisfaction", "Access to global markets"]
    },
    {
      title: "MSME Registration",
      description: "Official registration for Micro, Small and Medium Enterprises to access government benefits.",
      benefits: ["Priority sector lending", "Protection against delayed payments", "Tax benefits"]
    },
    {
      title: "Startup India Recognition",
      description: "Government recognition for innovative startups with high growth potential.",
      benefits: ["Tax benefits", "Easy compliance", "IPR fast-tracking"]
    },
    {
      title: "IEC Certification",
      description: "Import Export Code certification for businesses engaged in international trade.",
      benefits: ["Legal authorization for import/export", "Customs clearance", "Access to export incentives"]
    }
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="Business Certifications"
        subheading="Enhance your business credibility with professional certifications"
        align="center"
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileCheck className="h-7 w-7 text-brand-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{certification.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{certification.description}</p>
              <h4 className="font-medium text-gray-800 mb-2">Key Benefits:</h4>
              <ul className="space-y-2 mb-4">
                {certification.benefits.map((benefit, idx) => (
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
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Get Certified?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts will guide you through the certification process, ensuring a smooth and hassle-free experience.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Contact Our Certification Experts
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
