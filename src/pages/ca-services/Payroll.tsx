
import { FileSpreadsheet } from 'lucide-react';
import CAServiceTemplate from '@/components/ca-services/CAServiceTemplate';

export default function PayrollPage() {
  return (
    <CAServiceTemplate
      title="Payroll"
      subtitle="End-to-end payroll management services"
      icon={<FileSpreadsheet className="h-8 w-8 text-india-saffron" />}
      color="bg-gradient-to-r from-purple-50 to-purple-100"
      description="Our payroll services provide comprehensive solutions for businesses of all sizes. From calculating salaries and taxes to generating pay slips and statutory compliance, we handle all aspects of payroll management, allowing you to focus on your core business operations."
      benefits={[
        "Error-free salary calculations and disbursements",
        "Compliance with all statutory requirements",
        "Timely tax deductions and deposits",
        "Accurate employee pay slips and tax forms",
        "Secure handling of sensitive payroll data",
        "Time and resource savings with outsourced payroll"
      ]}
      process={[
        {
          title: "Payroll Setup",
          description: "We set up your payroll system with employee details, salary structures, and compliance requirements."
        },
        {
          title: "Monthly Processing",
          description: "Our team processes monthly payroll calculations including salaries, allowances, deductions, and taxes."
        },
        {
          title: "Statutory Compliance",
          description: "We handle all statutory requirements including PF, ESI, PT, and TDS calculations and filings."
        },
        {
          title: "Pay Slip Generation",
          description: "We generate and distribute detailed pay slips to employees with all necessary information."
        },
        {
          title: "Reporting",
          description: "We provide comprehensive payroll reports for management review and decision-making."
        },
        {
          title: "Year-End Activities",
          description: "We manage year-end processes including Form 16 generation and annual returns filing."
        }
      ]}
    />
  );
}
