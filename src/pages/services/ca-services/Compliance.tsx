
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CompliancePage = () => {
  const services = [
    {
      title: "Regulatory Compliance",
      description: "Ensuring adherence to all applicable laws, regulations, and statutory requirements."
    },
    {
      title: "Compliance Audits",
      description: "Periodic audits to identify compliance gaps and recommend corrective actions."
    },
    {
      title: "Compliance Documentation",
      description: "Preparation and maintenance of all required compliance documentation and records."
    },
    {
      title: "Compliance Training",
      description: "Training programs to educate staff on compliance requirements and best practices."
    }
  ];

  const complianceAreas = [
    "Companies Act Compliance",
    "SEBI Regulations",
    "FEMA Compliance",
    "Labor Law Compliance",
    "Environmental Compliance",
    "Industry-Specific Regulations"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-brand-50 p-4 rounded-full">
                <Shield className="h-10 w-10 text-brand-600" />
              </div>
            </div>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Compliance Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive compliance solutions to help businesses adhere to all legal and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subheading="REGULATORY ADHERENCE"
              heading="Complete Compliance Solutions"
              description="Our compliance services help businesses navigate complex regulatory landscapes and ensure adherence to all applicable laws."
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
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-500 mt-0.5" />
              <p className="text-sm text-yellow-700">
                Non-compliance with regulatory requirements can lead to severe penalties, legal actions, and reputational damage. 
                Proactive compliance management is essential for business sustainability.
              </p>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Compliance Areas We Cover</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {complianceAreas.map((area, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-600" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 bg-brand-50 rounded-xl p-8 border border-brand-100">
              <h3 className="text-2xl font-bold mb-4">Our Compliance Approach</h3>
              <div className="space-y-6 mt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-brand-600 font-bold border border-brand-200">1</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Assessment</h4>
                    <p className="text-gray-700">Comprehensive assessment of current compliance status and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-brand-600 font-bold border border-brand-200">2</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Planning</h4>
                    <p className="text-gray-700">Development of detailed compliance roadmap and action plan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-brand-600 font-bold border border-brand-200">3</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Implementation</h4>
                    <p className="text-gray-700">Execution of compliance measures and establishment of monitoring systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-brand-600 font-bold border border-brand-200">4</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Review & Update</h4>
                    <p className="text-gray-700">Regular review and updating of compliance measures to address regulatory changes.</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Compliant, Stay Secure</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our compliance experts can help your business navigate the complex regulatory landscape and ensure full adherence to all requirements.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Get Compliance Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;
