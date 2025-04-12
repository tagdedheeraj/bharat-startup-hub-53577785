
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { useIsMobile } from '@/hooks/use-mobile';
import FundingServiceGrid from './FundingServiceGrid';
import FundingServiceCarousel from './FundingServiceCarousel';

export default function PopularFundingServices() {
  const isMobile = useIsMobile();
  
  const services = [
    { amount: "1 CR", title: "Seed Support Scheme" },
    { amount: "50 Lac", title: "Grant for Textile" },
    { amount: "5 CR", title: "MSME Loans" },
    { amount: "1 CR", title: "NBFC Loans" },
    { amount: "2 CR", title: "NAIFF Loans" },
    { amount: "3 CR", title: "Funds for SC ST & OBC Entrepreneurs" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="MOST POPULAR SERVICES"
          heading="Funding Options For Your Business"
          description="Explore our most sought-after funding services designed to meet the diverse needs of businesses across various sectors."
        />
        
        <div className="hidden lg:block mb-12">
          <FundingServiceGrid services={services} />
        </div>
        
        <div className="lg:hidden mb-12">
          <FundingServiceCarousel services={services} />
        </div>
        
        <div className="text-center animate-fadeIn" style={{ animationDelay: "800ms" }}>
          <Link 
            to="/services/funding-consultation" 
            className="btn-primary inline-flex items-center hover:scale-105 transition-transform duration-300"
          >
            View All Funding Options
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
