
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
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

const CompliancePage = () => {
  const complianceServices = [
    {
      title: "Annual Compliance",
      description: "Ensure your business meets all annual regulatory requirements and filings.",
      features: [
        "Annual returns filing",
        "Director's report",
        "Financial statement preparation",
        "Compliance calendar management"
      ]
    },
    {
      title: "Statutory Compliance",
      description: "Stay compliant with all statutory requirements applicable to your business.",
      features: [
        "ROC filings",
        "Secretarial compliance",
        "ESI and PF compliance",
        "Professional tax filings"
      ]
    },
    {
      title: "Labor Law Compliance",
      description: "Comply with all labor laws and regulations to avoid penalties and legal issues.",
      features: [
        "Labor law advisory",
        "HR policy development",
        "Compliance audits",
        "Regulatory updates"
      ]
    }
  ];

  return (
    <div className="py-10">
      <SectionHeading 
        heading="Compliance Services" 
        subheading="Stay compliant with all regulatory requirements for your business"
        align="center"
      />
      
      <div className="mt-8">
        <div className="bg-brand-50 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Why Compliance Matters</h3>
              <p className="text-gray-700 mb-4">
                Regulatory compliance is not just about avoiding penalties—it's about building a 
                sustainable business foundation. Proper compliance ensures smooth operations, 
                builds trust with stakeholders, and prevents costly legal issues down the line.
              </p>
              <p className="text-gray-700">
                Our compliance experts keep track of changing regulations and ensure your 
                business stays ahead of all requirements, giving you peace of mind to focus 
                on your core business activities.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="h-32 w-32 rounded-full bg-brand-100 flex items-center justify-center">
                <ShieldCheck className="h-16 w-16 text-brand-600" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {complianceServices.map((service, index) => (
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
      </div>
      
      <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100">
        <h3 className="text-2xl font-semibold mb-4 text-center">Our Compliance Process</h3>
        <div className="grid gap-6 md:grid-cols-4 mt-8">
          {[
            { step: "Initial Assessment", desc: "We analyze your current compliance status and identify gaps" },
            { step: "Compliance Strategy", desc: "We develop a tailored compliance strategy for your business" },
            { step: "Implementation", desc: "Our team implements all necessary compliance measures" },
            { step: "Ongoing Monitoring", desc: "We continuously monitor and update your compliance needs" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-brand-700">{index + 1}</span>
              </div>
              <h4 className="font-medium mb-2">{item.step}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
