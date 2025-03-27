
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, CheckCircle, BarChart2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const AccountingServicesPage = () => {
  const services = [
    {
      title: "Bookkeeping",
      description: "Systematic recording of financial transactions to maintain accurate accounting records.",
    },
    {
      title: "Financial Statements",
      description: "Preparation of balance sheets, income statements, and cash flow statements.",
    },
    {
      title: "Accounts Receivable/Payable",
      description: "Management of your business's incoming and outgoing payments.",
    },
    {
      title: "Financial Analysis",
      description: "Detailed analysis of financial data to identify trends and opportunities for improvement.",
    }
  ];

  const industries = [
    "Manufacturing", "Retail", "Healthcare", "Technology",
    "Real Estate", "E-commerce", "Professional Services", "Hospitality"
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
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">ACCOUNTING SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Professional Accounting Solutions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive accounting services to keep your financial records accurate and your business insights clear
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR OFFERINGS"
            heading="Accounting Services"
            description="We provide professional accounting services tailored to your business needs."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Calculator className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="WHY CHOOSE US"
            heading="The Advantages of Our Accounting Services"
            description="Discover why businesses trust us with their accounting needs."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Accounting Services" 
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
                        <h3 className="text-lg font-bold mb-1">Accuracy & Compliance</h3>
                        <p className="text-gray-600">Our certified accountants ensure your financial records are accurate and compliant with accounting standards and regulations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <CheckCircle className="h-6 w-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Time & Cost Efficiency</h3>
                        <p className="text-gray-600">Outsourcing your accounting functions to us saves you valuable time and resources that can be directed toward your core business activities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <CheckCircle className="h-6 w-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Business Insights</h3>
                        <p className="text-gray-600">We don't just crunch numbers; we provide valuable insights to help you make informed business decisions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <CheckCircle className="h-6 w-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Scalable Solutions</h3>
                        <p className="text-gray-600">Our services can scale as your business grows, ensuring your accounting needs are always met.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="INDUSTRIES"
            heading="Industries We Serve"
            description="Our accounting expertise spans across various industries and business types."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-brand-100 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <BarChart2 className="h-8 w-8 text-brand-600 mb-3" />
                    <span className="font-medium">{industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="How We Work"
            description="Our streamlined process ensures efficient and accurate accounting services."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative">
              {/* Process steps with connecting line */}
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-brand-100 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">1</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">We begin by understanding your business, accounting needs, and current financial processes.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">2</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Tailored Solution</h3>
                    <p className="text-gray-600">We develop a customized accounting solution that aligns with your business requirements and goals.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">3</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Implementation</h3>
                    <p className="text-gray-600">Our team implements the accounting system and processes, ensuring a smooth transition.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">4</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Ongoing Service</h3>
                    <p className="text-gray-600">We provide continuous accounting support, regular reporting, and insights to help your business thrive.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Accounting Support?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our accounting services can benefit your business.
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

export default AccountingServicesPage;
