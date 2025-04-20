
import React from 'react';
import ExpertCard from './ExpertCard';
import SectionHeading from '@/components/SectionHeading';

interface Expert {
  name: string;
  position: string;
  expertise: string;
  experience: string;
  bio: string;
  photoUrl: string;
  linkedinUrl?: string;
}

interface ExpertsGridProps {
  experts: Expert[];
}

const ExpertsGrid: React.FC<ExpertsGridProps> = ({ experts }) => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="LEADERSHIP & EXPERTISE"
          heading="Our Domain Specialists"
          description="Connect with industry leaders who are shaping the future of business and innovation."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {experts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsGrid;
