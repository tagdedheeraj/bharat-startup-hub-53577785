
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';

const TrademarkPage = () => {
  const services = [
    {
      name: "Trademark Registration",
      description: "Protect your brand identity with our comprehensive trademark registration service.",
      features: [
        "Trademark search and availability analysis",
        "Application preparation and filing",
        "Response to examination reports",
        "Registration certificate processing"
      ]
    },
    {
      name: "Trademark Renewal",
      description: "Ensure continued protection of your trademark with our renewal services.",
      features: [
        "Renewal reminders before expiry",
        "Renewal application preparation",
        "Document submission",
        "Certificate processing"
      ]
    },
    {
      name: "Trademark Opposition",
      description: "Defend your trademark rights against conflicting applications.",
      features: [
        "Opposition filing",
        "Legal representation",
        "Evidence preparation",
        "Hearing attendance"
      ]
    }
  ];

  return (
    <div className="py-10">
      <SectionHeading 
        heading="Trademark Services" 
        subheading="Protect your brand identity with our comprehensive trademark services"
        align="center"
      />
      
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <div className="rounded-xl bg-brand-50 p-6 shadow-sm border border-brand-100">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 mb-6">
              <Tag className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Why Trademark Protection Matters</h3>
            <p className="text-gray-600 mb-4">
              A trademark is a valuable asset that distinguishes your products or services from others. 
              Registering your trademark provides legal protection and exclusive rights to use the mark in connection with your goods or services.
            </p>
            <p className="text-gray-600 mb-6">
              Our experts guide you through the entire trademark registration process, from search and application to registration and renewal.
            </p>
            <Button asChild className="bg-brand-600 hover:bg-brand-700 mt-4">
              <Link to="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Protect Your Brand?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact our trademark experts today to discuss your specific requirements
          and start the process of safeguarding your brand identity.
        </p>
        <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
          <Link to="/contact" className="px-8">Contact Us Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default TrademarkPage;
