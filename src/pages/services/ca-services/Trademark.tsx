
import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, CheckCircle, AlertTriangle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const TrademarkServicesPage = () => {
  const services = [
    {
      title: "Trademark Registration",
      description: "Complete trademark registration services for logos, brand names, and slogans.",
    },
    {
      title: "Trademark Renewal",
      description: "Timely renewal services to maintain your trademark protection.",
    },
    {
      title: "Trademark Opposition",
      description: "Legal assistance in opposing conflicting trademark applications.",
    },
    {
      title: "Trademark Search & Advisory",
      description: "Comprehensive trademark search and expert advisory services.",
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/services/ca-services" className="text-sm text-brand-600 font-medium hover:underline flex items-center justify-center gap-1 mb-4">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to CA Services
            </Link>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">TRADEMARK SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Protect Your Intellectual Property</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive trademark services to safeguard your brand identity and intellectual property
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR OFFERINGS"
            heading="Trademark Protection Solutions"
            description="We provide comprehensive trademark services to protect your brand identity."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Landmark className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trademark Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="WHY TRADEMARK"
            heading="The Importance of Trademark Protection"
            description="Discover why trademark protection is crucial for your business success."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Trademark Protection" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <CheckCircle className="h-6 w-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Exclusive Rights</h3>
                        <p className="text-gray-600">Gain exclusive rights to use your brand name, logo, or slogan in connection with your goods or services.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <CheckCircle className="h-6 w-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Brand Protection</h3>
                        <p className="text-gray-600">Protect your brand from unauthorized use and imitation by competitors.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <CheckCircle className="h-6 w-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Business Asset</h3>
                        <p className="text-gray-600">Trademarks are valuable business assets that can be licensed, franchised, or sold.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <CheckCircle className="h-6 w-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Consumer Trust</h3>
                        <p className="text-gray-600">Build consumer trust and loyalty by maintaining consistent brand quality and identity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="RISKS"
            heading="Risks of Not Protecting Your Trademark"
            description="Understand the potential consequences of not securing trademark protection."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Brand Theft</h3>
                </div>
              </div>
              <p className="text-gray-600">Without trademark protection, competitors can legally use or imitate your brand identity, potentially stealing your customers and market share.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Loss of Rights</h3>
                </div>
              </div>
              <p className="text-gray-600">If someone else registers your trademark before you do, you may lose the right to use your own brand name or logo in the marketplace.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Legal Disputes</h3>
                </div>
              </div>
              <p className="text-gray-600">You may face costly legal battles if your unregistered brand conflicts with existing trademarks or if others infringe on your brand.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Brand Dilution</h3>
                </div>
              </div>
              <p className="text-gray-600">Your brand's distinctiveness and market value may be diluted if multiple businesses use similar names, logos, or slogans.</p>
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
              Don't wait until it's too late. Contact us now to secure trademark protection for your valuable brand identity.
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

export default TrademarkServicesPage;
