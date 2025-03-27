
import { Server, Database, Code, Cloud, Lock, Smartphone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const ITSolutions = () => {
  const solutions = [
    {
      title: "Web Development",
      description: "Custom web application development using modern frameworks and technologies.",
      icon: Code,
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup, migration, and management.",
      icon: Cloud,
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and administration services.",
      icon: Database,
    },
    {
      title: "Server Management",
      description: "Server setup, maintenance, and performance optimization.",
      icon: Server,
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets.",
      icon: Lock,
    },
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="IT Solutions"
        subheading="Comprehensive IT services for businesses of all sizes"
        centered
      />
      
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <solution.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-brand-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Need a Custom IT Solution?</h3>
          <p className="text-gray-600 mb-8">
            We provide tailored IT solutions to meet your specific business requirements. Our team of experts will work closely with you to understand your needs and deliver the perfect solution.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ITSolutions;
