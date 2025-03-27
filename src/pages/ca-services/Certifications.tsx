
import { Certificate } from 'lucide-react';
import CAServiceTemplate from '@/components/ca-services/CAServiceTemplate';

export default function CertificationsPage() {
  return (
    <CAServiceTemplate
      title="Certifications"
      subtitle="Professional certification services for businesses"
      icon={<Certificate className="h-8 w-8 text-india-saffron" />}
      color="bg-gradient-to-r from-indigo-50 to-indigo-100"
      description="Our certification services ensure that your business meets all the necessary industry standards and regulatory requirements. We handle the entire certification process from application to approval, making it hassle-free for you."
      benefits={[
        "Increased credibility and trust with clients and partners",
        "Access to new markets and business opportunities",
        "Compliance with industry regulations and standards",
        "Competitive advantage in your industry",
        "Streamlined processes and improved efficiency",
        "Risk management and liability protection"
      ]}
      process={[
        {
          title: "Initial Assessment",
          description: "We conduct a thorough assessment of your business to determine the certifications required and your readiness."
        },
        {
          title: "Documentation",
          description: "Our team prepares all the necessary documentation and ensures compliance with certification requirements."
        },
        {
          title: "Application Submission",
          description: "We submit your application and handle all communications with the certification authority."
        },
        {
          title: "Pre-audit Preparation",
          description: "We prepare your business for any required audits or inspections by the certification authority."
        },
        {
          title: "Audit Support",
          description: "Our experts provide support during the audit process to ensure smooth certification."
        },
        {
          title: "Certification Maintenance",
          description: "We help you maintain your certification with regular reviews and updates as required."
        }
      ]}
    />
  );
}
