
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, FileCheck, HelpCircle, TrendingUp, Landmark, CheckSquare, Shield, BadgeCheck, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CertificateMarketingPage = () => {
  // Main certifications with their detailed benefits
  const certifications = [
    {
      title: "MSME Certification",
      icon: <Landmark className="h-12 w-12 text-brand-600" />,
      description: "Enjoy the benefits of government schemes and subsidies with MSME Certificate.",
      benefits: [
        "Easy Access to Loans & Tax Benefits",
        "Credit Guarantee Schemes",
        "Market Development Assistance",
        "Interest Rate Subsidies",
        "Tender Preferences",
        "Business Growth Opportunities",
        "Easier Public Procurement"
      ]
    },
    {
      title: "Startup India Recognition",
      icon: <Zap className="h-12 w-12 text-brand-600" />,
      description: "Gain eligibility for various government grants and funding opportunities with Startup India Certificate.",
      benefits: [
        "Access to Government Grants",
        "Seed Funding Registration",
        "Easier Public Procurement",
        "Fast-Track IP and Patent Assistance",
        "Get Tax Exemptions",
        "Free Partner Services"
      ]
    },
    {
      title: "Other Essential Certifications",
      icon: <Badge className="h-12 w-12 text-brand-600" />,
      description: "Additional certifications to boost your business credibility and compliance.",
      benefits: [
        "Tax Exemption Certificate",
        "NSIC certification",
        "ISO certification",
        "ZED certification",
        "FSSAI license"
      ]
    }
  ];

  // FAQ section questions
  const faqs = [
    {
      question: "How long does it take to get MSME certification?",
      answer: "The MSME certification process typically takes 7-10 working days after submitting all required documents. Our team helps streamline the process to ensure quick approval."
    },
    {
      question: "What documents are required for Startup India recognition?",
      answer: "For Startup India recognition, you'll need certificate of incorporation/registration, business proof documents, PAN details, and a brief description of your innovative business model. We guide you through the entire documentation process."
    },
    {
      question: "Which certifications are most valuable for my business?",
      answer: "The most valuable certifications depend on your industry, target market, and business goals. During our initial consultation, we'll assess your specific situation and recommend the certifications that will provide the greatest return on investment for your business."
    },
    {
      question: "How do you help market my certifications?",
      answer: "Our marketing approach includes integrating your certifications into your brand messaging, website, marketing materials, and sales presentations. We also help with press releases, social media campaigns, and industry-specific marketing strategies to maximize the visibility and impact of your certifications."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Certificate Marketing</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Boost Your Business with Essential Certifications</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlock growth opportunities and benefits with essential certifications for MSMEs and startups.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center mt-8">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Certificate Marketing */}
      <section className="py-16 md:py-20">
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
                In today's competitive market, having the right certifications not only helps you comply with regulations but also gives you access to numerous government benefits, funding opportunities, and preferential treatment in procurement processes.
              </p>
              <p className="text-gray-600">
                Our expert team guides you through the entire certification process — from document preparation to final approval — and develops marketing strategies that highlight your certifications to build trust, win customers, and open new business opportunities.
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

      {/* Certifications Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="KEY CERTIFICATIONS"
            heading="Essential Certifications for Business Growth"
            description="We help you obtain and market these valuable certifications to enhance your business credibility and access various benefits."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-brand-50 rounded-full">
                      {cert.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-center">{cert.title}</CardTitle>
                  <CardDescription className="text-center text-base mt-2">{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-4 text-lg">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {cert.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
                        We start by assessing your business needs and identifying the most beneficial certifications for your growth and specific industry requirements.
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
                      <h3 className="text-xl font-bold mb-2">Documentation Preparation</h3>
                      <p className="text-gray-600">
                        We help you prepare all required documentation and ensure your business meets the eligibility criteria for the target certifications.
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
                      <h3 className="text-xl font-bold mb-2">Application & Approval Process</h3>
                      <p className="text-gray-600">
                        We guide you through the application process, coordinate with certification authorities, and track your application until final approval.
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
                      <h3 className="text-xl font-bold mb-2">Benefit Activation</h3>
                      <p className="text-gray-600">
                        Once certified, we help you activate and access all benefits associated with your certifications, from tax exemptions to funding eligibility.
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
                      <h3 className="text-xl font-bold mb-2">Marketing & Leverage</h3>
                      <p className="text-gray-600">
                        We develop strategies to effectively communicate your certifications to customers, partners, and stakeholders to maximize their business value.
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
            description="Discover how proper certification can transform your business growth and opportunities."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BadgeCheck className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Credibility</h3>
              <p className="text-gray-600">
                Build trust with customers, partners, and investors through recognized certifications and government endorsements.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckSquare className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Benefits</h3>
              <p className="text-gray-600">
                Access tax exemptions, subsidies, preferential loan rates, and various financial incentives available to certified businesses.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Advantage</h3>
              <p className="text-gray-600">
                Gain preferential treatment in government tenders, funding opportunities, and market access over non-certified competitors.
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
            heading="Common Questions About Business Certifications"
            description="Get answers to your questions about our certificate marketing services."
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Business with Essential Certifications?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with our certificate marketing services today and unlock growth opportunities for your business.
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
