
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
    <section className="section-accent py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  );
}
