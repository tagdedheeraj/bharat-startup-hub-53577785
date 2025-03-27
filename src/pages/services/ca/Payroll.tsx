
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const PayrollPage = () => {
  const services = [
    {
      title: "Payroll Processing",
      description: "Complete end-to-end payroll processing for businesses of all sizes.",
      features: [
        "Salary calculation and processing",
        "Pay slip generation",
        "Bank transfer file preparation",
        "Overtime and bonus processing"
      ]
    },
    {
      title: "Statutory Compliance",
      description: "Ensure compliance with all payroll-related statutory requirements.",
      features: [
        "PF, ESI, PT registration and returns",
        "TDS calculation and deduction",
        "Form 16/16A preparation",
        "Labour law compliance"
      ]
    },
    {
      title: "Leave & Attendance Management",
      description: "Streamlined management of employee attendance and leave records.",
      features: [
        "Attendance tracking integration",
        "Leave policy implementation",
        "Leave balance management",
        "Attendance reports generation"
      ]
    },
    {
      title: "Payroll Consulting",
      description: "Expert advice on payroll structure optimization and compliance.",
      features: [
        "Payroll structure design",
        "Compensation benchmarking",
        "Statutory requirement advisory",
        "Payroll policy formulation"
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
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Payroll Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              End-to-end payroll processing, compliance, and management for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="PAYROLL MANAGEMENT"
            heading="Our Comprehensive Payroll Services"
            description="Streamline your payroll operations with our expert services that ensure accuracy and compliance."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Receipt className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Service Includes:</h4>
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
            heading="Benefits of Outsourcing Payroll"
            description="Why businesses choose to outsource their payroll processing to us."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Receipt className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cost Efficiency</h3>
              <p className="text-gray-600">Reduce overhead costs associated with in-house payroll processing and software.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Receipt className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Compliance Assurance</h3>
              <p className="text-gray-600">Stay updated with changing labor laws and statutory requirements without extra effort.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-brand-100 w-12 h-12 flex items-center justify-center mb-6">
                <Receipt className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Time Saving</h3>
              <p className="text-gray-600">Focus on your core business activities while we handle time-consuming payroll tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simplify Your Payroll Management</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our payroll services can benefit your business.
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

export default PayrollPage;
