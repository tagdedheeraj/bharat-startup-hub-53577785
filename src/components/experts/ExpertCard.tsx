
import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { toast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';

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
  photoUrl
}) => {
  const [imageUrl, setImageUrl] = useState<string>('/placeholder.svg');
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const loadImage = async () => {
      if (!photoUrl) {
        setImageUrl('/placeholder.svg');
        setLoading(false);
        return;
      }

      try {
        // Check if the photoUrl is already a complete Firebase Storage URL
        if (photoUrl.includes('firebasestorage.googleapis.com')) {
          console.log(`Using full Firebase Storage URL for ${name}: ${photoUrl}`);
          setImageUrl(photoUrl);
          setLoadError(null);
        } else {
          // If it's a storage path, get the download URL
          const storageRef = ref(storage, photoUrl);
          console.log(`Attempting to load image for ${name} from path: ${photoUrl}`);
          console.log('Storage bucket:', storage.app.options.storageBucket);
          
          const url = await getDownloadURL(storageRef);
          console.log(`Successfully loaded image URL for ${name}: ${url}`);
          
          setImageUrl(url);
          setLoadError(null);
        }
      } catch (error: any) {
        console.error(`❌ ERROR loading image for ${name}:`, error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        console.error(`Storage path/URL attempted: ${photoUrl}`);

        if (retryCount < maxRetries) {
          console.log(`Retrying image load for ${name} (Attempt ${retryCount + 1}/${maxRetries})`);
          setRetryCount(prev => prev + 1);
          setTimeout(loadImage, 1000 * (retryCount + 1)); // Exponential backoff
          return;
        }

        setLoadError(`Failed to load image: ${error.message}`);
        setImageUrl('/placeholder.svg');
        
        toast({
          title: "Image Load Error",
          description: `Could not load image for ${name}. Using placeholder.`,
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [photoUrl, name, retryCount]);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col transform hover:-translate-y-1 transition-transform">
      <div className="relative h-64 overflow-hidden">
        {loading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <>
            <img
              src={imageUrl}
              alt={`${name} - ${position}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              onError={() => {
                console.log(`Image load error for ${name}, using placeholder`);
                setImageUrl('/placeholder.svg');
              }}
            />
            
            {loadError && (
              <div className="absolute inset-0 bg-red-50/80 flex flex-col items-center justify-center p-4">
                <AlertCircle className="text-red-500 h-8 w-8 mb-2" />
                <p className="text-red-700 font-medium text-center">{loadError}</p>
              </div>
            )}
          </>
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
      </div>
    </div>
  );
};

export default ExpertCard;
