
import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  getDocs 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { deleteFile } from '@/services/firebase/storageOperations';
import { toast } from '@/hooks/use-toast';

export interface WebsiteImage {
  id: string;
  url: string;
  name: string;
  section: string;
  page: string;
  createdAt: number;
  path?: string;
}

export function useWebsiteImages() {
  const [images, setImages] = useState<WebsiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch all images
  const fetchImages = async () => {
    try {
      setLoading(true);
      const imagesCollection = collection(db, 'website-images');
      const imagesQuery = query(imagesCollection, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(imagesQuery);
      
      const fetchedImages: WebsiteImage[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Omit<WebsiteImage, 'id'>;
        fetchedImages.push({
          id: doc.id,
          ...data
        });
      });
      
      setImages(fetchedImages);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch images on mount
  useEffect(() => {
    fetchImages();
  }, []);

  // Add a new image
  const addImage = async (imageData: Omit<WebsiteImage, 'id'>) => {
    try {
      const imagesCollection = collection(db, 'website-images');
      const docRef = await addDoc(imagesCollection, imageData);
      
      const newImage: WebsiteImage = {
        id: docRef.id,
        ...imageData
      };
      
      setImages((prev) => [newImage, ...prev]);
      
      return newImage;
    } catch (err) {
      console.error('Error adding image:', err);
      toast({
        title: "Error",
        description: "Failed to add image to database",
        variant: "destructive"
      });
      throw err;
    }
  };

  // Delete an image
  const deleteImage = async (imageId: string, storagePath?: string) => {
    try {
      // Delete from Firestore
      const imageRef = doc(db, 'website-images', imageId);
      await deleteDoc(imageRef);
      
      // Delete from Storage if path provided
      if (storagePath) {
        await deleteFile(storagePath);
      }
      
      // Update state
      setImages((prev) => prev.filter((img) => img.id !== imageId));
      
      return true;
    } catch (err) {
      console.error('Error deleting image:', err);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive"
      });
      throw err;
    }
  };

  // Get images by section
  const getImagesBySection = (page: string, section: string) => {
    return images.filter(
      (img) => img.page === page && img.section === section
    );
  };

  // Get latest image for a section
  const getLatestSectionImage = (page: string, section: string): WebsiteImage | null => {
    const sectionImages = getImagesBySection(page, section);
    if (sectionImages.length === 0) return null;
    
    // Sort by createdAt in descending order
    return sectionImages.sort((a, b) => b.createdAt - a.createdAt)[0];
  };

  return {
    images,
    loading,
    error,
    fetchImages,
    addImage,
    deleteImage,
    getImagesBySection,
    getLatestSectionImage
  };
}
