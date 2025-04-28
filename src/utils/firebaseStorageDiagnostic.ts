
import { ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { toast } from '@/hooks/use-toast';

/**
 * Diagnostic function to check if a file exists in Firebase Storage
 */
export const checkFileExists = async (path: string): Promise<boolean> => {
  try {
    const storageRef = ref(storage, path);
    await getMetadata(storageRef);
    return true;
  } catch (error: any) {
    console.error(`File check failed for ${path}:`, error);
    return false;
  }
};

/**
 * List all files in a directory to help diagnose path issues
 */
export const listFilesInDirectory = async (directory: string): Promise<string[]> => {
  try {
    console.log(`Listing files in directory: ${directory}`);
    const directoryRef = ref(storage, directory);
    const result = await listAll(directoryRef);
    
    const fileNames = result.items.map(item => item.name);
    console.log(`Found ${fileNames.length} files in ${directory}:`, fileNames);
    
    return fileNames;
  } catch (error) {
    console.error(`Error listing files in ${directory}:`, error);
    return [];
  }
};

/**
 * Comprehensive diagnostic for an image path
 */
export const diagnosePath = async (path: string): Promise<{
  exists: boolean;
  url?: string;
  parentContents?: string[];
  error?: string;
}> => {
  try {
    // Check if file exists
    const exists = await checkFileExists(path);
    
    if (!exists) {
      // If file doesn't exist, check parent directory
      const lastSlashIndex = path.lastIndexOf('/');
      if (lastSlashIndex > 0) {
        const parentDir = path.substring(0, lastSlashIndex);
        const parentContents = await listFilesInDirectory(parentDir);
        
        return {
          exists: false,
          parentContents,
          error: `File not found: ${path}`
        };
      }
      
      return {
        exists: false,
        error: `File not found: ${path}`
      };
    }
    
    // If file exists, get the URL
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    
    return {
      exists: true,
      url
    };
  } catch (error: any) {
    return {
      exists: false,
      error: error.message || 'Unknown error'
    };
  }
};

/**
 * Run diagnostics and show toast with results
 */
export const runImageDiagnostics = async (path: string): Promise<void> => {
  toast({
    title: "Running Diagnostics",
    description: `Checking path: ${path}`,
  });
  
  const result = await diagnosePath(path);
  
  if (result.exists) {
    toast({
      title: "File Exists",
      description: `Successfully located: ${path}`,
    });
  } else {
    if (result.parentContents && result.parentContents.length > 0) {
      toast({
        title: "File Not Found",
        description: `Could not find ${path.split('/').pop()}. Available files in directory: ${result.parentContents.join(', ')}`,
        variant: "destructive"
      });
    } else {
      toast({
        title: "File Not Found",
        description: result.error || `Could not find ${path}`,
        variant: "destructive"
      });
    }
  }
};
