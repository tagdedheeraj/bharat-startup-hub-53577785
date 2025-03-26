import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, HelpCircle, Scale, Bookmark, Shield, FileCheck, ClipboardCheck, AlertTriangle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const LegalConsultationPage = () => {
  const legalServices = [
    {
      icon: <FileText className="h-8 w-8 text-brand-600" />,
      title: "Business Registration",
      description: "Assist with company incorporation, partnership registration, LLP formation, and other business structures.",
      items: ["Private Limited Company", "Limited Liability Partnership", "One Person Company", "Partnership Firm"]
    },
    {
      icon: <Scale className="h-8 w-8 text-brand-600" />,
      title: "Contract Drafting & Review",
      description: "Create and review various business contracts to protect your interests and ensure legal compliance.",
      items: ["Employment Contracts", "Vendor Agreements", "Customer Contracts", "Partnership Agreements"]
    },
    {
      icon: <Bookmark className="h-8 w-8 text-brand-600" />,
      title: "Intellectual Property Protection",
      description: "Safeguard your innovations, brand identity, and creative works through proper IP registration.",
      items: ["Trademark Registration", "Copyright Protection", "Patent Filing", "IP Strategy Development"]
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-600" />,
      title: "Compliance Advisory",
      description: "Navigate complex regulatory requirements to ensure your business operates within legal frameworks.",
      items: ["Regulatory Compliance", "Corporate Governance", "Industry-specific Regulations", "Legal Audits"]
    }
  ];

  const advantages = [
    {
      icon: <AlertTriangle className="h-12 w-12 text-brand-600" />,
      title: "Reduced Business Risks",
      description: "Our thorough legal support identifies and mitigates potential risks before they become issues."
    },
    {
      icon: <ClipboardCheck className="h-12 w-12 text-brand-600" />,
      title: "Improved Business Efficiency",
      description: "Streamlined legal processes save time and resources, allowing you to focus on core business activities."
    },
    {
      icon: <Scale className="h-12 w-12 text-brand-600" />,
      title: "Increased Legal Fee Savings",
      description: "Our cost-effective solutions help reduce overall legal expenses compared to traditional law firms."
    },
    {
      icon: <FileCheck className="h-12 w-12 text-brand-600" />,
      title: "Higher Industry Impact",
      description: "Proper legal compliance enhances your business credibility and competitive position in the market."
    }
  ];

  const approach = [
    {
      title: "Comprehensive Assessment",
      description: "We begin with a thorough evaluation of your current legal situation and business needs."
    },
    {
      title: "Customized Solutions",
      description: "We develop tailored legal strategies and solutions specific to your business requirements."
    },
    {
      title: "Proactive Compliance",
      description: "We implement forward-thinking compliance measures to prevent future legal issues."
    },
    {
      title: "Expert Advice",
      description: "Our team provides ongoing guidance and support for all your legal concerns."
    },
    {
      title: "Documentation & Filing",
      description: "We handle all necessary paperwork, submissions, and administrative requirements."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Legal & Compliances</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Expert Legal Guidance for Your Business</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We provide 360° support for all legal aspects, including company registration, compliance audits, and contract management.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center mt-8">
              Get Legal Support
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR ADVANTAGES"
            heading="The Legal & Compliance Advantages"
            description="Discover how our legal services provide substantial benefits to your business"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-brand-50 p-4 rounded-full inline-block mb-6 mx-auto">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Legal Consultation */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fadeInLeft">
              <SectionHeading
                subheading="WHAT WE OFFER"
                heading="Comprehensive Legal Solutions"
                description=""
                align="left"
              />
              <p className="text-gray-600 mb-6">
                Our legal consultation services provide startups and MSMEs with the legal guidance they need to establish, operate, and grow their businesses with confidence and compliance.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that navigating the complex legal landscape can be challenging for entrepreneurs. Our team of experienced legal professionals simplifies the process, ensuring you make informed decisions that protect your business interests.
              </p>
              <p className="text-gray-600">
                From business registration and contract drafting to intellectual property protection and compliance advisory, we offer end-to-end legal support tailored to your specific business needs and industry requirements.
              </p>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Legal consultation"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR METHODOLOGY"
            heading="Our Approach"
            description="A systematic methodology to deliver effective legal solutions for your business"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-100"></div>
              
              {approach.map((step, index) => (
                <div key={index} className="relative mb-8 md:mb-0 md:mt-8 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col md:flex-row items-center md:justify-between">
                    <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : ''} md:w-5/12`}>
                      {index % 2 === 0 ? (
                        <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      ) : <div></div>}
                    </div>
                    <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : ''} flex md:justify-center mb-4 md:mb-0`}>
                      <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className={`order-3 md:w-5/12`}>
                      {index % 2 !== 0 ? (
                        <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      ) : <div></div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Services */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR SERVICES"
            heading="Legal Solutions for Every Business Need"
            description="Explore our range of legal services designed to protect and support your business journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {legalServices.map((service, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-8 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="WHY CHOOSE US"
            heading="The Bharat Startup Solution Advantage"
            description="Discover what makes our legal consultation services stand out."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experienced Legal Team</h3>
              <p className="text-gray-600">
                Our team of legal experts has extensive experience in startup and MSME legal matters across diverse industries.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Business-Focused Approach</h3>
              <p className="text-gray-600">
                We provide practical legal solutions that align with your business goals, not just theoretical advice.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Support</h3>
              <p className="text-gray-600">
                From initial setup to ongoing compliance, we provide end-to-end legal support throughout your business journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FREQUENTLY ASKED QUESTIONS"
            heading="Common Legal Questions"
            description="Get answers to frequently asked questions about our legal consultation services."
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="glass-card rounded-xl p-6 animate-fadeIn">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">What business structure is best for my startup?</h4>
                  <p className="text-gray-600">
                    The optimal business structure depends on various factors including funding plans, liability concerns, tax implications, and future growth strategies. During our consultation, we'll assess your specific situation and recommend the most suitable structure for your business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">How can I protect my business idea or innovation?</h4>
                  <p className="text-gray-600">
                    Protecting your intellectual property involves various strategies including patents, trademarks, copyrights, and trade secrets. We'll help you identify the most appropriate protection mechanisms for your specific innovation and guide you through the registration process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">What essential contracts does my business need?</h4>
                  <p className="text-gray-600">
                    Most businesses need several key contracts including employment agreements, customer contracts, vendor agreements, and confidentiality agreements. The specific contracts your business requires will depend on your industry, operations, and relationships. We'll identify the essential contracts for your situation and ensure they're properly drafted.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">How do I ensure my business is compliant with regulations?</h4>
                  <p className="text-gray-600">
                    Compliance requirements vary by industry, business activity, and location. Our legal team conducts a thorough compliance assessment to identify applicable regulations and develops a compliance plan tailored to your business. We also offer ongoing compliance support to help you stay updated with changing regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your legal processes?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact Us for Expert Legal & Compliance Support!
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalConsultationPage;
