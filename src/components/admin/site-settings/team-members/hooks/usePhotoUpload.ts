
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { toast } from 'sonner';

export const usePhotoUpload = (initialPhotoUrl: string | null = null) => {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(initialPhotoUrl);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadPhoto = async (id: string): Promise<string> => {
    if (!photoFile) {
      return initialPhotoUrl || '';
    }
    
    try {
      const storageRef = ref(storage, `team-members/${id}_${Date.now()}`);
      await uploadBytes(storageRef, photoFile);
      const url = await getDownloadURL(storageRef);
      console.log('Photo uploaded successfully:', url);
      return url;
    } catch (error) {
      console.error('Error uploading photo:', error);
      toast.error('Failed to upload photo');
      throw error;
    }
  };

  return {
    photoFile,
    photoPreview,
    handlePhotoChange,
    uploadPhoto,
    setPhotoPreview,
  };
};
