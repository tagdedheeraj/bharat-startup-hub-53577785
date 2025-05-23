
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionImage from '@/components/shared/SectionImage';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-50 to-blue-50 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 animate-fadeInLeft">
            <span className="bg-white text-brand-800 text-sm font-medium px-4 py-1.5 rounded-full mb-5 inline-block shadow-sm">
              #1 Startup Solution Provider in India
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your One-Stop Solution for <span className="text-brand-600">MSMEs & Startups</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
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
          <div className="w-full md:w-1/2 mt-8 md:mt-0 animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-2xl transform rotate-3"></div>
              <SectionImage
                pageName="home"
                sectionName="hero"
                fallbackSrc="/lovable-uploads/1f895d7b-8342-4a9e-8817-3c177ac1b3e4.png"
                alt="Startup team at Bharat Startup Solution"
                className="relative z-10 rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
