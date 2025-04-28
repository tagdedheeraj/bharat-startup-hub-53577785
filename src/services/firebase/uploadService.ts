
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/hooks/use-toast';

/**
 * Uploads an image file to Firebase Storage in a specific section folder
 */
export const uploadSectionImage = async (
  file: File,
  page: string,
  section: string
): Promise<string> => {
  if (!file) throw new Error('No file provided');
  
  try {
    // Generate a unique filename
    const fileExtension = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    const path = `website-images/${page}/${section}/${fileName}`;
    
    // Create a reference to the storage location
    const storageRef = ref(storage, path);
    
    // Upload the file
    await uploadBytes(storageRef, file);
    console.log(`File uploaded to: ${path}`);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading section image:', error);
    toast({
      title: "Upload Failed",
      description: "Could not upload image. Please try again.",
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Uploads a profile image for a team member or expert
 */
export const uploadProfileImage = async (
  file: File,
  type: 'expert' | 'team-member' | 'founder',
  name: string
): Promise<string> => {
  if (!file) throw new Error('No file provided');
  
  try {
    // Generate a clean filename based on name
    const cleanName = name.toLowerCase().replace(/\s+/g, '-');
    const fileExtension = file.name.split('.').pop();
    const fileName = `${cleanName}-${Date.now()}.${fileExtension}`;
    const path = `profiles/${type}/${fileName}`;
    
    // Create a reference to the storage location
    const storageRef = ref(storage, path);
    
    // Upload the file
    await uploadBytes(storageRef, file);
    console.log(`Profile image uploaded to: ${path}`);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading profile image:', error);
    toast({
      title: "Upload Failed",
      description: "Could not upload profile image. Please try again.",
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Basic image upload function that just returns the URL
 */
export const uploadImage = async (file: File, folder: string = 'general'): Promise<string> => {
  if (!file) throw new Error('No file provided');
  
  try {
    // Generate a unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `${timestamp}-${uuidv4().substring(0, 8)}.${fileExtension}`;
    const path = `${folder}/${fileName}`;
    
    // Create a reference to the storage location
    const storageRef = ref(storage, path);
    
    // Upload the file
    await uploadBytes(storageRef, file);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
