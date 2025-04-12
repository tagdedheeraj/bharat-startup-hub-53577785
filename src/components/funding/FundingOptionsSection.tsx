
import FundingCard from '@/components/FundingCard';
import SectionHeading from '@/components/SectionHeading';

interface FundingOption {
  amount: string;
  title: string;
  description: string;
  to: string;
}

const FundingOptionsSection = () => {
  const fundingOptions: FundingOption[] = [
    {
      amount: "1 CR",
      title: "NIDHI SSP FUND",
      description: "For D2C, Healthcare, Agritech, Manufacturing, Gaming, and GenAI sectors.",
      to: "/contact"
    },
    {
      amount: "50 Lac",
      title: "C-CAMP Agriculture Grand Challenge",
      description: "For Indian startups (10 years old) that are 51% Indian owned or international startups with India collaboration.",
      to: "/contact"
    },
    {
      amount: "15 Lac",
      title: "MSME Business Incubation Center",
      description: "For Indian citizens aged 18-65 with innovative ideas, UDYAM registered and DPIIT certified startups.",
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
      description: "For agriculture & sustainability solutions in climate-resilient farming, data-driven agri tools, and AI.",
      to: "/contact"
    },
    {
      amount: "50 Lac",
      title: "Micro Business Growth",
      description: "Ideal for small businesses looking to expand operations or launch new products.",
      to: "/contact"
    },
    {
      amount: "2 CR",
      title: "Medium Growth Capital",
      description: "For established businesses looking to scale operations and increase market share.",
      to: "/contact"
    },
    {
      amount: "3 CR",
      title: "Expansion Funding",
      description: "Specialized funding for businesses expanding into new markets or territories.",
      to: "/contact"
    },
    {
      amount: "5 CR",
      title: "Major Growth Investment",
      description: "Comprehensive funding for established businesses with proven models seeking significant expansion.",
      to: "/contact"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="FUNDING OPTIONS"
          heading="Choose the Right Funding Package"
          description="We offer various funding solutions tailored to different business stages and requirements."
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
      </div>
    </section>
  );
};

export default FundingOptionsSection;
