
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, CheckCircle, AlertCircle } from 'lucide-react';
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

const GSTPage = () => {
  const services = [
    {
      title: "GST Registration",
      description: "Hassle-free GST registration for businesses of all sizes.",
      features: [
        "Eligibility assessment",
        "Documentation preparation",
        "Application filing",
        "Registration certificate processing"
      ]
    },
    {
      title: "GST Return Filing",
      description: "Timely and accurate filing of GST returns to ensure compliance.",
      features: [
        "GSTR-1 filing (Outward supplies)",
        "GSTR-3B filing (Summary return)",
        "Input tax credit reconciliation",
        "Compliance verification"
      ]
    },
    {
      title: "GST Compliance",
      description: "Comprehensive GST compliance services to avoid penalties.",
      features: [
        "GST audit preparation",
        "Notice handling",
        "Amendment filings",
        "Compliance health checks"
      ]
    },
    {
      title: "GST Advisory",
      description: "Expert GST advisory services for complex business scenarios.",
      features: [
        "Industry-specific GST guidance",
        "Input tax credit optimization",
        "E-commerce GST compliance",
        "Export-import GST advisory"
      ]
    }
  ];

  const commonQuestions = [
    {
      question: "Who needs to register for GST?",
      answer: "Businesses with an annual turnover exceeding Rs. 20 lakhs (Rs. 10 lakhs for special category states) are required to register for GST. Certain businesses must register regardless of turnover."
    },
    {
      question: "What are the penalties for non-compliance?",
      answer: "Penalties for GST non-compliance can range from late fees for delayed returns to 100% of the tax amount for serious violations. Regular compliance is essential to avoid these penalties."
    },
    {
      question: "How often do I need to file GST returns?",
      answer: "Most businesses need to file monthly or quarterly GST returns, depending on their turnover and registration category. Our team ensures timely filing to maintain compliance."
    }
  ];

  return (
    <div className="py-10">
      <SectionHeading 
        heading="GST Services" 
        subheading="Comprehensive GST solutions for seamless tax compliance"
        align="center"
      />
      
      <div className="mt-8 bg-brand-50 rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">GST Made Simple</h3>
            <p className="text-gray-700 mb-4">
              Goods and Services Tax (GST) has transformed India's indirect tax landscape. Our expert GST services ensure that your business remains compliant while optimizing your tax position under the GST regime.
            </p>
            <p className="text-gray-700">
              From registration and return filing to advisory and compliance, our comprehensive GST solutions are designed to handle all your GST-related requirements efficiently.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="h-32 w-32 rounded-full bg-brand-100 flex items-center justify-center">
              <Receipt className="h-16 w-16 text-brand-600" />
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
        <h3 className="text-2xl font-semibold mb-6 text-center">Common GST Questions</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commonQuestions.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="h-5 w-5 text-brand-500 mt-1 flex-shrink-0" />
                <h4 className="font-medium text-lg">{item.question}</h4>
              </div>
              <p className="text-gray-600 text-sm ml-8">{item.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
            <Link to="/contact">Get GST Support Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GSTPage;
