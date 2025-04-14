
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface Benefit {
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const benefits: Benefit[] = [
    {
      title: "Extensive Investor Network",
      description: "Access to a vast network of angel investors, venture capitalists, and financial institutions."
    },
    {
      title: "Customized Funding Solutions",
      description: "Tailored funding strategies based on your specific business needs and growth plans."
    },
    {
      title: "Comprehensive Support",
      description: "End-to-end assistance from initial consultation to final deal closure."
    },
    {
      title: "Expert Guidance",
      description: "Advice from financial experts with years of experience in startup and MSME funding."
    },
    {
      title: "Higher Success Rate",
      description: "Improved chances of securing funding with our proven methodologies and preparation."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fadeInLeft">
            <SectionHeading
              subheading="BENEFITS"
              heading="Why Choose Our Funding Consultation"
              description=""
              align="left"
            />
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Business meeting"
                className="relative z-10 rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
