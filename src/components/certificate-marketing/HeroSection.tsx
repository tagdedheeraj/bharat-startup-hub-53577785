
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
