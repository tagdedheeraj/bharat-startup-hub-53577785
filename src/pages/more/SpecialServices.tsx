
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FileText, Users, Book, Database, ShoppingCart, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/special-services/ServiceCard";
import AchievementSection from "@/components/special-services/AchievementSection";

const services = [
  {
    title: "HRMS",
    fullTitle: "Human Resource Management Systems",
    icon: Users,
    definition: "A software solution that integrates and automates various human resource functions within an organization. It helps manage employee data, payroll, recruitment, benefits administration, performance evaluation, and compliance with labor laws.",
    features: [
      "User Roles Management",
      "Employee Management",
      "Leave Management",
      "Attendances",
      "Salary Management",
      "TDS & TAX Management",
      "Probation"
    ],
    industries: [
      "Government & Public Sector",
      "Tourism",
      "Education",
      "Banking & Financial Services",
      "Manufacturing",
      "Software Development"
    ]
  },
  {
    title: "LMS",
    fullTitle: "Learning Management System",
    icon: Book,
    definition: "A software platform that enables organizations to create, deliver, manage, and track training and educational content. It is used for employee training, e-learning, skill development, and compliance training, improving learning efficiency and accessibility.",
    features: [
      "Employee Training",
      "E-Learning & Online Courses",
      "Onboarding Programs",
      "Compliance Training",
      "Certification & Assessment",
      "Remote Learning",
      "Performance Tracking",
      "Content Management"
    ],
    industries: [
      "Defense & Government",
      "Non-Profit & NGOs",
      "E-learning",
      "Corporate & business",
      "Software Development",
      "Education"
    ]
  },
  {
    title: "CRM",
    fullTitle: "Customer Relationship Management",
    icon: Database,
    definition: "A technology-driven approach that helps businesses manage interactions with customers and potential clients. It streamlines sales, marketing, customer service, and support processes to enhance customer satisfaction, improve retention, and drive business growth.",
    features: [
      "Lead Management",
      "Sales Automation",
      "Customer Support",
      "Marketing Automation",
      "Data Analytics",
      "Multi-Channel Communication",
      "Workflow Automation",
      "Billing & Invoicing"
    ],
    industries: [
      "Healthcare & Pharmaceuticals",
      "Education & Training",
      "Real Estate",
      "Automotive Industry",
      "Media & Entertainment"
    ]
  },
  {
    title: "ERP",
    fullTitle: "Enterprise Resource Planning",
    icon: FileText,
    definition: "A software system that integrates and automates core business processes such as finance, supply chain, manufacturing, human resources, and customer management. ERP provides a centralized platform to enhance efficiency, improve decision-making, and streamline operations across an organization.",
    features: [
      "Finance & Accounting",
      "Supply Chain Management",
      "Inventory & Warehouse Management",
      "Procurement & Vendor Management",
      "Business Intelligence & Analytics"
    ],
    industries: [
      "Logistics and Transportation",
      "Construction",
      "Manufacturing",
      "Energy and Utilities",
      "Automotive",
      "Food and Beverage"
    ]
  }
];

const SpecialServices = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          heading="Special Services"
          subheading="Enterprise Solutions"
          description="Comprehensive suite of business management solutions tailored for modern enterprises"
          align="center"
        />

        <motion.div 
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        <AchievementSection />
      </div>
    </div>
  );
};

export default SpecialServices;
