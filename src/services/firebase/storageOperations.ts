
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { toast } from '@/hooks/use-toast';

/**
 * Upload a file to Firebase Storage
 */
export const uploadFile = async (
  path: string,
  file: File
): Promise<string> => {
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log(`File uploaded to: ${path}`);
    return downloadURL;
  } catch (error) {
    console.error(`Error uploading file to ${path}:`, error);
    toast({
      title: "Error",
      description: "Failed to upload file",
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Delete a file from Firebase Storage
 */
export const deleteFile = async (path: string): Promise<void> => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    console.log(`File deleted from: ${path}`);
  } catch (error) {
    console.error(`Error deleting file from ${path}:`, error);
    toast({
      title: "Error",
      description: "Failed to delete file",
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Upload site assets like logo or favicon
 * @param type 'logo' or 'favicon'
 * @param file File to upload
 * @returns URL of the uploaded file
 */
export const uploadSiteAsset = async (
  type: 'logo' | 'favicon',
  file: File
): Promise<string> => {
  // Generate a unique path for the asset
  const timestamp = Date.now();
  const extension = file.name.split('.').pop();
  const path = `site-assets/${type}_${timestamp}.${extension}`;
  
  // Upload the file and return the URL
  return uploadFile(path, file);
};
