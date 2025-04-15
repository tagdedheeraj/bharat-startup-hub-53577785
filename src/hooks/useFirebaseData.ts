import { useState, useEffect } from 'react';
import { 
  getDocument, 
  queryDocuments, 
  createDocument, 
  updateDocument, 
  deleteDocument,
  FirebaseData
} from '@/services/firebaseDataService';
import { useAuth } from '@/contexts/auth';
import { where, orderBy, limit as firestoreLimit } from 'firebase/firestore';

// Interfaces for our data types
export interface Investment {
  id?: string;
  startupName: string;
  amountInvested: number;
  equityPercentage: number;
  investmentDate: string;
  investorId: string;
  status: 'active' | 'inactive' | 'exited';
  createdAt?: any;
}

// Generic hook for getting a document
export function useDocument<T>(collectionName: string, docId: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!docId) {
        setData(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const doc = await getDocument<T>(collectionName, docId);
        setData(doc);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        console.error(`Error fetching document: ${err}`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [collectionName, docId]);

  return { data, loading, error };
}

// Generic hook for querying documents
export function useCollection<T>(
  collectionName: string,
  constraints: any[] = []
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const docs = await queryDocuments<T>(collectionName, constraints);
        setData(docs);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        console.error(`Error fetching collection: ${err}`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [collectionName, JSON.stringify(constraints)]);

  return { data, loading, error };
}

// Firestore collection hook specifically designed for this application
export function useFirestoreCollection<T>(
  collectionName: string,
  constraints: any[] = []
) {
  return useCollection<T>(collectionName, constraints);
}

// Hook for user-specific data
export function useUserData<T extends FirebaseData>(collectionName: string) {
  const { user } = useAuth();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!user?.id) {
        setData(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const doc = await getDocument<T>(collectionName, user.id);
        setData(doc);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        console.error(`Error fetching user data: ${err}`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [collectionName, user?.id]);

  // Function to save user data
  const saveUserData = async (newData: Partial<T>) => {
    if (!user?.id) {
      throw new Error("User not authenticated");
    }

    try {
      setLoading(true);
      await updateDocument(collectionName, user.id, newData);
      
      // Update local state
      setData(prev => prev ? { ...prev, ...newData } as T : null);
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      console.error(`Error saving user data: ${err}`);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, saveUserData };
}

// Example hook for investor portfolio
export function useInvestorPortfolio() {
  const { user } = useAuth();
  
  return useCollection<Investment>(
    'investments',
    user?.id ? [
      where('investorId', '==', user.id),
      orderBy('createdAt', 'desc')
    ] : []
  );
}

// Example hook for investment opportunities
export function useInvestmentOpportunities(limitCount: number = 20) {
  return useCollection(
    'fundingRequests',
    [
      where('status', '==', 'active'),
      orderBy('createdAt', 'desc'),
      firestoreLimit(limitCount)
    ]
  );
}

// New hook for managing website images
export function useWebsiteImages() {
  const { data: images, loading, error } = useCollection<any>('website-images');

  const addImage = async (imageData: any) => {
    return await createDocument('website-images', imageData);
  };

  const deleteImage = async (id: string) => {
    return await deleteDocument('website-images', id);
  };

  return {
    images,
    loading,
    error,
    addImage,
    deleteImage
  };
}
