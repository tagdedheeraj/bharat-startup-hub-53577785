import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, FileCheck, HelpCircle, TrendingUp, BadgeCheck, BadgePercent, BadgeDollarSign, CreditCard, Building, Landmark, ShieldCheck, FileText, Scale, Smartphone, Banknote, Droplet, Film, Truck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Badge } from '@/components/ui/badge';

const CertificateMarketingPage = () => {
  const certificationCategories = [
    {
      title: "Essential Business Certifications",
      certifications: [
        {
          title: "MSME Certification",
          description: "Enjoy the benefits of government schemes and subsidies with MSME Certificate.",
          benefits: [
            "Easy Access to Loans & Tax Benefits",
            "Credit Guarantee Schemes",
            "Market Development Assistance",
            "Interest Rate Subsidies",
            "Tender Preferences",
            "Business Growth Opportunities"
          ],
          icon: <Building className="h-10 w-10 text-brand-600" />
        },
        {
          title: "Startup India Recognition",
          description: "Gain eligibility for various government grants and funding opportunities with Startup India Certificate.",
          benefits: [
            "Access to Government Grants",
            "Seed Funding Registration",
            "Easier Public Procurement",
            "Fast-Track IP and Patent Assistance",
            "Get Tax Exemptions",
            "Free Partner Services"
          ],
          icon: <BadgeCheck className="h-10 w-10 text-brand-600" />
        },
        {
          title: "Tax Exemption Certificate",
          description: "Get official tax benefits and exemptions for your business operations.",
          benefits: [
            "Reduced Tax Liability",
            "Simplified Tax Compliance",
            "Cost Savings",
            "Improved Cash Flow"
          ],
          icon: <BadgeDollarSign className="h-10 w-10 text-brand-600" />
        },
        {
          title: "NSIC Certification",
          description: "National Small Industries Corporation certification for enhanced credibility.",
          benefits: [
            "Government Tender Participation",
            "Raw Material Assistance",
            "Marketing Support",
            "Credit Facilitation"
          ],
          icon: <Landmark className="h-10 w-10 text-brand-600" />
        },
        {
          title: "ISO Certification",
          description: "International standards that specify requirements for quality management systems.",
          benefits: [
            "Enhanced Global Credibility",
            "Improved Processes",
            "Increased Efficiency",
            "Access to International Markets"
          ],
          icon: <ShieldCheck className="h-10 w-10 text-brand-600" />
        },
        {
          title: "Other Essential Certifications",
          description: "Specialized certifications like ZED and FSSAI for specific industry needs.",
          benefits: [
            "ZED Certification for Quality",
            "FSSAI License for Food Businesses",
            "Industry-Specific Compliance",
            "Competitive Market Advantage"
          ],
          icon: <BadgePercent className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Food & Export Industry",
      certifications: [
        {
          title: "HACCP Certification",
          description: "Critical certification for food export businesses ensuring food safety standards.",
          benefits: [
            "Access to International Markets",
            "Hazard Prevention Control",
            "Increased Consumer Trust",
            "Regulatory Compliance"
          ],
          icon: <FileCheck className="h-10 w-10 text-brand-600" />
        },
        {
          title: "FSSAI + Cold Chain Certification",
          description: "Essential for food logistics and maintaining cold chain integrity.",
          benefits: [
            "Legal Food Transportation",
            "Quality Assurance",
            "Temperature Control Compliance",
            "Food Safety Standards"
          ],
          icon: <Truck className="h-10 w-10 text-brand-600" />
        },
        {
          title: "RCMC Certificate",
          description: "Registration Cum Membership Certificate for exporters via Export Promotion Councils.",
          benefits: [
            "Export Benefits Access",
            "Duty Drawback Claims",
            "International Market Access",
            "Recognized Exporter Status"
          ],
          icon: <Award className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Ethical & Social Compliance",
      certifications: [
        {
          title: "SA8000 Certification",
          description: "International standard for social accountability ensuring ethical workplaces.",
          benefits: [
            "Ethical Business Recognition",
            "Improved Worker Conditions",
            "Better Stakeholder Relations",
            "Global Marketplace Acceptance"
          ],
          icon: <Scale className="h-10 w-10 text-brand-600" />
        },
        {
          title: "WRAP Certification",
          description: "Ethical compliance certification for garment and textile export businesses.",
          benefits: [
            "Social Compliance Verification",
            "Access to Ethical Markets",
            "Better Buyer Relationships",
            "Reduced Compliance Risks"
          ],
          icon: <BadgeCheck className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Legal & Compliance",
      certifications: [
        {
          title: "Digital Signature Certificate",
          description: "Essential for e-filing, tenders, and legal document signing.",
          benefits: [
            "Legal Document Authentication",
            "Secure Digital Transactions",
            "E-filing Compliance",
            "Tender Participation"
          ],
          icon: <FileText className="h-10 w-10 text-brand-600" />
        },
        {
          title: "Shop & Establishment Certificate",
          description: "Mandatory certificate for local business operation and compliance.",
          benefits: [
            "Legal Business Operation",
            "Labor Law Compliance",
            "Business Recognition",
            "Local Authority Compliance"
          ],
          icon: <Building className="h-10 w-10 text-brand-600" />
        },
        {
          title: "Trade License",
          description: "License issued by municipal corporations for business operation.",
          benefits: [
            "Legal Business Authorization",
            "Local Compliance",
            "Access to Government Schemes",
            "Business Legitimacy"
          ],
          icon: <FileCheck className="h-10 w-10 text-brand-600" />
        },
        {
          title: "Professional Tax Registration",
          description: "Required for employers and salaried workers in many states.",
          benefits: [
            "Tax Compliance",
            "Avoid Penalties",
            "Legal Employment",
            "Business Legitimacy"
          ],
          icon: <BadgeDollarSign className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Telecom & Electronics",
      certifications: [
        {
          title: "WPC Approval",
          description: "Certification required for wireless communication products in India.",
          benefits: [
            "Legal Wireless Device Operation",
            "Spectrum Compliance",
            "Market Access for Devices",
            "Regulatory Approval"
          ],
          icon: <Smartphone className="h-10 w-10 text-brand-600" />
        },
        {
          title: "BIS CRS Certification",
          description: "Mandatory certification for electronics sold in India.",
          benefits: [
            "Legal Market Access",
            "Product Safety Verification",
            "Consumer Trust",
            "Compliance with Indian Standards"
          ],
          icon: <ShieldCheck className="h-10 w-10 text-brand-600" />
        },
        {
          title: "EPR Authorization",
          description: "Required for e-waste management compliance for electronics manufacturers.",
          benefits: [
            "E-waste Compliance",
            "Environmental Responsibility",
            "Legal Operation",
            "Avoid Heavy Penalties"
          ],
          icon: <BadgeCheck className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Chemical & Manufacturing",
      certifications: [
        {
          title: "REACH Certification",
          description: "Critical for chemical products exported to the European Union.",
          benefits: [
            "EU Market Access",
            "Chemical Safety Compliance",
            "Consumer Protection",
            "Regulatory Approval"
          ],
          icon: <ShieldCheck className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Finance & FinTech",
      certifications: [
        {
          title: "RBI License (NBFC)",
          description: "Required license for non-banking finance companies in India.",
          benefits: [
            "Legal Financial Operations",
            "Financial Service Authorization",
            "Regulatory Compliance",
            "Customer Trust"
          ],
          icon: <Banknote className="h-10 w-10 text-brand-600" />
        },
        {
          title: "PCI DSS Compliance",
          description: "Payment card industry data security standard for handling cardholder data.",
          benefits: [
            "Secure Payment Processing",
            "Reduced Fraud Risk",
            "Customer Data Protection",
            "Payment Industry Compliance"
          ],
          icon: <CreditCard className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Cosmetics & Personal Care",
      certifications: [
        {
          title: "CDSCO Registration",
          description: "Required for cosmetic product approvals in India.",
          benefits: [
            "Legal Cosmetic Sales",
            "Product Safety Verification",
            "Regulatory Compliance",
            "Market Access"
          ],
          icon: <Droplet className="h-10 w-10 text-brand-600" />
        },
        {
          title: "Ayush License",
          description: "License for Ayurvedic, Unani, Siddha, and Homoeopathic products.",
          benefits: [
            "Legal Sale of Alternative Medicine",
            "Quality Assurance",
            "Consumer Trust",
            "Regulatory Compliance"
          ],
          icon: <BadgeCheck className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Media & Entertainment",
      certifications: [
        {
          title: "CBFC Certification",
          description: "Certification by Central Board of Film Certification required for film release.",
          benefits: [
            "Legal Film Distribution",
            "Public Exhibition Rights",
            "Content Rating",
            "Regulatory Compliance"
          ],
          icon: <Film className="h-10 w-10 text-brand-600" />
        },
        {
          title: "IPR Registration",
          description: "Intellectual property protection for creative works including copyright, design, and patent.",
          benefits: [
            "Legal Protection of Work",
            "Exclusive Rights",
            "Commercial Value Protection",
            "Prevent Unauthorized Use"
          ],
          icon: <FileText className="h-10 w-10 text-brand-600" />
        }
      ]
    },
    {
      title: "Logistics & Transport",
      certifications: [
        {
          title: "AEO Certification",
          description: "Authorized Economic Operator certification for faster customs clearance.",
          benefits: [
            "Expedited Customs Processing",
            "Reduced Inspections",
            "International Trade Facilitation",
            "Supply Chain Security"
          ],
          icon: <Truck className="h-10 w-10 text-brand-600" />
        }
      ]
    }
  ];

  const certifications = certificationCategories[0].certifications;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="px-3 py-1 text-brand-600 border-brand-600/30 mb-4">Certificate Marketing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Unlock Growth With Essential Certifications</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enhance your market position with proper certification and strategic marketing that builds trust and opens new opportunities for MSMEs and startups.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center mt-8 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg transition-all">
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
                subheading="WHY CERTIFICATIONS MATTER"
                heading="Certifications Unlock Growth Opportunities"
                description=""
                align="left"
              />
              <p className="text-gray-600 mb-6">
                In today's competitive business landscape, having the right certifications can significantly impact your business success. For MSMEs and startups, these certifications serve as official validation of your quality, processes, and commitment to excellence.
              </p>
              <p className="text-gray-600 mb-6">
                Government-recognized certifications like MSME and Startup India registration open doors to exclusive benefits, funding opportunities, tax exemptions, and preferential treatment in government procurement.
              </p>
              <p className="text-gray-600">
                Our expert team guides you through the entire certification process and helps you leverage these certifications to build trust, win customers, and access the full range of benefits available to certified businesses.
              </p>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform -rotate-3"></div>
                <img
                  src="public/lovable-uploads/7202be4c-4f99-4147-bc69-d18b503ec173.png"
                  alt="Bharat Startup Solution Certification Services"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid - Essential Certifications */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="KEY CERTIFICATIONS"
            heading="Essential Certifications for Business Growth"
            description="We help you obtain and market these valuable certifications to enhance your business credibility and access exclusive benefits."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-8 animate-fadeIn bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 bg-brand-50 p-3 rounded-lg">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                <h4 className="font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-2 mt-auto">
                  {cert.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Certifications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="INDUSTRY-SPECIFIC CERTIFICATIONS"
            heading="Specialized Certifications By Industry"
            description="Discover the right certifications for your specific industry to enhance compliance and market access."
          />
          
          <div className="mt-12">
            {certificationCategories.slice(1).map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 border-l-4 border-brand-600 pl-4">{category.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.certifications.map((cert, certIndex) => (
                    <div 
                      key={certIndex} 
                      className="glass-card rounded-xl p-6 animate-fadeIn bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col"
                      style={{ animationDelay: `${certIndex * 100}ms` }}
                    >
                      <div className="flex items-start mb-4">
                        <div className="mr-3 bg-brand-50 p-2 rounded-lg">
                          {cert.icon}
                        </div>
                        <h4 className="text-lg font-bold">{cert.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
                      <div className="mt-auto">
                        <h5 className="font-semibold text-sm mb-2">Key Benefits:</h5>
                        <ul className="space-y-1">
                          {cert.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="How We Help You Get Certified"
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
                      <h3 className="text-xl font-bold mb-2">Assessment & Eligibility</h3>
                      <p className="text-gray-600">
                        We start by assessing your business details, industry category, and eligibility for various certifications that would benefit your specific business needs.
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
                        We help you prepare all required documentation, financial statements, and business information needed for the certification application process.
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
                      <h3 className="text-xl font-bold mb-2">Application Process</h3>
                      <p className="text-gray-600">
                        We guide you through the complete application process, handling form submissions, digital signatures, and ensuring all information is accurate.
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
                      <h3 className="text-xl font-bold mb-2">Certification & Verification</h3>
                      <p className="text-gray-600">
                        We follow up with relevant authorities, address any queries, and ensure the certification process moves smoothly toward completion.
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
                      <h3 className="text-xl font-bold mb-2">Benefit Activation</h3>
                      <p className="text-gray-600">
                        Once certified, we help you access and activate all the benefits available to you through your certifications, ensuring maximum value for your business.
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="KEY ADVANTAGES"
            heading="Why Invest in Business Certifications"
            description="Discover how the right certifications can transform your business prospects."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Government Recognition</h3>
              <p className="text-gray-600">
                Gain official recognition and priority status for government schemes, subsidies, and procurement opportunities.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Benefits</h3>
              <p className="text-gray-600">
                Access special loan schemes, tax exemptions, subsidies and improved terms for business funding.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Market Credibility</h3>
              <p className="text-gray-600">
                Build trust with customers, partners, and investors through official validation of your business quality and standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FREQUENTLY ASKED QUESTIONS"
            heading="Common Questions About Certifications"
            description="Get answers to your questions about our certification services."
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="glass-card rounded-xl p-6 animate-fadeIn">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">How long does it take to get MSME certification?</h4>
                  <p className="text-gray-600">
                    The MSME certification process typically takes 3-7 working days once all documentation is complete and submitted correctly. Our assistance can help ensure a smooth and efficient process.
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
                    The most valuable certifications depend on your industry, business stage, and goals. For most startups and MSMEs, the MSME and Startup India registrations provide the most immediate benefits. During our initial consultation, we'll assess your specific situation and recommend the certifications that will provide the greatest return on investment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">What documents are required for certification?</h4>
                  <p className="text-gray-600">
                    Documentation requirements vary by certification type. Generally, you'll need business registration documents, financial statements, bank details, PAN and Aadhar details, and sometimes category-specific documentation. Our team will provide you with a comprehensive checklist based on your specific certification needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">How do I access benefits after certification?</h4>
                  <p className="text-gray-600">
                    Once certified, you can access benefits through various government portals, financial institutions, and relevant departments. Our team provides comprehensive guidance on activating and maximizing each benefit available to you, including step-by-step assistance with applications for schemes, subsidies, and exemptions.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Business Growth?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with our certification services today and unlock exclusive benefits for your business.
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
