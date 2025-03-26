import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Briefcase, Shield, Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FundingCard from '@/components/FundingCard';
import YouTubeShortsCarousel from '@/components/YouTubeShortsCarousel';
import StatisticsSlider from '@/components/StatisticsSlider';
import PopularFundingServices from '@/components/PopularFundingServices';
import ExpertiseSection from '@/components/ExpertiseSection';

const HomePage = () => {
  const fundingOptions = [
    {
      amount: "1 CR",
      title: "Startup Funding Package",
      description: "Ideal for new ventures looking to get off the ground with substantial initial capital.",
      to: "/services/funding-consultation"
    },
    {
      amount: "50 Lac",
      title: "Small Business Growth",
      description: "Perfect for small businesses looking to expand operations and reach new markets.",
      to: "/services/funding-consultation"
    },
    {
      amount: "5 CR",
      title: "Major Expansion Funding",
      description: "For established businesses ready to scale significantly and enter new territories.",
      to: "/services/funding-consultation"
    },
    {
      amount: "2 CR",
      title: "Technology Upgrade",
      description: "Focused on businesses needing capital for technological modernization and digital transformation.",
      to: "/services/funding-consultation"
    },
    {
      amount: "3 CR",
      title: "Manufacturing & Production",
      description: "Specialized funding for manufacturing units looking to increase production capacity.",
      to: "/services/funding-consultation"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 animate-fadeInLeft">
              <span className="bg-brand-100 text-brand-800 text-sm font-medium px-4 py-1.5 rounded-full mb-5 inline-block">
                #1 Startup Solution Provider in India
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your One-Stop Solution for <span className="text-brand-600">MSMEs & Startups</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We help businesses at every stage of growth with funding, legal compliance, marketing, and strategic planning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started Today
                </Link>
                <Link to="/services" className="btn-secondary flex items-center">
                  Explore Services
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-2xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Startup team meeting"
                  className="relative z-10 rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="py-16">
        <YouTubeShortsCarousel />
      </section>

      {/* Statistics Slider Section */}
      <StatisticsSlider />

      {/* Popular Funding Services Section */}
      <PopularFundingServices />
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="WHY CHOOSE US"
            heading="Comprehensive Solutions for Your Business Needs"
            description="We provide end-to-end services to help your startup or MSME succeed in today's competitive market."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Funding Support</h3>
              <p className="text-gray-600 mb-4">
                Access to various funding options from ₹50 Lacs to ₹5 CR depending on your business requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>Customized funding solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>Investor connections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>Pitch deck preparation</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
                <Briefcase className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legal Consultation</h3>
              <p className="text-gray-600 mb-4">
                Expert legal guidance to navigate complex regulatory frameworks and ensure compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>Business registration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>Contract drafting & review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>Intellectual property protection</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
                <Shield className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance Services</h3>
              <p className="text-gray-600 mb-4">
                Stay compliant with all regulatory requirements and focus on growing your business.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>GST registration & filing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>MSME registration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                  <span>Annual compliance management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Moved below WHY CHOOSE US */}
      <ExpertiseSection />

      {/* Funding Options Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FUNDING OPTIONS"
            heading="Tailored Funding Solutions for Every Business Stage"
            description="We offer various funding packages designed to meet the unique needs of different businesses."
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
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/success-stories" className="btn-primary inline-flex items-center">
              View All Success Stories
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-brand-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-brand-100">
              We've helped numerous businesses achieve their growth objectives through our comprehensive services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-brand-600 rounded-lg bg-brand-800/50 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-brand-200">Startups Funded</div>
            </div>
            
            <div className="text-center p-6 border border-brand-600 rounded-lg bg-brand-800/50 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold mb-2">₹1000Cr+</div>
              <div className="text-brand-200">Funding Facilitated</div>
            </div>
            
            <div className="text-center p-6 border border-brand-600 rounded-lg bg-brand-800/50 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="text-4xl font-bold mb-2">1200+</div>
              <div className="text-brand-200">Legal Consultations</div>
            </div>
            
            <div className="text-center p-6 border border-brand-600 rounded-lg bg-brand-800/50 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "400ms" }}>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-brand-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="SUCCESS STORIES"
            heading="What Our Clients Say About Us"
            description="Discover how we've helped businesses like yours achieve their goals."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-gray-500 font-semibold text-lg">RK</span>
                </div>
                <div>
                  <h4 className="font-bold">Rahul Kumar</h4>
                  <p className="text-sm text-gray-500">FinTech Startup</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                "Bharat Startup Solution helped us secure ₹2 CR funding for our fintech platform. Their guidance throughout the process was invaluable."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-gray-500 font-semibold text-lg">AP</span>
                </div>
                <div>
                  <h4 className="font-bold">Ananya Patel</h4>
                  <p className="text-sm text-gray-500">E-commerce MSME</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                "The legal consultation services provided by Bharat Startup Solution helped us navigate complex regulations and set up our business properly."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-gray-500 font-semibold text-lg">VT</span>
                </div>
                <div>
                  <h4 className="font-bold">Vikram Thakur</h4>
                  <p className="text-sm text-gray-500">Manufacturing Unit</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                "Their compliance services saved us countless hours and ensured we met all regulatory requirements. Highly recommend their expertise!"
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/success-stories" className="btn-primary inline-flex items-center">
              View All Success Stories
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts today and discover how we can help your startup or MSME grow and succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
                Schedule a Consultation
              </Link>
              <Link to="/services" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
