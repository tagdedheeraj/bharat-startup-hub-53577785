
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FundingCard from '@/components/FundingCard';

const FundingOptionsSection = () => {
  const fundingOptions = [
    {
      amount: "1 CR",
      title: "NIDHI SSP FUND",
      description: "For D2C, Healthcare, Agritech, Manufacturing, Gaming, and GenAI sectors.",
      to: "/services/funding-consultation"
    },
    {
      amount: "50 Lac",
      title: "C-CAMP Agriculture Grand Challenge",
      description: "For Indian startups (10 years old) that are 51% Indian owned or international startups with India collaboration.",
      to: "/services/funding-consultation"
    },
    {
      amount: "15 Lac",
      title: "MSME Business Incubation Center",
      description: "For Indian citizens aged 18-65 with innovative ideas, UDYAM registered and DPIIT certified startups.",
      to: "/services/funding-consultation"
    },
    {
      amount: "1 CR",
      title: "USHUS Powering Marine Startups",
      description: "For DPIIT recognized startups in fishing, cargo, blockchain, logistics, safety, and port sectors.",
      to: "/services/funding-consultation"
    },
    {
      amount: "25 Lac",
      title: "PRAGATI Micro Accelerator Program",
      description: "For agriculture & sustainability solutions in climate-resilient farming, data-driven agri tools, and AI.",
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
              index={index}
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
