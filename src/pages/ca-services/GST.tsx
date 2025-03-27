
import { Receipt } from 'lucide-react';
import CAServiceTemplate from '@/components/ca-services/CAServiceTemplate';

export default function GSTPage() {
  return (
    <CAServiceTemplate
      title="GST"
      subtitle="Complete GST compliance solutions"
      icon={<Receipt className="h-8 w-8 text-india-saffron" />}
      color="bg-gradient-to-r from-orange-50 to-orange-100"
      description="Our GST services provide comprehensive solutions for businesses to navigate the complex Goods and Services Tax system. From registration and filing to refunds and advisory, our expert team ensures full compliance with GST regulations while optimizing your tax position."
      benefits={[
        "Full compliance with GST laws and regulations",
        "Timely filing of GST returns to avoid penalties",
        "Efficient input tax credit management",
        "Expert handling of GST notices and audits",
        "Strategic advice for GST optimization",
        "Seamless e-way bill management"
      ]}
      process={[
        {
          title: "GST Registration",
          description: "We handle the complete GST registration process for your business, ensuring proper categorization."
        },
        {
          title: "Invoice Management",
          description: "We help you set up compliant GST invoicing systems and processes for your business."
        },
        {
          title: "Monthly/Quarterly Filing",
          description: "Our team prepares and files your regular GST returns on time, ensuring full compliance."
        },
        {
          title: "Input Tax Credit",
          description: "We optimize your input tax credit claims to maximize legitimate tax benefits."
        },
        {
          title: "GST Reconciliation",
          description: "We reconcile your GST data with financial records to ensure accuracy and identify discrepancies."
        },
        {
          title: "Compliance Management",
          description: "We keep you updated on GST law changes and ensure your ongoing compliance with all requirements."
        }
      ]}
    />
  );
}
