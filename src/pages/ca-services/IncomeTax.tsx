
import { IndianRupee } from 'lucide-react';
import CAServiceTemplate from '@/components/ca-services/CAServiceTemplate';

export default function IncomeTaxPage() {
  return (
    <CAServiceTemplate
      title="Income Tax"
      subtitle="Professional tax planning and filing services"
      icon={<IndianRupee className="h-8 w-8 text-india-saffron" />}
      color="bg-gradient-to-r from-green-50 to-green-100"
      description="Our income tax services provide comprehensive solutions for individuals and businesses. From tax planning and preparation to filing and compliance, our expert team ensures you meet all tax obligations while maximizing eligible deductions and credits."
      benefits={[
        "Minimize tax liability through strategic planning",
        "Ensure compliance with latest tax laws and regulations",
        "Avoid penalties and interest with timely filings",
        "Professional handling of complex tax situations",
        "Expert representation in case of tax audits or notices",
        "Time and stress savings with expert tax management"
      ]}
      process={[
        {
          title: "Initial Consultation",
          description: "We assess your current financial situation and tax requirements to create a tailored approach."
        },
        {
          title: "Tax Planning",
          description: "We develop strategies to minimize your tax liability while ensuring full compliance with tax laws."
        },
        {
          title: "Document Collection",
          description: "We gather all necessary financial documents and information required for accurate tax preparation."
        },
        {
          title: "Tax Preparation",
          description: "Our experts prepare your tax returns with attention to detail and maximum benefit identification."
        },
        {
          title: "Review & Filing",
          description: "We review completed returns with you and file them with the tax authorities on your behalf."
        },
        {
          title: "Ongoing Support",
          description: "We provide year-round support for any tax-related questions or issues that may arise."
        }
      ]}
    />
  );
}
