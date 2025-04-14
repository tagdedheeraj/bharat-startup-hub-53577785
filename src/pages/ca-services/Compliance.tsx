
import { ShieldCheck } from 'lucide-react';
import CAServiceTemplate from '@/components/ca-services/CAServiceTemplate';

export default function CompliancePage() {
  return (
    <CAServiceTemplate
      title="Compliance"
      subtitle="Comprehensive regulatory compliance solutions"
      icon={<ShieldCheck className="h-8 w-8 text-india-saffron" />}
      color="bg-gradient-to-r from-red-50 to-red-100"
      description="Our compliance services ensure your business adheres to all applicable laws, regulations, and standards. We provide comprehensive compliance management solutions that help you navigate complex regulatory environments, mitigate risks, and maintain good standing with regulatory authorities."
      benefits={[
        "Reduced risk of regulatory penalties and fines",
        "Protection of company reputation and brand image",
        "Enhanced stakeholder and investor confidence",
        "Early identification and resolution of compliance issues",
        "Streamlined regulatory reporting and documentation",
        "Expert guidance on evolving regulatory requirements"
      ]}
      process={[
        {
          title: "Compliance Assessment",
          description: "We conduct a thorough assessment of your current compliance status and identify gaps or risks."
        },
        {
          title: "Policy Development",
          description: "We develop or update compliance policies and procedures tailored to your business and industry."
        },
        {
          title: "Implementation",
          description: "Our team helps implement compliance processes and systems throughout your organization."
        },
        {
          title: "Training & Awareness",
          description: "We provide training to ensure all team members understand compliance requirements and procedures."
        },
        {
          title: "Monitoring & Reporting",
          description: "We establish monitoring mechanisms and prepare regular compliance reports for management."
        },
        {
          title: "Continuous Improvement",
          description: "We regularly review and update your compliance program to address new regulations and business changes."
        }
      ]}
    />
  );
}
