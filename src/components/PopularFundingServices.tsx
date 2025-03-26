
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';

interface FundingServiceProps {
  amount: string;
  title: string;
  delay?: number;
}

const FundingService = ({ amount, title, delay = 0 }: FundingServiceProps) => {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fadeIn h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-brand-50 text-brand-700 font-semibold rounded-full px-4 py-1.5 inline-block mb-4 text-sm">
        Up to ₹{amount}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <Link to="/services/funding-consultation" className="mt-4 group inline-flex items-center text-brand-700 font-medium">
        Learn More
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default function PopularFundingServices() {
  const services = [
    { amount: "1 CR", title: "Seed Support Scheme" },
    { amount: "50 Lac", title: "Grant for Textile" },
    { amount: "5 CR", title: "MSME Loans" },
    { amount: "1 CR", title: "NBFC Loans" },
    { amount: "2 CR", title: "NAIFF Loans" },
    { amount: "3 CR", title: "Funds for SC ST & OBC Entrepreneurs" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="MOST POPULAR SERVICES"
          heading="Funding Options For Your Business"
          description="Explore our most sought-after funding services designed to meet the diverse needs of businesses across various sectors."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {services.slice(0, 3).map((service, index) => (
              <FundingService
                key={index}
                amount={service.amount}
                title={service.title}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="space-y-6">
            {services.slice(3, 6).map((service, index) => (
              <FundingService
                key={index + 3}
                amount={service.amount}
                title={service.title}
                delay={(index + 3) * 100}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services/funding-consultation" className="btn-primary inline-flex items-center">
            View All Funding Options
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
