
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface ExpertProps {
  name: string;
  position: string;
  expertise: string;
  experience: string;
  bio: string;
  photoUrl: string;
  linkedinUrl?: string;
}

const ExpertCard: React.FC<ExpertProps> = ({
  name,
  position,
  expertise,
  experience,
  bio,
  photoUrl,
  linkedinUrl,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fadeIn h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
      <div className="h-72 overflow-hidden relative">
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block self-start">
          {experience} Experience
        </div>
        <h3 className="text-2xl font-bold mb-1 group-hover:text-brand-600 transition-colors">{name}</h3>
        <p className="text-brand-600 font-medium mb-2">{position}</p>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Expertise: </span>{expertise}
        </p>
        <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{bio}</p>
        <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              <span className="text-sm">Connect</span>
            </a>
          )}
          <a 
            href={`mailto:${name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            <span className="text-sm">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
