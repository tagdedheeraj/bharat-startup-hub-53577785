
import { ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

interface FundingServiceProps {
  amount: string;
  title: string;
  delay?: number;
}

const FundingService = ({ amount, title, delay = 0 }: FundingServiceProps) => {
  return (
    <Card className="h-full shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn overflow-hidden border-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-brand-50 rounded-full p-2 mt-1">
            <DollarSign className="h-5 w-5 text-brand-700" />
          </div>
          <div>
            <div className="text-brand-700 font-semibold rounded-md px-3 py-1 bg-brand-50 inline-block mb-3 text-sm">
              Up to ₹{amount}
            </div>
            <h3 className="text-lg font-bold mb-3">{title}</h3>
            <Link 
              to="/services/funding-consultation" 
              className="group inline-flex items-center text-brand-700 font-medium hover:underline"
            >
              Learn More
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
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
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="MOST POPULAR SERVICES"
          heading="Funding Options For Your Business"
          description="Explore our most sought-after funding services designed to meet the diverse needs of businesses across various sectors."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FundingService
              key={index}
              amount={service.amount}
              title={service.title}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services/funding-consultation" 
            className="btn-primary inline-flex items-center"
          >
            View All Funding Options
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
