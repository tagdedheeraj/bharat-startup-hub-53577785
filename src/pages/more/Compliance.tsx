
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, FileText, Shield } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CompliancePage = () => {
  const complianceServices = [
    {
      title: "Business Registration",
      description: "Complete assistance with registering your business under the most appropriate structure, including Private Limited, LLP, OPC, or Partnership.",
      items: [
        "Company incorporation",
        "LLP registration",
        "Partnership registration",
        "One Person Company (OPC) setup"
      ],
      icon: <FileText className="h-8 w-8 text-brand-600" />
    },
    {
      title: "MSME Registration",
      description: "Streamlined process for registering your business as a Micro, Small, or Medium Enterprise to access government benefits and schemes.",
      items: [
        "Udyam Registration",
        "Documentation preparation",
        "Application submission",
        "Certificate procurement"
      ],
      icon: <Shield className="h-8 w-8 text-brand-600" />
    },
    {
      title: "Tax Compliance",
      description: "Comprehensive tax compliance services to ensure your business meets all taxation requirements and avoids penalties.",
      items: [
        "GST registration and filing",
        "Income tax compliance",
        "TDS compliance",
        "Tax planning and advisory"
      ],
      icon: <FileText className="h-8 w-8 text-brand-600" />
    },
    {
      title: "Statutory Compliance",
      description: "End-to-end management of statutory compliance requirements for businesses of all sizes and structures.",
      items: [
        "Annual filings with ROC",
        "Board meeting compliance",
        "Secretarial compliance",
        "Regulatory documentation"
      ],
      icon: <Shield className="h-8 w-8 text-brand-600" />
    }
  ];

  const complianceAdvantages = [
    {
      title: "Risk Mitigation",
      description: "Proper compliance reduces the risk of penalties, legal issues, and business disruptions."
    },
    {
      title: "Business Credibility",
      description: "Compliance enhances your business reputation with customers, partners, and investors."
    },
    {
      title: "Access to Benefits",
      description: "Many government schemes and benefits are available only to compliant businesses."
    },
    {
      title: "Peace of Mind",
      description: "Knowing your business is fully compliant allows you to focus on core operations and growth."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Compliance Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Navigate Regulatory Requirements with Confidence</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive compliance solutions to ensure your business operates within legal frameworks.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center mt-8">
              Get Compliance Support
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fadeInLeft">
              <SectionHeading
                subheading="WHAT WE OFFER"
                heading="Complete Compliance Solutions"
                description=""
                align="left"
              />
              <p className="text-gray-600 mb-6">
                Navigating the complex landscape of business compliance in India can be challenging, particularly for startups and MSMEs with limited resources. Our comprehensive compliance services are designed to ensure your business meets all regulatory requirements while allowing you to focus on growth and core operations.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of compliance experts stays updated with the latest regulatory changes and requirements across various domains, including company law, taxation, labor regulations, and industry-specific compliance needs.
              </p>
              <p className="text-gray-600">
                Whether you're starting a new business or need ongoing compliance management for an established enterprise, our tailored solutions ensure you remain compliant at every stage of your business journey.
              </p>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Business compliance"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR SERVICES"
            heading="Comprehensive Compliance Solutions"
            description="Expert assistance with various compliance requirements for your business."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {complianceServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="WHY IT MATTERS"
            heading="The Importance of Business Compliance"
            description="Understanding why compliance is critical for your business success."
          />
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mt-12 animate-fadeIn">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-6">
                  Business compliance is not just about avoiding penalties or legal issues; it's a crucial aspect of building a sustainable and credible business. Non-compliance can lead to severe consequences including:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-bold">Financial Penalties</h4>
                      <p className="text-gray-600">Non-compliance often results in significant fines and penalties that can strain your finances.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-bold">Legal Complications</h4>
                      <p className="text-gray-600">Regulatory violations can lead to legal proceedings, affecting your business operations.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-bold">Reputation Damage</h4>
                      <p className="text-gray-600">Non-compliance can damage your business reputation, affecting customer trust and partnerships.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-bold">Operational Disruptions</h4>
                      <p className="text-gray-600">Compliance issues can lead to business disruptions, including temporary closures or restrictions.</p>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-600">
                  By ensuring proper compliance, you not only avoid these risks but also position your business for sustainable growth and success.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                  <h3 className="text-xl font-bold mb-4">Compliance Advantages</h3>
                  <ul className="space-y-4">
                    {complianceAdvantages.map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-bold">{advantage.title}</h4>
                          <p className="text-gray-600 text-sm">{advantage.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Compliance Process */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="How We Ensure Your Compliance"
            description="A streamlined approach to managing your business compliance needs."
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-100"></div>
              
              {/* Step 1 */}
              <div className="relative mb-8 md:mb-0 animate-fadeIn">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="order-2 md:order-1 md:w-5/12">
                    <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                      <h3 className="text-xl font-bold mb-2">Compliance Assessment</h3>
                      <p className="text-gray-600">
                        We begin with a comprehensive assessment of your business structure, operations, and industry to identify all applicable compliance requirements.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex md:justify-center mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                      <span className="font-bold">1</span>
                    </div>
                  </div>
                  <div className="order-3 md:w-5/12"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-8 md:mb-0 md:mt-8 animate-fadeIn" style={{ animationDelay: "100ms" }}>
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="order-2 md:w-5/12"></div>
                  <div className="order-1 flex md:justify-center mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                      <span className="font-bold">2</span>
                    </div>
                  </div>
                  <div className="order-3 md:w-5/12">
                    <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                      <h3 className="text-xl font-bold mb-2">Gap Analysis</h3>
                      <p className="text-gray-600">
                        We conduct a detailed gap analysis to identify areas where your business may not be fully compliant with current regulations and requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-8 md:mb-0 md:mt-8 animate-fadeIn" style={{ animationDelay: "200ms" }}>
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="order-2 md:order-1 md:w-5/12">
                    <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                      <h3 className="text-xl font-bold mb-2">Compliance Plan Development</h3>
                      <p className="text-gray-600">
                        Based on the assessment and gap analysis, we develop a customized compliance plan outlining the steps needed to achieve and maintain full compliance.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex md:justify-center mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                      <span className="font-bold">3</span>
                    </div>
                  </div>
                  <div className="order-3 md:w-5/12"></div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative mb-8 md:mb-0 md:mt-8 animate-fadeIn" style={{ animationDelay: "300ms" }}>
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="order-2 md:w-5/12"></div>
                  <div className="order-1 flex md:justify-center mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                      <span className="font-bold">4</span>
                    </div>
                  </div>
                  <div className="order-3 md:w-5/12">
                    <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                      <h3 className="text-xl font-bold mb-2">Implementation</h3>
                      <p className="text-gray-600">
                        We assist in implementing the compliance plan, including preparing and filing necessary documents, setting up processes, and making required changes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative md:mt-8 animate-fadeIn" style={{ animationDelay: "400ms" }}>
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="order-2 md:order-1 md:w-5/12">
                    <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                      <h3 className="text-xl font-bold mb-2">Ongoing Compliance Management</h3>
                      <p className="text-gray-600">
                        We provide continuous monitoring and management of your compliance obligations, ensuring your business remains compliant as regulations change.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex md:justify-center mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                      <span className="font-bold">5</span>
                    </div>
                  </div>
                  <div className="order-3 md:w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="RESOURCE"
            heading="Essential Compliance Checklist"
            description="A helpful overview of key compliance areas for Indian businesses."
          />
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mt-12 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Business Registration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Business entity registration (Pvt Ltd, LLP, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>MSME registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Shop & establishment registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Professional tax registration</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Tax Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>PAN and TAN registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>GST registration and filings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Income tax filings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>TDS compliance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Labor Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Provident Fund registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>ESI registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Labor welfare fund</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Employment agreements</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Corporate Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Annual filings with ROC</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Board meeting compliances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Maintenance of statutory registers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span>Director KYC</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-brand-50 border border-brand-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> This checklist provides a general overview and may not cover all compliance requirements specific to your business or industry. Contact us for a personalized compliance assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Your Business is Fully Compliant</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Take the stress out of compliance management with our expert services. Contact us today for a comprehensive compliance assessment.
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

export default CompliancePage;
