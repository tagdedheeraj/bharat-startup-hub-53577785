
import React from 'react';
import SectionImage from '@/components/shared/SectionImage';

export interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  sectionName: string;
  fallbackSrc: string;
  delay: string;
}

const TeamMember = ({ name, role, description, sectionName, fallbackSrc, delay }: TeamMemberProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md animate-fadeIn" style={{ animationDelay: delay }}>
    <div className="h-64 bg-gray-200">
      <SectionImage
        pageName="about"
        sectionName={sectionName}
        fallbackSrc={fallbackSrc}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-brand-600 mb-4">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default TeamMember;
