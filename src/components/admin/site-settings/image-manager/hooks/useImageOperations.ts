
import { useState } from 'react';
import { useWebsiteImages, WebsiteImage } from '@/hooks/useWebsiteImages';
import { uploadFile } from '@/services/firebase/storageOperations';
import { toast } from '@/hooks/use-toast';

export const useImageOperations = () => {
  const [uploading, setUploading] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  
  const { 
    images, 
    loading, 
    error,
    addImage, 
    deleteImage,
    fetchImages
  } = useWebsiteImages();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, section: string, page: string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const timestamp = Date.now();
      const path = `website-images/${page}/${section}/${timestamp}_${file.name}`;
      const url = await uploadFile(path, file);
      
      const newImage: Omit<WebsiteImage, 'id'> = {
        url,
        name: file.name,
        section,
        page,
        createdAt: timestamp,
        path
      };
      
      await addImage(newImage);
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });

      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopySuccess(url);
    setTimeout(() => setCopySuccess(null), 2000);
    toast({
      title: "Copied",
      description: "Image URL copied to clipboard",
    });
  };

  return {
    images,
    loading,
    error,
    uploading,
    copySuccess,
    handleImageUpload,
    handleCopyUrl,
    deleteImage
  };
};
