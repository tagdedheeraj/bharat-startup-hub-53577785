
import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { toast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

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
  bio,
  experience,
  photoUrl,
  linkedinUrl
}) => {
  const [imageUrl, setImageUrl] = useState<string>('/placeholder.svg');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      if (!photoUrl) {
        console.log(`No photo URL provided for ${name}`);
        setImageUrl('/placeholder.svg');
        setLoading(false);
        return;
      }

      try {
        console.log(`Attempting to load image for ${name} from path: ${photoUrl}`);
        
        // Check if the photoUrl is already a complete URL
        if (photoUrl.startsWith('http')) {
          console.log(`Using direct URL for ${name}: ${photoUrl}`);
          setImageUrl(photoUrl);
        } else {
          // Get the download URL from Firebase Storage
          console.log(`Fetching Firebase Storage URL for ${name} from path: ${photoUrl}`);
          const storageRef = ref(storage, photoUrl);
          const url = await getDownloadURL(storageRef);
          console.log(`Successfully loaded image for ${name}:`, url);
          setImageUrl(url);
          
          toast({
            title: "Image Loaded",
            description: `Successfully loaded image for ${name}`,
          });
        }
      } catch (error) {
        console.error(`Error loading image for ${name}:`, error);
        console.log(`Storage path attempted: ${photoUrl}`);
        setImageUrl('/placeholder.svg');
        
        toast({
          title: "Image Load Error",
          description: `Failed to load image for ${name}. Using placeholder.`,
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [photoUrl, name]);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col transform hover:-translate-y-1 transition-transform">
      <div className="relative h-64 overflow-hidden">
        {loading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img
            src={imageUrl}
            alt={`${name} - ${position}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            onError={() => {
              console.log(`Image load error for ${name}, using placeholder`);
              setImageUrl('/placeholder.svg');
            }}
          />
        )}
        
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
          {experience}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
        <p className="text-brand-600 font-medium mb-3">{position}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {expertise.split(', ').slice(0, 2).map((skill, index) => (
            <span 
              key={index}
              className="inline-block bg-gray-100 px-2 py-1 text-xs rounded text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-5 flex-grow line-clamp-4">{bio}</p>
        
        {linkedinUrl && (
          <a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] py-2 px-4 rounded-lg transition-colors w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="font-medium">Connect on LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ExpertCard;
