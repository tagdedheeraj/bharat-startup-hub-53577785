
import { Users, BookOpen, HeartHandshake, Database, ShoppingBag, Calendar } from 'lucide-react';
import ServiceDefinition from '@/components/it-solutions/special-services/ServiceDefinition';
import IndustryList from '@/components/it-solutions/special-services/IndustryList';
import FeaturesList from '@/components/it-solutions/special-services/FeaturesList';
import AchievementStats from '@/components/it-solutions/special-services/AchievementStats';
import SectionHeading from "@/components/SectionHeading";

export default function SpecialServices() {
  const serviceData = {
    hrms: {
      features: [
        "User Roles Management", "Employee Management", "Leave Management",
        "Attendances", "Salary Management", "TDS & TAX Management", "Probation"
      ],
      industries: [
        "Government & Public Sector", "Tourism", "Education",
        "Banking & Financial Services", "Manufacturing", "Software Development"
      ]
    },
    crm: {
      features: [
        "Lead Management", "Sales Automation", "Customer Support",
        "Marketing Automation", "Data Analytics", "Multi-Channel Communication",
        "Workflow Automation", "Billing & Invoicing"
      ],
      industries: [
        "Healthcare & Pharmaceuticals", "Education & Training",
        "Real Estate", "Automotive Industry", "Media & Entertainment"
      ]
    },
    lms: {
      features: [
        "Employee Training", "E-Learning & Online Courses", "Onboarding Programs",
        "Compliance Training", "Certification & Assessment", "Remote Learning",
        "Performance Tracking", "Content Management"
      ],
      industries: [
        "Defense & Government", "Non-Profit & NGOs", "E-learning",
        "Corporate & business", "Software Development", "Education"
      ]
    },
    erp: {
      industries: [
        "Finance & Accounting", "Supply Chain Management", "Manufacturing",
        "Energy and Utilities", "Automotive", "Food and Beverage",
        "Construction", "Logistics and Transportation"
      ]
    },
    ecommerce: {
      features: [
        "B2B Transactions", "Digital Payments", "Inventory Management",
        "Multi-Channel Selling", "Drop shipping & Logistics",
        "Subscription Services", "Analytics & Reporting Cross"
      ],
      industries: [
        "Travel and Hospitality", "Electronics and Technology",
        "Fashion and Apparel", "Entertainment", "Real Estate", "Education"
      ]
    },
    booking: {
      features: [
        "Professional services Apps", "Medical Appointment Booking",
        "Home Service Scheduling", "Fitness Class Booking",
        "Event Booking", "On-demand Apps", "Transportation Booking",
        "Beauty & salon Apps", "Food & restaurant Apps"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          heading="Special Services"
          subheading="Comprehensive Enterprise Solutions"
          description="Explore our range of specialized enterprise solutions designed to streamline your business operations"
          align="center"
        />

        <div className="mt-20 space-y-32">
          {/* HRMS Section */}
          <section>
            <ServiceDefinition
              title="HRMS"
              subtitle="Human Resource Management Systems"
              icon={<Users size={24} />}
              definition="HRMS is a software solution that integrates and automates various human resource functions within an organization. It helps manage employee data, payroll, recruitment, benefits administration, performance evaluation, and compliance with labor laws."
            />
            <div className="mt-8 space-y-8">
              <FeaturesList features={serviceData.hrms.features} />
              <div>
                <h4 className="text-lg font-semibold mb-4">Industries We Serve</h4>
                <IndustryList industries={serviceData.hrms.industries} />
              </div>
            </div>
          </section>

          {/* CRM Section */}
          <section>
            <ServiceDefinition
              title="CRM"
              subtitle="Customer Relationship Management"
              icon={<HeartHandshake size={24} />}
              definition="CRM is a technology-driven approach that helps businesses manage interactions with customers and potential clients. It streamlines sales, marketing, customer service, and support processes to enhance customer satisfaction, improve retention, and drive business growth."
            />
            <div className="mt-8 space-y-8">
              <FeaturesList features={serviceData.crm.features} />
              <div>
                <h4 className="text-lg font-semibold mb-4">Industries We Serve</h4>
                <IndustryList industries={serviceData.crm.industries} />
              </div>
            </div>
          </section>

          {/* LMS Section */}
          <section>
            <ServiceDefinition
              title="LMS"
              subtitle="Learning Management System"
              icon={<BookOpen size={24} />}
              definition="LMS is a software platform that enables organizations to create, deliver, manage, and track training and educational content. It is used for employee training, e-learning, skill development, and compliance training, improving learning efficiency and accessibility."
            />
            <div className="mt-8 space-y-8">
              <FeaturesList features={serviceData.lms.features} />
              <div>
                <h4 className="text-lg font-semibold mb-4">Industries We Serve</h4>
                <IndustryList industries={serviceData.lms.industries} />
              </div>
            </div>
          </section>

          {/* ERP Section */}
          <section>
            <ServiceDefinition
              title="ERP"
              subtitle="Enterprise Resource Planning"
              icon={<Database size={24} />}
              definition="ERP is a software system that integrates and automates core business processes such as finance, supply chain, manufacturing, human resources, and customer management. ERP provides a centralized platform to enhance efficiency, improve decision-making, and streamline operations across an organization."
            />
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Industries We Serve</h4>
              <IndustryList industries={serviceData.erp.industries} />
            </div>
          </section>

          {/* E-commerce Section */}
          <section>
            <ServiceDefinition
              title="E-commerce Platform"
              icon={<ShoppingBag size={24} />}
              definition="E-Commerce Platform is a digital system that enables businesses to sell products or services online. It provides tools for managing online storefronts, processing transactions, handling inventory, and optimizing customer interactions."
            />
            <div className="mt-8 space-y-8">
              <FeaturesList features={serviceData.ecommerce.features} />
              <div>
                <h4 className="text-lg font-semibold mb-4">Industries We Serve</h4>
                <IndustryList industries={serviceData.ecommerce.industries} />
              </div>
            </div>
          </section>

          {/* Service Booking Section */}
          <section>
            <ServiceDefinition
              title="Service Booking Solutions"
              icon={<Calendar size={24} />}
              definition="Our service booking solutions provide comprehensive appointment and scheduling management systems for various industries. These solutions streamline booking processes, enhance customer experience, and optimize service delivery."
            />
            <div className="mt-8">
              <FeaturesList features={serviceData.booking.features} />
            </div>
          </section>

          {/* Achievement Stats Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-india-saffron via-india-green to-india-saffron bg-clip-text text-transparent">
              Our Achievements & Projections
            </h2>
            <AchievementStats />
          </section>
        </div>
      </div>
    </div>
  );
}
