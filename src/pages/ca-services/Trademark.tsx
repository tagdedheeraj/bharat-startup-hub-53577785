
import { Trademark } from 'lucide-react';
import CAServiceTemplate from '@/components/ca-services/CAServiceTemplate';

export default function TrademarkPage() {
  return (
    <CAServiceTemplate
      title="Trademark"
      subtitle="Protect your brand identity"
      icon={<Trademark className="h-8 w-8 text-india-saffron" />}
      color="bg-gradient-to-r from-blue-50 to-blue-100"
      description="Our trademark services help you protect your brand identity through proper registration and management. We guide you through the entire process, from trademark search to registration and maintenance, ensuring your intellectual property is fully protected."
      benefits={[
        "Legal protection for your brand name, logo, and identity",
        "Exclusive rights to use your trademark nationwide",
        "Ability to take legal action against infringers",
        "Increased brand value and customer trust",
        "Protection against counterfeit products and services",
        "Asset creation for business valuation and investment"
      ]}
      process={[
        {
          title: "Trademark Search",
          description: "We conduct a comprehensive search to ensure your proposed trademark is available for registration."
        },
        {
          title: "Application Preparation",
          description: "Our experts prepare a thorough application with the appropriate classes and descriptions."
        },
        {
          title: "Filing",
          description: "We file your trademark application with the appropriate authorities and handle all formalities."
        },
        {
          title: "Examination Response",
          description: "We respond to any examiner objections or requirements to move your application forward."
        },
        {
          title: "Registration",
          description: "Once approved, we complete the registration process and secure your trademark certificate."
        },
        {
          title: "Maintenance & Renewal",
          description: "We help maintain your trademark rights with timely renewals and required filings."
        }
      ]}
    />
  );
}
