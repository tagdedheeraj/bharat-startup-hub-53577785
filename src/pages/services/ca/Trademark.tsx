
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Check, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const TrademarkPage = () => {
  const services = [
    {
      title: "Trademark Registration",
      description: "Complete process of registering your brand name, logo, or slogan as a trademark.",
      features: [
        "Trademark search and availability check",
        "Application preparation and filing",
        "Response to examination reports",
        "Registration certificate procurement"
      ]
    },
    {
      title: "Copyright Registration",
      description: "Protect your creative works including literary, musical, artistic, and software works.",
      features: [
        "Copyright application preparation",
        "Documentation and evidence compilation",
        "Filing and follow-up with copyright office",
        "Certificate delivery"
      ]
    },
    {
      title: "Trademark Renewal",
      description: "Timely renewal of your existing trademarks to maintain protection.",
      features: [
        "Renewal application filing",
        "Documentation verification",
        "Status monitoring",
        "Certificate delivery"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Trademark Registration Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Protect your brand identity with comprehensive trademark registration and intellectual property services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="IP PROTECTION"
            heading="Intellectual Property Services"
            description="Secure your business assets with our comprehensive intellectual property protection services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Briefcase className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">What's Included:</h4>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                        <Check size={14} className="text-brand-600" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="ADVANTAGES"
            heading="Why Trademark Protection Matters"
            description="Securing your intellectual property provides several key benefits for your business."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Legal Protection</h3>
              <p className="text-gray-600">Gain exclusive rights to your brand name, logo, and slogans, preventing others from using similar marks in your industry.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Brand Value</h3>
              <p className="text-gray-600">Build and protect your brand's reputation and goodwill in the marketplace, increasing your business value over time.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Market Differentiation</h3>
              <p className="text-gray-600">Stand out from competitors with a protected, unique brand identity that customers can recognize and trust.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Licensing Opportunities</h3>
              <p className="text-gray-600">Create additional revenue streams by licensing your protected intellectual property to other businesses.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Expansion</h3>
              <p className="text-gray-600">Secure your brand rights before expanding into new markets or territories, preventing potential issues later.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Legal Recourse</h3>
              <p className="text-gray-600">Gain legal grounds to take action against counterfeiters and imitators who try to profit from your brand reputation.</p>
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
              Don't wait until it's too late. Secure your intellectual property now with our expert trademark services.
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
