
import React, { useState, useEffect } from 'react';
import { useWebsiteImages } from '@/hooks/useWebsiteImages';
import { Skeleton } from '@/components/ui/skeleton';

interface SectionImageProps {
  pageName: string;
  sectionName: string;
  fallbackSrc: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  aspectRatio?: string;
  alt?: string;
}

const SectionImage: React.FC<SectionImageProps> = ({
  pageName,
  sectionName,
  fallbackSrc,
  className = '',
  objectFit = 'cover',
  aspectRatio = 'auto',
  alt = 'Section image'
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const { loading, getLatestSectionImage } = useWebsiteImages();

  useEffect(() => {
    if (!loading) {
      const latestImage = getLatestSectionImage(pageName, sectionName);
      
      if (latestImage) {
        setImageUrl(latestImage.url);
      } else {
        setImageUrl(fallbackSrc);
      }
      
      setIsLoading(false);
    }
  }, [loading, pageName, sectionName, fallbackSrc, getLatestSectionImage]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
    setImageUrl(fallbackSrc);
  };

  return (
    <div className={`relative ${className}`} style={{ aspectRatio }}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
      )}
      
      <img
        src={imageUrl || fallbackSrc}
        alt={alt}
        className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={{ 
          objectFit, 
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

export default SectionImage;
