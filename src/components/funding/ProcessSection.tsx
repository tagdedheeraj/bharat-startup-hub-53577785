
import SectionHeading from '@/components/SectionHeading';

interface ProcessStep {
  title: string;
  description: string;
}

const ProcessSection = () => {
  const process: ProcessStep[] = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough assessment of your business model, financial status, and funding needs."
    },
    {
      title: "Funding Strategy Development",
      description: "Based on your requirements, we develop a customized funding strategy identifying the most suitable options."
    },
    {
      title: "Documentation Preparation",
      description: "We help prepare all necessary documents including business plans, financial projections, and pitch decks."
    },
    {
      title: "Investor Matching",
      description: "We connect you with potential investors from our extensive network who align with your business vision."
    },
    {
      title: "Pitch Support",
      description: "Our team provides guidance and support during investor presentations and negotiations."
    },
    {
      title: "Deal Closure",
      description: "We assist in finalizing the deal terms and completing all legal formalities to secure your funding."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="OUR PROCESS"
          heading="How We Help You Secure Funding"
          description="Our structured approach ensures you get the right funding with minimal hassle."
        />
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  <div className="bg-brand-100 text-brand-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600 pl-12">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
