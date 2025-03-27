
import { Link } from 'react-router-dom';
import { Trademark, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const TrademarkPage = () => {
  const services = [
    {
      title: "Trademark Registration",
      description: "Complete assistance in registering your business trademark with the relevant authorities."
    },
    {
      title: "Trademark Search",
      description: "Comprehensive search to ensure your proposed trademark doesn't infringe on existing ones."
    },
    {
      title: "Trademark Renewal",
      description: "Timely renewal of your trademark registration to maintain protection."
    },
    {
      title: "Trademark Monitoring",
      description: "Continuous monitoring to identify and address potential trademark infringements."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-brand-50 p-4 rounded-full">
                <Trademark className="h-10 w-10 text-brand-600" />
              </div>
            </div>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Trademark Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Protect your brand identity and intellectual property with our comprehensive trademark services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subheading="TRADEMARK PROTECTION"
              heading="Safeguard Your Brand Identity"
              description="We offer end-to-end trademark services to protect your brand name, logo, and other intellectual property."
            />
            
            <div className="mt-12 space-y-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">The Importance of Trademark Protection</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Exclusive rights to use your brand name and logo</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Legal protection against brand infringement</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Builds brand value and customer recognition</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Establishes your business as a legitimate entity</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-500 mt-0.5" />
              <p className="text-sm text-yellow-700">
                Trademark registration is a legal process that involves multiple steps and can take several months to complete. 
                We recommend starting the process as early as possible to ensure your brand is protected.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Brand Today</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let our trademark experts help you secure and protect your brand identity with proper legal registration.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrademarkPage;
