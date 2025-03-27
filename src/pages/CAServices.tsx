
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Certificate, Trademark, IndianRupee, FileText, Receipt, FileSpreadsheet, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  color: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, href, color, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="w-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border border-muted/60 bg-card/50 hover:bg-card">
        <CardHeader className={`pb-2 ${color}`}>
          <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white/90 mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl group-hover:text-india-saffron transition-colors duration-300">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <CardDescription className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild variant="ghost" className="p-0 h-auto text-india-saffron group-hover:text-india-green transition-colors">
            <Link to={href} className="flex items-center gap-1">
              <span>Learn more</span>
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function CAServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Ensure animations play when component mounts
  useState(() => {
    setIsLoaded(true);
  });
  
  const services = [
    {
      title: "Certifications",
      description: "Comprehensive certification services for businesses of all sizes, ensuring compliance with industry standards and regulations.",
      icon: Certificate,
      href: "/ca-services/certifications",
      color: "bg-gradient-to-r from-indigo-50 to-indigo-100",
      delay: 0
    },
    {
      title: "Trademark",
      description: "Protect your brand identity with our expert trademark registration and management services.",
      icon: Trademark,
      href: "/ca-services/trademark",
      color: "bg-gradient-to-r from-blue-50 to-blue-100",
      delay: 1
    },
    {
      title: "Income Tax",
      description: "Professional income tax filing, planning, and advisory services for individuals and businesses.",
      icon: IndianRupee,
      href: "/ca-services/income-tax",
      color: "bg-gradient-to-r from-green-50 to-green-100",
      delay: 2
    },
    {
      title: "Accounting",
      description: "Comprehensive accounting services including bookkeeping, financial statements, and account reconciliation.",
      icon: FileText,
      href: "/ca-services/accounting",
      color: "bg-gradient-to-r from-yellow-50 to-yellow-100",
      delay: 3
    },
    {
      title: "GST",
      description: "Complete GST compliance solutions including registration, filing, refunds, and advisory services.",
      icon: Receipt,
      href: "/ca-services/gst",
      color: "bg-gradient-to-r from-orange-50 to-orange-100",
      delay: 4
    },
    {
      title: "Payroll",
      description: "End-to-end payroll management services including salary processing, tax calculations, and statutory compliance.",
      icon: FileSpreadsheet,
      href: "/ca-services/payroll",
      color: "bg-gradient-to-r from-purple-50 to-purple-100",
      delay: 5
    },
    {
      title: "Compliance",
      description: "Stay compliant with all regulatory requirements with our comprehensive compliance management services.",
      icon: ShieldCheck,
      href: "/ca-services/compliance",
      color: "bg-gradient-to-r from-red-50 to-red-100",
      delay: 6
    }
  ];

  return (
    <div className="py-8 md:py-12">
      <SectionHeading
        title="CA Services"
        subtitle="Comprehensive accounting and compliance solutions for your business"
        centered
      />
      
      <div className="mt-12 relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-india-saffron/5 to-india-green/5 rounded-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="max-w-2xl mx-auto bg-india-white/30 backdrop-blur-sm p-6 rounded-xl border border-india-white/20 shadow-lg">
                <h3 className="text-xl font-medium mb-3">Need Custom Services?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact our team of expert chartered accountants for personalized solutions tailored to your business needs.
                </p>
                <Button 
                  className="bg-gradient-to-r from-india-saffron to-india-green text-white hover:shadow-md transition-shadow"
                  asChild
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
