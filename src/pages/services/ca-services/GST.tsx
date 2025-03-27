
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, CheckCircle, FileText } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const GSTServicesPage = () => {
  const services = [
    {
      title: "GST Registration",
      description: "Complete assistance with GST registration for businesses of all types and sizes.",
    },
    {
      title: "GST Return Filing",
      description: "Timely and accurate filing of all GST returns (GSTR-1, GSTR-3B, etc.).",
    },
    {
      title: "GST Reconciliation",
      description: "Reconciliation of input and output GST to ensure accuracy and compliance.",
    },
    {
      title: "GST Advisory",
      description: "Expert advice on GST-related matters, including rate classification and exemptions.",
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
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">GST SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Comprehensive GST Solutions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional GST services to ensure complete compliance and optimize your indirect tax position
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR OFFERINGS"
            heading="GST Services"
            description="We provide end-to-end GST services to help your business stay compliant."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Receipt className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="BENEFITS"
            heading="Why Choose Our GST Services"
            description="Discover the advantages of professional GST management."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-50 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ensure Full Compliance</h3>
                    <p className="text-gray-600">Stay compliant with all GST regulations and avoid penalties with our expert assistance.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-50 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Timely Filing</h3>
                    <p className="text-gray-600">Never miss a GST filing deadline with our timely and systematic approach.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-50 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optimize Input Tax Credit</h3>
                    <p className="text-gray-600">Maximize your input tax credit by ensuring proper reconciliation and documentation.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-50 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Advisory</h3>
                    <p className="text-gray-600">Get expert advice on complex GST matters to make informed business decisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="COMPLIANCE CHECKLIST"
            heading="Essential GST Compliance Steps"
            description="Key compliance requirements that every business needs to follow."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-50 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-brand-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">GST Registration</h3>
                      <p className="text-gray-600">Register for GST if your turnover exceeds the threshold limit or if you fall under mandatory registration categories.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-50 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-brand-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Invoice Compliance</h3>
                      <p className="text-gray-600">Ensure all your invoices comply with GST invoice requirements, including proper GST breakup and HSN codes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-50 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-brand-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Timely Return Filing</h3>
                      <p className="text-gray-600">File all applicable GST returns (GSTR-1, GSTR-3B, etc.) before the due dates to avoid penalties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-50 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-brand-600">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Tax Payment</h3>
                      <p className="text-gray-600">Pay the GST liability in full and on time to avoid interest and penalties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-50 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-brand-600">5</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Input Tax Credit Reconciliation</h3>
                      <p className="text-gray-600">Regularly reconcile your input tax credit with vendor invoices and GST returns to ensure accuracy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-50 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-brand-600">6</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Record Keeping</h3>
                      <p className="text-gray-600">Maintain proper records of all GST-related documents for the prescribed period.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="DOCUMENTS"
            heading="Documents Required for GST Services"
            description="Essential documents needed for smooth GST compliance."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="mr-4">
                  <FileText className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">For GST Registration</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>PAN Card</li>
                    <li>Aadhaar Card</li>
                    <li>Business Registration Documents</li>
                    <li>Business Address Proof</li>
                    <li>Bank Account Details</li>
                    <li>Digital Signature (for companies)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="mr-4">
                  <FileText className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">For GST Return Filing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Sales Invoices</li>
                    <li>Purchase Invoices</li>
                    <li>Debit/Credit Notes</li>
                    <li>Previous Return Copies</li>
                    <li>HSN/SAC Details</li>
                    <li>E-way Bills (if applicable)</li>
                  </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Hassle-Free GST Compliance?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to ensure your business stays fully compliant with GST regulations.
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

export default GSTServicesPage;
