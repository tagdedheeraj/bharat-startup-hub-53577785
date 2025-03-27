
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, AlertTriangle, FileText } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const ComplianceServicesPage = () => {
  const services = [
    {
      title: "Legal Compliance",
      description: "Ensuring adherence to various legal requirements applicable to your business.",
    },
    {
      title: "Regulatory Filings",
      description: "Timely preparation and submission of mandatory regulatory filings.",
    },
    {
      title: "Compliance Audits",
      description: "Regular audits to identify and address potential compliance issues.",
    },
    {
      title: "Compliance Advisory",
      description: "Expert guidance on compliance matters and regulatory changes.",
    }
  ];

  const compliances = [
    {
      category: "Company Law Compliance",
      items: [
        "Annual Return Filing",
        "Board Meeting Compliance",
        "Director's Report & Financial Statement",
        "ROC Compliance"
      ]
    },
    {
      category: "Tax Compliance",
      items: [
        "Income Tax Return Filing",
        "GST Compliance",
        "TDS/TCS Compliance",
        "International Tax Compliance"
      ]
    },
    {
      category: "Labor Law Compliance",
      items: [
        "PF & ESI Compliance",
        "Professional Tax Compliance",
        "Labor Welfare Fund",
        "Shops & Establishment Act"
      ]
    },
    {
      category: "Industry-Specific Compliance",
      items: [
        "FEMA Compliance",
        "SEBI Compliance",
        "RBI Compliance",
        "Sector-Specific Regulations"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/services/ca-services" className="text-sm text-brand-600 font-medium hover:underline flex items-center justify-center gap-1 mb-4">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to CA Services
            </Link>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">COMPLIANCE SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Comprehensive Compliance Solutions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional services to ensure your business adheres to all applicable laws and regulations
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR OFFERINGS"
            heading="Compliance Services"
            description="We provide comprehensive compliance solutions to keep your business legally protected."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Shield className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Categories */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="COMPLIANCE CATEGORIES"
            heading="Key Compliance Areas We Cover"
            description="Comprehensive compliance management across various domains."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {compliances.map((compliance, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Shield className="h-5 w-5 text-brand-600 mr-2" />
                  {compliance.category}
                </h3>
                <ul className="space-y-3">
                  {compliance.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="BENEFITS"
            heading="Why Choose Our Compliance Services"
            description="Discover the advantages of professional compliance management."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Mitigate Legal Risks</h3>
                  <p className="text-gray-600">Reduce the risk of legal penalties, fines, and litigation through proactive compliance management.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Protect Your Reputation</h3>
                  <p className="text-gray-600">Maintain your business reputation by adhering to ethical and legal standards.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Reduce Administrative Burden</h3>
                  <p className="text-gray-600">Free up your time and resources by outsourcing complex compliance tasks to experts.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Stay Updated with Changes</h3>
                  <p className="text-gray-600">Keep pace with evolving regulations through our continuous monitoring and updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="RISKS"
            heading="Risks of Non-Compliance"
            description="Understanding the potential consequences of compliance failures."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Financial Penalties</h3>
                </div>
              </div>
              <p className="text-gray-600">Non-compliance often results in significant financial penalties, fines, and potential legal costs that can impact your bottom line.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Legal Proceedings</h3>
                </div>
              </div>
              <p className="text-gray-600">Serious compliance failures can lead to legal proceedings, investigations, and potential criminal charges against directors and officers.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Reputational Damage</h3>
                </div>
              </div>
              <p className="text-gray-600">Compliance failures can severely damage your business reputation, leading to loss of customers, partners, and market position.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Operational Disruptions</h3>
                </div>
              </div>
              <p className="text-gray-600">Regulatory actions due to non-compliance can disrupt business operations, including potential closures or restrictions on activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Management Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="Compliance Management Process"
            description="Our systematic approach to ensuring comprehensive compliance."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative">
              {/* Process steps with connecting line */}
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-brand-100 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">1</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Assessment</h3>
                    <p className="text-gray-600">We conduct a comprehensive assessment of your current compliance status and applicable regulatory requirements.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">2</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Planning</h3>
                    <p className="text-gray-600">We develop a tailored compliance plan with clear timelines, responsibilities, and action items.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">3</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Implementation</h3>
                    <p className="text-gray-600">We execute the compliance plan, handling necessary filings, registrations, and compliance requirements.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">4</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Monitoring</h3>
                    <p className="text-gray-600">We continuously monitor compliance status and regulatory changes that may affect your business.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">5</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Reporting</h3>
                    <p className="text-gray-600">We provide regular compliance reports, highlighting completed tasks, upcoming requirements, and potential issues.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Complete Compliance Today</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our comprehensive compliance services can protect your business from regulatory risks.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplianceServicesPage;
