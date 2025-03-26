
import { Building, CreditCard, Globe, Shield, Landmark, GitMerge, Users, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ExpertiseCard from '@/components/ExpertiseCard';

export default function ExpertiseSection() {
  const businessSetupItems = [
    {
      title: "Business Setup",
      description: "Company Registrations, Certifications and more..",
      icon: <Building size={24} />,
      index: 0
    },
    {
      title: "Business Growth",
      description: "Grants, Loans, Funding's and more..",
      icon: <CreditCard size={24} />,
      index: 1
    },
    {
      title: "Business Expansion",
      description: "Web Development, Marketing services & more..",
      icon: <Globe size={24} />,
      index: 2
    },
    {
      title: "Business Protection",
      description: "Legal & Compliances..",
      icon: <Shield size={24} />,
      index: 3
    },
  ];

  const businessGrowthItems = [
    {
      title: "Affordable Land for Business Setup",
      description: "Cost-effective land for business growth",
      icon: <Landmark size={24} />,
      index: 4
    },
    {
      title: "Merger & Acquisition",
      description: "Unite, Grow & Enhance Business Value",
      icon: <GitMerge size={24} />,
      index: 5
    },
    {
      title: "CRM",
      description: "Connect, Engage & Retain your Customers",
      icon: <Users size={24} />,
      index: 6
    },
    {
      title: "MSME Training",
      description: "Empower, Upskill & Grow Your MSME",
      icon: <GraduationCap size={24} />,
      index: 7
    },
  ];

  return (
    <section className="py-16 bg-gray-50 curved-section-both">
      {/* Top wave shape */}
      <div className="curved-wave-top text-white">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full opacity-10">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subheading="OUR EXPERTISE"
          heading="Our Expertise helps your startup grow at every stage"
          description="Comprehensive solutions for your business journey from setup to expansion"
        />
        
        <div className="space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSetupItems.map((item, index) => (
              <ExpertiseCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                delay={index * 100}
                variant="gradient"
                index={item.index}
              />
            ))}
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessGrowthItems.map((item, index) => (
              <ExpertiseCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                delay={(index + 4) * 100}
                variant="gradient"
                index={item.index}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="curved-wave-bottom text-white">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full opacity-10">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
      
      {/* Decorative blob shapes */}
      <div className="blob-shape bg-india-saffron w-96 h-96 -left-48 top-24"></div>
      <div className="blob-shape bg-india-green w-72 h-72 right-0 bottom-12"></div>
    </section>
  );
}
