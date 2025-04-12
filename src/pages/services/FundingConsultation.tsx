
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FundingCard from '@/components/FundingCard';

const FundingConsultationPage = () => {
  const fundingOptions = [
    {
      amount: "1 CR",
      title: "NIDHI SSP Fund",
      description: "Supports D2C, Healthcare, AgriTech, Manufacturing, Gaming, and GenAI startups with substantial funding.",
      to: "/contact"
    },
    {
      amount: "50 Lac",
      title: "C-CAMP Agriculture Grand Challenge",
      description: "For Indian startups (≤10 years, 51% Indian owned) and international startups with India collaboration offering deep tech solutions.",
      to: "/contact"
    },
    {
      amount: "15 Lac",
      title: "MSME Business Incubation Center",
      description: "For Indian citizens (18-65) with innovative ideas, UDYAM registered, DPIIT certified startups (Pvt Ltd or LLP).",
      to: "/contact"
    },
    {
      amount: "1 CR",
      title: "USHUS Powering Marine Startups",
      description: "For DPIIT recognized startups in fishing, cargo, blockchain, logistics, safety, and port sectors.",
      to: "/contact"
    },
    {
      amount: "25 Lac",
      title: "PRAGATI Micro Accelerator Program",
      description: "For agriculture & sustainability startups with solutions in climate-resilient farming, data-driven agri tools, and AI.",
      to: "/contact"
    }
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough assessment of your business model, financial status, and funding needs."
    },
    {
      title: "Funding Strategy Development",
      description: "Based on your requirements, we develop a customized funding strategy identifying the most suitable options."
    },
    {
      title: "Documentation Preparation",
      description: "We help prepare all necessary documents including business plans, financial projections, and pitch decks."
    },
    {
      title: "Investor Matching",
      description: "We connect you with potential investors from our extensive network who align with your business vision."
    },
    {
      title: "Pitch Support",
      description: "Our team provides guidance and support during investor presentations and negotiations."
    },
    {
      title: "Deal Closure",
      description: "We assist in finalizing the deal terms and completing all legal formalities to secure your funding."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Funding Consultation</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Secure the Right Funding for Your Business</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Access tailored funding solutions ranging from ₹15 Lacs to ₹1 CR to fuel your business growth and success.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center mt-8">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FUNDING OPTIONS"
            heading="Available Government & Private Funding Programs"
            description="Apply for various funding schemes tailored for different business sectors and stages."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundingOptions.map((option, index) => (
              <FundingCard
                key={index}
                amount={option.amount}
                title={option.title}
                description={option.description}
                to={option.to}
                delay={index * 100}
                index={index}
                variant="gradient"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="How We Help You Secure Funding"
            description="Our structured approach ensures you get the right funding with minimal hassle."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {process.map((step, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex mb-4">
                    <div className="bg-brand-100 text-brand-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-12">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fadeInLeft">
              <SectionHeading
                subheading="BENEFITS"
                heading="Why Choose Our Funding Consultation"
                description=""
                align="left"
              />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold">Extensive Investor Network</h4>
                    <p className="text-gray-600">Access to a vast network of angel investors, venture capitalists, and financial institutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold">Customized Funding Solutions</h4>
                    <p className="text-gray-600">Tailored funding strategies based on your specific business needs and growth plans.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold">Comprehensive Support</h4>
                    <p className="text-gray-600">End-to-end assistance from initial consultation to final deal closure.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold">Expert Guidance</h4>
                    <p className="text-gray-600">Advice from financial experts with years of experience in startup and MSME funding.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold">Higher Success Rate</h4>
                    <p className="text-gray-600">Improved chances of securing funding with our proven methodologies and preparation.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Business meeting"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FREQUENTLY ASKED QUESTIONS"
            heading="Get Answers to Your Funding Questions"
            description="Here are some common questions about our funding consultation services."
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="glass-card rounded-xl p-6 animate-fadeIn">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">How long does the funding process typically take?</h4>
                  <p className="text-gray-600">
                    The funding process generally takes 2-3 months from initial consultation to fund disbursement. However, this can vary depending on the complexity of your business, funding amount, and investor requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">What documents will I need to prepare?</h4>
                  <p className="text-gray-600">
                    You'll need to prepare a business plan, financial statements, financial projections, market analysis, team information, and details about how you plan to use the funds. We'll guide you through this process and help you prepare these documents.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">What types of funding do you help secure?</h4>
                  <p className="text-gray-600">
                    We help businesses secure various types of funding including equity investment, debt financing, government grants, and hybrid financing options. The type of funding recommended will depend on your business model, stage, and specific requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">What is your success rate in securing funding?</h4>
                  <p className="text-gray-600">
                    We have a success rate of over 75% in securing funding for our clients. However, it's important to note that success depends on various factors including business viability, market conditions, and the quality of your business plan.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Funding for Your Business?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards financial growth. Schedule a consultation with our funding experts today.
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

export default FundingConsultationPage;
