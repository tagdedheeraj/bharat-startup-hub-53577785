
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';

const CertificationsPage = () => {
  const features = [
    "MSME Registration Certificate",
    "Startup India Certificate",
    "ISO Certification",
    "BIS Certification",
    "Export Import Code",
    "FSSAI License",
    "Shop & Establishment License",
    "IEC Registration",
    "Udyam Registration"
  ];

  return (
    <div className="py-10">
      <SectionHeading 
        heading="Certification Services" 
        subheading="Essential certifications to establish credibility and unlock opportunities"
        align="center"
      />
      
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <div className="rounded-xl bg-brand-50 p-6 shadow-sm border border-brand-100">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 mb-6">
              <FileText className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Why Certifications Matter</h3>
            <p className="text-gray-600 mb-6">
              The right certifications open doors to government schemes, financial benefits, and business opportunities. 
              They establish your credibility in the market and ensure compliance with regulatory requirements.
            </p>
            <p className="text-gray-600 mb-6">
              Our experts guide you through the entire certification process, from documentation to submission,
              ensuring a smooth and hassle-free experience.
            </p>
            <Button asChild className="bg-brand-600 hover:bg-brand-700 mt-4">
              <Link to="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div>
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-6">Our Certification Services</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-600">
                Our team of experts assists with the documentation, application process, and follow-ups
                required for all certifications.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Get Certified?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact our certification experts today to discuss your specific requirements
          and start the certification process.
        </p>
        <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
          <Link to="/contact" className="px-8">Contact Us Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default CertificationsPage;
