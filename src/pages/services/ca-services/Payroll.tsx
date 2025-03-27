
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, CheckCircle, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const PayrollPage = () => {
  const payrollServices = [
    {
      title: "Payroll Processing",
      description: "End-to-end payroll processing services to ensure accurate and timely payments.",
      benefits: ["Accurate salary calculations", "Statutory compliance", "Timely disbursements"]
    },
    {
      title: "Tax Deductions & Filing",
      description: "Management of tax deductions and timely filing of related returns.",
      benefits: ["TDS calculations", "Form 16/16A preparation", "Return filing"]
    },
    {
      title: "Statutory Compliance",
      description: "Ensuring compliance with PF, ESI, PT, and other statutory requirements.",
      benefits: ["Complete compliance", "Avoid penalties", "Regular updates on changes"]
    },
    {
      title: "Payroll Reporting",
      description: "Comprehensive payroll reports for management insights and decision-making.",
      benefits: ["Customized reports", "Expense analysis", "Budget planning support"]
    }
  ];

  const payrollProcess = [
    {
      step: 1,
      title: "Data Collection",
      description: "Collection of attendance, leave, and other payroll-related data"
    },
    {
      step: 2,
      title: "Payroll Calculation",
      description: "Processing of salaries, deductions, bonuses, and other components"
    },
    {
      step: 3,
      title: "Statutory Compliance",
      description: "Calculation and payment of PF, ESI, PT, TDS, and other statutory dues"
    },
    {
      step: 4,
      title: "Salary Disbursement",
      description: "Generation of salary slips and disbursement of salaries"
    },
    {
      step: 5,
      title: "Reporting & Filing",
      description: "Preparation of reports and filing of statutory returns"
    }
  ];

  return (
    <div className="py-12">
      <SectionHeading
        heading="Payroll Services"
        subheading="Efficient payroll management for businesses of all sizes"
        align="center"
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Simplify Your Payroll Management</h2>
            <p className="text-gray-600 mb-4">
              Payroll management involves complex calculations, statutory compliance, and timely disbursements. Our professional payroll services ensure accuracy, compliance, and efficiency, allowing you to focus on your core business activities.
            </p>
            <p className="text-gray-600">
              With our expertise in payroll management, we handle all aspects of your payroll process, from data collection to salary disbursement and statutory compliance, ensuring a hassle-free experience for both employers and employees.
            </p>
          </div>
          <div className="bg-brand-50 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
              <Clock className="h-6 w-6 text-brand-600 mr-2" />
              Key Deadlines
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium text-brand-700">PF Contribution</p>
                <p className="text-sm text-gray-600">15th of the following month</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium text-brand-700">ESI Contribution</p>
                <p className="text-sm text-gray-600">15th of the following month</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium text-brand-700">TDS Payment</p>
                <p className="text-sm text-gray-600">7th of the following month</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium text-brand-700">Professional Tax</p>
                <p className="text-sm text-gray-600">Varies by state (typically monthly)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Our Payroll Process</h3>
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-6 top-8 w-1 bg-brand-100 h-[calc(100%-64px)] hidden sm:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-6">
              {payrollProcess.map((processStep) => (
                <div key={processStep.step} className="relative flex items-start sm:items-center">
                  <div className="bg-brand-600 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md z-10 flex-shrink-0">
                    {processStep.step}
                  </div>
                  <div className="ml-4 sm:ml-8 bg-white p-4 rounded-lg shadow-md flex-grow">
                    <h4 className="font-semibold text-lg text-gray-800">{processStep.title}</h4>
                    <p className="text-gray-600">{processStep.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {payrollServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <DollarSign className="h-7 w-7 text-brand-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <h4 className="font-medium text-gray-800 mb-2">What We Offer:</h4>
              <ul className="space-y-2 mb-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Streamline Your Payroll?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our payroll experts will help you simplify your payroll process and ensure compliance with all statutory requirements.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Get Payroll Support
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PayrollPage;
