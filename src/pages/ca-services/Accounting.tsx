
import { FileText } from 'lucide-react';
import CAServiceTemplate from '@/components/ca-services/CAServiceTemplate';

export default function AccountingPage() {
  return (
    <CAServiceTemplate
      title="Accounting"
      subtitle="Comprehensive accounting solutions for your business"
      icon={<FileText className="h-8 w-8 text-india-saffron" />}
      color="bg-gradient-to-r from-yellow-50 to-yellow-100"
      description="Our accounting services provide comprehensive financial management solutions for businesses of all sizes. From bookkeeping and financial statement preparation to account reconciliation and financial analysis, we ensure your financial records are accurate, up-to-date, and compliant with all regulations."
      benefits={[
        "Accurate and timely financial reporting",
        "Improved financial decision-making with clear insights",
        "Compliance with accounting standards and regulations",
        "Reduced risk of financial errors and fraud",
        "Time savings by outsourcing accounting functions",
        "Expert financial advice for business growth"
      ]}
      process={[
        {
          title: "Assessment",
          description: "We evaluate your current accounting systems and processes to identify areas for improvement."
        },
        {
          title: "Setup & Implementation",
          description: "We establish or optimize your accounting systems to meet your business needs."
        },
        {
          title: "Regular Bookkeeping",
          description: "Our team maintains your financial records with regular transaction recording and categorization."
        },
        {
          title: "Reconciliation",
          description: "We regularly reconcile accounts to ensure accuracy and identify any discrepancies."
        },
        {
          title: "Financial Reporting",
          description: "We prepare detailed financial statements and reports to give you clear insights into your business."
        },
        {
          title: "Financial Analysis",
          description: "We provide analysis and recommendations based on your financial data to support business decisions."
        }
      ]}
    />
  );
}
