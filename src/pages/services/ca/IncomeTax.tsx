
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Check, Receipt } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const IncomeTaxPage = () => {
  const services = [
    {
      title: "Income Tax Return Filing",
      description: "Accurate and timely filing of income tax returns for individuals and businesses.",
      benefits: [
        "Timely compliance with tax regulations",
        "Maximizing deductions and tax savings",
        "Avoiding penalties and interest charges"
      ]
    },
    {
      title: "Tax Planning",
      description: "Strategic planning to minimize tax liability within the legal framework.",
      benefits: [
        "Optimize your tax structure",
        "Identify tax-saving investment opportunities",
        "Plan for future tax obligations"
      ]
    },
    {
      title: "Tax Assessment Assistance",
      description: "Expert assistance during tax assessments and scrutiny proceedings.",
      benefits: [
        "Professional representation during assessments",
        "Documentation and evidence preparation",
        "Resolution of tax notices and disputes"
      ]
    },
    {
      title: "TDS Compliance",
      description: "Complete Tax Deducted at Source (TDS) compliance services for businesses.",
      benefits: [
        "Timely TDS filing and returns",
        "TDS certificate issuance",
        "TDS reconciliation and correction"
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
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Income Tax Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive income tax planning, filing, and compliance services for businesses and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="TAX EXPERTISE"
            heading="Our Income Tax Services"
            description="Navigate complex tax regulations with our expert assistance and maximize your tax savings."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <FileText className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Key Benefits:</h4>
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                        <Check size={14} className="text-brand-600" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR ADVANTAGE"
            heading="Why Choose Our Tax Services"
            description="Experience the difference with our expert tax professionals."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Receipt className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Experienced Professionals</h3>
              <p className="text-gray-600">Our team consists of certified tax experts with years of experience in handling complex tax matters.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Receipt className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Up-to-date Knowledge</h3>
              <p className="text-gray-600">We stay current with the latest tax laws and regulations to provide you with accurate and relevant advice.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Receipt className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Approach</h3>
              <p className="text-gray-600">We understand that each client has unique needs, and we tailor our services accordingly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Tax Assistance?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our tax experts today to discuss how we can help you optimize your tax position.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IncomeTaxPage;
