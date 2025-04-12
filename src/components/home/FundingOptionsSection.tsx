
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FundingCard from '@/components/FundingCard';

const FundingOptionsSection = () => {
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
  );
};

export default FundingOptionsSection;
