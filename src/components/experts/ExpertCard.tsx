
import React from 'react';
import { Linkedin, Mail, Star, Calendar } from 'lucide-react';

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
          onError={(e) => {
            const target = e.currentTarget;
            console.error(`Failed to load image for ${name} from ${photoUrl}, using placeholder`);
            target.onerror = null; // Prevent infinite error loop
            target.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center space-x-1 shadow-sm">
          <Calendar className="w-3 h-3 text-brand-600" />
          <span>{experience}</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-1 group-hover:text-brand-600 transition-colors">{name}</h3>
        <p className="text-brand-600 font-medium mb-3">{position}</p>
        
        <div className="mb-4 flex-wrap gap-2 hidden sm:flex">
          {expertise.split(', ').slice(0, 2).map((skill, index) => (
            <span key={index} className="inline-block bg-gray-100 px-2 py-1 text-xs rounded text-gray-700">
              {skill}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-4">{bio}</p>
        
        <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-100">
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              <span className="text-sm">Connect</span>
            </a>
          )}
          <a 
            href={`mailto:${name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            <span className="text-sm">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
