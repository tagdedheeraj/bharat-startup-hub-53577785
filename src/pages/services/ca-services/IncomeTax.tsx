
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, CheckCircle, FileText } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const IncomeTaxPage = () => {
  const services = [
    {
      title: "Tax Planning",
      description: "Strategic planning to minimize tax liabilities while ensuring compliance.",
      features: [
        "Investment planning for tax benefits",
        "Business structure optimization",
        "Deduction maximization",
        "Year-round tax planning support"
      ]
    },
    {
      title: "Tax Return Filing",
      description: "Accurate and timely filing of income tax returns for individuals and businesses.",
      features: [
        "Income tax return preparation",
        "Electronic filing",
        "Documentation review",
        "Compliance verification"
      ]
    },
    {
      title: "Tax Assessment Support",
      description: "Expert representation during tax assessments and scrutiny proceedings.",
      features: [
        "Assessment notice handling",
        "Documentation preparation",
        "Representation before tax authorities",
        "Appeal filing and support"
      ]
    },
    {
      title: "TDS Compliance",
      description: "Complete Tax Deducted at Source (TDS) compliance services.",
      features: [
        "TDS return preparation and filing",
        "TDS certificate issuance",
        "TDS reconciliation",
        "Lower TDS certificate application"
      ]
    }
  ];

  return (
    <div className="py-10">
      <SectionHeading 
        heading="Income Tax Services" 
        subheading="Comprehensive income tax services for individuals and businesses"
        align="center"
      />
      
      <div className="mt-8 bg-brand-50 rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Expert Income Tax Solutions</h3>
            <p className="text-gray-700 mb-4">
              Navigating the complex world of income tax regulations can be challenging. Our team of experienced tax professionals provides end-to-end services to ensure compliance while optimizing tax benefits.
            </p>
            <p className="text-gray-700">
              Whether you're an individual, a small business, or a large corporation, our tailored tax services are designed to meet your specific needs and help you achieve financial peace of mind.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="h-32 w-32 rounded-full bg-brand-100 flex items-center justify-center">
              <Calculator className="h-16 w-16 text-brand-600" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="border-2 hover:border-brand-300 transition-all duration-300">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact" className="flex items-center justify-center">
                  Enquire Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/4 flex justify-center">
            <div className="rounded-full bg-brand-50 p-6">
              <FileText className="h-16 w-16 text-brand-600" />
            </div>
          </div>
          <div className="lg:w-3/4">
            <h3 className="text-2xl font-semibold mb-4">Tax Savings Analysis</h3>
            <p className="text-gray-600 mb-6">
              Let our experts analyze your financial situation and identify potential tax-saving opportunities. Our comprehensive tax savings analysis service provides actionable insights to minimize your tax liability while ensuring full compliance with tax regulations.
            </p>
            <Button asChild className="bg-brand-600 hover:bg-brand-700">
              <Link to="/contact" className="px-6">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxPage;
