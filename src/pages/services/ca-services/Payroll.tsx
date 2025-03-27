
import { Link } from 'react-router-dom';
import { ArrowRight, Users, CheckCircle, BarChart2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const PayrollServicesPage = () => {
  const services = [
    {
      title: "Payroll Processing",
      description: "Complete payroll calculation and processing services for businesses of all sizes.",
    },
    {
      title: "Statutory Compliance",
      description: "Management of PF, ESI, PT, TDS, and other statutory compliance requirements.",
    },
    {
      title: "Payroll Reports",
      description: "Comprehensive payroll reports for management and statutory purposes.",
    },
    {
      title: "Employee Self-Service",
      description: "Easy access for employees to view their payslips and tax-related information.",
    }
  ];

  const benefits = [
    "Accuracy in salary calculations",
    "Timely statutory compliance",
    "Reduced administrative burden",
    "Confidentiality of employee data",
    "Expert handling of complex payroll scenarios",
    "Scalable solutions as your team grows",
    "Regular updates on changing regulations",
    "Significant time and cost savings"
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
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">PAYROLL SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Professional Payroll Management</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              End-to-end payroll processing services to ensure accuracy, compliance, and employee satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR OFFERINGS"
            heading="Payroll Services"
            description="Comprehensive payroll solutions tailored to your business needs."
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className="bg-brand-50 p-4 rounded-xl inline-block mb-6">
                  <Users className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR PROCESS"
            heading="The Payroll Management Process"
            description="Our streamlined process ensures accurate and timely payroll services."
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
                    <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                    <p className="text-gray-600">We gather all necessary employee data, attendance records, and payroll inputs.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">2</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Payroll Processing</h3>
                    <p className="text-gray-600">Our experts calculate salaries, deductions, taxes, and allowances according to the latest regulations.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">3</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Statutory Compliance</h3>
                    <p className="text-gray-600">We handle all statutory compliance requirements including PF, ESI, PT, and TDS deductions and filings.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">4</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Disbursement Support</h3>
                    <p className="text-gray-600">We prepare salary transfer files and assist with the salary disbursement process.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <div className="md:w-32 flex justify-center">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">5</div>
                  </div>
                  <div className="flex-1 ml-4 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Reporting</h3>
                    <p className="text-gray-600">We provide comprehensive payroll reports, employee payslips, and other required documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="BENEFITS"
            heading="Advantages of Our Payroll Services"
            description="Discover why businesses choose our payroll management solutions."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-brand-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="IMPACT"
            heading="The Impact of Professional Payroll Management"
            description="How outsourcing payroll services benefits your business."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="mx-auto mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <BarChart2 className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-3xl font-bold text-brand-600 mb-2">80%</h3>
                <p className="text-gray-600">Reduction in payroll processing time</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="mx-auto mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <BarChart2 className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-3xl font-bold text-brand-600 mb-2">99.9%</h3>
                <p className="text-gray-600">Accuracy in salary calculations</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="mx-auto mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <BarChart2 className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-3xl font-bold text-brand-600 mb-2">40%</h3>
                <p className="text-gray-600">Cost savings compared to in-house processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Payroll Process?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our payroll services can benefit your business and employees.
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

export default PayrollServicesPage;
