
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const IncomeTaxServicesPage = () => {
  const services = [
    {
      title: "Income Tax Filing",
      description: "Professional preparation and filing of income tax returns for individuals and businesses.",
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to minimize tax liability while ensuring compliance.",
    },
    {
      title: "Tax Assessment",
      description: "Assistance with tax assessments and responding to notices from tax authorities.",
    },
    {
      title: "Tax Consultancy",
      description: "Expert advice on complex tax matters and tax-saving strategies.",
    }
  ];

  const faqs = [
    {
      question: "What is the deadline for income tax filing?",
      answer: "For individuals and businesses not requiring an audit, the deadline is typically July 31st. For businesses requiring an audit, it's September 30th. However, these dates may vary based on government announcements."
    },
    {
      question: "What documents do I need for income tax filing?",
      answer: "You'll need Form 16/16A, investment proofs, bank statements, loan statements, rent receipts (if applicable), and any other income proofs. For businesses, financial statements, purchase/sales invoices, and expense documentation are required."
    },
    {
      question: "How can I reduce my tax liability legally?",
      answer: "Legal tax reduction can be achieved through proper tax planning, utilizing available deductions and exemptions, investing in tax-saving instruments, and structuring your income and expenses efficiently. Our tax consultants can provide personalized strategies."
    },
    {
      question: "What happens if I miss the tax filing deadline?",
      answer: "Missing the deadline can result in penalties, interest on late payment, and potential legal complications. Late filing may also affect your ability to carry forward certain losses and may lead to additional scrutiny from tax authorities."
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
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">INCOME TAX SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Expert Income Tax Solutions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive income tax services to ensure compliance and optimize your tax position
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR OFFERINGS"
            heading="Income Tax Services"
            description="We provide professional income tax services tailored to your specific needs."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <TrendingUp className="h-6 w-6 text-brand-600" />
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
            heading="Why Choose Our Income Tax Services"
            description="Discover the advantages of working with our expert tax professionals."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Expert Guidance</h3>
                    <p className="text-gray-600 mt-2">Our team of certified tax professionals stays updated with the latest tax laws and regulations to provide you with accurate and reliable guidance.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tax Optimization</h3>
                    <p className="text-gray-600 mt-2">We identify all applicable deductions and credits to legally minimize your tax liability and maximize your returns.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Error-Free Filing</h3>
                    <p className="text-gray-600 mt-2">Our meticulous approach ensures error-free tax filing, reducing the risk of audits and penalties.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Time Savings</h3>
                    <p className="text-gray-600 mt-2">Let us handle the complexities of tax filing while you focus on your core business activities or personal priorities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FAQS"
            heading="Frequently Asked Questions"
            description="Get answers to common questions about income tax filing and planning."
          />
          
          <div className="max-w-5xl mx-auto mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <AlertCircle className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Expert Tax Assistance?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to ensure accurate tax filing and optimize your tax position.
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

export default IncomeTaxServicesPage;
