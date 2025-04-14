
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle, BarChart } from 'lucide-react';
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

const AccountingPage = () => {
  const services = [
    {
      title: "Bookkeeping Services",
      description: "Accurate and comprehensive bookkeeping to maintain your financial records.",
      features: [
        "Daily transaction recording",
        "Bank reconciliation",
        "Accounts receivable and payable management",
        "General ledger maintenance"
      ]
    },
    {
      title: "Financial Statements",
      description: "Preparation of clear and accurate financial statements for your business.",
      features: [
        "Balance sheet preparation",
        "Profit and loss statements",
        "Cash flow statements",
        "Statement analysis and reporting"
      ]
    },
    {
      title: "Management Accounting",
      description: "Strategic financial insights to help you make informed business decisions.",
      features: [
        "Budget preparation and monitoring",
        "Variance analysis",
        "Cost accounting",
        "Performance metrics reporting"
      ]
    },
    {
      title: "Accounting System Setup",
      description: "Implementation and configuration of accounting systems tailored to your needs.",
      features: [
        "Accounting software selection",
        "System configuration and setup",
        "Chart of accounts customization",
        "Training and support"
      ]
    }
  ];

  return (
    <div className="py-10">
      <SectionHeading 
        heading="Accounting Services" 
        subheading="Professional accounting solutions to keep your finances in perfect order"
        align="center"
      />
      
      <div className="mt-8 bg-brand-50 rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Why Professional Accounting Matters</h3>
            <p className="text-gray-700 mb-4">
              Accurate accounting is the foundation of sound financial management for any business. Our professional accounting services ensure that your financial records are maintained with precision, enabling you to make informed business decisions.
            </p>
            <p className="text-gray-700">
              From basic bookkeeping to complex financial analysis, our experienced accountants provide comprehensive solutions tailored to your business needs, allowing you to focus on growing your business.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="h-32 w-32 rounded-full bg-brand-100 flex items-center justify-center">
              <BookOpen className="h-16 w-16 text-brand-600" />
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
              <BarChart className="h-16 w-16 text-brand-600" />
            </div>
          </div>
          <div className="lg:w-3/4">
            <h3 className="text-2xl font-semibold mb-4">Financial Health Check</h3>
            <p className="text-gray-600 mb-6">
              Our comprehensive financial health check analyzes your current accounting practices, identifies areas for improvement, and provides actionable recommendations to enhance your financial management. Schedule a consultation with our experts today.
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

export default AccountingPage;
