
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, FileCheck, HelpCircle, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CertificateMarketingPage = () => {
  const certifications = [
    {
      title: "ISO Certification",
      description: "International standards that specify requirements for quality management systems.",
      benefits: ["Enhanced credibility", "Improved processes", "Global recognition"]
    },
    {
      title: "MSME Registration",
      description: "Official recognition as a Micro, Small, or Medium Enterprise by the government.",
      benefits: ["Access to government schemes", "Priority sector lending", "Tax benefits"]
    },
    {
      title: "Startup India Recognition",
      description: "Official recognition as a startup under the Startup India initiative.",
      benefits: ["Tax exemptions", "Easy compliance", "Funding opportunities"]
    },
    {
      title: "Industry-Specific Certifications",
      description: "Specialized certifications relevant to your specific industry or sector.",
      benefits: ["Industry recognition", "Competitive advantage", "Specialized benefits"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Certificate Marketing</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Boost Your Business Credibility</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enhance your market position with proper certification and strategic marketing that builds trust and opens new opportunities.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center mt-8">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Certificate Marketing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fadeInLeft">
              <SectionHeading
                subheading="WHAT WE OFFER"
                heading="Certificate Marketing Solutions"
                description=""
                align="left"
              />
              <p className="text-gray-600 mb-6">
                Certificate Marketing combines the power of official certifications with strategic marketing to enhance your business credibility and market position. Our comprehensive approach helps you obtain relevant certifications and effectively communicate them to your target audience.
              </p>
              <p className="text-gray-600 mb-6">
                In today's competitive market, having the right certifications can significantly impact your business success. They serve as third-party validation of your quality, processes, and commitment to excellence, giving you a distinct edge over competitors.
              </p>
              <p className="text-gray-600">
                Our expert team guides you through the entire certification process and develops marketing strategies that highlight your certifications to build trust, win customers, and open new business opportunities.
              </p>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Business certification"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="KEY CERTIFICATIONS"
            heading="Essential Certifications for Business Growth"
            description="We help you obtain and market these valuable certifications to enhance your business credibility."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-8 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <FileCheck className="h-8 w-8 text-brand-600 mr-4" />
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {cert.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="How We Help You Get Certified and Market It"
            description="Our structured approach ensures you get the most value from your certifications."
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
                      <h3 className="text-xl font-bold mb-2">Assessment & Planning</h3>
                      <p className="text-gray-600">
                        We start by assessing your business needs, industry requirements, and market positioning to identify the most beneficial certifications for your growth.
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
                      <h3 className="text-xl font-bold mb-2">Documentation & Preparation</h3>
                      <p className="text-gray-600">
                        We help you prepare all required documentation, implement necessary processes, and ensure your business meets the standards for the target certifications.
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
                      <h3 className="text-xl font-bold mb-2">Certification Process</h3>
                      <p className="text-gray-600">
                        We guide you through the application, review, and audit processes, liaising with certification bodies to ensure smooth and successful certification.
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
                      <h3 className="text-xl font-bold mb-2">Marketing Strategy</h3>
                      <p className="text-gray-600">
                        Once certified, we develop a comprehensive marketing strategy to effectively communicate your certifications and the value they bring to your customers.
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
                      <h3 className="text-xl font-bold mb-2">Implementation & Monitoring</h3>
                      <p className="text-gray-600">
                        We implement the marketing plan across various channels and continuously monitor its effectiveness, making adjustments to maximize its impact.
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

      {/* Benefits */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="BENEFITS"
            heading="Why Invest in Certificate Marketing"
            description="Discover how certificate marketing can transform your business prospects."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Credibility</h3>
              <p className="text-gray-600">
                Build trust with customers and partners through third-party validation of your quality and standards.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Advantage</h3>
              <p className="text-gray-600">
                Stand out in a crowded market and differentiate your business from competitors.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Access to Opportunities</h3>
              <p className="text-gray-600">
                Unlock new markets, partnerships, and business opportunities that require specific certifications.
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
            heading="Common Questions About Certificate Marketing"
            description="Get answers to your questions about our certificate marketing services."
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="glass-card rounded-xl p-6 animate-fadeIn">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">How long does it take to get certified?</h4>
                  <p className="text-gray-600">
                    The certification timeline varies depending on the type of certification, your current processes, and the certification body. Generally, it can take anywhere from 2-6 months. We'll provide you with a specific timeline during the initial assessment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">Which certifications are most valuable for my business?</h4>
                  <p className="text-gray-600">
                    The most valuable certifications depend on your industry, target market, and business goals. During our initial consultation, we'll assess your specific situation and recommend the certifications that will provide the greatest return on investment for your business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">How do you help market my certifications?</h4>
                  <p className="text-gray-600">
                    Our marketing approach includes integrating your certifications into your brand messaging, website, marketing materials, and sales presentations. We also help with press releases, social media campaigns, and industry-specific marketing strategies to maximize the visibility and impact of your certifications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">What is the cost of certification and marketing?</h4>
                  <p className="text-gray-600">
                    Costs vary based on the type of certification, your current readiness, and the scope of marketing services needed. We provide transparent pricing during our initial consultation after assessing your specific requirements. Many clients find that the return on investment significantly outweighs the costs.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Business Credibility?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with our certificate marketing services today and set your business apart from the competition.
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

export default CertificateMarketingPage;
