
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  addDoc, 
  serverTimestamp,
  DocumentData,
  QueryConstraint,
  DocumentReference 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { toast } from '@/hooks/use-toast';

// Generic type for data objects
export type FirebaseData = Record<string, any>;

/**
 * Create a new document with a generated ID
 */
export const createDocument = async <T extends FirebaseData>(
  collectionName: string, 
  data: T
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log(`Document created with ID: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error(`Error creating document in ${collectionName}:`, error);
    toast({
      title: "Error",
      description: `Failed to create document in ${collectionName}`,
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Create a new document with a specified ID
 */
export const createDocumentWithId = async <T extends FirebaseData>(
  collectionName: string, 
  docId: string, 
  data: T
): Promise<void> => {
  try {
    await setDoc(doc(db, collectionName, docId), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log(`Document created with ID: ${docId}`);
  } catch (error) {
    console.error(`Error creating document in ${collectionName}:`, error);
    toast({
      title: "Error",
      description: `Failed to create document in ${collectionName}`,
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Get a document by ID
 */
export const getDocument = async <T>(
  collectionName: string, 
  docId: string
): Promise<T | null> => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as T;
    } else {
      console.log(`No document found with ID: ${docId}`);
      return null;
    }
  } catch (error) {
    console.error(`Error getting document from ${collectionName}:`, error);
    toast({
      title: "Error",
      description: `Failed to fetch document from ${collectionName}`,
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Update a document by ID
 */
export const updateDocument = async <T extends FirebaseData>(
  collectionName: string, 
  docId: string, 
  data: Partial<T>
): Promise<void> => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
    console.log(`Document updated with ID: ${docId}`);
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error);
    toast({
      title: "Error",
      description: `Failed to update document in ${collectionName}`,
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Delete a document by ID
 */
export const deleteDocument = async (
  collectionName: string, 
  docId: string
): Promise<void> => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log(`Document deleted with ID: ${docId}`);
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}:`, error);
    toast({
      title: "Error",
      description: `Failed to delete document from ${collectionName}`,
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Query documents from a collection
 */
export const queryDocuments = async <T>(
  collectionName: string,
  constraints: QueryConstraint[] = []
): Promise<T[]> => {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, ...constraints);
    const querySnapshot = await getDocs(q);
    
    const results: T[] = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() } as T);
    });
    
    return results;
  } catch (error) {
    console.error(`Error querying documents from ${collectionName}:`, error);
    toast({
      title: "Error",
      description: `Failed to query documents from ${collectionName}`,
      variant: "destructive"
    });
    throw error;
  }
};

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

// Investor-specific data services
export const getInvestorProfile = async (userId: string) => {
  return getDocument('investorProfiles', userId);
};

export const updateInvestorProfile = async (userId: string, data: any) => {
  return updateDocument('investorProfiles', userId, data);
};

export const saveInvestment = async (investmentData: any) => {
  return createDocument('investments', investmentData);
};

// Startup-specific data services
export const getStartupProfile = async (startupId: string) => {
  return getDocument('startupProfiles', startupId);
};

export const updateStartupProfile = async (startupId: string, data: any) => {
  return updateDocument('startupProfiles', startupId, data);
};

export const saveStartupFundingRequest = async (fundingData: any) => {
  return createDocument('fundingRequests', fundingData);
};
