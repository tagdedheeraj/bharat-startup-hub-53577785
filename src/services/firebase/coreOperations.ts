
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query,
  serverTimestamp,
  addDoc,
  DocumentData,
  QueryConstraint
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
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
