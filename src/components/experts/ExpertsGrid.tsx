
import React from 'react';
import ExpertCard from './ExpertCard';

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
  if (!experts || experts.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Our Expert Advisors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team of seasoned professionals with extensive experience across various domains
              to guide you through every step of your business journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <ExpertCard
                key={index}
                name={expert.name}
                position={expert.position}
                expertise={expert.expertise}
                experience={expert.experience}
                bio={expert.bio}
                photoUrl={expert.photoUrl}
                linkedinUrl={expert.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsGrid;
