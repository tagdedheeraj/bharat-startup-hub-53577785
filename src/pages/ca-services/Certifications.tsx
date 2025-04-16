
import { Shield } from 'lucide-react';
import CAServiceTemplate from '@/components/ca-services/CAServiceTemplate';

export default function CertificationsPage() {
  return (
    <CAServiceTemplate
      title="Certifications"
      subtitle="Professional MSME and business certification services"
      icon={<Shield className="h-8 w-8 text-india-saffron" />}
      color="bg-gradient-to-r from-indigo-50 to-indigo-100"
      description="Our certification services provide comprehensive solutions for businesses seeking various industry and government certifications. From MSME and ISO to specialized industry certifications, our team of experts guides you through the entire process, ensuring compliance with all requirements and timely approval."
      benefits={[
        "Increased market credibility and trust",
        "Access to government schemes and benefits",
        "Preference in government tenders and contracts", 
        "Tax benefits and incentives",
        "Access to specialized funding options",
        "Enhanced business opportunities and partnerships"
      ]}
      process={[
        {
          title: "Initial Consultation",
          description: "We assess your business needs and recommend the most suitable certifications for your industry and goals."
        },
        {
          title: "Documentation Preparation",
          description: "Our team helps you prepare all necessary documents and records required for certification."
        },
        {
          title: "Application Submission",
          description: "We complete and submit all application forms and supporting documents to the relevant authorities."
        },
        {
          title: "Compliance Verification",
          description: "Our experts ensure your business meets all standards and requirements for the certifications."
        },
        {
          title: "Inspection Support",
          description: "We prepare you for any site inspections or audits required as part of the certification process."
        },
        {
          title: "Certification Acquisition",
          description: "Our team follows up with authorities to ensure prompt issuance of your certification documents."
        }
      ]}
    />
  );
}
