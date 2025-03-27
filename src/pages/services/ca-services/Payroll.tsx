
import { Link } from 'react-router-dom';
import { ArrowRight, Users, CheckCircle, Calendar } from 'lucide-react';
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

const PayrollPage = () => {
  const services = [
    {
      title: "Payroll Processing",
      description: "End-to-end payroll processing services for businesses of all sizes.",
      features: [
        "Salary calculation and processing",
        "Statutory deductions management",
        "Payslip generation",
        "Payment disbursement assistance"
      ]
    },
    {
      title: "Statutory Compliance",
      description: "Complete management of payroll-related statutory compliances.",
      features: [
        "PF, ESI, and PT registration and returns",
        "TDS calculation and deposit",
        "Form 16/16A generation",
        "Compliance reporting"
      ]
    },
    {
      title: "Payroll Consulting",
      description: "Expert consulting for optimizing your payroll processes.",
      features: [
        "Payroll policy development",
        "Compensation structuring",
        "Process optimization",
        "Regulatory guidance"
      ]
    },
    {
      title: "Employee Benefits Administration",
      description: "Comprehensive management of employee benefits and perquisites.",
      features: [
        "Leave and attendance management",
        "Benefits enrollment and administration",
        "Reimbursement processing",
        "Retirement benefits administration"
      ]
    }
  ];

  const benefits = [
    "Reduced compliance risk and penalties",
    "Time and cost savings on administrative tasks",
    "Expert handling of complex payroll calculations",
    "Accurate and timely payroll processing",
    "Confidentiality of sensitive employee data",
    "Staying updated with changing regulations"
  ];

  return (
    <div className="py-10">
      <SectionHeading 
        heading="Payroll Services" 
        subheading="Professional payroll management solutions for businesses of all sizes"
        align="center"
      />
      
      <div className="mt-8 bg-brand-50 rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Streamline Your Payroll Management</h3>
            <p className="text-gray-700 mb-4">
              Managing payroll involves complex calculations, statutory compliances, and timely processing. Our comprehensive payroll services take this burden off your shoulders, allowing you to focus on your core business activities.
            </p>
            <p className="text-gray-700">
              Our team of payroll experts ensures accurate processing, complete statutory compliance, and confidential handling of sensitive employee information, providing you with peace of mind.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="h-32 w-32 rounded-full bg-brand-100 flex items-center justify-center">
              <Users className="h-16 w-16 text-brand-600" />
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
              <Calendar className="h-16 w-16 text-brand-600" />
            </div>
          </div>
          <div className="lg:w-3/4">
            <h3 className="text-2xl font-semibold mb-4">Benefits of Outsourcing Payroll</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
            <Button asChild className="bg-brand-600 hover:bg-brand-700">
              <Link to="/contact" className="px-6">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollPage;
