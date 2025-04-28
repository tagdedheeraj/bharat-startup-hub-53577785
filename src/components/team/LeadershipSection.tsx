
import React from 'react';
import { Award, Mail, PhoneCall, Map, Linkedin, Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import type { TeamMember } from '@/types/team';

interface LeadershipSectionProps {
  leader: TeamMember;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ leader }) => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-10 -top-32 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          subheading="LEADERSHIP"
          heading="Our Visionary Leader"
          description="Meet the founder who drives our mission and shapes our vision."
          centered
        />
        
        <div className="max-w-7xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[400px]">
              <div className="lg:col-span-2 h-full">
                <div className="relative h-full min-h-[400px]">
                  <img 
                    src={leader.photoUrl} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                      console.error("Failed to load founder image, using placeholder");
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-sm font-medium">{leader.experience} Experience</span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">{leader.department}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{leader.name}</h2>
                  <p className="text-xl text-brand-600 font-medium mb-6">{leader.position}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leader.expertise.map((skill, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">{leader.bio}</p>
                  
                  {leader.achievements && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-brand-600" /> Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {leader.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <Star className="w-4 h-4 text-amber-500 mt-1 mr-2 shrink-0" />
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${leader.email}`} className="hover:text-brand-600 transition-colors">
                      {leader.email}
                    </a>
                  </div>
                  
                  {leader.phone && (
                    <div className="flex items-center text-gray-600">
                      <PhoneCall className="w-4 h-4 mr-2" />
                      <a href={`tel:${leader.phone}`} className="hover:text-brand-600 transition-colors">
                        {leader.phone}
                      </a>
                    </div>
                  )}
                  
                  {leader.location && (
                    <div className="flex items-center text-gray-600">
                      <Map className="w-4 h-4 mr-2" />
                      <span>{leader.location}</span>
                    </div>
                  )}
                  
                  {leader.linkedinUrl && (
                    <a 
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#0077B5] hover:text-[#006396] transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
