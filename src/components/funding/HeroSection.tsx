
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Funding Consultation</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Secure the Right Funding for Your Business</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Access tailored funding solutions ranging from ₹15 Lacs to ₹5 CR to fuel your business growth and success.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center mt-8">
            Get Started
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
