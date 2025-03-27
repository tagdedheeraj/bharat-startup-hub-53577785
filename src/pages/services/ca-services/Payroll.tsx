
import { Link } from 'react-router-dom';
import { ListChecks, ArrowRight, CheckCircle, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const PayrollPage = () => {
  const services = [
    {
      title: "Payroll Processing",
      description: "End-to-end payroll processing including salary calculations and disbursements."
    },
    {
      title: "Statutory Compliance",
      description: "Management of PF, ESI, PT, and other statutory requirements related to payroll."
    },
    {
      title: "Tax Deduction at Source (TDS)",
      description: "Calculation and deposit of TDS on salaries and filing of TDS returns."
    },
    {
      title: "Payroll Reports & Analytics",
      description: "Comprehensive payroll reports and analytics for management decision-making."
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
                <ListChecks className="h-10 w-10 text-brand-600" />
              </div>
            </div>
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">CA Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Payroll Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              End-to-end payroll management solutions for businesses of all sizes, ensuring accuracy and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subheading="PAYROLL MANAGEMENT"
              heading="Comprehensive Payroll Solutions"
              description="Our payroll services help businesses manage employee compensation efficiently while ensuring compliance with all regulations."
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
              <h3 className="text-2xl font-bold mb-4">Benefits of Outsourcing Payroll</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Reduced administrative burden and operational costs</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Access to expertise in payroll regulations and compliance</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Minimized risk of errors and penalties</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>Enhanced data security and confidentiality</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-600 mr-2 mt-1" />
                  <span>More time to focus on core business activities</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-brand-600" />
                  <h4 className="text-lg font-semibold">For Small Businesses</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Our payroll services are tailored for small businesses with limited HR resources, providing cost-effective solutions without compromising on quality.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-brand-600 mr-2 mt-0.5" />
                    <span>Affordable monthly packages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-brand-600 mr-2 mt-0.5" />
                    <span>Dedicated payroll specialist</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-brand-600 mr-2 mt-0.5" />
                    <span>Basic compliance management</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-brand-600" />
                  <h4 className="text-lg font-semibold">For Medium & Large Businesses</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive payroll solutions for medium and large organizations with complex requirements and multiple compliance needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-brand-600 mr-2 mt-0.5" />
                    <span>Customized payroll workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-brand-600 mr-2 mt-0.5" />
                    <span>Advanced reporting and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-brand-600 mr-2 mt-0.5" />
                    <span>Multi-location support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simplify Your Payroll Process</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our payroll experts can help you streamline your payroll operations, ensuring accuracy, compliance, and employee satisfaction.
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

export default PayrollPage;
