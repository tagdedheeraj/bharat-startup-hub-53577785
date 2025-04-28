
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { toast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';

export const useFirebaseStorage = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadImage = async (file: File, folder: string = 'images'): Promise<string> => {
    if (!file) {
      throw new Error('No file provided');
    }
    
    try {
      setUploading(true);
      setUploadProgress(0);
      
      // Generate a unique filename to prevent collisions
      const fileExtension = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const storageRef = ref(storage, `${folder}/${fileName}`);
      
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
      console.log('Uploaded file successfully:', snapshot);
      
      // Get download URL
      const downloadURL = await getDownloadURL(storageRef);
      
      setUploadProgress(100);
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
      
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive"
      });
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (url: string): Promise<boolean> => {
    if (!url) return false;
    
    try {
      // Extract the path from the URL
      // This assumes Firebase Storage URLs follow the pattern: 
      // https://firebasestorage.googleapis.com/v0/b/[bucket]/o/[path]?token=[token]
      const path = decodeURIComponent(url.split('/o/')[1]?.split('?')[0]);
      
      if (!path) {
        console.error('Invalid storage URL format');
        return false;
      }
      
      const storageRef = ref(storage, path);
      await deleteObject(storageRef);
      
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
      
      return true;
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive"
      });
      return false;
    }
  };

  return {
    uploadImage,
    deleteImage,
    uploading,
    uploadProgress
  };
};
