
import React from 'react';
import { Calendar, Mail, Map } from 'lucide-react';
import type { TeamMember } from '@/types/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-xl transition-shadow duration-300">
      <div className="h-64 overflow-hidden relative">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
            console.error(`Failed to load image for ${member.name}, using placeholder`);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center space-x-1 shadow-sm">
          <Calendar className="w-3 h-3 text-brand-600" />
          <span>{member.experience}</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-1 group-hover:text-brand-600 transition-colors">{member.name}</h3>
        <p className="text-brand-600 font-medium mb-3">{member.position}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {member.expertise.slice(0, 2).map((skill, index) => (
            <span key={index} className="inline-block bg-gray-100 px-2 py-1 text-xs rounded text-gray-700">
              {skill}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">{member.bio}</p>
        
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
          <a 
            href={`mailto:${member.email}`}
            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors"
          >
            <Mail size={16} />
            <span className="text-sm">Email</span>
          </a>
          
          <div className="flex items-center justify-center gap-2 bg-gray-100 text-gray-500 p-2 rounded-lg">
            <Map size={16} />
            <span className="text-sm">{member.location?.split(',')[0] || 'Location'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
