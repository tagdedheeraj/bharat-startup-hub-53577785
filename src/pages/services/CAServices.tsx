
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, BadgeCheck, Scale, Calculator, Receipt, Users, ShieldCheck } from 'lucide-react';
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

const CAServicesPage = () => {
  const services = [
    {
      title: 'Certifications',
      description: 'Professional certification services for businesses and individuals.',
      icon: <FileText className="h-8 w-8 text-brand-500" />,
      href: '/services/ca-services/certifications',
    },
    {
      title: 'Trademark',
      description: 'Protect your brand identity with our trademark registration services.',
      icon: <BadgeCheck className="h-8 w-8 text-brand-500" />,
      href: '/services/ca-services/trademark',
    },
    {
      title: 'Income Tax',
      description: 'Expert income tax filing and planning services for individuals and businesses.',
      icon: <Scale className="h-8 w-8 text-brand-500" />,
      href: '/services/ca-services/income-tax',
    },
    {
      title: 'Accounting',
      description: 'Comprehensive accounting services to keep your finances in order.',
      icon: <Calculator className="h-8 w-8 text-brand-500" />,
      href: '/services/ca-services/accounting',
    },
    {
      title: 'GST',
      description: 'GST registration, filing, and compliance services for your business.',
      icon: <Receipt className="h-8 w-8 text-brand-500" />,
      href: '/services/ca-services/gst',
    },
    {
      title: 'Payroll',
      description: 'Streamline your payroll processes with our professional services.',
      icon: <Users className="h-8 w-8 text-brand-500" />,
      href: '/services/ca-services/payroll',
    },
    {
      title: 'Compliance',
      description: 'Stay compliant with all regulatory requirements with our compliance services.',
      icon: <ShieldCheck className="h-8 w-8 text-brand-500" />,
      href: '/services/ca-services/compliance',
    },
  ];

  return (
    <div className="py-10">
      <SectionHeading 
        heading="CA Services" 
        subheading="Professional chartered accountant services for all your business needs"
        align="center"
      />
      
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 hover:border-brand-300">
            <CardHeader className="pb-3">
              <div className="mb-2 inline-block rounded-full bg-brand-100 p-3">
                {service.icon}
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full group">
                <Link to={service.href} className="flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="mb-6 text-gray-600">
          Have questions about our CA services? Contact our team for more information.
        </p>
        <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
          <Link to="/contact" className="px-8">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default CAServicesPage;
